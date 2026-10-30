import React from "react";

/* 6 · Link. Three variants, sorted by whether the linkness has to announce
   itself — not by where the link sits. `inline` is underlined at rest
   because colour alone is ~2.5:1 against body copy. */
export function Link({ variant = "inline", href, current = false, children, className = "", ...rest }) {
  const cls = ["uw-link", variant !== "inline" && "uw-link--" + variant, className]
    .filter(Boolean).join(" ");
  return (
    <a className={cls} href={href} aria-current={current ? "page" : undefined} {...rest}>
      {children}
    </a>
  );
}
