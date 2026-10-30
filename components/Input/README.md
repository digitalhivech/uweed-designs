Use `Input` for any text entry. Always inside a `FormField` — a bare input has no label, and a placeholder is not a label.

```jsx
<FormField label="E-Mail" htmlFor="email">
  <Input id="email" type="email" autoComplete="email" required />
</FormField>

<FormField label="Postleitzahl" htmlFor="plz" error="Bitte gib eine gültige PLZ ein." required>
  <Input id="plz" inputMode="numeric" autoComplete="postal-code" required invalid />
</FormField>

<FormField label="Anmerkung" htmlFor="note"><Input as="textarea" id="note" rows={3} /></FormField>
```

- Never drop below 16px: iOS zooms the viewport on focus and there is no way back.
- `inputMode="numeric"` for postcodes, **not** `type="number"` — postcodes are strings and number inputs strip leading zeros.
- `autoComplete` on every field with a standard token. WCAG 1.3.5, and it measurably improves checkout completion.
- Errors are text plus icon, never a red border alone.
