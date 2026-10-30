import React from "react";

/* 18 · Price. All prices are --dark-blue except when reduced. A price is not
   an action — nothing happens when you look at it — so it is never green.
   The base class carries colour and tabular numerals; roles set size and
   weight only, so neither invariant can be forgotten by a fifth role.
   The "from" prefix is a FORMAT STRING with a placeholder, never a
   concatenation — DE and FR both prefix today; a later language may not. */
export const FROM_FORMATS = { de: "ab {x}", fr: "dès {x}", en: "from {x}" };

/* Accepts "{x}" (canonical) or "%s" as the placeholder. */
export function formatFrom(template, value) {
  const t = template || "{x}";
  const ph = t.includes("{x}") ? "{x}" : "%s";
  const i = t.indexOf(ph);
  if (i < 0) return [t, value, ""];
  return [t.slice(0, i), value, t.slice(i + ph.length)];
}

export function Price({
  role = "tile",
  value,
  was,
  unit,
  sale = false,
  from = false,
  fromTemplate = FROM_FORMATS.de,
  as = "p",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["uw-price", "uw-price--" + role, sale && "is-sale", className]
    .filter(Boolean).join(" ");
  const wrap = (v) => {
    if (!from) return v;
    const [pre, val, post] = formatFrom(fromTemplate, v);
    return <>{pre ? <span className="uw-price__from">{pre}</span> : null}{val}{post ? <span className="uw-price__from">{post}</span> : null}</>;
  };
  return (
    <Tag className={cls} {...rest}>
      {wrap(value ?? children)}
      {was ? <s className="uw-price__was">{was}</s> : null}
      {unit ? <span className="uw-price__unit">{wrap(unit)}</span> : null}
    </Tag>
  );
}
