import React from "react";

/* 8 · Breadcrumb. Deliberately quiet — orientation, not navigation people
   came for. Sentence case, never uppercase: uppercase costs ~12% width and
   German breadcrumbs are already the longest of the three languages.
   The current page is --dark-blue, matching the H1 below it. Not green. */
export function Breadcrumb({ items = [], label = "Brotkrumen", className = "", ...rest }) {
  return (
    <nav className={["uw-crumbs", className].filter(Boolean).join(" ")} aria-label={label} {...rest}>
      <ol className="uw-crumbs__list">
        {items.map((it, i) => (
          <li className="uw-crumbs__item" key={it.label}>
            {i === items.length - 1 ? (
              <span className="uw-crumbs__current" aria-current="page">{it.label}</span>
            ) : (
              <a className="uw-crumbs__link" href={it.href}>{it.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
