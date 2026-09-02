# uWeed Design System — Source of Truth

This repository holds the uWeed design documentation. Any design, mockup, component, page, or visual work produced in this repo (including Claude Design canvases and generated artifacts) MUST take its tokens, components, and guidelines from these files. Do not invent values, colors, spacing, or component patterns that are not defined here.

## The three sources

| File | What it is | Authority |
|------|-----------|-----------|
| `UWEED-08-Design-Tokens-v1.md` | Design tokens: full color palette, typography, spacing, radii, shadows, borders, z-index scale, breakpoints, and the rules for using them | The ONLY place values are declared |
| `UWEED-09-Component-Library-v0.1.md` | Component library: anatomy, variants, states, token usage, reference HTML/CSS, responsive behaviour, and accessibility requirements for every reusable component | The ONLY place component patterns are defined |
| `component-gallery-primitives.html` | Rendered companion to doc 09 — every variant and state, live, built from the same CSS. Open it in a browser to see the target | Doc 09 and the gallery must agree; a difference between them is a bug in one of them |

## Hard rules for any design work in this repo

1. **Declare no values.** Every color, size, space, radius, and shadow references a token from doc 08. If something appears to need a value with no token, that is a finding about doc 08 — record it, do not write a literal.
2. **Copy the reference implementations.** When building a component that exists in doc 09 / the gallery, start from its reference HTML and CSS (`uw-*` classes) rather than re-designing it.
3. **Color is semantic:** green advances a purchase, blue navigates, pink is the category/editorial color, orange is rating/caution, red is alarm/reduction. Green never navigates; blue never adds to cart. Mid-tone colors never take white text (contrast failures documented in doc 09 §5).
4. **Inactive is not grey.** Rest-state controls stay white; grey means unavailable.
5. **German copy first** — it is the longest of the three languages and breaks layouts first. Never size controls to English labels (`--btn-min-width` is a floor, not a width).
6. **Accessibility is part of the spec:** 44px minimum tap targets, `:focus-visible` rings (white inside `.on-dark`), `fieldset`+`legend` on radio groups, real `<button>` elements for interactive triggers, `prefers-reduced-motion` respected.
7. **Fonts:** Poppins for headings, DM Sans for body — loaded from Google Fonts, weights per doc 08.
8. The gallery's `g-*` classes are gallery chrome only; the library is the `uw-*` classes.

## Reference artifact

The live rendered gallery is also published as a Claude artifact:
https://claude.ai/public/artifacts/6f583f52-2c2e-4f81-ac39-b64ca3f8503a

`component-gallery-primitives.html` in this repo is the same document and is the canonical, versioned copy.

## Source files

`UWEED-08-Design-Tokens-v1.md.docx` and `UWEED-09-Component-Library-v0.1.md.docx` are the original exports the markdown files were converted from. The markdown files are the working copies; when the docx exports are updated, re-convert them (pandoc, `-f docx -t gfm --wrap=none`) rather than editing markdown and docx independently.
