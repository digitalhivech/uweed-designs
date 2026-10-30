import React from "react";

/* 13 · Stock status. One line of availability on a PDP.
   Low stock is the one place orange is not "earned recognition" — it is
   closer to urgency. Red would be worse: an alarm colour on a normal
   shopping state devalues real errors. */
export function StockStatus({ state = "in", children, pdp = false, className = "", ...rest }) {
  const cls = ["uw-stock", "uw-stock--" + state, pdp && "uw-stock--pdp", className]
    .filter(Boolean).join(" ");
  return (
    <p className={cls} {...rest}>
      <span className="uw-stock__dot" aria-hidden="true" />
      {children}
    </p>
  );
}
