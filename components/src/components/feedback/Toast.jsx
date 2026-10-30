import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 21 · Toast. Transient confirmation. Never an error — it disappears.
   Five seconds, paused on hover and focus, never auto-dismissed if it
   contains a link: a control that vanishes while being reached for is worse
   than no control. One at a time; a second replaces the first. */
export function Toast({
  variant = "light",
  title,
  action,
  actionHref = "#",
  onClose,
  children,
  className = "",
  ...rest
}) {
  return (
    <div
      className={["uw-toast", variant === "dark" && "uw-toast--dark", className].filter(Boolean).join(" ")}
      role="status"
      aria-live="polite"
      {...rest}
    >
      <span className="uw-toast__ic" aria-hidden="true"><Icon name="circle-check" size={20} /></span>
      <div className="uw-toast__b">
        {title ? <p className="uw-toast__t">{title}</p> : null}
        {children}
        {action ? <a className="uw-toast__a" href={actionHref}>{action}</a> : null}
      </div>
      <button type="button" className="uw-toast__x" aria-label="Schliessen" onClick={onClose}>
        <Icon name="x" size={16} />
      </button>
    </div>
  );
}
