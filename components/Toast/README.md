Use `Toast` to confirm an action that succeeded and needs no decision.

```jsx
<Toast title="Zum Warenkorb hinzugefügt" action="Warenkorb ansehen" actionHref="/warenkorb/">
  <p>CBD Öl 20% Vollspektrum · 10 ml</p>
</Toast>
```

- Never for an error — that is `Message`.
- Never stack them. A second toast replaces the first; nobody reads the third.
- Never auto-dismiss one containing a link.
- The close button is a real button with a label. "×" is not a name.
