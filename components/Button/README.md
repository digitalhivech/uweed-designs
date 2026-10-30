Use `Button` for anything that performs an action or navigates; the variant is chosen by purpose, never by how much attention you want it to have.

```jsx
<Button variant="buy">In den Warenkorb</Button>
<Button variant="nav" href="/cbd-shop/">Jetzt entdecken</Button>
<Button variant="outline">Weiter einkaufen</Button>
<Button variant="buy" disabled>Ausverkauft</Button>
<Button variant="buy" loading>In den Warenkorb</Button>
<Button variant="nav" iconOnly icon="shopping-cart" aria-label="Warenkorb öffnen" />
<Button variant="unavailable">Ausverkauft</Button>
<Button variant="unavailable" iconOnly icon="x" aria-label="Ausverkauft" title="Ausverkauft" />
```

- `buy` (dark green) advances a purchase — add to cart, checkout, place order. `nav` (dark blue) takes the user somewhere. **Green never navigates and blue never buys**; that separation is the whole reason both exist.
- One filled button per surface. `outline` is the secondary beside a filled one, `text` is tertiary and disclosure ("Mehr anzeigen" is a button, not a link).
- One height: 44px, at every breakpoint. Width grows with the label from a 160px floor — never set a fixed width, and never size to the English string; German runs ~30% longer.
- `apply` is the coupon form's exception: green family, outline treatment, because one filled green per step.
- Disabled uses the palette (light-gray / medium-gray), never opacity.
- `disabled` and `unavailable` both exist and mean different things. Disabled is *not right now* (incomplete form, request in flight) and greys the label. Unavailable is *not at all* (sold out, withdrawn): transparent fill, dark-gray border and label, so the label still states the fact in words. An unavailable control gets neither a tooltip nor an explanation line — the label *is* the statement. The icon-only form carries the word as `aria-label` and `title`.
