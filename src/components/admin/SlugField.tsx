"use client";

import { useRef } from "react";
import { slugify } from "@/lib/slug";

const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/20";

export default function SlugField({
  defaultValue,
  titleFieldName = "title",
  generateLabel = "Generate from title",
  hint = "Used in the URL, e.g. /properties/hrizon-villa",
}: {
  defaultValue?: string;
  titleFieldName?: string;
  generateLabel?: string;
  hint?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleGenerate() {
    const form = inputRef.current?.form;
    const titleInput = form?.elements.namedItem(titleFieldName);
    const titleValue =
      titleInput instanceof HTMLInputElement ? titleInput.value : "";
    if (!titleValue.trim() || !inputRef.current) return;
    inputRef.current.value = slugify(titleValue);
  }

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <label htmlFor="slug" className="block text-sm font-medium text-neutral-700">
          Slug<span className="text-neutral-950"> *</span>
        </label>
        <button
          type="button"
          onClick={handleGenerate}
          className="text-xs font-medium text-[#39548b] hover:underline"
        >
          {generateLabel}
        </button>
      </div>
      <input
        ref={inputRef}
        id="slug"
        name="slug"
        type="text"
        defaultValue={defaultValue}
        required
        className={inputClass}
      />
      {hint && <p className="mt-1 text-xs text-neutral-400">{hint}</p>}
    </div>
  );
}
