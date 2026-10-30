Use `FilterPill` for every facet trigger — one per facet, always visible. Sort is `SortButton`, not a pill.

```jsx
<FilterPill>Marke</FilterPill>
<FilterPill active count={2}>Marke</FilterPill>
<FilterPill open>CBD-Gehalt</FilterPill>
<FilterPill disabled>Herkunft</FilterPill>
```

- Rest is **white** with a hairline, not grey. Grey means unavailable, and an unapplied filter must not look like one with no options.
- Never fill an active pill with green. Hover on both rest and applied is --light-blue fill with --dark-blue text.
- The applied count lives in the label — "Marke (2)" — not in a badge.
- The panel it opens holds `Checkbox` rows ("Alpinols (8)", 32px), not `PopoverItem` rows, and has no footer.
- There is no "Show filters" toggle on desktop. Below `lg` the pills and the sort control are replaced by one filled blue `Button` (`nav`, `filter` icon, "Filter & Sortierung (3)") that opens `FilterPanel`.
- The row around it follows *saturated on controls, tint on labels*: the applied pill takes the fill, the chip listing that filter below the row stays a light-gray `Badge` with a red-on-hover remove, and "Alle zurücksetzen" is a `Link variant="action"`.
