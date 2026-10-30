import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 27 · Form field. The arrangement input, select and checkbox sit inside.
   Help text and error share ONE slot, so the error replaces the hint rather
   than pushing everything below it down mid-tap.
   The label stays dark-gray in the error state: the border, fill, icon and
   message already carry the error four times. */
export function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  optional = false,
  children,
  className = "",
  ...rest
}) {
  const invalid = Boolean(error);
  const messageId = htmlFor ? htmlFor + "-msg" : undefined;
  const cls = ["uw-field", invalid && "is-invalid", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {label ? (
        <label className="uw-field__label" htmlFor={htmlFor}>
          {label}
          {required ? <span className="uw-field__req" aria-hidden="true"> *</span> : null}
          {optional ? <span> (optional)</span> : null}
        </label>
      ) : null}
      {children}
      {invalid ? (
        <p className="uw-field__hint uw-field__err" id={messageId}>
          <Icon name="alert-circle" size={16} />
          {error}
        </p>
      ) : hint ? (
        <p className="uw-field__hint" id={messageId}>{hint}</p>
      ) : null}
    </div>
  );
}
