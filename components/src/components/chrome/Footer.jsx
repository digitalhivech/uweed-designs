import React from "react";
import { Accordion, AccordionItem } from "../disclosure/Accordion.jsx";

/* 23 · Footer. Four link columns, then a bottom row with copyright and the
   currency and language switchers.
   Below --bs-breakpoint-lg the columns become the accordion INSIDE
   .on-dark — not a separate footer accordion, which is what exists today.
   The switchers use aria-pressed, not aria-current: they change a setting
   rather than marking a location. */
export function Footer({
  columns = [],
  copyright = "© 2026 uWeed",
  switches = [],
  className = "",
  ...rest
}) {
  return (
    <footer className={["uw-footer", "on-dark", className].filter(Boolean).join(" ")} {...rest}>
      <div className="uw-footer__inner">
        <div className="uw-footer__cols">
          {columns.map((c) => (
            <div key={c.heading}>
              <h2 className="uw-footer__h">{c.heading}</h2>
              <ul className="uw-footer__list">
                {c.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="uw-footer__acc">
          <Accordion>
            {columns.map((c) => (
              <AccordionItem key={c.heading} heading={c.heading} headingLevel={0}>
                <ul className="uw-footer__list">
                  {c.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="uw-footer__bottom">
          <p className="uw-footer__copy">{copyright}</p>
          <div className="uw-footer__switches">
            {switches.map((s) => (
              <div className="uw-sw" key={s.label} role="group" aria-label={s.label}>
                {s.options.map((o) => (
                  <button key={o} type="button" aria-pressed={o === s.value}>{o}</button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
