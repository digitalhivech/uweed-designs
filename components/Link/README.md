Use `Link` for navigation; pick the variant by whether the link has to announce itself, not by where it sits.

```jsx
<p>Alle Produkte werden geprüft — <Link href="/laborberichte/">Laborberichte ansehen</Link>.</p>
<Link variant="action" href="/suche/?q=cbd">Alle Ergebnisse anzeigen</Link>
<Link variant="nav" href="/faq/" current>Häufige Fragen</Link>
```

- Inline links must stay underlined — WCAG 1.4.1, and medium-blue against dark-gray body copy is only ~2.5:1.
- Never `variant="inline"` for a menu row: everything in a menu is clickable, so blue spends the link colour on nothing.
- Link text must make sense out of context. "Hier klicken" and a bare "Mehr erfahren" are both violations.
- A control that expands content in place is a `Button variant="text"`, not a link.
