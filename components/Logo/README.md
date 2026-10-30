The approved uWeed logo kit (August 2026): a horizontal logo, the same logo with the tagline, and the mark, each as a ready-coloured SVG, plus two favicon PNGs. The files are in the **Logos** asset group.

Pick the file; never build the logo. In React, `Logo` renders the same artwork inline:

```jsx
<Logo />                                         {/* horizontal, dark blue, 120px */}
<Logo color="white" width={160} />               {/* on dark-blue, dark-green or dark-pink */}
<Logo variant="mark" width={56} decorative />    {/* the age gate */}
<a href="/" aria-label="uWeed, zur Startseite"><Logo decorative /></a>
```

`color` takes one of the eight colourways and nothing else, and `width` cannot go below the kit's minimum. There is no way to pass a hex or to restyle it from CSS, on purpose.

| Need | File |
|---|---|
| Default: website header, email header, document | `uweed_logo_horizontal_dark-blue.svg` |
| Dark, coloured or photographic background | `uweed_logo_horizontal_white.svg` |
| Brand-led editorial surface | `uweed_logo_horizontal_dark-pink.svg` |
| Commerce surface where green is already the intended family | `uweed_logo_horizontal_dark-green.svg` |
| Brand presentation with enough space | the matching `uweed_logo_horizontal-tagline_*.svg` |
| Social profile, favicon, tiny UI space | `uweed_mark_*.svg`, or `uweed_favicon_32.png` / `uweed_favicon_180.png` |
| One-colour production where black is mandatory | a `_black` file |

- **Colour is chosen by file, not by CSS.** Each file carries one fill. Dark blue goes on `white` or a light tint; white on `dark-blue`, `dark-green` or `dark-pink`; dark green on `white` or `light-green`; dark pink on `white` or `light-pink`; the three light versions on `dark-blue` only; black for restricted production only.
- **Minimum widths:** horizontal 100px, with tagline 180px, mark 24px. Below that, switch to the mark or drop the tagline rather than shrinking.
- **Clear space is 25% of the mark's height on every side.** The horizontal file's canvas already includes it, so place the file edge to edge with other content and never crop it or pull it in with negative margins. The tagline file is tighter: add 3% of its rendered width all round. The mark file: add 5% of its width all round. (Measured from the artwork: mark height 30.7 units; margins in the files are 7.7 horizontal logo, 2.9 tagline, 5.8 mark.)
- **Never** recolour a file, add an outline, shadow, gradient or background box, stretch it, or reconstruct the logo with a font. Never stand an icon in for the mark.
- **Markup:** `<img src="…" alt="uWeed">` once per page, in the header. Any repeat (footer, age gate) is decorative: `alt=""`. Set `width` and `height` so the header does not shift while it loads. The horizontal and tagline files are 190 × 80; the mark is 43 × 43.
- **Favicon:** use the supplied PNGs at 32px and 180px. Do not generate one from the mark.
- There is no dark-green or dark-pink **mark** in the kit. Use the dark-blue or white mark on those surfaces.

The age gate, the shop prototype's header and the cover use this artwork. The age gate shows the dark-blue mark with no disc behind it, because the kit forbids a background box.
