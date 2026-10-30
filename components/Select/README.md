Use `Select` for one-of-many where the list is known. Inside a `FormField`.

```jsx
<FormField label="Land" htmlFor="country">
  <Select id="country" autoComplete="country" options={["Schweiz", "Deutschland", "Frankreich"]} />
</FormField>
```

- Never style a select as a button — users need to know it opens a list.
- Never replace a native select on mobile. Reach for an enhanced listbox only where searching within options is genuinely needed (country lists), and then implement the full combobox pattern or don't do it at all.
- Two options is a radio pair or a toggle, not a select.
- The sort control on listing pages is **not** a select — it changes the view, so it takes `FilterPill`.
