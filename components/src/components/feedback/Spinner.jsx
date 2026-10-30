import React from "react";

/* 30 · Spinner. Used when the incoming shape is NOT known — a form
   submitting does not know what comes next.
   A silent spinner is invisible to a screen reader, so it carries
   role="status" and an accessible label. */
export function Spinner({ label = "Wird geladen", size = 20, className = "", style, ...rest }) {
  return (
    <span
      className={["uw-spin", className].filter(Boolean).join(" ")}
      role="status"
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <span className="visually-hidden">{label}</span>
    </span>
  );
}
