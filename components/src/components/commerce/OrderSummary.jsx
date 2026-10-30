import React from "react";

/* 15 · Order summary. A <dl>: each label is a <dt> paired with its <dd>, so a
   screen reader pairs them rather than reading twelve loose numbers.
   Numbers are right-aligned and tabular, so a total that changes does not
   shift the layout beside it.
   Discounts are red with an EXPLICIT minus — a red number without one reads
   as a surcharge. Never green: green is the purchase path, a saving is a
   reduction. */
export function OrderSummary({ rows = [], total, tax = "inkl. MwSt.", className = "", ...rest }) {
  return (
    <dl className={["uw-sum", className].filter(Boolean).join(" ")} {...rest}>
      {rows.map((r, i) => (
        <React.Fragment key={r.label + i}>
          <dt className={r.discount ? "uw-sum__discount" : undefined}>{r.label}</dt>
          <dd className={r.discount ? "uw-sum__discount" : undefined}>{r.value}</dd>
        </React.Fragment>
      ))}
      {total ? (
        <>
          <div className="uw-sum__rule" />
          <dt className="uw-sum__total">Gesamt</dt>
          <dd className="uw-sum__total" style={{ fontSize: "var(--fs-h5)", fontWeight: "var(--fw-bold)" }} aria-live="polite">{total}</dd>
          {tax ? <p className="uw-sum__tax">{tax}</p> : null}
        </>
      ) : null}
    </dl>
  );
}
