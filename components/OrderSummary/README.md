Use `OrderSummary` on the cart page and in checkout.

```jsx
<OrderSummary
  rows={[
    { label: "Zwischensumme", value: "168.30 CHF" },
    { label: "Versand", value: "gratis" },
    { label: "Rabatt ANGEBOT10", value: "−16.83 CHF", discount: true },
  ]}
  total="151.47 CHF"
/>
```

- Right-align only the numbers, never the labels.
- The total updates in an `aria-live="polite"` region — a changed total announced only on the next navigation is a trust problem.
- On mobile the summary collapses behind an `Accordion` with the total in the trigger row. The total stays visible when collapsed; it is the number people are checking.
