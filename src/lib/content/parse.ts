import "server-only";
import { resolveUploadedImage } from "@/lib/cloudinary";
import {
  isAllowedImageUrl,
  isSafeHref,
  LINK_MAX_LENGTH,
  TEXT_MAX_LENGTH,
  TEXTAREA_MAX_LENGTH,
  type ContentValues,
  type ListItemValue,
  type PageDefinition,
  type ScalarField,
} from "./schema";

export class ContentValidationError extends Error {}

const IMAGE_FOLDER = "pages";

function maxLengthFor(field: ScalarField): number {
  if (field.type === "textarea") return TEXTAREA_MAX_LENGTH;
  if (field.type === "link") return LINK_MAX_LENGTH;
  return TEXT_MAX_LENGTH;
}

/** Normalises line endings; trims each line's trailing spaces and the ends. */
function cleanText(raw: string): string {
  return raw
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

async function readScalar(
  formData: FormData,
  field: ScalarField,
  name: string,
  where: string,
  inList: boolean
): Promise<string> {
  if (field.type === "image") {
    const url = await resolveUploadedImage(formData, name, IMAGE_FOLDER);
    if (url && !isAllowedImageUrl(url)) {
      throw new ContentValidationError(`${where}: choose an image from the media library or upload one.`);
    }
    // Page-level images fall back to the default when empty; list items
    // have no default to fall back to.
    if (!url && inList) {
      throw new ContentValidationError(`${where}: choose an image.`);
    }
    return url;
  }

  const value = cleanText(String(formData.get(name) ?? ""));

  if (value.length > maxLengthFor(field)) {
    throw new ContentValidationError(`${where} is too long (max ${maxLengthFor(field)} characters).`);
  }
  if (!value && field.type !== "select" && !field.optional) {
    throw new ContentValidationError(`${where} can't be empty.`);
  }
  if (field.type === "link" && value && !isSafeHref(value)) {
    throw new ContentValidationError(`${where} must start with /, https://, mailto: or tel:.`);
  }
  if (field.type === "select" && value && !field.options.some((option) => option.value === value)) {
    throw new ContentValidationError(`${where} has an invalid choice.`);
  }
  return value;
}

/**
 * Reads a page's content from the admin form, validating every field against
 * the page definition. List items arrive as "<list>.<index>.<field>", with
 * the item count in "<list>.count". Uploaded images go to Cloudinary.
 */
export async function parseContentForm(
  def: PageDefinition,
  formData: FormData
): Promise<ContentValues> {
  const result: ContentValues = {};

  for (const section of def.sections) {
    for (const field of section.fields) {
      if (field.type !== "list") {
        result[field.key] = await readScalar(formData, field, field.key, field.label, false);
        continue;
      }

      const count = Number(formData.get(`${field.key}.count`) ?? 0);
      if (!Number.isInteger(count) || count < 0 || count > field.maxItems) {
        throw new ContentValidationError(`${field.label}: up to ${field.maxItems} items are allowed.`);
      }

      const items: ListItemValue[] = [];
      for (let index = 0; index < count; index++) {
        const item: ListItemValue = {};
        for (const sub of field.fields) {
          const where = `${field.itemLabel} ${index + 1} – ${sub.label}`;
          item[sub.key] = await readScalar(formData, sub, `${field.key}.${index}.${sub.key}`, where, true);
        }
        items.push(item);
      }
      result[field.key] = items;
    }
  }

  return result;
}
