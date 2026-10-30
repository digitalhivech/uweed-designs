import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 3 · Select. Native by default — the OS picker beats anything we can build
   on touch, is keyboard accessible for free, and does not break under
   assistive tech. Matches Input exactly except for the chevron.
   The chevron is decorative and must not receive pointer events. */
export function Select({ options = [], children, className = "", ...rest }) {
  return (
    <div className={["uw-select", className].filter(Boolean).join(" ")}>
      <select className="uw-select__control" {...rest}>
        {children ?? options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <Icon name="chevron-down" size={16} className="uw-select__chevron" />
    </div>
  );
}
