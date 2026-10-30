import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 29 · Pagination. Every target 44×44 — the densest cluster of small targets
   on the site. The current page is a <span>: not hovered, not focusable, not
   in the tab order. The ellipsis is not clickable.
   The disabled arrow stays visible; removing it shifts the row and moves the
   other arrow under the finger that just tapped. */
export function Pagination({
  current = 1,
  total = 1,
  count,
  hrefFor = () => "#",
  label = "Seitennummerierung",
  className = "",
  ...rest
}) {
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - current) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== "gap") pages.push("gap");
  }
  return (
    <nav className={className} aria-label={label} {...rest}>
      <div className="uw-pg">
        <a className="uw-pg__arrow" href={current > 1 ? hrefFor(current - 1) : undefined}
           aria-label="Vorherige Seite" aria-disabled={current <= 1 ? "true" : undefined}>
          <Icon name="chevron-left" size={20} />
        </a>
        {pages.map((p, i) =>
          p === "gap" ? (
            <span className="uw-pg__gap" key={"gap" + i} aria-hidden="true">…</span>
          ) : p === current ? (
            <span className="uw-pg__cur" key={p} aria-current="page">{p}</span>
          ) : (
            <a key={p} href={hrefFor(p)}>{p}</a>
          )
        )}
        <a className="uw-pg__arrow" href={current < total ? hrefFor(current + 1) : undefined}
           aria-label="Nächste Seite" aria-disabled={current >= total ? "true" : undefined}>
          <Icon name="chevron-right" size={20} />
        </a>
      </div>
      {count ? <p className="uw-pg__count" style={{ margin: "var(--space-xs) 0 0" }}>
        Seite {current} von {total} · {count}
      </p> : null}
    </nav>
  );
}
