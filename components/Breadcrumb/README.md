Use `Breadcrumb` above the H1 on category and product pages.

```jsx
<Breadcrumb items={[
  { label: "Startseite", href: "/" },
  { label: "CBD Shop", href: "/cbd-shop/" },
  { label: "CBD Öl", href: "/cbd-shop/cbd-oel/" },
  { label: "CBD Öl 10% Vollspektrum" },
]} />
```

- 13px, sentence case, links in medium-gray, current page in dark-blue at medium weight. Never uppercase, never green.
- Never link the current page — a link to the page you are on is a dead control.
- The separator is a CSS pseudo-element with empty alt text. A literal › in the markup gets announced between every item; so does a plain generated one, which is why the alt-text syntax matters.
- Scrolls rather than wrapping. On a PDP the last crumb truncates at 22 characters below `md`.
