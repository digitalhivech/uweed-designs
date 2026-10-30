Use `Price` for any price, anywhere. It carries the colour rule and tabular numerals so a changing total never shifts the layout beside it.

```jsx
<Price role="hero" value="84.15 CHF" unit="8.42 CHF / ml" />
<Price role="hero" sale value="44.10 CHF" was="49.00 CHF" />
<Price role="list" value="151.47 CHF" />
<Price role="total" value="151.47 CHF" />
<Price role="tile" from fromTemplate="dès {x}" value="20.00 CHF" />
```

- Never colour a price green — green is the buy action, and a green price leaves add-to-cart competing with the figure above it.
- Don't mix roles on one surface: every line in an order summary is `list` except the total.
- "Gratis", never "0.00 CHF". A word reads as a benefit; a zero reads as an unfilled field. (FR uses *offert*.)
- A discount line always carries an explicit minus — a red number without one reads as a surcharge.
- The per-unit line is --dark-gray at --fs-small everywhere — tile, PDP, variation table. It was medium-blue at 13px; one element with two treatments is the drift this component exists to remove.
- "ab" / "dès" / "from" is a format string (`fromTemplate="ab {x}"`), never a concatenation.
- Per-unit values below 0.10 print three decimals, or 0.025 and 0.021 both render as "0.02".
