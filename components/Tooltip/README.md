Use `Tooltip` only for nuance the reader could do without.

```jsx
<Tooltip text="Etwa 89.20 € zum heutigen Kurs. Abgerechnet wird in CHF." label="Mehr Informationen zur Währung" />
<Tooltip text="Gesamtgehalt aller Cannabinoide.">Vollspektrum</Tooltip>
```

- Never essential information. It is hidden by default and stays hidden for anyone who does not know to look. The live out-of-stock tooltip hid the reason a variation could not be selected — on a phone that reason was never available at all, so it was a tooltip to *delete*, not to fix.
- Never a `<span>` trigger, never CSS `content` for the text, never `aria-label` (that replaces the control's name instead of supplementing it).
- No links or buttons inside the bubble — it disappears when the pointer leaves. That is a popover.
- 20px circle, 44px hit area via a `::before` inset.
