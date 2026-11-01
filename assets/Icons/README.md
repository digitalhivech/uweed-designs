# Icons

The 48 icons uWeed uses, from [Tabler Icons](https://tabler.io/icons) (version 3.49.0), a free open-source family under the MIT licence. Tabler was chosen in October 2026 because it is built the way the logo is: one even line, round ends, simple geometry.

- In the interface, draw icons with the `Icon` component. It holds the same artwork and inherits `currentColor`.
- These files are for surfaces without the component, such as a slide or a document: 24×24, 2px line, `currentColor`. Shown through `<img>` they draw in black; recolour them in code, not in the file.
- File names are Tabler's own names. `star-filled.svg` and `heart-filled.svg` are Tabler's solid star and heart; every other file is a line icon.
- To add an icon, take it from Tabler under its published name and add the file here and the name to `Icon` together. Never mix in another family. Where the site needs an icon Tabler does not have, flag it: it is then drawn once to Tabler's rules (24px grid, 2px line, round ends) and added like any other.
- The only change made to Tabler's files is the removal of an invisible bounding rectangle and a `class` attribute. The drawings are untouched.

## Replaced names

These icons replaced an earlier stand-in set in October 2026. Twelve changed name:

| Before | Now |
| --- | --- |
| `arrow-up-down` | `arrows-sort` |
| `chevrons-up-down` | `selector` |
| `circle-alert` | `alert-circle` |
| `flask-conical` | `flask` |
| `funnel` | `filter` |
| `globe` | `world` |
| `info` | `info-circle` |
| `menu` | `menu-2` |
| `rotate-ccw` | `arrow-back-up` |
| `sliders-horizontal` | `adjustments-horizontal` |
| `ticket-percent` | `rosette-discount` |
| `triangle-alert` | `alert-triangle` |

`cannabis` and `star-filled` are new. `help-circle` was added on 25 October 2026 for the FAQ link in the header menu, and `heart-filled` on 27 October 2026 for the header favourites icon once something is saved. `user-check` was added the same day for the header account icon when the visitor is logged in, and `news` on 30 October 2026 for the Magazin link in the header menu.

## Licence

Tabler Icons is distributed under the MIT licence, which asks that this notice travels with the files:

```
MIT License

Copyright (c) 2020-2026 Paweł Kuna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
