Use `FilterPanel` for filtering and sorting a product listing below `lg`, where the row of filter pills has no room. From `lg` up, use `FilterPill` and `SortButton`.

```jsx
<Button variant="nav" icon="filter" onClick={() => setOpen(true)}>Filter & Sortierung (3)</Button>

<FilterPanel
  open={open}
  sorts={["Beliebtheit", "Preis aufsteigend", "Preis absteigend", "Neuheiten"]}
  sort={sort}
  onSortChange={setSort}
  facets={[
    { id: "brand", label: "Marke", options: [{ label: "Harlequin", count: 8 }, { label: "Sweed", count: 5 }] },
    { id: "cbd", label: "CBD-Gehalt", options: [{ label: "15 – 20%", count: 16 }] },
  ]}
  applied={{ brand: ["Harlequin", "Sweed"] }}
  onToggle={(facetId, value) => toggle(facetId, value)}
  defaultOpen="brand"
  resultLabel="13 Produkte zeigen"
  onReset={() => resetAll()}
  onClose={() => setOpen(false)}
/>
```

- **One filled blue button opens it:** `Button variant="nav"` with the `filter` icon, the words "Filter & Sortierung" and the number of options in use in brackets. Never an icon alone, never the outline button, never green.
- **The chosen options stay visible in the listing** as removable `Badge` tags with "Alle Filter zurücksetzen" beside them. The number on the button is not enough on its own.
- **Full screen on a phone.** From 480px it is a panel on the right with the page dimmed behind it, like the cart drawer. Head and foot stay put; only the middle scrolls.
- **Sorting is its own block at the top,** set apart by a grey band, because it reorders the list and does not narrow it. Its list is the system's own rounded list with a tick on the current choice, not the phone's built-in one.
- **"Sortieren nach" and "Filtern nach" are the same small label.** The filter names under them are the strongest text in the panel.
- **Each filter opens in place,** with a thin line between filters. Several can be open at once. Open the most used one with `defaultOpen`.
- **A closed filter says what is chosen in it:** the first two options by name, then "+3". If even two names do not fit they end in "…".
- **Every option shows its product count,** in grey. An option with no products is greyed out unless it is ticked. Tick rows are 44px high.
- **The foot: reset left, result right.** The blue button says how many products match ("13 Produkte zeigen") and closes the panel; pass the finished sentence as `resultLabel` and update it on every change. "Zurücksetzen" clears the filters and returns the sorting to its default.
- **Escape closes** the sorting list if it is open, otherwise the panel. The close button and a tap on the dimmed page close it too.
- All visible words are props, for French and English: `title`, `sortLabel`, `filterLabel`, `resetLabel`, `closeLabel`, `resultLabel`.
