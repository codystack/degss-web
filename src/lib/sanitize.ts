import "server-only";
import sanitizeHtml from "sanitize-html";

/**
 * Sanitizes rich-text HTML from the admin editors. The allowlist matches
 * exactly what the editor's toolbar can produce (bold, italic, lists) —
 * nothing else should ever reach the database.
 *
 * Uses sanitize-html (htmlparser2-based) rather than isomorphic-dompurify:
 * the latter pulls in jsdom, whose ESM-only dependencies fail to load in
 * Vercel's serverless runtime (ERR_REQUIRE_ESM).
 */
export function sanitizeRichText(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ["p", "strong", "em", "ul", "ol", "li", "br"],
    allowedAttributes: {},
    disallowedTagsMode: "discard",
  });
}
