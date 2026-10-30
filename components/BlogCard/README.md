Use `BlogCard` wherever an article is teased: in the blog archive, in the sidebar, and inside `ArticleRow` on shop pages. It is the only article card.

```jsx
<BlogCard
  title="CBD am Steuer: was in der Schweiz gilt"
  href="/blog/cbd-am-steuer/"
  excerpt="Grenzwerte, Kontrollen und was bei einem Test passiert."
  image="/img/cbd-steuer.webp"
  category="Law & Safety"
  date="August 2026" dateTime="2026-08"
/>
<BlogCard variant="featured" … />
<BlogCard variant="compact" … />
```

- **One picture shape, 16:9, everywhere.** The featured image at the top of an article, the card on a desktop and the row on a phone all show the same cut of the same file. Never give a place its own crop or its own shape.
- **On a phone every card is a row:** picture left at 36% of the width, category label above the title, title up to three lines, no teaser sentence. `compact` is that same row at every width.
- **The category label sits on the picture only on the desktop card.** In the row it moves above the title, because on a small picture it would cover most of it. There it is 12px, one step below the 13px it has on the card, so it stays clearly smaller than the 14px title.
- One link per card, named by the headline. Never link the image, the title and a "Weiterlesen" separately — that is the defect this component exists to fix.
- Never let the title drive the card height. The image sets it; the clamp enforces it. Raising a font size or adding a line means re-checking that the text still fits inside the image height at the narrowest width that variant is used at.
- The category badge is a `<span>`. Making it a link puts a second tab stop on every card; category navigation is `TabNav`'s job.
- The focus ring sits on the card, via `:has(a:focus-visible)` — not on the stretched overlay.
