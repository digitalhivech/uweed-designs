Use `Card` as the shared surface under tiles, panels and grouped blocks — not usually as a component you place by itself.

```jsx
<Card style={{ padding: "var(--space-m)" }}>Stadt-Tile, Team-Karte, Review</Card>
<Card variant="link">Ganze Karte navigiert</Card>
<Card variant="flat">Karte innerhalb eines Containers</Card>
<Card variant="tint">Gruppierung — Bestellübersicht, Sidebar</Card>
```

- Only `link` lifts, and the lift always pairs with a shadow step up.
- Don't add a fifth variant: if a surface needs something else it is a component, not a card.
- Cards are 16px. There is no 20/30/40/50px radius anywhere in this system.
