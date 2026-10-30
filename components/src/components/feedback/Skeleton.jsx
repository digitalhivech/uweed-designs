import React from "react";

/* 30 · Skeleton. Used when the SHAPE is known — a product grid reloading
   after a filter knows it will be nine cards, so a skeleton reserves the
   space and prevents the shift.
   Never collapse a container while it loads: one that shrinks and re-expands
   reads as broken even when it is faster. */
export function Skeleton({ width = "100%", height = 16, radius, className = "", style, ...rest }) {
  return (
    <span
      className={["uw-sk", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      style={{ display: "block", width, height, borderRadius: radius, ...style }}
      {...rest}
    />
  );
}
