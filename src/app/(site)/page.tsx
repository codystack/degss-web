import Image from "next/image";
import Link from "next/link";
import Hero, { defaultHeroSlides } from "@/components/Hero";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import VideoPlayer from "@/components/VideoPlayer";
import WhatWeDoSlider, { type Pillar } from "@/components/WhatWeDoSlider";
import { getContentIcon } from "@/components/contentIcons";
import { Paragraphs, RichText } from "@/components/RichText";
import { isSafeHref, splitLines } from "@/lib/content/schema";
import { getSiteContent } from "@/lib/data/siteContent";
import { listHeroSlides } from "@/lib/data/heroSlides";
import { listProperties, type Property } from "@/lib/data/properties";
import { listTestimonials } from "@/lib/data/testimonials";

export default async function Home() {
  const [testimonials, properties, heroSlidesFromDb, content] = await Promise.all([
    listTestimonials(),
    listProperties(),
    listHeroSlides(),
    getSiteContent("home"),
  ]);
  const pillars: Pillar[] = content.pillars.map((pillar) => ({
    label: pillar.label,
    href: isSafeHref(pillar.href) ? pillar.href : "/services",
    image: pillar.image,
    paragraph: pillar.paragraph,
    highlights: splitLines(pillar.highlights),
    cta: pillar.cta,
  }));
  const featuredProperties = properties.slice(0, 3);
  const heroSlides =
    heroSlidesFromDb.length > 0
      ? heroSlidesFromDb.map((slide) => ({ src: slide.image, alt: slide.alt }))
      : defaultHeroSlides;

  return (
    <>
      <Hero
        slides={heroSlides}
        content={{
          title: content.heroTitle,
          text: content.heroText,
          primaryLabel: content.heroPrimaryLabel,
          primaryHref: content.heroPrimaryHref,
          secondaryLabel: content.heroSecondaryLabel,
          secondaryHref: content.heroSecondaryHref,
        }}
      />

      <main className="flex-1 bg-neutral-50">
        {/* Opening thought */}
        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {content.introHeading}
              </h2>
              {content.introSubheading && (
                <p className="mt-3 text-lg text-neutral-500">{content.introSubheading}</p>
              )}
            </div>
            <div className="space-y-4 text-neutral-600 lg:pt-2">
              <Paragraphs text={content.introBody} />
            </div>
          </div>
        </section>

        {/* What we do */}
        <section
          className="mt-20 bg-neutral-950 py-16 sm:mt-28 sm:py-30"
          data-navbar-variant="dark"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white">
                {content.whatWeDoEyebrow}
              </span>
            </div>

            <div className="mt-8 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {content.whatWeDoHeading}
              </h2>
              <p className="mt-4 text-white/60">
                {content.whatWeDoText}
              </p>
            </div>

            <div className="mt-10">
              <WhatWeDoSlider pillars={pillars} />
            </div>
          </div>
        </section>

        {/* Experience more */}
        <section className="bg-white py-20 sm:py-38">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                {content.experienceEyebrow}
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                {content.experienceHeading}
              </h2>
              {content.experienceSubheading && (
                <p className="mt-2 text-xl text-neutral-500">{content.experienceSubheading}</p>
              )}
              <div className="mt-6 max-w-md space-y-4 text-neutral-600">
                <Paragraphs text={content.experienceBody} />
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-3xl lg:min-h-[480px]">
              <VideoPlayer
                src={content.experienceVideoUrl}
                poster={content.experienceVideoPoster}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why DEGSS */}
        <section className="bg-[#faf8f5] pt-20 pb-20 sm:pt-28 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <SectionEyebrow label={content.whyEyebrow} />

            <h2 className="mt-8 max-w-3xl text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {content.whyHeading}
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.whyItems.map(({ heading, description, icon }) => {
                const Icon = getContentIcon(icon);
                return (
                <div
                  key={heading}
                  className="rounded-3xl border border-black/10 bg-white p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7efe4] text-[#442a03]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-950">
                    {heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {description}
                  </p>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                {content.valuesEyebrow}
              </span>
              <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {content.valuesHeading}
              </h2>
            </div>

            <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="relative mx-auto h-[480px] w-full max-w-xl sm:h-[600px]">
                <div className="absolute left-0 top-0 h-[75%] w-[80%] overflow-hidden rounded-3xl">
                  <Image
                    src={content.valuesImage1}
                    alt="A DEGSS property"
                    fill
                    sizes="(min-width: 1024px) 25vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 h-[60%] w-[68%] overflow-hidden rounded-3xl">
                  <Image
                    src={content.valuesImage2}
                    alt="The DEGSS team at work"
                    fill
                    sizes="(min-width: 1024px) 22vw, 55vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                {content.values.map(({ heading, description, icon }, index) => {
                  const Icon = getContentIcon(icon);
                  return (
                  <div key={heading} className="relative flex gap-5 pb-10 last:pb-0">
                    {index < content.values.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-6 top-12 h-[calc(100%-2.5rem)] border-l border-dashed border-black/15"
                      />
                    )}
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#39548b] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-950">
                        {heading}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-neutral-600">
                        {description}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured properties */}
        {featuredProperties.length > 0 && (
          <section className="bg-[#fafafa] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-neutral-950"
                />
                {content.featuredEyebrow}
              </span>

              <div className="mt-6 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <h2 className="max-w-lg text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                  {content.featuredHeading}
                </h2>
                <Link
                  href="/properties"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  {content.featuredButtonLabel}
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProperties.map((property) => (
                  <FeaturedPropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* The DEGSS journal */}
        <section className="relative flex min-h-[480px] flex-col justify-between overflow-hidden py-10 sm:min-h-[560px] sm:py-12">
          <Image
            src={content.journalImage}
            alt="DEGSS property"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/65"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white">
              {content.journalEyebrow}
            </span>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                <RichText text={content.journalHeading} accentClassName="italic text-[#ee3442]" />
              </h2>
              <p className="mt-4 max-w-lg text-white/70">
                {content.journalText}
              </p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                {content.journalLinkLabel}
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
              <SectionEyebrow label={content.testimonialsEyebrow} />

              <h2 className="mt-8 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {content.testimonialsHeading}
              </h2>
            </div>

            <div className="mx-auto mt-10 max-w-7xl px-6 sm:px-10 lg:px-16">
              <TestimonialsSlider testimonials={testimonials} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}

function FeaturedPropertyCard({ property }: { property: Property }) {
  const {
    slug,
    title,
    price,
    location,
    description,
    image,
    beds,
    sqft,
    lotSize,
    listingType,
    status,
  } = property;
  const isLand = listingType === "Land";
  const statusLabel = status === "Available" ? "For Sale" : status;

  return (
    <Link
      href={`/properties/${slug}`}
      className="group block overflow-hidden rounded-3xl border border-black/10 bg-white transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <div className="p-3 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element -- admin-entered URLs can be any domain */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-neutral-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {statusLabel}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
          <span className="whitespace-nowrap text-lg font-semibold text-neutral-950">
            ₦{price}
          </span>
        </div>

        <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-neutral-600">
          {description}
        </p>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
          <MapPinIcon className="h-4 w-4 shrink-0" />
          {location}
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          {isLand ? (
            <>
              {lotSize} <span className="mx-1.5 text-neutral-300">|</span> {sqft} sq.ft
            </>
          ) : (
            <>
              {beds} rooms <span className="mx-1.5 text-neutral-300">|</span> {sqft} sq.ft
            </>
          )}
        </p>
      </div>
    </Link>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SectionEyebrow({ label, number }: { label: string; number?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
      {label}
      </span>
      {number && (
        <span className="text-sm font-medium text-neutral-400">({number})</span>
      )}
    </div>
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

