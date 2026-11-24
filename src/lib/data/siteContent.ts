import "server-only";
import { getSupabase } from "@/lib/supabase";
import { mergeContent } from "@/lib/content/merge";
import {
  getPageDefinition,
  type ContentFor,
  type ContentKey,
} from "@/lib/content/registry";
import type { ContentValues } from "@/lib/content/schema";

/**
 * Content for a page: what's saved in the admin, layered over the page's
 * built-in defaults. Never throws — if the database is unavailable (or the
 * site_content table hasn't been created yet) the defaults are returned.
 */
export async function getSiteContent<K extends ContentKey>(key: K): Promise<ContentFor<K>> {
  const def = getPageDefinition(key);
  const supabase = getSupabase();
  if (!supabase) return mergeContent(def, null) as ContentFor<K>;

  const { data, error } = await supabase
    .from("site_content")
    .select("data")
    .eq("key", key)
    .maybeSingle();

  if (error) reportLoadError(`load "${key}"`, error);

  return mergeContent(def, error ? null : data?.data) as ContentFor<K>;
}

// PostgREST's code for "table not in schema cache", i.e. the site_content
// table hasn't been created yet. That's an expected setup state, not a fault.
const MISSING_TABLE_CODE = "PGRST205";
let missingTableWarned = false;

type DbError = { code?: string; message: string };

function isMissingTable(error: DbError) {
  return error.code === MISSING_TABLE_CODE;
}

function reportLoadError(action: string, error: DbError) {
  if (isMissingTable(error)) {
    if (missingTableWarned) return;
    missingTableWarned = true;
    console.warn(
      "[site-content] The site_content table doesn't exist yet, so pages are using their original content. " +
        "Run the site_content block from supabase/schema.sql in the Supabase SQL editor to enable editing.",
    );
    return;
  }
  console.error(`[site-content] failed to ${action}:`, error.message);
}

export async function saveSiteContent(key: ContentKey, data: ContentValues): Promise<void> {
  const supabase = getSupabase();
  if (!supabase) throw new Error("Database is not configured.");

  const { error } = await supabase
    .from("site_content")
    .upsert({ key, data, updated_at: new Date().toISOString() }, { onConflict: "key" });

  if (error) throw new Error(error.message);
}

export type SiteContentStatus = {
  /** When each page was last saved, keyed by page key. */
  updates: Record<string, string>;
  /** True when the site_content table hasn't been created yet. */
  setupRequired: boolean;
};

export async function listSiteContentUpdates(): Promise<SiteContentStatus> {
  const supabase = getSupabase();
  if (!supabase) return { updates: {}, setupRequired: false };

  const { data, error } = await supabase.from("site_content").select("key, updated_at");
  if (error) {
    reportLoadError("list updates", error);
    return { updates: {}, setupRequired: isMissingTable(error) };
  }

  return {
    updates: Object.fromEntries(data.map((row) => [row.key as string, row.updated_at as string])),
    setupRequired: false,
  };
}
