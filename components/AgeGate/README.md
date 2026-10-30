Use `AgeGate` as the first thing a visitor sees. There is one per site.

```jsx
<AgeGate onYes={enter} onNo={leave} />
```

- *Ja* is filled and *Nein* is outline because one is the expected path — but neither is pre-focused.
- The brand mark at 56px, dark blue, straight on the modal's white: `<Logo variant="mark" />`. Not the full logo, never an icon standing in for the mark, and no disc behind it (the logo kit forbids a background box).
- The behaviour spec (cache-safe cookie architecture, JavaScript-off lockout, analytics) lives separately; this component covers appearance and the modal relationship only.
- Button font size is `--fs-cta` (1rem), closing the 1rem-vs-1.1rem question.
