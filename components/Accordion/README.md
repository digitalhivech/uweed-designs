Use `Accordion` + `AccordionItem` for FAQ blocks, PDP tabs on mobile, category text and footer columns on mobile.

```jsx
<Accordion>
  <AccordionItem heading="Beschreibung" open>
    <p>Dichte Indoor-Blüten, handverlesen und langsam getrocknet.</p>
  </AccordionItem>
  <AccordionItem heading="Laborbericht"><p>…</p></AccordionItem>
</Accordion>

<Accordion variant="boxed">
  <AccordionItem heading="Wie schnell wird geliefert?"><p>…</p></AccordionItem>
</Accordion>

<div className="on-dark">
  <Accordion><AccordionItem heading="Shop" headingLevel={0}>…</AccordionItem></Accordion>
</div>
```

- Weight and chevron carry the state on every surface; colour varies only where the background allows it. On light-blue grey is 1.9:1 and on dark-green 2.4:1 — both genuinely hard to read, so the weight does the work alone there.
- The chevron is drawn in CSS on purpose: `<summary>`'s content model allows one heading **or** phrasing content, not both, so an SVG beside the `<h3>` would break it.
- Never + / − as the icon: a plus means "add" on a shop.
- Never force one panel open at a time. It hides content the reader just asked for.
- Never put a max-height on a panel. That is a content bug waiting for someone to write enough text.
