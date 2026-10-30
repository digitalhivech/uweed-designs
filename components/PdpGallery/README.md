Use `PdpGallery` as the left column of a PDP.

```jsx
<PdpGallery
  images={[{ src: "p-600.webp", full: "p-2000.webp" }, …]}
  tags={[{ label: "−15%", variant: "sale" }, { label: "Bestseller", variant: "bestseller" }]}
  saved={saved}
  onToggleSave={toggle}
  onZoom={openLightbox}
/>
```

- The lightbox is a native `<dialog>` opened with `showModal()` — that gives the focus trap, the inert background and Escape for nothing, at ~1 KB instead of 30–45 KB of library. Pinch and pan are native and composited; double-tap is the mechanism and pinch is the enhancement.
- **Never load full-resolution images on page load.** The gallery `<img>` keeps its srcset at display size; the lightbox holds `data-full` and `src` is assigned when the dialog opens. Most visitors never open it and never pay for it.
- Never wrap the heart in a circle — the drop-shadow does the legibility work without competing with the tags opposite.
- Thumbnails are buttons (they change the view, they don't navigate), each labelled "Bild 2 von 5".
- No thumbnails on mobile; the rail becomes a full-width swipe with the carousel's 6px progress bar.
