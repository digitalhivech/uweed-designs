Use `ProductInfoTable` inside the PDP's "Eigenschaften" panel.

```jsx
<ProductInfoTable caption="Produkteigenschaften" rows={[
  { label: "CBD-Gehalt", value: "18%" },
  { label: "THC-Gehalt", value: "< 1%" },
  { label: "Anbau", value: "Indoor, Schweiz" },
]} />
```

- `<th scope="row">` for the label, always.
- No zebra striping — a hairline between rows does the same job without a second background colour.
- Where a row shows a product fact, the component must not know how that fact is stored. The cannabinoid line is a worked example: the catalogue holds the same number under three attribute names, and only one resolver reads all of them.
