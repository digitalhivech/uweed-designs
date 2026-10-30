Use `ContentTabs` for the PDP description / lab report / shipping panels on desktop.

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
