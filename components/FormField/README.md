Use `FormField` around every form control. It owns the label, the shared hint/error slot and the invalid state.

```jsx
<FormField label="E-Mail" htmlFor="email" hint="Für die Bestellbestätigung.">
  <Input id="email" type="email" autoComplete="email" required />
</FormField>

<FormField label="Postleitzahl" htmlFor="plz" required error="Bitte gib eine gültige PLZ ein.">
  <Input id="plz" inputMode="numeric" autoComplete="postal-code" invalid />
</FormField>
```

- Hint and error occupy the same slot deliberately: a field that grows taller on error shifts everything below it, and on a long form that moves the submit button mid-tap.
- The label stays dark-gray on error. Reddening it adds a fifth signal and makes the field harder to scan for what it *is* — which is what someone needs while correcting it.
- Point `aria-describedby` on the control at this field's message id; `aria-invalid` goes on the control, not the wrapper.
