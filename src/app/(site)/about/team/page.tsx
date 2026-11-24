import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Paragraphs, RichText } from "@/components/RichText";
import TeamGrid from "@/components/TeamGrid";
import { getSiteContent } from "@/lib/data/siteContent";
import { listTeamMembers } from "@/lib/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the people behind DEGSS Limited — the team helping clients find, compare, and secure property across Lagos.",
  path: "/about/team",
  image: "/team-hero.jpg",
});

export default async function TeamPage() {
  const [teamMembers, content] = await Promise.all([
    listTeamMembers(),
    getSiteContent("team"),
  ]);

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
              {content.introEyebrow}
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                <RichText text={content.introHeading} accentClassName="text-neutral-400" />
              </h2>
            </div>

            <div className="space-y-10">
              <div>
                <Paragraphs text={content.introBody} className="mt-3 text-neutral-600" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 lg:px-16">
          <TeamGrid members={teamMembers} />
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:px-16">
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-[#39548b] px-8 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-center">
            <Image
              src="/icon-light.png"
              alt=""
              aria-hidden="true"
              width={1700}
              height={1700}
              className="pointer-events-none absolute -right-10 top-1/2 h-[150%] w-auto -translate-y-1/2 opacity-6"
            />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {content.ctaHeading}
              </h2>
              <p className="mt-3 max-w-md text-white/60">
                {content.ctaText}
              </p>
            </div>
            <Link
              href={content.ctaButtonHref}
              className="relative z-10 flex items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-white/90"
            >
              {content.ctaButtonLabel}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
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
