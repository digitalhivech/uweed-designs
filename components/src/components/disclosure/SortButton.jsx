import React from "react";
import { Icon } from "../core/Icon.jsx";

/* Sort control (Category Filters Final). Not a pill and not a select: a
   <button> styled as the action link — --medium-blue 14px/500, arrows-sort
   16px before the label, underline on hover, 44px hit height. It opens a
   Popover listbox aligned right. Sorting is a view change, so it is blue. */
export function SortButton({ label = "Sortieren", value, open = false, className = "", children, ...rest }) {
  return (
    <button
      type="button"
      className={["uw-sort", className].filter(Boolean).join(" ")}
      aria-haspopup="listbox"
      aria-expanded={open ? "true" : "false"}
      {...rest}
    >
      <Icon name="arrows-sort" size={16} />
      <span>{children ?? (label + ": " + value)}</span>
    </button>
  );
}
