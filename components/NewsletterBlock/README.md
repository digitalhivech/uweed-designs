Use `NewsletterBlock` to invite a visitor to the newsletter: on the homepage, at the end of a blog article, or above the footer. It is an informing block.

```jsx
<NewsletterBlock
  title="Neues von uWeed, einmal im Monat"
  text="Neue Produkte und Marken, wieder verfügbare Sorten und Neuigkeiten aus dem Shop. Du kannst dich jederzeit abmelden."
  legal={<>Mit der Anmeldung akzeptierst du unsere <a href="/datenschutz/">Datenschutzerklärung</a>.</>}
  onSubmit={(email) => subscribe(email)}
/>
<NewsletterBlock title="…" status="error" message="Bitte gib eine gültige E-Mail-Adresse ein." />
<NewsletterBlock title="…" status="success" message="Danke für deine Anmeldung." />
```

- **A light-grey block with one pink disc.** The block is `light-gray`; pink appears only as the disc with the envelope and the small label above the heading. Pink is never the background.
- **Never in the buying steps.** Not in the cart, the checkout or beside the buy button.
- **Dark blue and dark grey, blue button.** Heading, text and the success line are dark blue or dark grey, and the button is the blue `nav` button. Never a green button here: subscribing is not buying.
- **The field is white.** The block already carries the field's usual light grey.
- **`icon` is the envelope by default.** Pass another name from `ICON_NAMES`, or `""` to leave the disc out.
- **Promise nothing by default.** A welcome discount, the sending rhythm and the confirmation wording are facts of the offer; pass them in as copy and only when they are true.
- **Always pass `legal`** with the link to the privacy policy.
- **Errors are red text with the alert icon**, as under any field: `medium-red` on `light-gray` is 4.63:1. The success state replaces the form, so the visitor cannot submit twice.
- Invitation left, action right. Where the block gets narrow the two stack, and the button takes the full width once it no longer fits beside the field. On a phone, and in a column too narrow to keep the text readable beside it, the disc moves above the heading.
- The shared base is `.uw-inform` (with `--tint`, `__disc`, `__eyebrow`, `__title`, `__text`); `IconList` builds on the same one.
