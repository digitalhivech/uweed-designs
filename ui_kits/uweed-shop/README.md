# uweed.ch — shop UI kit

A click-through recreation of the uweed.ch shop, composed entirely from this
design system's components. It runs live as the **ShopPrototype** page in this system (`components/ShopPrototype/preview.html`, the files below compiled into one page); edit the sources here and rebuild that page.

## Flow

1. **Age gate** — the blocking modal variant. Either answer dismisses it.
2. **Category listing** — tab nav, live filter pills (open the sort and brand
   panels, tick facets, watch the applied chips and the pill count follow),
   product tiles, pagination.
3. **PDP** — click any tile. Gallery with thumbnail strip and favourites,
   hero price with per-unit tooltip, card radios for size, stock line,
   quantity stepper, add to cart, reassurance strip, content tabs, related rail.
4. **Cart drawer** — opens on add to cart. Change quantities, remove at 1 via
   the bin, apply a coupon. "Warenkorb-Seite" jumps to the full cart.
5. **Cart → checkout** — the same order summary in both, then the four
   checkout steps with a live invalid postcode field.
6. **Blog archive** — featured card, standard grid, compact sidebar rows.

## Screens

| File | Covers |
|---|---|
| `Shell.jsx` | Header (see caveat), footer, page wrapper with breadcrumb |
| `TileAdapter.jsx` | Adapter over the system's signed-off `ProductTile` |
| `CategoryScreen.jsx` | PLP: tab nav, filter and sort pills with panels, applied chips, grid, pagination |
| `ProductScreen.jsx` | PDP: gallery, price, variation cards, stock, quantity, order info bar, content tabs, related rail |
| `CartScreen.jsx` | Cart page and the four checkout steps, with the sticky order summary |
| `BlogScreen.jsx` | Blog archive: featured, standard grid, compact sidebar |
| `app.jsx` | State and navigation between screens |
| `ph.js` | Placeholder imagery and the sample catalogue |

## Caveats — what is a stand-in rather than a recreation

These are the surfaces the source documents mark as blocked or out of scope.
Nothing here is invented design; each is assembled from documented primitives
and flagged so it is not mistaken for the real thing.

- **Header, mega menu, mobile menu.** Not designed yet. On the live site V2
  (`.new-header-menu`) is canonical but undocumented. The header in this kit
  uses only `Logo`, `SearchBar`, `Badge`, `Link` and `Icon`. It is a stand-in.
- **Product tile.** Now the signed-off system component
  (`components/src/components/commerce/ProductTile.jsx`); the kit file is a data adapter.
- **Variation selector.** Being redesigned as a comparison table with
  different semantics (a real `<table>`, not a radio set). Card radios stand
  in until that lands.
- **Imagery.** There is no photography or illustration yet. Every image is a
  flat token-coloured placeholder. The logo is the real one, from the kit.
- **Filter panel.** The reworked mobile panel is not built. The panels here are the documented
  dropdown surface with checkbox facets, which is what the panel is specified
  to be made of — not the reworked panel itself.
- **Abbreviated content.** Six tiles stand in for 284 products and six posts
  for 52. Every component family is present; only repeated content is cut.
