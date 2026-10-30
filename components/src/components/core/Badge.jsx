import React from "react";
import { Icon } from "./Icon.jsx";

/* 5 · Badge and tag. Small labels that classify, count or flag.
   Non-interactive unless removable. Category (pink) says "this is a kind of
   thing"; attribute (grey) says "this is a fact about the thing". */
export function Badge({
  variant = "attribute",
  onRemove,
  removeLabel = "Entfernen",
  children,
  className = "",
  ...rest
}) {
  const cls = ["uw-badge", "uw-badge--" + variant, onRemove && "uw-badge--removable", className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
      {onRemove ? (
        <button type="button" className="uw-badge__remove" aria-label={removeLabel} onClick={onRemove}>
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </span>
  );
}
