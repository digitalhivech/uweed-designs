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
