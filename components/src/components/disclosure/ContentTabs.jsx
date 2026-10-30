import React from "react";

/* 22 · Content tabs. PDP desktop tabs — vertical rail, panel to the right.
   Below --bs-breakpoint-lg it becomes the accordion, which is a separate
   component and not a responsive variant: arrow keys move between tabs and
   Tab moves into the panel, and the accordion has neither model.
   Active is --dark-blue: switching a panel does not advance a purchase.
   The marker is a rounded 3px bar spanning only the active label, on a track
   of the same shape in --line. */
export function ContentTabs({ tabs = [], defaultIndex = 0, className = "", ...rest }) {
  const [i, setI] = React.useState(defaultIndex);
  const refs = React.useRef([]);

  const onKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowDown" ? 1 : -1) + tabs.length) % tabs.length;
    setI(next);
    refs.current[next]?.focus();
  };

  return (
    <div className={["uw-tabs", className].filter(Boolean).join(" ")} {...rest}>
      <div className="uw-tabs__rail" role="tablist" aria-orientation="vertical" onKeyDown={onKeyDown}>
        {tabs.map((t, idx) => (
          <button
            key={t.label}
            ref={(el) => (refs.current[idx] = el)}
            className="uw-tabs__t"
            role="tab"
            type="button"
            aria-selected={idx === i}
            tabIndex={idx === i ? 0 : -1}
            onClick={() => setI(idx)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="uw-tabs__p" role="tabpanel">{tabs[i]?.content}</div>
    </div>
  );
}
