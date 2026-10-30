import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";
import { Price } from "../core/Price.jsx";
import { QuantitySelector } from "../forms/QuantitySelector.jsx";

/* 16 · Cart drawer. The most internally consistent component on the site.
   Header and footer fixed, only the list scrolls — the checkout button is
   the point, so it never scrolls away.
   Item meta is the SIZE ONLY. Price per unit is a comparison aid and belongs
   where a choice is being made; in the cart the choice is made. */
export function CartDrawer({
  open = true,
  items = [],
  subtotal,
  onClose,
  onQuantityChange,
  onRemove,
  footerNote = "Versandkostenfrei ab 50 CHF · Rechnung, TWINT, Karte",
  checkoutLabel = "Zur Kasse",
  emptyCopy = "Noch nichts im Warenkorb.",
  children,
  className = "",
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const titleId = "uw-drawer-title";

  return (
    <>
      <div className="uw-drawer-backdrop" onClick={onClose} />
      <aside
        className={["uw-drawer", className].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="uw-drawer__head">
          <h2 className="uw-drawer__title" id={titleId}>Warenkorb ({items.length})</h2>
          <button type="button" className="uw-drawer__x" aria-label="Warenkorb schliessen" onClick={onClose}>
            <Icon name="x" size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="uw-drawer__empty">
            <Icon name="shopping-bag" size={32} style={{ color: "var(--medium-gray)" }} />
            <p style={{ margin: 0, fontSize: "var(--fs-small)" }}>{emptyCopy}</p>
            <Button variant="nav" href="/cbd-shop/">Zum Shop</Button>
          </div>
        ) : (
          <ul className="uw-drawer__list">
            {items.map((it) => (
              <li className="uw-drawer__item" key={it.id}>
                <img className="uw-drawer__thumb" src={it.image} alt="" width="64" height="64" />
                <div className="uw-drawer__body">
                  <p className="uw-drawer__name">{it.name}</p>
                  <p className="uw-drawer__meta">{it.size}</p>
                  <div className="uw-drawer__row">
                    <QuantitySelector
                      size="md"
                      value={it.qty}
                      removeAtOne
                      onChange={(n) => onQuantityChange?.(it.id, n)}
                      onRemove={() => onRemove?.(it.id)}
                    />
                    <Price role="list" value={it.price} sale={it.sale} was={it.was} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 ? (
          <div className="uw-drawer__foot">
            {children}
            <div className="uw-drawer__sub">
              <p className="uw-drawer__sub-label">Zwischensumme</p>
              <Price role="total" value={subtotal} aria-live="polite" />
            </div>
            <Button variant="buy" block href="/kasse/">{checkoutLabel}</Button>
            <p className="uw-drawer__note">{footerNote}</p>
          </div>
        ) : null}
      </aside>
    </>
  );
}
