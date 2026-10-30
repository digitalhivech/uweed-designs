import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 26 · Modal. Rarely — a modal interrupts, and most things that reach for one
   are better as a page, a panel or an inline message. It is right for a
   destructive confirmation, a required choice, and little else.
   The destructive action is red and is NOT the default focus: on open, focus
   lands on cancel — the safe one. */
export function Modal({
  title,
  open = true,
  blocking = false,
  onClose,
  footer,
  children,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open || blocking) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, blocking, onClose]);
  React.useEffect(() => {
    if (open) ref.current?.querySelector("[data-autofocus]")?.focus();
  }, [open]);

  if (!open) return null;
  const titleId = "uw-modal-title";

  return (
    <div className="uw-modal-backdrop" onClick={blocking ? undefined : (e) => {
      if (e.target === e.currentTarget) onClose?.();
    }}>
      <div
        ref={ref}
        className={["uw-modal", blocking && "uw-modal--blocking", className].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        {...rest}
      >
        {title && !blocking ? (
          <div className="uw-modal__head">
            <h2 className="uw-modal__title" id={titleId}>{title}</h2>
            <button type="button" className="uw-modal__x" aria-label="Schliessen" onClick={onClose}>
              <Icon name="x" size={20} />
            </button>
          </div>
        ) : null}
        <div className="uw-modal__body">{children}</div>
        {footer ? <div className="uw-modal__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
