import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Logo } from "../core/Logo.jsx";

/* 23 · Footer. Redesigned 16 November 2026, mobile first.
   ONE markup for every width; CSS only redistributes it, so the reading
   order is the visual order everywhere:
     1. nav: Kontakt (always open), then the link columns
     2. mid: Folge uns, Bewertungen, Sprache und Währung, Sicher bezahlen
        with Mitglied bei
     3. bottom: logo with the legal links, the disclaimer, copyright with
        "Nach oben"
   Below --bs-breakpoint-lg (992px) each link column is a disclosure: its
   heading holds a button with aria-expanded that shows or hides the list.
   Not <details>: a closed <details> hides its links from the desktop
   layout too. From lg the four nav blocks are four equal columns, the
   buttons are gone and every list is open; the mid band is four equal
   columns as well.
   The language and currency controls are the header's: white pills with a
   round flag that open the same picker. No address and no SEO paragraph:
   the legal address is in the Impressum. */
function useWide(query) {
  const [wide, setWide] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia(query);
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on));
  }, [query]);
  return wide;
}

function Act({ item, className, children }) {
  if (item.href) return <a className={className} href={item.href} rel={item.rel}>{children}</a>;
  if (item.onClick) return <button type="button" className={className} onClick={item.onClick} aria-haspopup={item.haspopup}>{children}</button>;
  return <div className={className}>{children}</div>;
}

export function Footer({
  contact,
  columns = [],
  social,
  reviews,
  locale,
  payments,
  memberships,
  legalLinks = [],
  disclaimer,
  copyright = "© 2026 Digital Hive GmbH",
  backToTop = { label: "Nach oben", href: "#" },
  navLabel = "Fusszeile",
  className = "",
  ...rest
}) {
  const wide = useWide("(min-width: 992px)");
  const [open, setOpen] = React.useState({});
  const uid = React.useId();
  const toggle = (k) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  return (
    <footer className={["uw-footer", "on-dark", className].filter(Boolean).join(" ")} {...rest}>
      <div className="uw-footer__inner">
        <nav className="uw-footer__nav" aria-label={navLabel}>
          {contact ? (
            <div className="uw-footer__col uw-footer__contact">
              <h2 className="uw-footer__h">{contact.heading || "Kontakt"}</h2>
              <ul className="uw-footer__list">
                {contact.items.map((it) => (
                  <li key={it.label}>
                    <Act item={it} className={["uw-footer__row", it.onClick && "uw-footer__row--action"].filter(Boolean).join(" ")}>
                      {it.icon ? <Icon name={it.icon} size={20} /> : null}
                      <span>{it.label}</span>
                    </Act>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {columns.map((c, i) => {
            const id = uid + "-c" + i;
            const isOpen = wide || !!open[i];
            return (
              <div className="uw-footer__col" key={c.heading}>
                <h2 className="uw-footer__h">
                  {wide ? c.heading : (
                    <button type="button" className="uw-footer__toggle" aria-expanded={isOpen} aria-controls={id} onClick={() => toggle(i)}>
                      <span>{c.heading}</span>
                      <Icon name="chevron-down" size={20} />
                    </button>
                  )}
                </h2>
                <ul className="uw-footer__list" id={id} hidden={!isOpen}>
                  {c.links.map((l) => <li key={l.label}><a className="uw-footer__row" href={l.href}>{l.label}</a></li>)}
                </ul>
              </div>
            );
          })}
        </nav>

        <div className="uw-footer__mid">
          {social ? (
            <div className="uw-footer__social">
              <h2 className="uw-footer__h">{social.heading || "Folge uns"}</h2>
              <ul className="uw-footer__icons">
                {social.links.map((s) => (
                  <li key={s.network}>
                    <a className="uw-footer__soc" href={s.href} rel="nofollow noopener" aria-label={s.label}>
                      <Icon name={"brand-" + s.network} size={24} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {reviews ? (
            <div className="uw-footer__reviews">
              <h2 className="uw-footer__h">{reviews.heading || "Bewertungen"}</h2>
              {reviews.content}
            </div>
          ) : null}
          {locale ? (
            <div className="uw-footer__locale">
              <h2 className="uw-footer__h">{locale.heading || "Sprache und Währung"}</h2>
              <div className="uw-footer__pills">
                {locale.controls.map((p) => (
                  <button key={p.label} type="button" className="uw-footer__pill" aria-haspopup="listbox" aria-label={p.label + ": " + p.value} onClick={p.onClick}>
                    {p.flag ? <span className="uw-footer__flag" aria-hidden="true">{p.flag}</span> : null}
                    <span className="uw-footer__pill-text"><small>{p.label}</small>{p.value}</span>
                    <Icon name="chevron-down" size={16} />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {payments || memberships ? (
            <div className="uw-footer__trust">
              {payments ? (
                <div>
                  <h2 className="uw-footer__h">{payments.heading || "Sicher bezahlen"}</h2>
                  <ul className="uw-footer__chips">
                    {payments.methods.map((m) => (
                      <li key={m.label} className="uw-footer__chip">{m.src ? <img src={m.src} alt={m.label} /> : m.label}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {memberships ? (
                <div>
                  <h2 className="uw-footer__h">{memberships.heading || "Mitglied bei"}</h2>
                  <ul className="uw-footer__chips">
                    {memberships.items.map((m) => (
                      <li key={m.label}>
                        <a className="uw-footer__member" href={m.href} rel="nofollow noopener">{m.src ? <img src={m.src} alt={m.label} /> : m.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="uw-footer__bottom">
          <div className="uw-footer__brand">
            <span className="uw-footer__logo"><Logo color="white" width={120} decorative /></span>
            {legalLinks.length ? (
              <ul className="uw-footer__legal">
                {legalLinks.map((l) => <li key={l.label}><Act item={l}>{l.label}</Act></li>)}
              </ul>
            ) : null}
          </div>
          {disclaimer ? <p className="uw-footer__small uw-footer__disclaimer">{disclaimer}</p> : null}
          <div className="uw-footer__end">
            <p className="uw-footer__small">{copyright}</p>
            {backToTop ? (
              <a className="uw-footer__top" href={backToTop.href || "#"}>
                {backToTop.label || "Nach oben"}
                <Icon name="chevron-up" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
