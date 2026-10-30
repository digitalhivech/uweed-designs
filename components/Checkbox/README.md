Use `Checkbox` for independent on/off and for filter facets.

```jsx
<Checkbox label="Ich akzeptiere die AGB" required />
<Checkbox label="Sweed" count={24} />
<Checkbox label="Alle Marken" indeterminate />
<Checkbox label="Nicht verfügbar" disabled />
```

- Never rely on a bare `<input type="checkbox">`: the theme's global rule strips its background and border, so it renders as nothing at all.
- Never `display: none` the input to hide it — it stops being focusable. `appearance: none` keeps it in the focus order.
- Don't clamp the row: `overflow: hidden` with a max-height clips the 20px box, which is live in the filter sidebar today.
- A single-choice question is a `RadioGroup`, not a checkbox.
- The `count` beside a filter option is grey (`medium-gray`), not blue. Blue is the colour of links, and a count cannot be tapped.
