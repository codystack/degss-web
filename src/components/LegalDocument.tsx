import Navbar from "@/components/Navbar";
import { Paragraphs, RichText } from "@/components/RichText";
import { splitLines } from "@/lib/content/schema";

type LegalContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; body: string; list: string }[];
};

/** Privacy policy / terms layout: header, then numbered sections. */
export default function LegalDocument({ content }: { content: LegalContent }) {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-neutral-50 pb-24 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">{content.lastUpdated}</p>
          <p className="mt-6 text-neutral-600">{content.intro}</p>

          <div className="mt-12 divide-y divide-black/10 border-t border-black/10">
            {content.sections.map(({ heading, body, list }, index) => {
              const items = splitLines(list);
              return (
                <section key={`${index}-${heading}`} className="py-8">
                  <h2 className="text-xl font-semibold text-neutral-950">{heading}</h2>
                  {body && (
                    <div className="mt-3 space-y-3 text-neutral-600 [&_strong]:text-neutral-800">
                      <Paragraphs text={body} />
                    </div>
                  )}
                  {items.length > 0 && (
                    <ul className="mt-3 space-y-2 text-neutral-600 [&_strong]:text-neutral-800">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                          />
                          <span>
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
