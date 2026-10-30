Use `Badge` for a small label that classifies, counts or flags something. It is not a control.

```jsx
<Badge variant="category">Wellness</Badge>
<Badge variant="attribute">CBD 10% · THC 0.3%</Badge>
<Badge variant="sale">−15%</Badge>
<Badge variant="new">Neu</Badge>
<Badge variant="count" aria-label="3 Artikel im Warenkorb">3</Badge>
<Badge onRemove={clear} removeLabel="Filter Sweed entfernen">Sweed</Badge>
```

- Pink marks the blog category here and is **never** a control or a state. Grey attribute chips carry product facts.
- **One count style on every icon** (decided 27 October 2026): a round `dark-blue` counter with a white bold number and a 2px white ring that separates it from the icon. `count` (cart) and `count-fav` (favourites) draw exactly the same; the favourites heart carries the red, its count does not. Until then the cart count was dark green and the favourites count red. Above 99 the counter shows "99+" (the pill widens; the aria-label keeps the real number). Hidden at 0.
- Out of stock is grey, goes first in the tag stack, and counts against the two-badge ceiling.
- A count badge that conveys information needs an aria-label — "3" alone means nothing.
