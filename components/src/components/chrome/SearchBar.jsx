import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Popover, PopoverItem, PopoverGroup } from "../disclosure/Popover.jsx";

/* 34 · Search bar. Header search and its suggestion panel.
   The panel uses the dropdown surface and its rules: hover is the only
   fill, matched terms are dark-blue at bold weight in otherwise dark-gray
   rows. Panel close is deliberately INSTANT — an exit animation on something
   you dismissed makes the interface feel slower than it is.
   Input is 16px so iOS does not zoom; enterkeyhint="search". */
export function SearchBar({
  placeholder = "Suchen nach Produkten, Marken, Kategorien",
  value,
  onChange,
  onClear,
  groups = [],
  seeAll,
  open = false,
  label = "Website durchsuchen",
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState("");
  const q = value ?? internal;
  const set = (v) => { if (value == null) setInternal(v); onChange?.(v); };

  return (
    <div className={["uw-search", className].filter(Boolean).join(" ")} {...rest}>
      <span className="uw-search__ic" aria-hidden="true"><Icon name="search" size={20} /></span>
      <input
        className="uw-search__field"
        type="search"
        role="combobox"
        aria-expanded={open ? "true" : "false"}
        aria-label={label}
        enterKeyHint="search"
        placeholder={placeholder}
        value={q}
        onChange={(e) => set(e.target.value)}
      />
      {q ? (
        <button type="button" className="uw-search__x" aria-label="Suche leeren"
          onClick={() => { set(""); onClear?.(); }}>
          <Icon name="x" size={16} />
        </button>
      ) : null}

      {open && groups.length ? (
        <Popover behaviour="listbox" label="Suchvorschläge" className="uw-search__panel">
          {groups.map((g) => (
            <React.Fragment key={g.label}>
              <PopoverGroup>{g.label}</PopoverGroup>
              {g.items.map((it) => (
                <PopoverItem key={it.label} thumb={it.thumb} sub={it.sub} meta={it.meta} href={it.href}>
                  {it.label}
                </PopoverItem>
              ))}
            </React.Fragment>
          ))}
          {seeAll ? <PopoverItem href={seeAll.href}>{seeAll.label}</PopoverItem> : null}
        </Popover>
      ) : null}
    </div>
  );
}
