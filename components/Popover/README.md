Use `Popover` for any panel that opens from a trigger and floats above the page.

```jsx
<Popover behaviour="menu">
  <PopoverItem href="/cbd-shop/cbd-blueten/">CBD Blüten</PopoverItem>
  <PopoverItem href="/cbd-shop/cbd-oel/">CBD Öl</PopoverItem>
  <PopoverSeparator />
  <PopoverItem href="/cbd-shop/" current>Alle Kategorien</PopoverItem>
</Popover>

<Popover behaviour="listbox" label="Sortierung">
  <PopoverItem selected>Beliebtheit</PopoverItem>
  <PopoverItem selected={false}>Preis aufsteigend</PopoverItem>
</Popover>
```

- A **filter panel** is `className="uw-pop--check"` holding `Checkbox` rows labelled "Alpinols (8)" at 32px — not `PopoverItem` rows, no footer, no per-facet clear.
- Hover is the only fill. Selected gets a check mark, a ticked facet is carried by its own checkbox, and current-page in a menu is weight alone.
- Never omit `max-height`: six of the eight live treatments do and the tallest run off-screen. It is `min(60vh, 420px)` with `overscroll-behavior: contain`.
- Placement must clamp on **both** axes — a max-height alone still leaves a panel hanging past the viewport bottom.
- Below `lg` a filter panel becomes a **full-screen sheet** with a fixed header/footer and an apply button ("24 anzeigen"), not a floating panel. Menus and listboxes stay panels at every width.
- Never `role="menu"` — this site has no application menus.
