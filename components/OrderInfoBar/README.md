Use `OrderInfoBar` directly below add-to-cart on a PDP.

```jsx
<OrderInfoBar />
<OrderInfoBar items={[{ icon: "truck", label: "Gratis Versand", sub: "Ab 50 CHF" }, …]} />
```

- Icons are dark blue. Never green — the add-to-cart button is directly above and green would claim the buy signal for a reassurance strip.
- Never put the supporting line in a tooltip. It *is* the reassurance.
- Four items maximum.
