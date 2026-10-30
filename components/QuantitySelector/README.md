Use `QuantitySelector` wherever a quantity is set or shown.

```jsx
<QuantitySelector size="lg" max={12} />                      {/* PDP */}
<QuantitySelector size="md" removeAtOne onRemove={remove} /> {/* cart, drawer */}
<QuantitySelector size="sm" value={2} />                     {/* order review, read-only */}
```

- Never `type="number"`: the spinner is unusable on touch and the field accepts "e" and "-".
- `sm` is not a control. It is 32px and cannot meet the 44px minimum — if checkout needs an editable quantity it uses `md`.
- Update the display instantly and debounce the request (~400ms), never the other way round.
- Both buttons need labels; "−" and "+" are not names. The remove state changes the button's name to "Artikel entfernen".
