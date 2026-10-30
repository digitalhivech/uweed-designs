import React from "react";
import { Button } from "../core/Button.jsx";
import { Input } from "./Input.jsx";
import { Badge } from "../core/Badge.jsx";

/* 28 · Coupon form. Collapsed by default, everywhere — an open coupon field
   is an invitation to leave and go hunting for a code.
   The apply button is green family but OUTLINE: one filled green per step,
   and that green is already spoken for by "Zur Kasse". */
export function CouponForm({
  triggerLabel = "Gutscheincode eingeben",
  placeholder = "Code",
  applyLabel = "Anwenden",
  applied,
  onApply,
  onRemove,
  defaultOpen = false,
  className = "",
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [code, setCode] = React.useState("");

  if (applied) {
    return (
      <div className={className}>
        <Badge variant="attribute" onRemove={onRemove} removeLabel={"Gutschein " + applied.code + " entfernen"}
          style={{ background: "var(--light-green)", color: "var(--dark-green)" }}>
          {applied.code} · {applied.amount}
        </Badge>
      </div>
    );
  }

  return (
    <div className={className}>
      {open ? (
        <div className="uw-coupon">
          <Input aria-label="Gutscheincode" placeholder={placeholder} value={code}
            onChange={(e) => setCode(e.target.value)} />
          <Button variant="apply" onClick={() => onApply?.(code)}>{applyLabel}</Button>
        </div>
      ) : (
        <Button variant="outline" aria-expanded="false" onClick={() => setOpen(true)}>{triggerLabel}</Button>
      )}
    </div>
  );
}
