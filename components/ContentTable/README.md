A multi-column table for editorial content: comparisons, reference data, specs
and figures inside blog articles and category pages.

CSS-only. Developers paste the block, writers reuse it.

```html
<figure class="uw-tbl uw-tbl--tinted">
  <p class="uw-tbl__title" id="tbl-oils">CBD oils compared</p>
  <div class="uw-tbl__scroll" role="region" aria-labelledby="tbl-oils">
    <table class="uw-tbl__data">
      <thead><tr>
        <th scope="col">Product</th>
        <th scope="col" class="is-num">Price</th>
        <th scope="col" class="is-wrap">Best for</th>
      </tr></thead>
      <tbody><tr>
        <th scope="row">Swiss Extract 10%</th>
        <td class="is-num">CHF 39.90</td>
        <td class="is-wrap">First-time users</td>
      </tr></tbody>
    </table>
  </div>
  <div class="uw-tbl__ind" aria-hidden="true"><span class="uw-tbl__ind-thumb"></span></div>
  <p class="uw-tbl__hint">Swipe or drag the table to see more columns.</p>
  <figcaption class="uw-tbl__note">Prices as of September 2026.</figcaption>
</figure>
```

- **Not a replacement for `ProductInfoTable`.** That stays the PDP's two-column
  attribute block. Use this one when there is a header row and more than two
  columns.
- `<th scope="row">` on the first cell of every body row, always — it is what
  the pinning and the tint hook onto, and what makes the column labels rather
  than data.
- No zebra striping, for the same reason as `ProductInfoTable`.
- `uw-tbl--tinted` is optional. The label column is separated by a vertical
  hairline, and that rule is the signal; the tint is `--light-gray` at 1.09:1
  against white, so it reinforces and never carries the meaning alone. Removing
  the class costs nothing structurally.
- `is-num` goes on the header cell **and** every cell in that column:
  right-aligned, tabular numerals. `is-wrap` on the one prose column; every
  other cell is `nowrap`, which is what keeps horizontal scrolling predictable.
- `uw-tbl__group` on a `<tr>` holding one `<th colspan="N" scope="colgroup">`
  breaks a long table into named blocks. No modifier on the figure needed.
- The native scrollbar is suppressed. `uw-tbl__ind` reports position and is
  `pointer-events:none` — never the control. Scrolling is by swipe, drag or
  arrow key. `uw-table.js` sets `tabindex` to 0 or -1 depending on whether the
  table actually overflows, so keep it out of the markup.
- `border-collapse` must stay `separate`; `collapse` silently kills the borders
  on the sticky cells.

Open: no sticky header row for tables that are tall rather than wide, and
`--fs-small` may be too small for regulatory tables read carefully.
