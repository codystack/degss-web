import Navbar from "@/components/Navbar";
import FaqAccordion from "./FaqAccordion";
import { listFaqs } from "@/lib/data/faqs";
import { RichText } from "@/components/RichText";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about buying, investing, and managing property with DEGSS Limited.",
  path: "/faqs",
});

export default async function FAQsPage() {
  const [faqs, content] = await Promise.all([listFaqs(), getSiteContent("faqs")]);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-neutral-50 pb-24 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            {content.heading}
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            <RichText
              text={content.intro}
              linkClassName="font-medium text-neutral-950 underline underline-offset-2"
            />
          </p>

          <FaqAccordion faqs={faqs} />
        </div>
      </main>
    </>
  );
}
