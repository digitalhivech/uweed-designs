import React from "react";
import { Icon } from "../core/Icon.jsx";

/* 31 · Carousel. Native CSS scroll-snap — no library. Native momentum, native
   keyboard, works before JS loads, and 156KB out of the bundle.
   The trade-off is loop and autoplay, which nothing here needs.
   The progress bar is measured from SCROLL POSITION, not slide index: a card
   wider than the per-view fraction never centres, so an index tops out early
   and the fill stops short of the track end.
   6px, not 3px — at 3px it reads as a hairline; at 6px it reads as a control. */
export function Carousel({ children, label, itemWidth, className = "", ...rest }) {
  const trackRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const measure = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const span = el.scrollWidth - el.clientWidth;
    const p = span > 0 ? el.scrollLeft / span : 1;
    setProgress(p);
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(span <= 1 || el.scrollLeft >= span - 1);
  }, []);

  React.useEffect(() => { measure(); }, [measure, children]);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <div className={["uw-car", className].filter(Boolean).join(" ")} {...rest}>
      <ul className="uw-car__track" ref={trackRef} onScroll={measure} aria-label={label} tabIndex={0}>
        {React.Children.map(children, (child, i) => (
          <li className="uw-car__item" key={i} style={itemWidth ? { width: itemWidth } : undefined}>{child}</li>
        ))}
      </ul>
      <div className="uw-car__foot">
        <button type="button" className="uw-car__b" aria-label="Zurück"
          aria-disabled={atStart ? "true" : undefined} onClick={() => nudge(-1)}>
          <Icon name="chevron-left" size={24} />
        </button>
        <div className="uw-car__bar">
          <div className="uw-car__thumb" style={{ width: Math.max(12, progress * 100) + "%" }} />
        </div>
        <button type="button" className="uw-car__b" aria-label="Weiter"
          aria-disabled={atEnd ? "true" : undefined} onClick={() => nudge(1)}>
          <Icon name="chevron-right" size={24} />
        </button>
      </div>
    </div>
  );
}
