Use `CartDrawer` for the slide-in cart. It composes `QuantitySelector`, `Price`, `Button` and `CouponForm`.

```jsx
<CartDrawer
  items={[{ id: "1", name: "CBD Öl 20% Vollspektrum", size: "10 ml", qty: 1, price: "44.10 CHF", image: "…" }]}
  subtotal="151.47 CHF"
  onClose={close}
>
  <CouponForm onApply={apply} />
</CartDrawer>
```

- Header and footer never scroll. The checkout button is the point.
- Item meta is dark-gray and carries the **size only**.
- Never collapse the drawer while loading — reserve the height and show skeleton rows.
- The quantity control swaps minus for a bin at quantity 1, which makes the most common cart action one tap.
- Empty state is a centred message, a line of copy and a nav-variant button back to the shop. No illustration.
