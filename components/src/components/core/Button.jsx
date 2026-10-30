import React from "react";
import { Icon } from "./Icon.jsx";

/* 1 · Button. The rule is purpose, not prominence: colour tells the user
   what kind of thing will happen. Green never navigates; blue never buys.
   One height (44px) — the product tile's CTA included. Width grows from a
   160px floor — never fixed, never sized to the English string.
   `unavailable` is a variant, not a state: it is rendered with disabled AND
   aria-disabled (tabIndex -1 on an anchor), and it is never the same thing
   as `disabled`. Ruling: it gets neither a tooltip nor an explanation line —
   the label is the statement. */
export function Button({
  variant = "buy",
  as,
  href,
  icon,
  iconOnly = false,
  block = false,
  loading = false,
  disabled = false,
  children,
  className = "",
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const cls = [
    "uw-btn",
    "uw-btn--" + variant,
    iconOnly && "uw-btn--icon",
    block && "uw-btn--block",
    loading && "is-loading",
    className,
  ].filter(Boolean).join(" ");

  const unavailable = variant === "unavailable";
  const props = { className: cls, ...rest };
  if (Tag === "button") {
    props.type = rest.type || "button";
    props.disabled = disabled || unavailable || undefined;
  } else {
    props.href = href;
    if (disabled) props["aria-disabled"] = "true";
  }
  if (unavailable) { props["aria-disabled"] = "true"; if (Tag !== "button") props.tabIndex = -1; }
  if (loading) props["aria-busy"] = "true";

  return (
    <Tag {...props}>
      {icon ? <Icon name={icon} size={20} /> : null}
      {iconOnly ? null : children}
    </Tag>
  );
}
