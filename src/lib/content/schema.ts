/**
 * Describes the admin-editable content of a public page (or the site-wide
 * nav/footer). Each page definition pairs a set of form fields with the
 * page's built-in defaults — the copy that shipped with the site — so a page
 * always renders correctly even before anything has been saved.
 */

export type ListItemValue = Record<string, string>;
export type ContentValue = string | ListItemValue[];
export type ContentValues = Record<string, ContentValue>;

type FieldBase<K extends string> = {
  key: K;
  label: string;
  hint?: string;
  /** Text fields only: allow saving an empty value instead of requiring one. */
  optional?: boolean;
};

export type SelectOption = { value: string; label: string };

export type ScalarField<K extends string = string> = FieldBase<K> &
  (
    | { type: "text" }
    | { type: "textarea"; rows?: number }
    | { type: "link" }
    | { type: "image" }
    | { type: "select"; options: readonly SelectOption[] }
  );

export type ListField<K extends string = string> = FieldBase<K> & {
  type: "list";
  itemLabel: string;
  maxItems: number;
  fields: ScalarField[];
};

export type Field<K extends string = string> = ScalarField<K> | ListField<K>;

export type Section<K extends string = string> = {
  title: string;
  description?: string;
  fields: Field<K>[];
};

export type PageGroup = "site" | "pages";

export type PageDefinition<D extends ContentValues = ContentValues> = {
  key: string;
  label: string;
  group: PageGroup;
  description: string;
  /** Public URL shown as "View page" in the admin. */
  viewPath?: string;
  /** Paths to revalidate after saving. */
  revalidate: { path: string; type?: "page" | "layout" }[];
  sections: Section<Extract<keyof D, string>>[];
  defaults: D;
};

/** Type helper: checks every field key exists in the page's defaults. */
export function definePage<D extends ContentValues>(def: PageDefinition<D>): PageDefinition<D> {
  return def;
}

export const TEXT_MAX_LENGTH = 300;
export const TEXTAREA_MAX_LENGTH = 6000;
export const LINK_MAX_LENGTH = 500;

/**
 * Links an admin can enter: site-relative paths, in-page anchors, and
 * http(s)/mailto/tel URLs. Anything else (e.g. `javascript:`) is rejected.
 */
export function isSafeHref(value: string): boolean {
  if (value.startsWith("/") && !value.startsWith("//")) return true;
  if (value.startsWith("#")) return true;
  return /^(https?:\/\/|mailto:|tel:)/i.test(value);
}

/**
 * Images must be ones next/image is configured to serve: files in /public,
 * Cloudinary uploads, or the Unsplash images the site shipped with.
 */
export function isAllowedImageUrl(value: string): boolean {
  if (value.startsWith("/") && !value.startsWith("//")) return true;
  return (
    value.startsWith("https://res.cloudinary.com/") ||
    value.startsWith("https://images.unsplash.com/")
  );
}

/** "Label | /href" per line → link list. Lines without a "|" are skipped. */
export function parseLinkLines(text: string): { label: string; href: string }[] {
  return text
    .split("\n")
    .map((line) => line.split("|").map((part) => part.trim()))
    .filter(([label, href]) => label && href && isSafeHref(href))
    .map(([label, href]) => ({ label, href }));
}

/** One entry per non-empty line. */
export function splitLines(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/** Paragraphs separated by a blank line. */
export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

/** Replaces {token} placeholders, e.g. "Ready to talk about {service}?". */
export function fillTemplate(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, name: string) => values[name] ?? match);
}

export const FORMATTING_HINT =
  "Formatting: *accent*, **bold**, [link text](/page). Press Enter for a line break.";
