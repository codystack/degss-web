"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { linesToArray } from "@/components/admin/fields";
import { resolveUploadedImage } from "@/lib/cloudinary";
import { slugify } from "@/lib/slug";
import { withToast } from "@/lib/toast";
import {
  createService,
  deleteService,
  isServiceIconName,
  updateService,
  type ServiceInput,
} from "@/lib/data/services";

class ServiceInputError extends Error {}

async function readServiceInput(formData: FormData): Promise<ServiceInput> {
  const iconName = String(formData.get("iconName") ?? "");
  const label = String(formData.get("label") ?? "").trim();
  // Any text is accepted; it's tidied into a URL-safe slug ("Agro Farming!" -> "agro-farming").
  const slug = slugify(String(formData.get("slug") ?? "")) || slugify(label);

  if (!label) throw new ServiceInputError("Please enter a label.");
  if (!slug) throw new ServiceInputError("Please enter a slug using letters or numbers.");

  const heroImage = await resolveUploadedImage(formData, "heroImage", "services");

  return {
    slug,
    label,
    description: String(formData.get("description") ?? "").trim(),
    iconName: isServiceIconName(iconName) ? iconName : "BuildingIcon",
    heroImage,
    intro: String(formData.get("intro") ?? "").trim(),
    features: linesToArray(formData.get("features")),
  };
}

function revalidateServicePaths() {
  revalidatePath("/admin/services");
  revalidatePath("/", "layout");
}

function saveErrorMessage(err: unknown, fallback: string): string {
  if (err instanceof ServiceInputError) return err.message;
  if (err instanceof Error && /duplicate key|services_slug_key/i.test(err.message)) {
    return "Another service already uses that slug. Please choose a different one.";
  }
  if (err instanceof Error && /column .* (does not exist|in the schema cache)/i.test(err.message)) {
    return "The database is missing service columns. Run the services upgrade lines in supabase/schema.sql in the Supabase SQL editor.";
  }
  return fallback;
}

export async function createServiceAction(formData: FormData) {
  try {
    const input = await readServiceInput(formData);
    await createService(input);
  } catch (err) {
    console.error("[services] create failed:", err);
    redirect(
      withToast("/admin/services", "error", saveErrorMessage(err, "Could not create the service."))
    );
  }

  revalidateServicePaths();
  redirect(withToast("/admin/services", "success", "Service created."));
}

export async function updateServiceAction(id: string, formData: FormData) {
  try {
    const input = await readServiceInput(formData);
    await updateService(id, input);
  } catch (err) {
    console.error("[services] update failed:", err);
    redirect(
      withToast(`/admin/services/${id}/edit`, "error", saveErrorMessage(err, "Could not update the service."))
    );
  }

  revalidateServicePaths();
  redirect(withToast("/admin/services", "success", "Service updated."));
}

export async function deleteServiceAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  try {
    await deleteService(id);
  } catch (err) {
    console.error("[services] delete failed:", err);
    redirect(
      withToast("/admin/services", "error", "Could not delete the service.")
    );
  }

  revalidateServicePaths();
  redirect(withToast("/admin/services", "success", "Service deleted."));
}
