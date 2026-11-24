"use client";

import { useRef, useState } from "react";
import type { ListField, ListItemValue } from "@/lib/content/schema";
import ContentFieldInput from "./ContentFieldInput";

type Row = { id: number; values: ListItemValue };

const smallButtonClass =
  "rounded-full border border-black/10 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent";

function emptyItem(field: ListField): ListItemValue {
  return Object.fromEntries(
    field.fields.map((sub) => [sub.key, sub.type === "select" ? (sub.options[0]?.value ?? "") : ""])
  );
}

function moveRow(rows: Row[], from: number, to: number): Row[] {
  const next = [...rows];
  const [row] = next.splice(from, 1);
  next.splice(to, 0, row);
  return next;
}

/**
 * Repeatable items (cards, stats, links, legal sections…). Inputs stay
 * uncontrolled; rows are keyed by a stable id so typed values follow an item
 * when it moves, while names are re-indexed to the item's new position.
 */
export default function ContentListInput({
  field,
  items,
}: {
  field: ListField;
  items: ListItemValue[];
}) {
  const nextId = useRef(items.length);
  const [rows, setRows] = useState<Row[]>(() => items.map((values, id) => ({ id, values })));

  function addRow() {
    const id = nextId.current++;
    setRows((current) => [...current, { id, values: emptyItem(field) }]);
  }

  function removeRow(index: number) {
    if (!window.confirm(`Remove ${field.itemLabel.toLowerCase()} ${index + 1}?`)) return;
    setRows((current) => current.filter((_, i) => i !== index));
  }

  const atLimit = rows.length >= field.maxItems;

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-neutral-700">{field.label}</p>
      {field.hint && <p className="-mt-1 mb-2 text-xs text-neutral-400">{field.hint}</p>}
      <input type="hidden" name={`${field.key}.count`} value={rows.length} />

      <div className="space-y-3">
        {rows.map((row, index) => (
          <fieldset key={row.id} className="rounded-xl border border-black/10 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <legend className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {field.itemLabel} {index + 1}
              </legend>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setRows((current) => moveRow(current, index, index - 1))}
                  disabled={index === 0}
                  aria-label={`Move ${field.itemLabel} ${index + 1} up`}
                  className={smallButtonClass}
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => setRows((current) => moveRow(current, index, index + 1))}
                  disabled={index === rows.length - 1}
                  aria-label={`Move ${field.itemLabel} ${index + 1} down`}
                  className={smallButtonClass}
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => removeRow(index)}
                  className="rounded-full border border-red-200 px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="grid gap-4">
              {field.fields.map((sub) => (
                <ContentFieldInput
                  key={sub.key}
                  field={sub}
                  name={`${field.key}.${index}.${sub.key}`}
                  value={row.values[sub.key] ?? ""}
                />
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <button
        type="button"
        onClick={addRow}
        disabled={atLimit}
        className="mt-3 rounded-full border border-dashed border-black/20 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 disabled:opacity-40"
      >
        + Add {field.itemLabel.toLowerCase()}
        {atLimit && ` (max ${field.maxItems})`}
      </button>
    </div>
  );
}
