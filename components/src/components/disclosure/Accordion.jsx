import React from "react";

/* 9 · Accordion. <details>/<summary> — no JavaScript, and it brings four
   things with it: aria-expanded announced by the browser, the panel correctly
   exposed and hidden, find-in-page reaching closed panels and opening them,
   and working before JS loads.
   The heading goes INSIDE the summary. <h3><summary> is invalid: the browser
   cannot find a summary as the first child of <details>, generates its own
   marker, and the intended trigger becomes panel content. */
export function Accordion({ variant = "flush", children, className = "", ...rest }) {
  const cls = ["uw-acc", variant === "boxed" && "uw-acc--boxed", className].filter(Boolean).join(" ");
  return <div className={cls} {...rest}>{children}</div>;
}

export function AccordionItem({
  heading,
  headingLevel = 3,
  open = false,
  children,
  className = "",
  ...rest
}) {
  const H = headingLevel === 0 ? "span" : "h" + headingLevel;
  return (
    <details className={["uw-acc__item", className].filter(Boolean).join(" ")} open={open} {...rest}>
      <summary className="uw-acc__trigger">
        <H className="uw-acc__heading">{heading}</H>
      </summary>
      <div className="uw-acc__panel">{children}</div>
    </details>
  );
}
