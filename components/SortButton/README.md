Use `SortButton` as the sort control on a listing. It sits in the right-hand slot of the filter row.

```jsx
<SortButton label="Sortieren" value="Beliebtheit" open={open} onClick={toggle} />
<Popover behaviour="listbox" label="Sortierung">
  <PopoverItem as="button" selected>Beliebtheit</PopoverItem>
</Popover>
```

- Medium blue, 14px / 500, the `arrows-sort` icon at 16px, underline on hover. Never a pill, never a native select.
- The filter row is a grid `auto 1fr auto`: pills · count (centred) · sort in a `min-width: 210px` right-aligned slot, so nothing moves when a label or the sort value grows.
- Inside the mobile "Filter & sort" dialog, sort is the first accordion item ("Sort by: Recommended") with a radio group whose legend is visually hidden.
