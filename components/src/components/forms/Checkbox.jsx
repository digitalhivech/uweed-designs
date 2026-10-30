import React from "react";

/* 4 · Checkbox. appearance:none on the real input, so the control and its box
   stay one node and it never leaves the focus order. The whole LABEL is the
   44px hit area — a 20px box is far below the minimum.
   The tick is a clip-path glyph, so no icon font or SVG is needed. */
export function Checkbox({
  label,
  count,
  indeterminate = false,
  className = "",
  labelProps,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const cls = ["uw-check", count != null && "uw-check--count", className].filter(Boolean).join(" ");
  return (
    <label className={cls} {...labelProps}>
      <input ref={ref} className="uw-check__input" type="checkbox" {...rest} />
      <span className="uw-check__label">{label}</span>
      {count != null ? <span className="uw-check__count">{count}</span> : null}
    </label>
  );
}
