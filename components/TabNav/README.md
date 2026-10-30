Use `TabNav` for one axis of category filtering above a grid or a rail.

```jsx
<TabNav
  label="Produktkategorien"
  items={[
    { label: "Alle Produkte", href: "/cbd-oel/", active: true },
    { label: "CBD Öl 5%", href: "/cbd-oel/5-prozent/" },
    { label: "CBD Öl 10%", href: "/cbd-oel/10-prozent/" },
  ]}
/>
```

- Active is dark blue, never green (confirmed October 2026) — the live green implementation is a known defect: a stray `.subcategory-item.active` rule sat outside its block and beat the correct rule on source order.
- 16px labels — it is the page's primary navigation, one level above the 14px filter controls.
- No continuous rule under the row and no hairline between the tabs and the filter row (24px gap only). The active marker is a 3px pill-radius bar that hugs the text; a full-width grey bar makes the row read as a section boundary and fights the grid below it.
- Scrolls horizontally below `lg` with the scrollbar hidden. Desktop arrows are progressive enhancement — the row must scroll by touch and keyboard without them.
