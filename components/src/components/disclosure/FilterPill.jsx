import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 10 · Filter and sort pill. Filters and sort are BLUE: a filter changes
   which products are listed, which is the same job as the tab nav and not a
   purchase. The live green fill spends the buy signal on a view control, and
   on a category page sits directly above a grid of green add-to-cart buttons.
   Rest is white — grey means unavailable.
   Category Filters Final: the applied count sits IN the label — "Brand (2)"
   — not in a separate badge. One pill per facet, always visible; there is
   no "Show filters" toggle. The sort control is NOT a pill (see SortButton). */
export function FilterPill({
  count,
  open = false,
  active = false,
  disabled = false,
  icon = "chevron-down",
  children,
  className = "",
  ...rest
}) {
  const cls = ["uw-fp", active && "is-active", className].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} aria-expanded={open ? "true" : "false"} disabled={disabled} {...rest}>
      {children}{count != null ? " (" + count + ")" : null}
      {icon ? <Icon name={icon} size={16} /> : null}
    </button>
  );
}
