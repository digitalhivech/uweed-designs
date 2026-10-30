import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 14 · Order info bar. The four reassurance items below add-to-cart.
   The supporting line is where a tooltip would be tempting — it is essential
   reassurance, so it stays visible.
   Icons come from the Icon component at 24px. Never emoji. */
const DEFAULTS = [
  { icon: "truck", label: "Gratis Versand", sub: "Ab 50 CHF innerhalb der Schweiz" },
  { icon: "arrow-back-up", label: "14 Tage Rückgabe", sub: "Ungeöffnete Artikel" },
  { icon: "credit-card", label: "Sicher bezahlen", sub: "TWINT, Karte, Rechnung" },
  { icon: "flask", label: "Laborgeprüft", sub: "Jede Charge, Schweizer Labor" },
];

export function OrderInfoBar({ items = DEFAULTS, className = "", ...rest }) {
  return (
    <ul className={["uw-oib", className].filter(Boolean).join(" ")} {...rest}>
      {items.slice(0, 4).map((it) => (
        <li className="uw-oib__item" key={it.label}>
          <span className="uw-oib__ic" aria-hidden="true"><Icon name={it.icon} size={24} /></span>
          <span>
            <p className="uw-oib__label">{it.label}</p>
            <p className="uw-oib__sub">{it.sub}</p>
          </span>
        </li>
      ))}
    </ul>
  );
}
