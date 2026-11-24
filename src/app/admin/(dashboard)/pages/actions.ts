"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ContentValidationError, parseContentForm } from "@/lib/content/parse";
import { getPageDefinition, isContentKey } from "@/lib/content/registry";
import { saveSiteContent } from "@/lib/data/siteContent";
import { withToast } from "@/lib/toast";

export async function saveSiteContentAction(formData: FormData) {
  const key = String(formData.get("pageKey") ?? "");
  if (!isContentKey(key)) {
    redirect(withToast("/admin/pages", "error", "Unknown page."));
  }

  const def = getPageDefinition(key);
  const editPath = `/admin/pages/${key}`;

  try {
    const data = await parseContentForm(def, formData);
    await saveSiteContent(key, data);
  } catch (err) {
    if (err instanceof ContentValidationError) {
      redirect(withToast(editPath, "error", err.message));
    }
    console.error(`[site-content] save failed for "${key}":`, err);
    redirect(withToast(editPath, "error", "Could not save the changes. Please try again."));
  }

  for (const { path, type } of def.revalidate) {
    revalidatePath(path, type);
  }
  revalidatePath("/admin/pages");
  redirect(withToast(editPath, "success", `${def.label} saved.`));
}
