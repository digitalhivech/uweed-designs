Use `ContentTabs` for the product page sections (description, specifications, ingredients, use, storage, safety) from 992px (`bs-breakpoint-lg`) up. Below that the same sections are an `Accordion`, the first one open.

```jsx
<ContentTabs tabs={[
  { label: "Beschreibung", content: <p>…</p> },
  { label: "Eigenschaften", content: <ProductInfoTable rows={rows} /> },
  { label: "Versand", content: <p>…</p> },
]} />
```

- Inactive labels are medium-gray, never `#9ca3af` or any grey below 4.5:1 — this is interactive text. Weight and the rail marker carry the active state alongside colour.
- Active is dark blue.
- Arrow keys move between tabs; only the selected tab is in the tab order.
- Below 992px: the same sections, same order, as the flush `Accordion`, first item open (decided 16 November 2026, as live).
- Leave a section gap (`space-2xl`) between the last tab or accordion row and the next section heading.
