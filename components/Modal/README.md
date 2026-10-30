Use `Modal` rarely — a destructive confirmation or a required choice. Information belongs on a page or in a `Message`.

```jsx
<Modal
  title="Artikel entfernen?"
  onClose={close}
  footer={<>
    <Button variant="outline" data-autofocus onClick={close}>Abbrechen</Button>
    <Button variant="buy" style={{ background: "var(--medium-red)", borderColor: "var(--medium-red)" }}>Entfernen</Button>
  </>}
>
  <p>CBD Öl 20% Vollspektrum wird aus dem Warenkorb entfernt.</p>
</Modal>
```

- Focus is trapped while open and returns to the trigger on close.
- Never focus the destructive action on open.
- Escape closes, except when confirming something destructive — an accidental Escape would lose the decision.
- The cart drawer is **not** a modal; it is a drawer with modal behaviour, and it sits above modals at `--z-drawer`.
