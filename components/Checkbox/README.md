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
- The box sits on the label's first line, never centred on a label that wraps: a long consent or newsletter line reads from the box downward. A one-line label stays centred in the 44px row (32px in filter lists with a mouse). To change a row's height in a context, set `--uw-check-row`, never `min-height`. Radios follow the same rule.
- A single-choice question is a `RadioGroup`, not a checkbox.
- The `count` beside a filter option is grey (`medium-gray`), not blue. Blue is the colour of links, and a count cannot be tapped.
