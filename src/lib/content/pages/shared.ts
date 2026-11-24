import { FORMATTING_HINT, type Section } from "../schema";

export type HeroKeys = "heroTitle" | "heroText" | "heroImage" | "heroImageAlt";

/** The standard inner-page hero: big heading and text over an image. */
export function heroSection(options: { textHint?: string } = {}): Section<HeroKeys> {
  return {
    title: "Hero",
    description: "The large banner at the top of the page.",
    fields: [
      { key: "heroTitle", label: "Heading", type: "textarea", rows: 2, hint: FORMATTING_HINT },
      {
        key: "heroText",
        label: "Text",
        type: "textarea",
        rows: 3,
        optional: true,
        hint: options.textHint ?? "Press Enter to start a new line.",
      },
      { key: "heroImage", label: "Background image", type: "image" },
      { key: "heroImageAlt", label: "Image description", type: "text", hint: "Describes the image for screen readers and SEO." },
    ],
  };
}
