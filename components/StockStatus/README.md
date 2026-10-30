Use `StockStatus` on a PDP below the variation selector.

```jsx
<StockStatus state="in">Auf Lager · sofort versandfertig</StockStatus>
<StockStatus state="last">Nur noch 3 verfügbar</StockStatus>
<StockStatus state="out" pdp>Ausverkauft</StockStatus>
```

- Never red for out of stock. Red is for things that need action; availability needs none.
- Never colour the text medium-orange — 2.0:1. The dot carries the colour.
- Never show an exact count above the low-stock threshold: "Nur noch 47 verfügbar" reads as a warning about nothing.
- On out of stock the line is not carrying the state alone: add-to-cart is disabled and reads *Ausverkauft*, and a notify-me control appears. The tile overlay uses the same grey.
