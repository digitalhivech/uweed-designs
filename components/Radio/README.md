Use `RadioGroup` + `Radio` for any single-choice set. The group wrapper is not optional.

```jsx
<RadioGroup legend="Versandart" style={{ display: "grid", gap: "var(--space-xs)" }}>
  <Radio card name="shipping" label="Swiss Post — Priority" sub="1–2 Werktage · gratis" defaultChecked />
  <Radio card name="shipping" label="Swiss Post — Economy" sub="2–4 Werktage · gratis" />
  <Radio card name="shipping" label="Abholung Zürich" sub="Nicht verfügbar für diese Adresse" disabled />
</RadioGroup>
```

- Card radios are pills, and that is a constraint: they hold two lines. A method needing a third line moves to card radius or puts the line elsewhere.
- Selected is dark-blue border plus filled radio — **never a fill**. A filled selected card competes with the place-order button.
- Never green for a selected method: the one green thing on a checkout step is the action you take next.
- A disabled method states its reason inline, never in a tooltip.
