# Product listing

A category page (PLP) built from this system's components: the page to copy when you build a listing.

It follows *Category Filters Final*: a light-gray header band with `Breadcrumb`, the H1 and an intro; `TabNav` for subcategories; one `FilterPill` per facet opening a `Popover` panel of `Checkbox` rows; the result count; `SortButton` opening a listbox; applied filters as removable `Badge` chips with a reset `Link`; a `ProductTile` grid; and `Pagination`.

- Compose pages from these components; the page itself declares no values of its own.
- This page shows the layout from `lg` up. Below `lg` the pill row and the sort control are replaced by one filled blue button that opens `FilterPanel`; its card shows that listing on a phone.
- The facet data and eight sample products (all four tile states, twice) are written into the page itself; they are sample content, not real products.
- Imagery is a flat placeholder: the sources ship no product photography.
