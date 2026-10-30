Use `Icon` wherever the interface needs an icon: the order info bar, messages, chevrons in navigation, cart and favourites controls. The set is [Tabler Icons](https://tabler.io/icons), free under the MIT licence.

```jsx
<Icon name="truck" size={24} style={{ color: "var(--dark-blue)" }} />
<Icon name="heart" size={24} />
<Icon name="star-filled" size={14} style={{ color: "var(--medium-orange)" }} />
```

- **One line weight.** Every icon is drawn with a 2px line on the 24px grid, at every size. Leave `strokeWidth` alone; to make an icon quieter or louder, change its size or colour.
- **Four sizes:** 16px in small controls (tags, filters, the quantity stepper, field hints), 20px in buttons, fields and messages, 24px for an icon on its own, 32px for an empty state. No other size; the one exception is the rating star on the product tile, 14px to match the text beside it.
- **Names are Tabler's own.** `ICON_NAMES` lists the 47 in use. The header account icon is `user` when logged out and `user-check` when logged in; nothing else marks the logged-in state. To add one, take it from Tabler under its published name and add it to `Icon` and to the Icons asset group together. Never mix in another family. Where the site needs an icon Tabler does not have, flag it: it is then drawn once to Tabler's rules (24px grid, 2px line, round ends) and added like any other.
- **Filled icons** end in `-filled` and are drawn solid. Use them only for a state or a score, such as the rating star, or `heart-filled` on the header favourites icon once something is saved (the outline `heart` when the list is empty).
- Icons are decorative by default (`aria-hidden`). An icon-only control gets its name from the button's `aria-label`, not from the icon.
- Order info bar icons are dark blue, never green: the add-to-cart button sits directly above them.
- Never emoji — they render differently on every platform, cannot be recoloured, and are announced by their unicode name.
