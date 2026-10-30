import React from "react";
import { Modal } from "./Modal.jsx";
import { Button } from "../core/Button.jsx";
import { Logo } from "../core/Logo.jsx";

/* 32 · Age gate. Not its own component — the modal with a --blocking variant.
   No close, Escape does nothing, and there is nothing to return focus to:
   there was no trigger, and the page behind has not been seen.
   The brand MARK from the logo kit, not the full logo and never an icon
   standing in for it; no disc behind it, the kit forbids a background box.
   Neither answer is pre-focused — a legally
   meaningful confirmation should not be one stray Enter away. */
export function AgeGate({
  question = "Bist du 18 Jahre oder älter?",
  body,
  legal = "Mit dem Bestätigen erklärst du, dass du das gesetzliche Mindestalter erreicht hast.",
  yesLabel = "Ja, ich bin 18+",
  noLabel = "Nein",
  onYes,
  onNo,
  open = true,
}) {
  return (
    <Modal
      open={open}
      blocking
      className="uw-gate"
      footer={<>
        <Button variant="buy" onClick={onYes}>{yesLabel}</Button>
        <Button variant="outline" onClick={onNo}>{noLabel}</Button>
      </>}
    >
      <div className="uw-gate__mark" aria-hidden="true"><Logo variant="mark" color="dark-blue" width={56} decorative /></div>
      <p className="uw-gate__q">{question}</p>
      {body ? <p>{body}</p> : null}
      <p className="uw-gate__legal">{legal}</p>
    </Modal>
  );
}
