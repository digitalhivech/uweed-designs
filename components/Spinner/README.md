Use `Spinner` when you cannot know the shape of what is coming — a submitting form, an in-flight request.

```jsx
<Spinner label="Bestellung wird geprüft" />
```

- Prefer `Skeleton` whenever the shape *is* known.
- Spinners sit at `--z-overlap`, not above modals. Six spinners on the live site do not currently rotate at all: the old keyframes declare only `-webkit-transform`.
