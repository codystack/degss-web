"use client";

import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { inputClass, SelectBox } from "@/components/admin/fields";
import type { ScalarField } from "@/lib/content/schema";

/**
 * One editable value. `name` is the form field name: the field key for
 * page-level fields, "<list>.<index>.<key>" inside repeatable items.
 */
export default function ContentFieldInput({
  field,
  name,
  value,
}: {
  field: ScalarField;
  name: string;
  value: string;
}) {
  if (field.type === "image") {
    return <ImageUploadField label={field.label} name={name} defaultValue={value || undefined} hint={field.hint} />;
  }

  const required = field.type !== "select" && !field.optional;
  const id = `field-${name}`;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-700">
        {field.label}
        {required && <span className="text-neutral-950"> *</span>}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          defaultValue={value}
          required={required}
          rows={field.rows ?? 3}
          className={`${inputClass} resize-y`}
        />
      ) : field.type === "select" ? (
        <SelectBox id={id} name={name} defaultValue={value || field.options[0]?.value}>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectBox>
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          defaultValue={value}
          required={required}
          placeholder={field.type === "link" ? "/page or https://…" : undefined}
          className={inputClass}
        />
      )}
      {field.hint && <p className="mt-1 text-xs text-neutral-400">{field.hint}</p>}
    </div>
  );
}
