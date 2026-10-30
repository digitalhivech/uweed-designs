import React from "react";

/* 4 · Radio. One from a set — and a set needs a <fieldset> with a <legend>,
   which is the one requirement in this library currently failing on the live
   site. RadioGroup exists so using it is easier than not. */
export function Radio({ label, sub, card = false, disabled = false, className = "", labelProps, ...rest }) {
  const cls = [
    "uw-check", "uw-check--radio",
    card && "uw-check--card",
    card && disabled && "is-disabled",
    className,
  ].filter(Boolean).join(" ");
  return (
    <label className={cls} {...labelProps}>
      <input className="uw-check__input" type="radio" disabled={disabled} {...rest} />
      <span className="uw-check__label">
        {label}
        {sub ? <span className="uw-check__sub">{sub}</span> : null}
      </span>
    </label>
  );
}

export function RadioGroup({ legend, children, className = "", ...rest }) {
  return (
    <fieldset className={["uw-check-group", className].filter(Boolean).join(" ")} {...rest}>
      <legend className="uw-check-group__legend">{legend}</legend>
      {children}
    </fieldset>
  );
}
