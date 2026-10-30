import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 36 · Icon list. An informing block: a short heading and up to four facts,
   each with an icon on a pink disc. This is where pink appears as a mark:
   dark-pink icon on a light-pink disc (4.90:1), on a white or light-gray
   block, never on a pink one. The "why uWeed" band is its first use.
   The discs never go into the buying steps: the reassurance strip under the
   buy button is OrderInfoBar, with plain dark-blue icons.
   Four across from `lg`, two from `sm`, and below that a list with the disc
   on the left. */
export function IconList({
  eyebrow,
  title,
  items = [],
  surface = "plain",
  headingLevel = 2,
  className = "",
  style,
  ...rest
}) {
  const H = "h" + headingLevel;
  const cls = ["uw-inform", surface === "tint" && "uw-inform--tint", "uw-icl", className].filter(Boolean).join(" ");
  const cols = Math.min(Math.max(items.length, 1), 4);
  return (
    <section className={cls} style={{ "--uw-icl-cols": cols, ...style }} {...rest}>
      {eyebrow ? <p className="uw-inform__eyebrow">{eyebrow}</p> : null}
      {title ? <H className="uw-inform__title">{title}</H> : null}
      <ul className="uw-icl__list">
        {items.slice(0, 4).map((it) => (
          <li className="uw-icl__item" key={it.label}>
            <span className="uw-inform__disc" aria-hidden="true"><Icon name={it.icon} size={24} /></span>
            <div>
              <p className="uw-icl__label">{it.label}</p>
              {it.text ? <p className="uw-icl__text">{it.text}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
