import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import PageHero from "@/components/PageHero";
import { Paragraphs, RichText } from "@/components/RichText";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "DEGSS Limited is a Lagos-based real estate, land banking, and community-development company helping people find, invest in, and build lasting wealth through property.",
  path: "/about",
  image: "/abt-hero.jpg",
});

export default async function AboutPage() {
  const content = await getSiteContent("about");

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-neutral-50 pb-24 pt-32 sm:pt-26">
        <PageHero
          variant="feature"
          title={content.heroTitle}
          description={content.heroText}
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
        />

        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              {content.missionEyebrow}
            </span>
            <span className="text-sm font-medium text-neutral-400">(01)</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                <RichText text={content.missionHeading} accentClassName="text-neutral-400" />
              </h2>
              <p className="mt-6 text-neutral-600">{content.missionBody}</p>
              <Link
                href={content.missionButtonHref}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white py-1.5 pl-6 pr-1.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-50"
              >
                {content.missionButtonLabel}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">{content.visionTitle}</h3>
                <p className="mt-3 text-neutral-600">{content.visionText}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">{content.missionTitle}</h3>
                <p className="mt-3 text-neutral-600">{content.missionText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[620px]">
              <Image
                src={content.beliefImage}
                alt="DEGSS residential development"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                {content.beliefEyebrow}
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                {content.beliefHeading}
              </h2>
              <div className="mt-4 space-y-4 text-neutral-600">
                <Paragraphs text={content.beliefBody} />
              </div>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
                {content.beliefSubheading}
              </h2>
              <div className="space-y-4 text-neutral-600">
                <Paragraphs text={content.beliefBody2} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">
          <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl px-8 py-20 text-center sm:min-h-[520px] sm:px-12 sm:py-28">
            <Image
              src={content.ctaImage}
              alt="DEGSS residential building"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-neutral-950/70" />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                {content.ctaHeading}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">{content.ctaText}</p>
            </div>

            <div className="relative z-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href={content.ctaPrimaryHref}
                className="flex items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-white/90"
              >
                {content.ctaPrimaryLabel}
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={content.ctaSecondaryHref}
                className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {content.ctaSecondaryLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              {content.statsEyebrow}
            </span>
            <span className="text-sm font-medium text-neutral-400">(02)</span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              <RichText text={content.statsHeading} accentClassName="block text-neutral-400" />
            </h2>
            <p className="text-neutral-600 lg:pt-2">{content.statsText}</p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {content.stats.map(({ value, label }) => (
              <div key={`${value}-${label}`}>
                <p className="text-5xl font-bold tabular-nums tracking-tight text-neutral-950 sm:text-6xl">
                  <Counter value={value} />
                </p>
                <p className="mt-2 text-sm text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
