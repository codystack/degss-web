import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import { listProperties } from "@/lib/data/properties";
import { getSiteContent } from "@/lib/data/siteContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Properties",
  description:
    "Browse homes and estates available through DEGSS Limited — find, compare, and secure the right property in Lagos.",
  path: "/properties",
});

export default async function PropertiesPage() {
  const [properties, content] = await Promise.all([
    listProperties(),
    getSiteContent("properties"),
  ]);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-neutral-50 pb-24 pt-32 sm:pt-26">
        <PageHero
          title={content.heroTitle}
          description={content.heroText}
          image={content.heroImage}
          imageAlt={content.heroImageAlt}
        />

        <div className="mx-auto max-w-7xl px-6 pt-12 sm:px-10 sm:pt-16 lg:px-16">
          {properties.length === 0 ? (
            <p className="rounded-3xl border border-black/10 bg-white p-10 text-center text-neutral-500">
              {content.emptyText}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
