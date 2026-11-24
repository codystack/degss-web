"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { showToast } from "@/components/admin/Toaster";
import { uploadMediaAssetsAction } from "./actions";
import { MEDIA_UPLOAD_LIMITS } from "./uploadLimits";

function checkFiles(files: File[]): string | null {
  if (files.length > MEDIA_UPLOAD_LIMITS.maxFiles) {
    return `You can upload up to ${MEDIA_UPLOAD_LIMITS.maxFiles} images at a time.`;
  }
  if (files.some((file) => !file.type.startsWith("image/"))) {
    return "Only image files can be uploaded.";
  }
  if (files.some((file) => file.size > MEDIA_UPLOAD_LIMITS.maxFileBytes)) {
    return `Each image must be ${MEDIA_UPLOAD_LIMITS.maxFileMb} MB or smaller.`;
  }
  const total = files.reduce((sum, file) => sum + file.size, 0);
  if (total > MEDIA_UPLOAD_LIMITS.maxTotalBytes) {
    return `Selected images add up to more than ${MEDIA_UPLOAD_LIMITS.maxTotalMb} MB. Upload fewer at a time.`;
  }
  return null;
}

function TriggerButton({ onClick }: { onClick: () => void }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      aria-busy={pending}
      className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
    >
      {pending ? "Uploading…" : "Upload images"}
    </button>
  );
}

/**
 * Opens the file picker and submits the selected images straight away —
 * no separate "submit" step. Files are pre-checked here for a fast error;
 * the server action re-validates everything.
 */
export default function MediaUploadButton() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const files = Array.from(input.files ?? []);
    if (files.length === 0) return;

    const error = checkFiles(files);
    if (error) {
      showToast("error", error);
      input.value = "";
      return;
    }

    formRef.current?.requestSubmit();
  }

  return (
    <form ref={formRef} action={uploadMediaAssetsAction}>
      <input
        ref={inputRef}
        type="file"
        name="files"
        accept="image/*"
        multiple
        onChange={handleChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
      <TriggerButton onClick={() => inputRef.current?.click()} />
    </form>
  );
}
