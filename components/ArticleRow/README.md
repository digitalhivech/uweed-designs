Use `ArticleRow` to tease articles outside the magazine: on the homepage, on a category page, at the end of an article. It is the only format for that; the guide teaser is this component.

```jsx
<ArticleRow
  title="CBD Grundlagen"
  articles={[
    { title: "Was ist CBD? Definition und Überblick über Cannabidiol", href: "/blog/was-ist-cbd/", image: "/img/was-ist-cbd.webp", category: "Wissen", excerpt: "…" },
    { title: "CBD vs THC", href: "/blog/cbd-vs-thc/", image: "/img/cbd-vs-thc.webp", category: "Wissen" },
    { title: "Ist CBD in der Schweiz legal?", href: "/blog/cbd-legal-schweiz/", image: "/img/cbd-legal.webp", category: "Recht und Sicherheit" },
  ]}
  moreLabel="Zum CBD-Magazin"
  moreHref="/blog/"
/>
```

- **Three across on a desktop, a list on a phone.** Below 768px each card becomes a row: picture left, category label and title right. All articles are visible without a gesture and nothing is cut off.
- **Nothing swipes.** Do not put article cards in a `Carousel`; that is the format this component replaced.
- **Three articles on a shop page.** More than three wrap into further rows of three; keep to multiples of three.
- **The cards are plain `BlogCard`s.** Each entry in `articles` takes the same props. Give every card a teaser sentence or none, so the row stays even. Never repeat one sentence on two cards.
- **One picture shape.** Every picture is 16:9, the same file the article uses as its featured image.
- **One blue button, centred, to the magazine.** It is the `nav` button and takes the full width on a phone. Leave `moreLabel` and `moreHref` out where the surrounding section already has its own link.
- **Not in the buying steps.** Never in the cart or the checkout.
