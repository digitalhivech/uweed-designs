import React from "react";

/* 25 · Card. The base that tiles and panels inherit — rarely placed on its
   own. Its value is that independently written surfaces land on the same
   border, radius and elevation instead of four near-misses.
   Only --link lifts: a card that moves but goes nowhere is a false
   affordance, and a lift without a shadow change reads as a glitch. */
export function Card({ variant = "default", as = "div", children, className = "", style, ...rest }) {
  const Tag = as;
  const cls = ["uw-card", variant !== "default" && "uw-card--" + variant, className]
    .filter(Boolean).join(" ");
  return <Tag className={cls} style={style} {...rest}>{children}</Tag>;
}
