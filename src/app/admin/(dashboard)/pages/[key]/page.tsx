import Link from "next/link";
import { notFound } from "next/navigation";
import ContentFieldInput from "@/components/admin/content/ContentFieldInput";
import ContentListInput from "@/components/admin/content/ContentListInput";
import SubmitButton from "@/components/admin/SubmitButton";
import { getPageDefinition, isContentKey } from "@/lib/content/registry";
import type { ContentValues, Field } from "@/lib/content/schema";
import { getSiteContent } from "@/lib/data/siteContent";
import { saveSiteContentAction } from "../actions";

export async function generateMetadata({ params }: PageProps<"/admin/pages/[key]">) {
  const { key } = await params;
  return { title: isContentKey(key) ? `Edit ${getPageDefinition(key).label}` : "Edit page" };
}

function FieldInput({ field, content }: { field: Field; content: ContentValues }) {
  const value = content[field.key];
  if (field.type === "list") {
    return <ContentListInput field={field} items={Array.isArray(value) ? value : []} />;
  }
  return <ContentFieldInput field={field} name={field.key} value={typeof value === "string" ? value : ""} />;
}

export default async function EditPageContent({ params }: PageProps<"/admin/pages/[key]">) {
  const { key } = await params;
  if (!isContentKey(key)) notFound();

  const def = getPageDefinition(key);
  const content = (await getSiteContent(key)) as ContentValues;

  return (
    <div className="max-w-3xl">
      <Link href="/admin/pages" className="text-sm text-neutral-500 hover:text-neutral-950">
        ← Pages &amp; navigation
      </Link>
      <div className="mt-2 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">{def.label}</h1>
        {def.viewPath && (
          <a
            href={def.viewPath}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-white"
          >
            View page ↗
          </a>
        )}
      </div>
      <p className="mt-1 text-sm text-neutral-500">{def.description}</p>

      <form action={saveSiteContentAction} className="mt-6 space-y-5">
        <input type="hidden" name="pageKey" value={def.key} />

        {def.sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="font-semibold text-neutral-950">{section.title}</h2>
            {section.description && <p className="mt-0.5 text-sm text-neutral-500">{section.description}</p>}
            <div className="mt-5 grid gap-5">
              {section.fields.map((field) => (
                <FieldInput key={field.key} field={field} content={content} />
              ))}
            </div>
          </section>
        ))}

        <div className="sticky bottom-0 -mx-1 flex items-center gap-3 rounded-2xl border border-black/10 bg-white/95 px-5 py-4 backdrop-blur">
          <SubmitButton
            pendingLabel="Saving…"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
          >
            Save changes
          </SubmitButton>
          <Link href="/admin/pages" className="text-sm font-medium text-neutral-500 hover:text-neutral-950">
            Cancel
          </Link>
          <p className="ml-auto hidden text-xs text-neutral-400 sm:block">Changes go live as soon as you save.</p>
        </div>
      </form>
    </div>
  );
}
