Use `Modal` for three things only: the age gate (`AgeGate`), login from the header account icon, and confirming a deletion. Information belongs on a page or in a `Message`; the cart, the mobile menu and filters are drawers; search and the size picker have their own patterns (README, *Which overlay*).

```jsx
<Modal
  title="Adresse löschen?"
  onClose={close}
  footer={<>
    <Button variant="outline" data-autofocus onClick={close}>Abbrechen</Button>
    <Button variant="danger">Löschen</Button>
  </>}
>
  <p>Die Lieferadresse «Bahnhofstrasse 1, 8001 Zürich» wird aus deinem Konto entfernt.</p>
</Modal>
```

- Focus is trapped while open and returns to the trigger on close.
- Never focus the destructive action on open.
- Escape closes, except when confirming something destructive — an accidental Escape would lose the decision — and in the age gate, which must be answered.
- Never a modal on a modal, and no modal on page load except the age gate.
- The cart drawer is **not** a modal; it is a drawer with modal behaviour, and it sits above modals at `--z-drawer`.
