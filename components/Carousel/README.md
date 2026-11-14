Use `Carousel` for a horizontal rail of products or city tiles. Articles never go in a rail: they use `ArticleRow`, which shows all of them at once.

```jsx
<Carousel label="Bestseller" itemWidth="262px">
  <ProductTile … />
  <ProductTile … />
</Carousel>
```

- Scroll-snap, not a library: no JS for scrolling, native momentum and keyboard, and it works before JS loads. Loop and autoplay are not supported and nothing here needs them.
- Cards are 60vw on mobile with `scroll-snap-align: center` — at 50vw two cards fill a 390px phone exactly and the rail reads as a two-up grid.
- The progress bar is 6px and doubles as the mobile navigation. Six dots are six 8px targets that say very little.
- Arrows are 48px circles with 24px chevrons, dark blue while there is somewhere to go. A 14px glyph in a 44px circle looks like a mistake.
- **Category rails.** Each item is a `Card variant="link"` holding the category image in a square frame (`aspect-ratio: var(--category-frame-ratio)`, `object-fit: contain`, no background, no padding around the image) with the category heading below it, outside the image. The rail may run full width; every image in it stays square. The same tile goes in a category grid or a full-width homepage section. Sizing, framing and asset rules: README, *Imagery*.
- **Brand rows.** Each item is the partner logo in a 2:1 frame (`aspect-ratio: var(--brand-logo-frame-ratio)`, `object-fit: contain`), linking to the brand page. The logo is the link's only content, so it carries the brand's name as `alt`. A logo that exists only on a white background sits on a `white` surface.
