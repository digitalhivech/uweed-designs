Use `IconList` for a short set of facts about uWeed or a brand: the "why uWeed" band on the homepage or a category page, the facts on a brand page, and the band above the footer on every page. It is an informing block, and the place where pink appears as a mark.

```jsx
<IconList
  eyebrow="Warum uWeed"
  title="Was du von uns erwarten kannst"
  items={[
    { icon: "flask", label: "Im Labor geprüft", text: "Jede Charge wird in einem Schweizer Labor geprüft." },
    { icon: "map-pin", label: "Schweizer Marken", text: "Wir führen ausschliesslich Marken aus der Schweiz." },
    { icon: "shield-check", label: "Legal in der Schweiz", text: "Alle Produkte enthalten <1% THC." },
    { icon: "truck", label: "Schneller Versand", text: "Bestellungen vor 16:00 gehen am selben Tag raus." },
  ]}
/>
<IconList surface="tint" … />
<IconList variant="cards" … />
```

- **Two variants.** `list` (the default) sets the facts side by side with the disc above each, and below `sm` as a list with the disc on the left. `cards` (16 November 2026) centres the eyebrow and heading and sets each fact in its own card: `white`, the `line` hairline, `radius-card`, `shadow-xs`, the disc on top and the label and text centred. Use `cards` for the band above the footer, where the facts would otherwise read as one more line of the newsletter block below them.
- **Cards are not links.** They never lift on hover and take no pointer. Two per row on a phone, four across from `lg`.
- **Two surfaces.** `plain` sits directly on the page; `tint` is a light-grey block. Choose by what surrounds it: `tint` where the band has to stand apart, `plain` where the page is already busy. Never a pink background.
- **Pink is the disc, nothing else.** A dark-pink icon on a light-pink disc (4.90:1), and the small dark-pink label above the heading. Headings and text stay dark blue and dark grey.
- **Never in the buying steps.** Under the buy button, in the cart and in the checkout the reassurance strip is `OrderInfoBar`, with plain dark-blue icons.
- **Four items at most**, each a fact, not a slogan: what it is in two or three words, then one sentence. No health claims, and nothing that is not true of the shop today.
- **Above the footer** the band is followed by `NewsletterBlock` with `icon=""`: one pink disc set per screen is enough, so the newsletter leaves its envelope out there.
- Icons are 24px from the set; pick one that shows the fact, and never the cannabis leaf as decoration.
