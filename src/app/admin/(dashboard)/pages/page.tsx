import Link from "next/link";
import { listPageDefinitions } from "@/lib/content/registry";
import type { PageDefinition } from "@/lib/content/schema";
import { listSiteContentUpdates } from "@/lib/data/siteContent";

export const metadata = { title: "Pages & navigation" };

function formatUpdated(iso: string | undefined) {
  if (!iso) return "Using original content";
  return `Edited ${new Date(iso).toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" })}`;
}

function PageRow({ page, updatedAt }: { page: PageDefinition; updatedAt?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 p-5">
      <div className="min-w-0">
        <p className="font-medium text-neutral-950">{page.label}</p>
        <p className="mt-0.5 text-sm text-neutral-500">{page.description}</p>
        <p className="mt-1 text-xs text-neutral-400">{formatUpdated(updatedAt)}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {page.viewPath && (
          <a
            href={page.viewPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
          >
            View
          </a>
        )}
        <Link
          href={`/admin/pages/${page.key}`}
          className="rounded-full bg-neutral-950 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default async function AdminPagesIndex() {
  const pages = listPageDefinitions();
  const { updates, setupRequired } = await listSiteContentUpdates();
  const groups = [
    { title: "Site-wide", pages: pages.filter((page) => page.group === "site") },
    { title: "Pages", pages: pages.filter((page) => page.group === "pages") },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Pages &amp; navigation</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Edit the wording, images and links on every page. Anything you haven&apos;t edited keeps its original content.
      </p>

      {setupRequired && (
        <div role="status" className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">One-time setup needed before you can save</p>
          <p className="mt-1">
            The <code className="rounded bg-amber-100 px-1">site_content</code> table hasn&apos;t been created in the
            database yet. Run the <code className="rounded bg-amber-100 px-1">site_content</code> section of{" "}
            <code className="rounded bg-amber-100 px-1">supabase/schema.sql</code> in the Supabase SQL editor. Until
            then, the website keeps showing its original content.
          </p>
        </div>
      )}

      {groups.map((group) => (
        <section key={group.title} className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{group.title}</h2>
          <div className="mt-3 divide-y divide-black/5 rounded-2xl border border-black/10 bg-white">
            {group.pages.map((page) => (
              <PageRow key={page.key} page={page} updatedAt={updates[page.key]} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
