Use `SearchBar` in the header and in the homepage banner.

```jsx
<SearchBar
  open
  groups={[
    { label: "Produkte", items: [{ label: "CBD Öl 20%", sub: "Vollspektrum · 10 ml", thumb: "…",
      meta: <Price role="list" sale value="44.10 CHF" was="49.00 CHF" /> }] },
    { label: "Marken", items: [{ label: "Sweed", meta: "24" }] },
  ]}
  seeAll={{ label: "Alle Ergebnisse anzeigen", href: "/suche/" }}
/>
```

- **Product rows carry the price on the right**, in the `meta` slot, drawn by `Price` with `role="list"`. A reduced price is red with the original struck through, as everywhere else. Category and brand rows carry their product count in the same slot. Never put the price in the `sub` line: the second line is for size and origin.

- Focus is the standard ring, the same as every other field: a 2px `medium-blue` outline at 2px offset. Never a wider border, which grows the box and shifts the page.
- Never animate the panel closed.
- Never medium-red for "no results". Nothing failed; red is reserved for a broken search endpoint.
- Two-character minimum, 250ms debounce, skeleton only after 150ms so fast responses never flash it.
- On mobile it becomes a full-screen overlay covering the site header, locking background scroll, closed by a 44px cross, Escape, or the back gesture.
