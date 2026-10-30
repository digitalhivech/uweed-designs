import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 2 · Input. 44px like every control, pill radius, never below 16px font — iOS Safari zooms the
   viewport on focus for anything smaller and leaves the user stuck zoomed.
   Label above, always: a placeholder as label disappears on focus. */
export function Input({
  as = "input",
  type = "text",
  leadingIcon,
  invalid = false,
  className = "",
  ...rest
}) {
  const cls = ["uw-input", as === "textarea" && "uw-input--area", leadingIcon && "uw-input--search", className]
    .filter(Boolean).join(" ");
  const props = {
    className: cls,
    "aria-invalid": invalid ? "true" : undefined,
    ...rest,
  };
  const field = as === "textarea"
    ? <textarea {...props} />
    : <input type={type} {...props} />;
  if (!leadingIcon) return field;
  return (
    <span className="uw-inputwrap">
      <span className="uw-inputwrap__lead"><Icon name={leadingIcon} size={20} /></span>
      {field}
    </span>
  );
}
