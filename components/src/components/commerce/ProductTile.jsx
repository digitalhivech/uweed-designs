import React from "react";
import { Card } from "../core/Card.jsx";
import { Badge } from "../core/Badge.jsx";
import { Price, formatFrom, FROM_FORMATS } from "../core/Price.jsx";
import { Button } from "../core/Button.jsx";
import { Icon } from "../core/Icon.jsx";

/* Product tile — signed off. Built on Card --link. ONE link per tile, the
   whole card navigates, the accessible name is the product name; the focus
   ring is drawn on the card boundary, not on the stretched anchor.
   One component at two breakpoints: below md it becomes a horizontal row.
   Exactly two things change between them — the chip drops THC, the review
   count drops its noun. Content order, states, badge priority, tokens and
   DOM order are identical.
   All four states are driven by product data; none is a template variant.
   Sold out: the unavailable label IS the statement — no tooltip, no
   explanation line (ruling amended). */

const STRINGS = {
  de: { add: "In den Warenkorb", chooseSize: "Grösse wählen", chooseSizeA11y: "Grösse wählen und in den Warenkorb", soldOut: "Ausverkauft", from: FROM_FORMATS.de, reviews: "(%d Bewertungen)", reviewsCompact: "(%d)", badgeNew: "Neu", badgeBestseller: "Bestseller" },
  fr: { add: "Ajouter au panier", chooseSize: "Choisir la taille", chooseSizeA11y: "Choisir la taille et ajouter au panier", soldOut: "Épuisé", from: FROM_FORMATS.fr, reviews: "(%d avis)", reviewsCompact: "(%d)", badgeNew: "Nouveau", badgeBestseller: "Bestseller" },
  en: { add: "Add to cart", chooseSize: "Choose size", chooseSizeA11y: "Choose size and add to cart", soldOut: "Sold out", from: FROM_FORMATS.en, reviews: "(%d reviews)", reviewsCompact: "(%d)", badgeNew: "New", badgeBestseller: "Bestseller" },
};
export const PRODUCT_TILE_STRINGS = STRINGS;

const BADGE_PRIORITY = ["sale", "bestseller", "new"];

function Star({ size }) {
  return <Icon name="star-filled" size={size} className="uw-tile__star" />;
}

export function ProductTile({
  href = "#",
  image,
  brand,
  name,
  size,
  sizes = false,
  cbd,
  thc,
  rating,
  reviewCount,
  price,
  was,
  unitPrice,
  soldOut = false,
  sale = false,
  bestseller = false,
  isNew = false,
  lang = "de",
  layout,
  saleLabel,
  onAdd,
  onChooseSize,
  onNavigate,
  className = "",
  ...rest
}) {
  const t = STRINGS[lang] || STRINGS.de;

  const flags = soldOut ? [] : BADGE_PRIORITY.filter((k) =>
    k === "sale" ? sale : k === "bestseller" ? bestseller : isNew
  );
  const badgeFor = (k) =>
    k === "sale" ? <Badge key="sale" variant="sale">{saleLabel || "−15%"}</Badge>
    : k === "bestseller" ? <Badge key="best" variant="bestseller">{t.badgeBestseller}</Badge>
    : <Badge key="new" variant="new">{t.badgeNew}</Badge>;

  const [fromPre, sizeVal, fromPost] = formatFrom(t.from, size);
  const sizeText = sizes ? <>{fromPre}{sizeVal}{fromPost}</> : size;
  const reviews = (tpl) => tpl.replace("%d", String(reviewCount));
  const unitText = (compact) => {
    const [pre, v, post] = sizes ? formatFrom(t.from, unitPrice) : ["", unitPrice, ""];
    return <>({pre}{v}{post})</>;
  };

  const cta = soldOut ? "unavailable" : sizes ? "apply" : "buy";
  const ctaLabel = soldOut ? t.soldOut : sizes ? t.chooseSize : t.add;
  const ctaA11y = soldOut ? t.soldOut : sizes ? t.chooseSizeA11y : t.add;
  const ctaProps = {
    "aria-haspopup": sizes && !soldOut ? "dialog" : undefined,
    onClick: soldOut ? undefined : (e) => { e.preventDefault(); (sizes ? onChooseSize : onAdd)?.(); },
  };

  return (
    <Card
      as="article"
      variant="link"
      className={["uw-tile", layout === "compact" && "uw-tile--compact", soldOut && "is-oos", className].filter(Boolean).join(" ")}
      data-layout={layout}
      {...rest}
    >
      <div className="uw-tile__row">
        <div className="uw-tile__media">
          <img src={image} alt="" width="344" height="330" loading="lazy" />
          {flags.length ? <div className="uw-tile__badges">{flags.map(badgeFor)}</div> : null}
          <div className="uw-tile__chips uw-tile__chips--media">
            <Badge variant="attribute">CBD {cbd}</Badge>
          </div>
        </div>

        <div className="uw-tile__body">
          <p className="uw-tile__brand">{brand}</p>
          <h3 className="uw-tile__name">
            <a className="uw-tile__link" href={href} onClick={onNavigate}>{name} — {sizeText}</a>
          </h3>
          <div className="uw-tile__chips uw-tile__chips--body">
            <Badge variant="attribute">CBD {cbd} · THC {thc}</Badge>
          </div>
          {rating != null ? (
            <p className="uw-tile__rating">
              <Star size={14} />
              <strong>{rating}</strong>
              <span className="uw-tile__count uw-tile__count--full">{reviews(t.reviews)}</span>
              <span className="uw-tile__count uw-tile__count--compact">{reviews(t.reviewsCompact)}</span>
            </p>
          ) : null}

          <div className="uw-tile__pricing">
            <div className="uw-tile__price-row">
              <div className="uw-tile__price-stack">
                <Price role="tile" value={price} was={was} sale={sale && !soldOut} from={sizes} fromTemplate={t.from} style={{ whiteSpace: "nowrap" }} />
                <span className="uw-tile__unit">{unitText()}</span>
              </div>
              <div className="uw-tile__cta uw-tile__cta--icon">
                <Button variant={cta} iconOnly icon={soldOut ? "x" : "shopping-cart"} aria-label={ctaA11y} title={soldOut ? ctaA11y : undefined} {...ctaProps} />
              </div>
            </div>
            <div className="uw-tile__cta uw-tile__cta--full">
              <Button variant={cta} block {...ctaProps}>{ctaLabel}</Button>
            </div>
          </div>
        </div>
      </div>
      {soldOut ? <div className="uw-tile__film" aria-hidden="true" /> : null}
    </Card>
  );
}
