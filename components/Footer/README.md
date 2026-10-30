Use `Footer` at the bottom of every page. It carries `.on-dark`, so links, buttons and accordions inside it switch to their dark-surface treatment automatically.

```jsx
<Footer
  columns={[{ heading: "Shop", links: [{ label: "CBD Blüten", href: "/cbd-shop/cbd-blueten/" }] }, …]}
  switches={[
    { label: "Währung", options: ["CHF", "EUR"], value: "CHF" },
    { label: "Sprache", options: ["DE", "FR", "EN"], value: "DE" },
  ]}
/>
```

- All footer text is pure white, not `#F5F5F5`.
- Below `lg` the columns become an `Accordion` inside `.on-dark` — the same component, not a footer-specific one.
- The surface is `dark-blue`: a footer is navigation, and green is kept for the purchase path. The selected currency and language sit on a white pill with `dark-blue` text.
