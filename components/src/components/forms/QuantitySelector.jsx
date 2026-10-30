import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 19 · Quantity selector. A stepper, not a dropdown: one tap from 1 to 2,
   no maximum to maintain, and the value stays a real input so someone
   buying twelve can type it.
   sm is 32px and therefore READ-ONLY — it is below the tap minimum, so it
   displays a quantity in the order review rather than editing one. */
export function QuantitySelector({
  size = "md",
  value,
  min = 1,
  max,
  removeAtOne = false,
  onChange,
  onRemove,
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState(value ?? min);
  const qty = value ?? internal;
  const set = (n) => {
    const next = Math.max(min, max ? Math.min(max, n) : n);
    if (value == null) setInternal(next);
    onChange?.(next);
  };
  const isRemove = removeAtOne && qty <= min;
  const readOnly = size === "sm";

  return (
    <div className={["uw-qty", "uw-qty--" + size, className].filter(Boolean).join(" ")} {...rest}>
      {readOnly ? null : (
        <button
          type="button"
          className={"uw-qty__down" + (isRemove ? " is-remove" : "")}
          aria-label={isRemove ? "Artikel entfernen" : "Menge verringern"}
          disabled={!isRemove && qty <= min}
          onClick={() => (isRemove ? onRemove?.() : set(qty - 1))}
        >
          {isRemove ? <Icon name="trash" size={16} /> : <Icon name="minus" size={16} />}
        </button>
      )}
      <input
        className="uw-qty__value"
        type="text"
        inputMode="numeric"
        aria-label="Menge"
        value={qty}
        readOnly={readOnly}
        onChange={(e) => {
          const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
          if (!Number.isNaN(n)) set(n);
        }}
      />
      {readOnly ? null : (
        <button
          type="button"
          className="uw-qty__up"
          aria-label="Menge erhöhen"
          disabled={max != null && qty >= max}
          onClick={() => set(qty + 1)}
        >
          <Icon name="plus" size={16} />
        </button>
      )}
    </div>
  );
}
