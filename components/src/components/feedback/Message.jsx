import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 20 · Message. Inline feedback at page or section level. A message
   PERSISTS; a toast confirms and leaves.
   Warning is orange: a heads-up, not an alarm. Red would be worse — in a
   message it means something failed, and "not suitable during pregnancy"
   is a restriction. Every type carries its icon on a 32px disc in its own
   colour (stylesheet): white on the disc, dark blue on the orange one. */
const ICONS = {
  neutral: "info-circle",
  info: "info-circle",
  success: "circle-check",
  warning: "alert-triangle",
  error: "alert-circle",
};

export function Message({ variant = "info", title, children, className = "", ...rest }) {
  return (
    <div
      className={["uw-msg", "uw-msg--" + variant, className].filter(Boolean).join(" ")}
      role={variant === "error" ? "alert" : "status"}
      {...rest}
    >
      <span className="uw-msg__ic" aria-hidden="true"><Icon name={ICONS[variant]} size={20} /></span>
      <div className="uw-msg__b">
        {title ? <p className="uw-msg__t">{title}</p> : null}
        {children}
      </div>
    </div>
  );
}
