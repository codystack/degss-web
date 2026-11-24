import Image from "next/image";
import { RichText } from "./RichText";

const variants = {
  // Listing pages: gradient overlay, compact text.
  default: {
    overlay: "bg-linear-to-t from-black/85 via-black/30 to-black/10",
    text: "max-w-sm text-lg leading-7 text-white/70 lg:text-right",
  },
  // Company pages: flat overlay, larger medium-weight text.
  feature: {
    overlay: "bg-neutral-950/55",
    text: "max-w-lg text-lg font-medium text-white/70 sm:text-xl lg:text-right",
  },
} as const;

/**
 * Inner-page hero. Title and description come from the admin: the title
 * supports RichText formatting, and each line of the description is shown
 * on its own line.
 */
export default function PageHero({
  title,
  description,
  image,
  imageAlt,
  variant = "default",
}: {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  variant?: keyof typeof variants;
}) {
  const styles = variants[variant];

  return (
    <section
      className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10"
      data-navbar-variant="dark"
    >
      <div className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-950 px-6 pb-10 pt-10 sm:min-h-[420px] sm:px-10 lg:min-h-[580px] lg:px-16">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className={`absolute inset-0 ${styles.overlay}`} />

        <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
            <RichText text={title} />
          </h1>
          {description && (
            <p className={`whitespace-pre-line ${styles.text}`}>{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
