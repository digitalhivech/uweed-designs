Use `Pagination` below a product grid or blog archive.

```jsx
<Pagination current={1} total={12} count="284 Produkte" hrefFor={(p) => `/cbd-shop/page/${p}/`} />
```

- The arrow circles are dark blue, like every other navigation control. The former green exception is withdrawn: navigation uses the blue palette only.
- The current page is a span; the ellipsis is `aria-hidden` and not clickable. Screen readers get position from the count line.
- Keep the disabled arrow visible. Removing it shifts the row under the finger that just tapped.
- No jump-to-page control: at twelve pages it is machinery nobody needs. Past ~40 the question reopens.
