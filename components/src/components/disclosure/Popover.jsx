import React from "react";

/* 10 · Dropdown. One surface, three behaviours — menu (navigates, plain
   links, no role="menu"), panel (changes the view, disclosure keyboard), and
   listbox (picks a value, full combobox). Forcing one pattern onto all three
   would break at least two.
   Width 260–360px: one product-grid column at every desktop container, so it
   reads as aligned to the grid without being coupled to it. */
export function Popover({ behaviour = "menu", label, children, className = "", style, ...rest }) {
  const role = behaviour === "listbox" ? "listbox" : behaviour === "menu" ? "none" : undefined;
  return (
    <div className={["uw-pop", className].filter(Boolean).join(" ")} role={role}
         aria-label={label} style={style} {...rest}>
      {children}
    </div>
  );
}

export function PopoverItem({
  as,
  href,
  selected,
  current = false,
  active = false,
  meta,
  sub,
  thumb,
  children,
  className = "",
  ...rest
}) {
  const Tag = as || (href ? "a" : "div");
  const cls = ["uw-pop__item", active && "is-active", className].filter(Boolean).join(" ");
  return (
    <Tag
      className={cls}
      href={href}
      role={selected != null ? "option" : undefined}
      aria-selected={selected != null ? String(selected) : undefined}
      aria-current={current ? "page" : undefined}
      {...rest}
    >
      {thumb ? <img className="uw-pop__thumb" src={thumb} alt="" width="36" height="36" /> : null}
      <span style={{ minWidth: 0 }}>
        {children}
        {sub ? <span className="uw-pop__sub">{sub}</span> : null}
      </span>
      {meta != null ? <span className="uw-pop__meta">{meta}</span> : null}
    </Tag>
  );
}

export function PopoverGroup({ children }) {
  return <div className="uw-pop__group">{children}</div>;
}
export function PopoverSeparator() {
  return <div className="uw-pop__sep" />;
}
export function PopoverFooter({ children }) {
  return <div className="uw-pop__foot">{children}</div>;
}
