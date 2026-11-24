import type { ContentValues, Field, ListItemValue, PageDefinition } from "./schema";

/** Fields whose empty value means "use the default" rather than "blank". */
function fallsBackWhenEmpty(field: Field): boolean {
  if (field.type === "image" || field.type === "link" || field.type === "select") return true;
  if (field.type === "list") return false;
  return !field.optional;
}

function mergeListItem(fields: Field[], stored: unknown): ListItemValue | null {
  if (!stored || typeof stored !== "object" || Array.isArray(stored)) return null;
  const record = stored as Record<string, unknown>;
  const item: ListItemValue = {};
  for (const field of fields) {
    const value = record[field.key];
    item[field.key] = typeof value === "string" ? value : "";
  }
  return item;
}

/**
 * Overlays stored content on the page's defaults, field by field. Anything
 * missing, malformed or (for required fields) empty falls back to the
 * default, so a partially saved or outdated row can never break a page.
 */
export function mergeContent<D extends ContentValues>(
  def: PageDefinition<D>,
  stored: unknown
): D {
  const result: ContentValues = { ...def.defaults };
  if (!stored || typeof stored !== "object") return result as D;
  const record = stored as Record<string, unknown>;

  for (const section of def.sections) {
    for (const field of section.fields) {
      const value = record[field.key];
      if (field.type === "list") {
        if (!Array.isArray(value)) continue;
        result[field.key] = value
          .map((item) => mergeListItem(field.fields, item))
          .filter((item): item is ListItemValue => item !== null)
          .slice(0, field.maxItems);
        continue;
      }
      if (typeof value !== "string") continue;
      if (value === "" && fallsBackWhenEmpty(field)) continue;
      result[field.key] = value;
    }
  }

  return result as D;
}
