Use `Card` as the shared surface under tiles, panels and grouped blocks — not usually as a component you place by itself.

```jsx
<Card style={{ padding: "var(--space-m)" }}>Stadt-Tile, Team-Karte, Review</Card>
<Card variant="link">Ganze Karte navigiert</Card>
<Card variant="flat">Karte innerhalb eines Containers</Card>
<Card variant="tint">Gruppierung — Bestellübersicht, Sidebar</Card>
```

- Only `link` lifts, and the lift always pairs with a shadow step up.
- Don't add a fifth variant: if a surface needs something else it is a component, not a card.
- Cards are 16px. There is no 20/30/40/50px radius anywhere in this system.
- **Which version where** (decided November 2026):
  - `link`: product tiles, city cards, blog cards (white, not grey) and category tiles.
  - `tint`: the category intro panel, the cart totals, the reassurance boxes on product pages.
  - `default` and `flat`: no fixed use yet; a box with content but no link of its own, and a box inside another surface.
- **Category tiles are white link cards**: the square category picture, whole, with the name below (*Imagery* in the README). The homepage tiles and the category rails use this one tile. No pastel grounds and no 20px corners.
- **No colour by range yet.** Range colours on category tiles (a band, a border or a tinted name strip) are parked until the other ranges launch; until then every card is white or light grey.
