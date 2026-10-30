Use `Message` for feedback the reader must be able to come back to — form errors, compliance notes, coupon results, shipping notices.

```jsx
<Message variant="warning" title="Nicht für Schwangere geeignet">
  <p>Bei Schwangerschaft oder Stillzeit vor der Anwendung ärztlichen Rat einholen.</p>
</Message>
<Message variant="error"><p>Der Gutscheincode ist nicht gültig.</p></Message>
<Message variant="success"><p>Gutschein ANGEBOT10 angewendet.</p></Message>
```

- Never a toast where a message belongs: a toast disappears, and an error the reader missed is one they cannot act on.
- Never rely on the tint alone. The 3px border, the icon on its disc and the title are what make the type survive greyscale.
- Never red for a restriction. In a message red means something failed; a restriction is a heads-up, so it is orange.
- Every type carries its icon on a 32px disc in its own colour, so a stack of messages keeps one left edge. The icon is white on medium-gray (5.02:1), medium-blue (7.20:1), dark-green (6.65:1) and medium-red (5.05:1). On the medium-orange disc of the warning it is dark blue (9.21:1), the pairing the Bestseller badge uses, because white on orange is 2.03:1.
