import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Accordion, AccordionItem } from "../disclosure/Accordion.jsx";

/* 38 · Filter panel. Below `lg` there is no room for the row of filter pills,
   so sorting and every filter move into this panel. It is opened by one
   filled blue Button with the filter icon and the number of filters in use.
   On a phone it covers the screen; from 480px it is a panel on the right
   with the page dimmed behind it, like the cart drawer.
   Sorting is its own block at the top, set apart by a grey band, because it
   reorders and does not narrow. Its list is the system's own rounded list,
   not the phone's built-in one.
   Each filter is a section that opens in place; several can be open at once.
   A closed section says what is chosen in it: the first two options by name,
   then "+3". Head and foot stay put and only the middle scrolls, so the
   button with the result is always in reach.
   The button is blue, never green: showing results is not buying. */
function chosenText(labels) {
  return labels.length > 2 ? labels.slice(0, 2).join(", ") + " +" + (labels.length - 2) : labels.join(", ");
}
/* An option is a string or { label, value?, count? }; the label doubles as the value. */
const asOption = (o) => (typeof o === "string" ? { value: o, label: o } : { ...o, value: o.value ?? o.label });

export function FilterPanel({
  open = true,
  title = "Filter & Sortierung",
  sortLabel = "Sortieren nach",
  sorts = [],
  sort,
  onSortChange,
  filterLabel = "Filtern nach",
  facets = [],
  applied = {},
  onToggle,
  defaultOpen,
  resultLabel,
  resetLabel = "Zurücksetzen",
  onReset,
  closeLabel = "Schliessen",
  onClose,
  className = "",
}) {
  const [sortOpen, setSortOpen] = React.useState(false);
  const uid = React.useId();
  const sortRef = React.useRef(null);
  const sortBtnRef = React.useRef(null);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (sortOpen) { setSortOpen(false); sortBtnRef.current?.focus(); } else onClose?.();
    };
    const onDown = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, sortOpen, onClose]);

  React.useEffect(() => {
    if (sortOpen) listRef.current?.querySelector('[aria-selected="true"]')?.focus();
  }, [sortOpen]);

  if (!open) return null;

  const sortOptions = sorts.map(asOption);
  const current = sortOptions.find((o) => o.value === sort) || sortOptions[0];
  const openIds = [].concat(defaultOpen || []);
  const pick = (value) => {
    onSortChange?.(value);
    setSortOpen(false);
    sortBtnRef.current?.focus();
  };
  const onListKey = (e) => {
    const items = Array.from(listRef.current?.querySelectorAll('[role="option"]') || []);
    const i = items.indexOf(document.activeElement);
    const to = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: items.length - 1 }[e.key];
    if (to == null) return;
    e.preventDefault();
    items[Math.max(0, Math.min(items.length - 1, to))]?.focus();
  };

  return (
    <>
      <div className="uw-fpanel-backdrop" onClick={onClose} />
      <aside
        className={["uw-fpanel", className].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={uid + "t"}
      >
        <div className="uw-fpanel__head">
          <h2 className="uw-fpanel__title" id={uid + "t"}>{title}</h2>
          <button type="button" className="uw-fpanel__x" aria-label={closeLabel} onClick={onClose}>
            <Icon name="x" size={24} />
          </button>
        </div>

        <div className="uw-fpanel__body">
          {sortOptions.length ? (
            <div className={"uw-fpanel__sort" + (sortOpen ? " is-open" : "")} ref={sortRef}>
              <span className="uw-fpanel__label" id={uid + "s"}>{sortLabel}</span>
              <div className="uw-select">
                <button
                  type="button"
                  ref={sortBtnRef}
                  className="uw-select__control"
                  aria-haspopup="listbox"
                  aria-expanded={sortOpen ? "true" : "false"}
                  aria-labelledby={uid + "s " + uid + "v"}
                  onClick={() => setSortOpen(!sortOpen)}
                >
                  <span id={uid + "v"}>{current?.label}</span>
                </button>
                <Icon name="chevron-down" size={16} className="uw-select__chevron" />
              </div>
              {sortOpen ? (
                <div className="uw-select__panel" role="listbox" aria-labelledby={uid + "s"} ref={listRef} onKeyDown={onListKey}>
                  {sortOptions.map((o) => (
                    <button
                      type="button"
                      key={o.value}
                      className="uw-select__option"
                      role="option"
                      aria-selected={o.value === current?.value ? "true" : "false"}
                      onClick={() => pick(o.value)}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {sortOptions.length && facets.length ? <div className="uw-fpanel__band" /> : null}

          {facets.length ? (
            <>
              <span className="uw-fpanel__label">{filterLabel}</span>
              <Accordion className="uw-acc--filter">
                {facets.map((f) => {
                  const options = f.options.map(asOption);
                  const chosen = applied[f.id] || [];
                  const names = options.filter((o) => chosen.includes(o.value)).map((o) => o.label);
                  return (
                    <AccordionItem
                      key={f.id}
                      headingLevel={3}
                      open={openIds.includes(f.id)}
                      heading={
                        <>
                          <span className="uw-fpanel__name">{f.label}</span>
                          {names.length ? <span className="uw-fpanel__chosen">{chosenText(names)}</span> : null}
                        </>
                      }
                    >
                      {options.map((o) => {
                        const checked = chosen.includes(o.value);
                        return (
                          <Checkbox
                            key={o.value}
                            label={o.label}
                            count={o.count}
                            checked={checked}
                            disabled={o.count === 0 && !checked}
                            onChange={() => onToggle?.(f.id, o.value)}
                          />
                        );
                      })}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </>
          ) : null}
        </div>

        <div className="uw-fpanel__foot">
          {onReset ? (
            <button type="button" className="uw-link uw-link--action uw-fpanel__reset" onClick={onReset}>{resetLabel}</button>
          ) : null}
          <Button variant="nav" onClick={onClose}>{resultLabel}</Button>
        </div>
      </aside>
    </>
  );
}
