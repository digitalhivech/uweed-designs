import React from "react";

/* 12 · Tooltip. The trigger is a real <button>, and that is what makes mouse,
   keyboard AND touch all work — a <span> is not focusable, so keyboard and
   touch have nothing to act on. Shown on :focus rather than :focus-visible,
   deliberately: focus-visible does not fire on tap.
   The bubble is dark-blue because a tooltip is a SURFACE. Colour families
   mean things; containers do not. */
let uid = 0;

export function Tooltip({
  text,
  label = "Mehr Informationen",
  placement = "top",
  glyph = "i",
  children,
  className = "",
  ...rest
}) {
  const id = React.useMemo(() => "uw-tip-" + (++uid), []);
  const mod = { start: "uw-tip--start", end: "uw-tip--end", bottom: "uw-tip--below" }[placement];
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      const el = document.activeElement;
      if (el && el.classList.contains("uw-tip__trigger")) el.blur();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <span className={["uw-tip", mod, className].filter(Boolean).join(" ")} {...rest}>
      <button
        className={"uw-tip__trigger" + (children ? " uw-tip__trigger--text" : "")}
        type="button"
        aria-describedby={id}
      >
        {children || glyph}
        <span className="visually-hidden">{label}</span>
      </button>
      <span className="uw-tip__bubble" role="tooltip" id={id}>{text}</span>
    </span>
  );
}
