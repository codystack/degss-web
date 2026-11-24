import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { isSafeHref, splitParagraphs } from "@/lib/content/schema";

// **bold**, *accent*, [label](href). Rendered as React nodes — admin text is
// never injected as HTML, so there is no XSS surface here.
const DEFAULT_LINK_CLASS = "font-medium underline underline-offset-2";

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

function renderInline(
  text: string,
  accentClassName: string,
  linkClassName: string,
  keyPrefix: string
): ReactNode[] {
  return text.split(TOKEN).map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={key} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <span key={key} className={accentClassName}>
          {part.slice(1, -1)}
        </span>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (!isSafeHref(href)) return <Fragment key={key}>{label}</Fragment>;
      return (
        <Link key={key} href={href} className={linkClassName}>
          {label}
        </Link>
      );
    }
    return <Fragment key={key}>{part}</Fragment>;
  });
}

/**
 * Inline admin text: line breaks become <br />, plus the small formatting
 * syntax described in FORMATTING_HINT.
 */
export function RichText({
  text,
  accentClassName = "italic",
  linkClassName = DEFAULT_LINK_CLASS,
}: {
  text: string;
  accentClassName?: string;
  linkClassName?: string;
}) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          {renderInline(line, accentClassName, linkClassName, String(index))}
        </Fragment>
      ))}
    </>
  );
}

/** Blank-line-separated paragraphs, each rendered as <p> with RichText. */
export function Paragraphs({
  text,
  className,
  accentClassName,
}: {
  text: string;
  className?: string;
  accentClassName?: string;
}) {
  return (
    <>
      {splitParagraphs(text).map((paragraph, index) => (
        <p key={index} className={className}>
          <RichText text={paragraph} accentClassName={accentClassName} />
        </p>
      ))}
    </>
  );
}
