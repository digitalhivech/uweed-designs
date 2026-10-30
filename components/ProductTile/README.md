Use `ProductTile` for every product in a listing, a carousel rail, or a related-products block. It is one component at two breakpoints — never build a separate mobile tile.

```jsx
<ProductTile brand="Harlequin" name="Harlequin CBD Blüten Indoor" size="3 g"
  cbd="15%" thc="0.7%" rating="4.8" reviewCount={212}
  price="17.00 CHF" was="20.00 CHF" unitPrice="5.67 CHF / g"
  sale bestseller isNew image="…" href="/p/harlequin/" onAdd={add} />

<ProductTile … sizes size="3 g" price="20.00 CHF" unitPrice="5.00 CHF / g" onChooseSize={openSizes} />
<ProductTile … soldOut />
<ProductTile … lang="fr" />
```

- **One link, one CTA.** The whole card navigates through a stretched anchor named by the product. No favourite control, no size `<select>` — several-sizes products get the `apply` CTA.
- Badges top-left in a row: priority sale › bestseller › new, max three (two on mobile), dropped from the right. Never focusable.
- Green carries the **brand line**, not the price. Tile prices are dark blue; reduced prices red.
- The unit price is a separate bracketed element in dark gray at 14px, not Price's inline unit. Both take the "from" format string on a several-sizes product.
- Sold out: flag badges go, the attribute chip stays (a fact, not a flag), a 60% light-gray film covers the **whole card** — dimming only the photo leaves the price and button reading as available. The CTA is `unavailable` reading "Ausverkauft" — no tooltip, no explanation line; the label is the statement. The icon form carries it as `aria-label` + `title`.
- The CTA is the standard 44px `Button`, full width on desktop and a 44×44 icon-only form on mobile. No tile-specific height.
- Below `md` exactly two things change: the chip drops THC and the review count drops its noun. Anything else that differs is a bug.
