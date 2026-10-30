import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Badge } from "../core/Badge.jsx";

/* 33 · PDP gallery. The WHOLE image is the control — a <button> wrapping the
   <img>, cursor:zoom-in, opening the lightbox on click or tap. One target the
   size of the image rather than a 40px button, and one behaviour instead of
   two. The zoom glyph stays as a hint with pointer-events:none; without it
   nothing signals the image is interactive.
   The hover lens is removed: two zoom behaviours on one image, one of which
   has no touch equivalent, means most visitors never learn it exists.
   Full-resolution images load ON OPEN, never on page load. */
export function PdpGallery({
  images = [],
  tags = [],
  saved = false,
  onToggleSave,
  onZoom,
  className = "",
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const main = images[i] || {};

  return (
    <div className={["uw-gal", className].filter(Boolean).join(" ")} {...rest}>
      <button type="button" className="uw-gal__main" aria-label="Bild vergrössern" onClick={onZoom}>
        <img src={main.src} alt="" width="600" height="600" />
        <span className="uw-gal__tags">
          {tags.map((t) => <Badge key={t.label} variant={t.variant}>{t.label}</Badge>)}
        </span>
        <span className="uw-gal__hint" aria-hidden="true"><Icon name="zoom-in" size={24} /></span>
      </button>

      <button
        type="button"
        className="uw-gal__fav"
        aria-pressed={saved ? "true" : "false"}
        aria-label={saved ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
        onClick={onToggleSave}
      >
        <Icon name="heart" size={24} />
      </button>

      <ul className="uw-gal__strip" aria-label="Produktbilder">
        {images.map((img, idx) => (
          <li key={img.src || idx} style={{ display: "contents" }}>
            <button
              type="button"
              className="uw-gal__t"
              aria-current={idx === i ? "true" : undefined}
              aria-label={"Bild " + (idx + 1) + " von " + images.length}
              onClick={() => setI(idx)}
            >
              <img src={img.src} alt="" width="76" height="76" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
