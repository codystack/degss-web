"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteMediaAsset, uploadImages } from "@/lib/cloudinary";
import { withToast } from "@/lib/toast";
import { MEDIA_UPLOAD_LIMITS } from "./uploadLimits";

const MEDIA_PATH = "/admin/media";

function validateUploads(files: File[]): string | null {
  if (files.length === 0) return "Choose at least one image to upload.";
  if (files.length > MEDIA_UPLOAD_LIMITS.maxFiles) {
    return `You can upload up to ${MEDIA_UPLOAD_LIMITS.maxFiles} images at a time.`;
  }
  if (files.some((file) => !file.type.startsWith("image/"))) {
    return "Only image files can be uploaded.";
  }
  if (files.some((file) => file.size > MEDIA_UPLOAD_LIMITS.maxFileBytes)) {
    return `Each image must be ${MEDIA_UPLOAD_LIMITS.maxFileMb} MB or smaller.`;
  }
  return null;
}

export async function uploadMediaAssetsAction(formData: FormData) {
  const files = formData
    .getAll("files")
    .filter((value): value is File => value instanceof File && value.size > 0);

  const validationError = validateUploads(files);
  if (validationError) {
    redirect(withToast(MEDIA_PATH, "error", validationError));
  }

  try {
    await uploadImages(files, "library");
  } catch (err) {
    console.error("[media] upload failed:", err);
    redirect(withToast(MEDIA_PATH, "error", "Could not upload the images. Please try again."));
  }

  revalidatePath(MEDIA_PATH);
  const message = files.length === 1 ? "Image uploaded." : `${files.length} images uploaded.`;
  // Newest first, so the uploads land on page 1.
  redirect(withToast(MEDIA_PATH, "success", message));
}

export async function deleteMediaAssetAction(formData: FormData) {
  const publicId = String(formData.get("publicId") ?? "");
  const returnTo = String(formData.get("returnTo") ?? "/admin/media");
  if (!publicId) return;

  try {
    await deleteMediaAsset(publicId);
  } catch (err) {
    console.error("[media] delete failed:", err);
    redirect(withToast(returnTo, "error", "Could not delete the image."));
  }

  revalidatePath("/admin/media");
  redirect(withToast(returnTo, "success", "Image deleted."));
}
