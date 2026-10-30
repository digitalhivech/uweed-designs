import React from "react";

/* 7 · Category tab nav. One axis, a handful of options, always visible.
   Active is --dark-blue: a category tab changes which products are listed,
   which is navigation — green is reserved for advancing a purchase.
   Uppercase is kept here, one of the few places it works: short labels, a
   row that is scanned rather than read, and --ls-caps applied. */
export function TabNav({ items = [], label = "Kategorien", className = "", ...rest }) {
  return (
    <nav className={["uw-tabnav", className].filter(Boolean).join(" ")} aria-label={label} {...rest}>
      <ul className="uw-tabnav__list">
        {items.map((it) => (
          <li key={it.label}>
            <a
              className={"uw-tabnav__item" + (it.active ? " is-active" : "")}
              href={it.href || "#"}
              aria-current={it.active ? "page" : undefined}
              onClick={it.onClick}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
