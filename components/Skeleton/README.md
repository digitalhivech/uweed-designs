Use `Skeleton` where the incoming shape is known — a reloading product grid, cart drawer rows, filter results.

```jsx
<Skeleton height={220} radius="var(--radius-card)" />
<Skeleton width="70%" height={14} />
```

- Skeleton when the shape is known, `Spinner` when it is not.
- Never let the container collapse while it loads. Reserve the height.
