# **uWeed — Design Tokens**

**Version 1.8** · Supersedes v1.7

## **Changelog — v1.7 → v1.8**

- **Headless browsers report pointer: none**, so every gated hover rule reads as dead in tooling. Recorded next to the gating rule, because it produces convincing false bug reports.

- **Nested & in Sass carries the whole compound selector**, so & + & inside a descendant block compiles to a selector that can never match. Silent failure.

## **Changelog — v1.6 → v1.7**

- **The approved-pairings table was wrong in twelve of eighteen rows** and is now computed rather than estimated. One verdict changed: --medium-red with white is 4.14:1, so **the sale badge is below AA** and needs a decision.

- **8-digit hex compiles to rgba() through Sass.** The notation rule holds in source; the compiled output will not match it, and verify-tokens.sh checks source for that reason.

## **Changelog — v1.5 → v1.6**

- **Invariants belong on the base class**, modifiers set only what differs.

- **Visually hidden and hidden from assistive technology are not the same thing.** display: none removes an element from the accessibility tree; clipping does not. This theme conflates them in at least one global rule.

## **Changelog — v1.4 → v1.5**

- **Rocket delay exclusions documented as part of a component's spec.** Four scripts now carry one; the rule is that interaction-critical JS cannot be delayed until the interaction it handles.

- **Import order is specification.** \_carousel-compat.scss must load late; a partial overriding a third-party contract needs its position stated.

## **Changelog — v1.3 → v1.4**

- **--lift-hover flagged as a missing token.** translateY(-2px) has three consumers and no token.

- **Two specificity traps recorded in doc 09** — prefers-reduced-motion losing to a more specific base rule, and :not() inheriting its argument's specificity. Both fail silently; both need computed-value verification rather than a stylesheet read.

## **Changelog — v1.2 → v1.3**

- **Part 8 rewritten.** The four systems it listed as deliberately not tokens — focus rings, motion, z-index and container widths — have all shipped. It now documents them instead of excluding them.

- **New Part 8b.** Where raw values still are: 69 off-palette literals across four files, and a note on why the earlier count of 19 was out by a factor of five.

- **Focus ring precedence recorded.** The implementation followed this document over the audit card on ring width. That is the correct order and is written down so it does not read as a mistake.

## **Changelog — v1.1 → v1.2**

- **Hairline conflict recorded.** Two values are in circulation for the same token; this must close before three separate cards ship.

- **Naming declared canonical.** --dark-green, not --uw-green-dark.

- **Hover gating measured** — 273 ungated rules across 33 files. The requirement holds for the primitives, not the site.

## **Changelog — v1.0 → v1.1**

- **Part 2 gains a "means" column.** Each family now has one stated job rather than a list of places it appears.

- **Pink reassigned** from "campaign and editorial accent only, never a system state" to **the editorial section colour**, paralleling green as the shop's.

- **Orange named** — earned recognition. Describes what was already live, and states explicitly that it is not a warning colour.

- **Favourites count moved to green**, joining the cart count. Both are commerce; pink is editorial with no personal exception.

- **Out of stock moved to grey.** Red is for things needing action; availability is a fact.

- **Filter and sort controls assigned to blue** — they change the view, which is navigation, not commerce.

- **Two new rules:** *saturated on controls, tint on labels*, and *inactive is not grey*. Both describe behaviour the system already had without ever writing it down.

**Scope:** the token layer. Colour, elevation, radius, spacing, typography scale, breakpoints, and the naming and notation conventions that govern all of them. This is the single place a value is declared; everything else references it.

**Not in this document:** brand meaning of colour and when to use which family (→ 01 Brand Strategy) · on-page SEO elements (→ 06 SEO Elements) · component anatomy and states (→ 09 Component Library) · surface dimensions and export specs (→ 10 Surface Formats) · logo, photography and illustration (→ 11 Visual Identity) · voice and register (→ 04 Tone of Voice).

**Source of truth for implementation:** the :root block in the uWeed theme SCSS. This document and that block must agree. Where they disagree, the block is what ships and this document is wrong — fix it here rather than patching around it.

> **State, as of v1.0 — read this before building anything.**
>
> This document describes the **target** token layer, not what is currently live. The following are specified here but **not yet in the theme**: --white at \#FFFFFF, --line, the five --shadow-\* tokens, --radius-pill, the 16px card radius, and the removal of Poppins 400/500.
>
> They ship together via the Technology Roadmap card *Design token corrections — colour drift, orange consolidation, Poppins weight removal*. Until that deploys, a mockup or component built strictly against this document will not match production.
>
> **One value here is still pending sign-off:** the 16px card radius. Cards currently run 20/30/40/50px, and moving them to a single 16px is the only visible change in the corrections spec. If that decision goes the other way, Part 3 needs revising.

# **Part 1 · The rule**

**Never write a raw value where a token exists.** Not in production CSS, not in a mockup, not in a Figma frame, not in a campaign asset.

Three reasons this is stricter than it looks:

1.  A raw value is invisible to search. Nobody can answer "where is this colour used" until it is a token.

2.  A raw value near a token is worse than either alone. \#0d132d sitting beside var(--dark-blue) looks deliberate and is not.

3.  Drift is silent. A colour 3% off reads as correct in isolation and wrong beside the real one. Nobody reports it; it just accumulates.

**Introducing a token requires sign-off.** Adding --line took a documented decision because a new value is a permanent commitment. Reusing a value that already exists never does.

# **Part 2 · Colour**

## **The palette**

Every colour uWeed uses. There are no others.

| **Family** | **Dark** | **Medium** | **Light** |
|------------|----------|------------|-----------|
| **Blue**   | \#0B102A | \#334BC1   | \#CED4F3  |
| **Green**  | \#286754 | \#4ABD9A   | \#D1EFE5  |
| **Pink**   | \#78596F | \#DBABCF   | \#F4E2ED  |
| **Orange** | —        | \#FFA033   | \#FFF5EB  |
| **Red**    | —        | \#EE2E31   | \#FDEDED  |
| **Grey**   | \#3D3D3D | \#999999   | \#F5F5F5  |
| **Black**  | \#000000 | —          | —         |
| **White**  | \#FFFFFF | —          | —         |

--dark-blue: \#0B102A; --medium-blue: \#334BC1; --light-blue: \#CED4F3;

--dark-green: \#286754; --medium-green: \#4ABD9A; --light-green: \#D1EFE5;

--dark-pink: \#78596F; --medium-pink: \#DBABCF; --light-pink: \#F4E2ED;

--medium-orange: \#FFA033; --light-orange: \#FFF5EB;

--medium-red: \#EE2E31; --light-red: \#FDEDED;

--dark-gray: \#3D3D3D; --medium-gray: \#999999; --light-gray: \#F5F5F5;

--black: \#000000; --white: \#FFFFFF;

## **Semantic aliases**

Three tokens that point at palette values rather than holding their own.

--font-color: var(--dark-gray); /\* body copy \*/

--heading-color: var(--dark-blue); /\* headings \*/

--line: \#E7E7E9; /\* hairline borders and dividers — SEE CONFLICT BELOW \*/

--line is the one token that is not a palette colour. It fills a genuine gap: the brand book jumps from \#F5F5F5 to \#999999, and a 1px border needs something between. Its value is the grey the theme was already using in ~80 places, so adopting it changed nothing visually.

## **What each family means**

Meaning, not decoration. Using green for an error would be wrong even if it looked fine.

| **Family** | **Means** | **Carries** |
|----|----|----|
| **Blue** | Brand, structure, navigation | Headings · navigation · links · focus rings · nav buttons · tab nav active · breadcrumb current · **filter and sort controls** · overlay surfaces (tooltip, modal, dropdown panel) · selected rows in a panel |
| **Green** | Commerce — the purchase path | Add to cart · checkout · place order · **cart and favourites counts** · in-stock · "new" badge · price on a product tile · loyalty balance |
| **Pink** | Editorial — the magazine | Blog category chips · blog section eyebrows · blog tab nav active · related-article headers · editorial blocks on shop pages |
| **Orange** | Earned recognition | Rating stars · bestseller · top-rated · loyalty tier · referral |
| **Red** | Alarm and reduction | Form errors · destructive actions · sale price · discount badge |
| **Grey** | Surface, structure, unavailability | Backgrounds · borders · dividers · disabled controls · metadata · attribute chips · **out of stock** · closed accordion triggers |

**Each family has one job.** A colour that means two things means neither. Green is the clearest case: it is the only reliable signal that something adds to the cart, and every additional use spends a little of that.

**Pink is the editorial section colour**, paralleling green as the shop's — which the palette already implies by naming it *Green (CBD Shop)*. It marks which part of the site you are in, not what will happen if you click. **Pink is never a button.**

**Orange is not a warning.** Amber-as-caution is a common convention and it is not the one in use here — that is red's job, and orange beside a red error would muddy both. Orange also has no dark tone, so orange fills always take --dark-blue text, which keeps it to badges and marks rather than surfaces.

**Out of stock is grey, not red.** Red is for things that need action or attention. Out of stock needs neither — it is a fact about availability, which is what grey covers.

## **Hover must be gated, and mostly is not**

Every hover effect belongs inside @media (hover: hover) and (pointer: fine). Without it, :hover sticks after a tap on touch and stays until the visitor taps something else — so a card they scrolled past keeps its lifted state.

> **Measured during the primitives build: 273 ungated :hover rules remain across 33 files.**

| **File**               | **Rules** |
|------------------------|-----------|
| \_product-page.scss    | 41        |
| \_new_header_menu.scss | 20        |
| \_filters.scss         | 19        |
| \_blog-archive.scss    | 17        |
| 29 other files         | 176       |

> Clean: the primitives, their aliases, \_buttons.scss and \_forms.scss. **The gating requirement therefore holds for the primitives and not for the site.**
>
> **Headless Chrome reports pointer: none, so this gate legitimately fails in tooling.** Every hover rule in the theme reads as dead when inspected headlessly, and an automated "hover does nothing" report is expected rather than a defect. Verify hover with a real pointer, or by temporarily removing the gate — never by reading the computed style in a headless browser.
>
> The same is true on a touch-capable laptop, where the gate fails by design. Worth knowing before chasing a hover bug that is the rule working.
>
> Five of these were fixed opportunistically during the primitives pass — .add-to-cart, .btn-favorites, .btn-icon twice and .btn-icon-white — because .add-to-cart is the most-tapped control on a listing page and a sticky hover there is the exact failure the rule exists to prevent.

## **Open conflict — the hairline has two values**

> Two hexes are in circulation for the same token, both described as "the hairline":

| **Source**                     | **Token** | **Value** |
|--------------------------------|-----------|-----------|
| This document                  | --line    | \#E7E7E9  |
| Search bar and mini cart specs | --uw-line | \#E4E4E4  |

> \#E7E7E9 carries the palette's blue tint, consistent with the shadow scale being \#0B102A-tinted. \#E4E4E4 is neutral grey and was proposed first, for the mini cart.
>
> **Recommendation: \#E7E7E9**, on tint consistency. Either is defensible; shipping both is not.
>
> **This must close before the token-corrections card, the mini cart or the search bar ships** — all three write a hairline, and whichever lands first sets the value by accident.

## **Put invariants on the base class**

Where a component has properties that **every** variant must carry, they belong on the base class, and modifiers set only what differs.

.uw-price is the worked example: the base carries color: var(--dark-blue) and font-variant-numeric: tabular-nums; the four role modifiers set size and weight only. Both invariants are inherited by every role, so neither can be omitted by whoever adds a fifth role next year.

**A modifier that has to re-declare an invariant is a modifier that will eventually not.**

## **Naming is canonical here**

Some component specs use a --uw- prefix with reversed word order — --uw-green-dark for what this document calls --dark-green. **This document's names are canonical.** The prefixed forms are a translation layer to remove during implementation, not a second system to maintain.

## **Two rules that decide which treatment**

### **Saturated on controls, tint on labels**

| **Channel** | **Treatment** | **Says** |
|----|----|----|
| **Control** — something you click | Saturated fill, --dark-\*, white text | What will happen |
| **Label** — something you read | Light tint, --light-\*, dark text | What kind of thing this is |

This is what lets a light-green category chip sit beside a dark-green add-to-cart button without contradiction. They are not confusable — different saturation, size and shape — and the family says "green world" while the treatment says which channel.

An applied filter is a control in an on state, so it takes the saturated fill. The chip listing that applied filter below the row is a label describing state, so it stays a tint.

### **Inactive is not grey**

Grey means **unavailable**. A control that is available but not currently doing anything is in its rest state, and rest must look clickable — white surface, hairline border, dark text.

The distinction matters most on filter pills, where an unapplied filter and a filter with no options would otherwise look identical, and the more important of the two loses.

## **Rules**

- **One red.** \#EE2E31 covers sale, error and destructive. There is no separate softer validation red.

- **Light tints are backgrounds, never text.** \#FDEDED, \#D1EFE5, \#CED4F3, \#FFF5EB, \#F4E2ED fail contrast as type at any size.

- **White is \#FFFFFF.** --light-gray (#F5F5F5) is a surface colour and is not interchangeable with it.

- **Text on a dark surface is white**, not near-white.

- **Contrast is checked, not assumed.** Body text 4.5:1, large text and UI 3:1. Orange, green and pink mid-tones fail with white text — pair them with --dark-blue.

## **Approved pairings**

> **Corrected in v1.7. Twelve of the eighteen rows below were wrong**, and one changed a verdict.
>
> The original figures were estimated rather than computed. Most were out by 0.1–1.1, which does not change anything — but **--medium-red with white is 4.14:1, not 4.5:1**, and that is the difference between passing AA and failing it. Every figure here is now computed from the WCAG 2.1 relative-luminance formula.
>
> **The lesson is the method, not the number.** A contrast table is the one place in a design system where "close enough" produces a compliance failure, and eyeballing a ratio is not checking it.

| **Background** | **Text** | **Ratio** | **Verdict** |
|----|----|----|----|
| --dark-blue | --white | 18.72:1 | ✅ |
| --light-orange | --dark-blue | 17.39:1 | ✅ |
| --light-blue | --dark-blue | 12.78:1 | ✅ |
| --white | --dark-gray | 10.86:1 | ✅ body default |
| --light-gray | --dark-gray | 9.96:1 | ✅ |
| --medium-orange | --dark-blue | 9.21:1 | ✅ |
| --white / --medium-blue | either direction | 7.20:1 | ✅ links |
| --dark-green | --white | 6.65:1 | ✅ |
| --dark-pink | --white | 6.07:1 | ✅ |
| --light-green | --dark-green | 5.44:1 | ✅ |
| --light-pink | --dark-pink | 4.90:1 | ✅ |
| **--medium-red** | **--white** | **4.14:1** | ⚠️ **large text only — see below** |
| --light-red | --medium-red | 3.65:1 | ⚠️ large text only |
| --medium-gray | --white | 2.85:1 | ❌ UI only, never text |
| --medium-green | --white | 2.32:1 | ❌ use --dark-blue |
| --medium-pink | --white | 1.96:1 | ❌ use --dark-blue |
| --medium-orange | --white | 2.03:1 | ❌ use --dark-blue |
| --light-\* (any) | --white | \<1.5:1 | ❌ backgrounds only |

**The rule that falls out of this:** a medium tone as background takes --dark-blue text. A dark tone takes white. Never white on a medium.

### **Open — the sale badge is below AA**

--sale is white on --medium-red at --fs-meta (13px) bold. **WCAG large text starts at 24px, or 18.66px bold**, so 13px bold is normal text and needs 4.5:1. It has 4.14:1.

Nothing shipped wrong against the old table — the old table was wrong. Four ways out:

| **Option** | **Effect** |
|----|----|
| **Darken the red to \#D6252A** | White reaches 5.05:1, and --light-red pairings improve to 4.45:1. Changes one palette value used in five places. |
| **--dark-blue text on --medium-red** | 4.52:1 — passes, barely. But a dark-blue-on-red badge reads as a different component. |
| **Add a --dark-red for badge fills only** | Keeps --medium-red for borders and text. A new token, which Part 1 sets a high bar for. |
| **Accept and document** | Defensible for a decorative marker; not defensible for a price reduction, which is information. |

**Recommendation: darken the red.** One value, five consumers, no new token, and it improves the --light-red pairing at the same time. The visible difference at a glance is very small; the compliance difference is binary.

**This is its own card**, not a fix to fold into another. It touches sale badges, discount chips, error borders and the favourites heart.

## **Disabled state**

One palette for every disabled control. Already defined in practice; stated here so it stops being re-derived per component.

| **Property** | **Token**     |
|--------------|---------------|
| Background   | --light-gray  |
| Text         | --medium-gray |
| Border       | --medium-gray |
| Cursor       | not-allowed   |

Disabled is communicated by **colour and cursor together**, never colour alone. Opacity is not a disabled state — it dims the label as well as the control and produces unpredictable contrast against whatever sits behind.

# **Part 3 · Elevation and radius**

## **Shadow**

Five steps. All tinted with the brand dark blue rather than pure black, because a black shadow on a blue-based palette reads muddy.

--shadow-xs: 0 1px 2px \#0B102A0F;

--shadow-sm: 0 2px 4px \#0B102A0F, 0 1px 2px \#0B102A0A;

--shadow-md: 0 4px 10px \#0B102A1A;

--shadow-lg: 0 10px 24px \#0B102A1F;

--shadow-xl: 0 20px 48px \#0B102A29;



| **Token**   | **Use**                         |
|-------------|---------------------------------|
| --shadow-xs | Card at rest                    |
| --shadow-sm | Raised surface inside a card    |
| --shadow-md | Card on hover                   |
| --shadow-lg | Dropdown, popover, notification |
| --shadow-xl | Modal, cart drawer              |

**A lift needs a shadow change.** Moving an element with translateY while the shadow stays identical reads as a rendering glitch, not depth. Hover states pair translateY(-2px) with a step up the scale.

> **-2px should be a token and is not.** The same lift appears on the card, the blog card and the tiles — three consumers, which is this document's bar for introducing one. --lift-hover: -2px, to close with the token-corrections card.

**Hover is gated to pointer devices.** On touch, :hover sticks after a tap until the user taps elsewhere.

@media (hover: hover) and (pointer: fine) { … }

## **Radius**

****--radius-checkbox: 6px; /\* checkboxes, small chips \*/

--radius-inner: 10px; /\* nested elements inside a card \*/

--radius-control: 12px; /\* inputs, selects, small buttons \*/

--radius-card: 16px; /\* cards, panels, modals \*/

--radius-pill: 999px; /\* buttons, tags, avatars, dots \*/

Cards are 16px. Buttons are full pills. There is no 20px, 30px, 40px or 50px.

## **Border width**

Three widths, same reasoning as radius — the theme currently runs 1px, 2px, 2.5px and 3px with no rule.

--border-hairline: 1px; /\* dividers, card borders, inputs at rest \*/

--border-emphasis: 2px; /\* selected states, focus, active variant cards \*/

--border-heavy: 3px; /\* focus ring on dark surfaces only \*/

A border that changes width on hover or selection shifts layout. Change the **colour** and keep the width, or reserve the thicker border at rest with a transparent colour.

# **Part 4 · Spacing**

An 8px base, with a 4px half-step at the bottom.

--space-2xs: 0.25rem; /\* 4px \*/

--space-xs: 0.5rem; /\* 8px \*/

--space-s: 0.75rem; /\* 12px \*/

--space-m: 1rem; /\* 16px \*/

--space-l: 1.5rem; /\* 24px \*/

--space-xl: 2rem; /\* 32px \*/

--space-2xl: 3rem; /\* 48px \*/

--space-3xl: 4.5rem; /\* 72px \*/

--space-3xl-mobile: 3.6rem; /\* ~58px \*/



| **Range** | **Use**                                                      |
|-----------|--------------------------------------------------------------|
| 2xs–s     | Inside a component — icon gaps, chip padding, label to field |
| m–l       | Between components — card padding, form row gaps             |
| xl–2xl    | Between blocks within a section                              |
| 3xl       | Between page sections                                        |

**Spacing uses rem, borders and shadows use px.** Spacing scales with the reader's browser font size, which is an accessibility requirement. A 1px border scaling to 1.3px is a rendering artefact.

**Prefer gap over margins** in flex and grid. It removes the last-child problem entirely.

# **Part 5 · Typography**

## **Families**

****--ff-heading: 'Poppins', system-ui, sans-serif;

--ff-body: 'DM Sans', system-ui, sans-serif;

Poppins sets headings. DM Sans sets everything else — body, navigation, labels, buttons, prices, metadata.

## **Weights**

****--fw-semibold: 600; /\* Poppins: H5, H6, eyebrows \*/

--fw-bold: 700; /\* Poppins: H3, H4 \| DM Sans: CTA, prices, strong \*/

--fw-extrabold: 800; /\* Poppins: Display, H1, H2 \*/

--fw-regular: 400; /\* DM Sans: body \*/

--fw-medium: 500; /\* DM Sans: nav, labels, table headers, UI \*/

**Poppins is never used below 600.** At lighter weights it stops reading as a heading face and competes with body copy. Poppins 400 and 500 are not loaded, so a rule asking for them silently renders at 600 — font-synthesis: none means no faux-bold to make the mistake visible.

**DM Sans 600 is deliberately excluded** — too close to 700 to distinguish, and it costs a font file.

Six faces total: Poppins 600/700/800, DM Sans 400/500/700. Subset latin + latin-ext; latin-ext is required for German and French accents.

## **Scale**

Fluid between 375px and 1280px via clamp(). No breakpoints — there is a defined size at every width.

| **Element** | **Mobile** | **Desktop** | **Family** | **Weight** | **Line height** | **Tracking** |
|----|----|----|----|----|----|----|
| Display | 36px | 64px | Poppins | 800 | 1.02 | −0.045em |
| H1 | 30px | 48px | Poppins | 800 | 1.10 | −0.04em |
| H2 | 25px | 38px | Poppins | 800 | 1.15 | −0.03em |
| H3 | 21px | 30px | Poppins | 700 | 1.20 | −0.025em |
| H4 | 19px | 24px | Poppins | 700 | 1.25 | −0.02em |
| H5 | 17px | 20px | Poppins | 600 | 1.30 | −0.015em |
| H6 | 16px | 18px | Poppins | 600 | 1.35 | −0.01em |
| Lead | 17px | 19px | DM Sans | 400 | 1.55 | 0 |
| Body | 16px | 16px | DM Sans | 400 | 1.6 | 0 |
| Small | 14px | 14px | DM Sans | 400 | 1.5 | 0 |
| Meta | 13px | 13px | DM Sans | 400 | 1.45 | 0 |
| CTA | 16px | 16px | DM Sans | 700 | 1 | +0.04em |

**Tracking relaxes as size drops.** −0.04em on an 18px H6 reads as a rendering fault.

**Body copy never below 16px.** --fs-meta (13px) is the floor and is for UI metadata, not prose.

**Uppercase always takes positive tracking** (--ls-caps, +0.04em). Without it, capitals read as a solid block.

## **Semantic level vs visual size**

The heading *element* is chosen for document structure and SEO. The *size* is chosen by the component. A card title stays \<h3\> and takes a component token.

Without this rule, headings get picked for how big they look, which damages both the visual system and the document outline.

# **Part 6 · Breakpoints and layout**

**Breakpoints are Bootstrap 5.3's.** The theme runs on Bootstrap; defining a parallel set would guarantee drift.

| **Token**           | **Width** |
|---------------------|-----------|
| --bs-breakpoint-sm  | 576px     |
| --bs-breakpoint-md  | 768px     |
| --bs-breakpoint-lg  | 992px     |
| --bs-breakpoint-xl  | 1200px    |
| --bs-breakpoint-xxl | 1400px    |

**Type does not use them** — clamp() covers every width continuously. They are for layout: column counts, stacking, nav collapse.

**Detect the input, not the width.** A 1024px iPad is a touch device; a 1024px laptop is not. Width tells you about layout and nothing about interaction.

@media (hover: hover) and (pointer: fine) { /\* hover effects are safe \*/ }

@media (pointer: coarse) { /\* 44×44px minimum tap target \*/ }

**Measure.** --measure: 68ch caps running text. Line length beyond ~75 characters costs comprehension.

# **Part 7 · Naming and notation**

## **Naming**

Flat and descriptive: --{scale}-{modifier}.

--dark-blue not --color-blue-dark, --uw-blue-900, --blue-dark

--space-l not --spacing-large, --sp-4

--radius-card not --border-radius-card

--shadow-md not --elevation-2

No namespace prefix. The convention is established across the whole theme, and a single prefixed token among sixty flat ones is worse than consistency.

## **Notation**

**Every colour is hex, including alpha.** Use 8-digit \#RRGGBBAA, never rgba().

box-shadow: 0 4px 10px \#0B102A1A; /\* not rgba(11, 16, 42, 0.10) \*/

Two reasons: every colour stays greppable as a single string, and "no rgba() remains" is a check that either passes or does not, rather than a judgement call.

Common alpha values: 0D ≈ 5% · 1A ≈ 10% · 33 ≈ 20% · 4D ≈ 30% · 80 = 50% · CC ≈ 80%.

**Lowercase hex in source, uppercase in documentation.** The compiler does not care; readers do.

## **Nested & carries the whole compound selector**

& + & written inside a nested block does not mean "this class plus the next one". Sass expands each & to the full compound selector built so far, so inside .uw-tile\_\_variant-panel .uw-tile\_\_variant-row it compiled to:

.uw-tile\_\_variant-panel .uw-tile\_\_variant-row + .uw-tile\_\_variant-panel .uw-tile\_\_variant-row

— a selector that can never match, because a panel cannot be a sibling of a row inside itself.

**It fails silently.** No error, no warning; the gap between variant rows simply never appeared, and a selected row and a hovered row below it merged into one block. **Write sibling combinators longhand** when the parent is a descendant selector.

> **Sass rewrites 8-digit hex to rgba() on compile.** \#FFFFFF33 comes out as rgba(255,255,255,0.2). This is pre-existing and applies to every 8-digit hex in the theme.
>
> **The rule therefore governs source, not output**, and verify-tokens.sh checks the SCSS for exactly that reason. A grep for rgba( in compiled CSS will always find some, and that is not a violation.

# **Part 8 · The four systems that were not tokens**

v1.0 of this document listed z-index, motion, container widths and focus rings as deliberately excluded — each needed a decision or an audit before it could be a token. **All four have now shipped.** This part replaces that exclusion list.

## **Focus rings**

styles/common/\_focus.scss, imported third — before every component.

| **Property** | **Light surfaces**      | **Dark surfaces**    |
|--------------|-------------------------|----------------------|
| Colour       | --medium-blue           | --white              |
| Width        | --border-emphasis (2px) | --border-heavy (3px) |
| Offset       | 2px                     | 2px                  |
| Mechanism    | outline                 | outline              |

Three mixins: uw-focus-ring, uw-focus-ring-on-dark, uw-focus-ring-shadow.

**outline by default, box-shadow only where a clipped container demands it** — the search field (doc 09 §34) and inside the cart drawer. An outline on a clipped ancestor gets cut; a shadow does not.

**:focus-visible everywhere.** The one exception is the tooltip trigger, which uses :focus deliberately so it fires on tap (doc 09 §12).

**A zero-specificity :where() floor** sits underneath, so a component that removes its ring locally still has one beneath it. One floor, in one file.

> **The implementation diverged from the audit card, and this document is why.** The card specified 3px on light surfaces. Doc 08 scopes --border-heavy to dark surfaces and names --border-emphasis as the focus width, so the build followed the token document rather than the card. That is the correct precedence — recorded here so the discrepancy does not read as a mistake.

**No new tokens were needed.** Part 1 sets a high bar for introducing one, and the existing border widths and palette covered it.

## **Motion**

styles/common/\_motion.scss, imported last.

--motion-fast: 150ms; /\* state changes — colour, border, opacity \*/

--motion-base: 250ms; /\* panels, disclosure, transforms \*/

--motion-slow: 400ms; /\* full-surface transitions \*/

--motion-ease: cubic-bezier(0.4, 0, 0.2, 1);

**296 durations and 243 easings migrated across 35 partials** — 550 token references, with two raw values remaining, both deliberate 0s.

### **Reduced motion is a global policy, not a per-component habit**

****@media (prefers-reduced-motion: reduce) {

/\* everything clamped to 0.01ms; marquees stopped outright \*/

}

**Spinners are the exception** — they keep turning, slower, because a spinner conveys state and removing it removes information (doc 09 §30).

> **Verify by forcing the setting, not by reading the CSS.** A prefers-reduced-motion block only wins if its selector is at least as specific as the rule it cancels, and when it loses it fails silently. See doc 09, Part 1.

### **The marquee kept its animation and gained a pause control**

WCAG 2.2.2 requires a mechanism to stop moving content. The control is a **CSS-only checkbox — no JavaScript**, because header.js is deferred 30 seconds on PDPs and WP Rocket delays inline scripts until first interaction. A JS pause button would not exist when the marquee starts moving.

It therefore works with JavaScript disabled. Positioning is mirrored into critical.css and pdp-critical.css to avoid a first-paint shift.

## **Z-index**

Eleven tokens. **41 declarations migrated; one raw value remains — a third-party 1000, documented as theirs rather than adopted as ours.**

****--z-behind: -1;

--z-base: 0;

--z-raised: 1;

--z-overlap: 10;

--z-sticky: 1020;

--z-header: 1030;

--z-panel: 1035;

--z-tooltip:1046;

--z-backdrop:1050;

--z-modal: 1055;

--z-drawer: 1060;

--z-toast: 1090;

The ordering is what the components require: a tooltip sits above a panel so a tooltip on a filter is visible; a toast sits above everything because it confirms an action that may have opened a modal.

**Seven defects closed:**

| **Defect** | **Resolution** |
|----|----|
| Header tied with Intercom at exactly 1000, resolved by DOM order | Header → --z-header (1030) |
| Spinners at 9999 painting over modals at 1055 | → --z-overlap |
| 9999 / 10000 / 10001 escalation with !important | Collapsed, !important removed |
| Cart drawer at 99999 | → --z-drawer (1060) |
| .sort-dropdown declared twice (11 and 1001 !important) | Reconciled |
| Dead .out-of-stock-overlay declaration | Removed |
| \#reviews_fade at 5989 | → --z-modal |

**56 in-card values in the 1–20 band were left alone.** They are local stacking inside a component and do not interact with the page-level scale.

## **Container widths**

| **Breakpoint** | **Was** | **Now**    |
|----------------|---------|------------|
| xl             | 1200px  | **1120px** |
| xxl            | 1400px  | **1280px** |
| ≥1640          | —       | **1464px** |

--container-wide: 1770px replaces three literals. The custom 1441px and 1501px boundaries are gone, the !important is gone, and the unowned 1501–1639 band — which fell through to Bootstrap's 1320px — is gone.

> **The 160px jump is relocated, not removed.** It now sits at 1399 → 1400 (1120 → 1280px) instead of 1440 → 1441. Removing it entirely needs a fluid container, which is a design decision rather than a token one.

## **WP Rocket exclusions are part of a component's spec**

Four scripts now carry a Rocket delay exclusion, and the reason is the same each time: **interaction-critical JavaScript cannot be delayed until first interaction, because the interaction is the thing it handles.**

| **Script** | **Why it cannot wait** |
|----|----|
| uw-tooltip.js | Escape-to-dismiss and edge fitting. A delayed script leaves the tooltip unclosable. |
| uw-gallery.js | The lightbox opens on the first tap of the main image. |
| uw-carousel.js | Arrows and the progress thumb. |
| uw-form-field.js | Blur validation on the first field touched. |

The marquee pause control avoided the problem differently — it is CSS-only, so there is nothing to delay. **Where a component needs JavaScript on first interaction, the exclusion belongs in its spec**, not discovered later when someone reports that a control does nothing for the first few seconds.

## **Still not tokens**

- **Animation durations.** Only transitions are tokenised. Marquees are per-breakpoint by nature, and Bootstrap's vendor values are untouched.

- **Scattered max-widths.** Only 1770px is named. \#quickView 1200, .quick-view-wrap 1150, .faq-items 904, brand and showcase 800 remain as literals.

# **Part 8b · Where raw values still are**

Part 1 says never write a raw value where a token exists. That rule now holds across the systems above, and does not yet hold everywhere.

> **69 off-palette literals remain**, concentrated in four files: \#666 ×8, \#333 ×7, \#fafafa ×4, \#f7faf9 ×4, \#6b6f80 ×4, \#999 ×4, and a long tail.
>
> **An earlier count said 19.** That figure counted only the named Tailwind hexes already spotted; the real number was 96, of which 27 have since been mapped. **The correction matters more than the number** — a count taken by looking for what you already know is there will always undercount, and this one was out by a factor of five.

**Closed in this pass:** 19 named Tailwind literals → 0 · \#9ca3af ×3 → --dark-gray, including in pdp-critical.css · --base-font, --base-font-size and --green were all silently dead and are now real tokens · --height documented as JS-written with an auto fallback.

**Duplicate keyframes collapsed:** fadeIn ×4 → 1, countUpdate ×2 → 1, all byte-identical. In pdp-critical.css, fadeIn ×2 → 1 and marquee ×4 → 1.

# **Part 9 · QA checklist**

**Colour**

- \[ \] Every colour is a token or a documented palette hex — no raw off-palette values

- \[ \] No rgba(); alpha is 8-digit hex

- \[ \] Light tints used only as backgrounds, never as text

- \[ \] Body text 4.5:1, large text and UI 3:1

- \[ \] Nothing relies on colour alone to convey meaning

**Type**

- \[ \] Poppins only at 600, 700 or 800

- \[ \] Body copy at 16px or above

- \[ \] Uppercase carries --ls-caps

- \[ \] Heading element chosen for structure, size chosen by component

- \[ \] German checked for wrapping — longest strings of the three languages

**Space and shape**

- \[ \] Spacing from the scale; no arbitrary px

- \[ \] Spacing in rem, borders and shadows in px

- \[ \] Radius from the five tokens

- \[ \] Every translateY lift pairs with a shadow change

- \[ \] Hover effects gated behind (hover: hover) and (pointer: fine)

- \[ \] Tap targets 44×44px minimum under (pointer: coarse)

**Motion, focus and layering**

- \[ \] Durations and easings from the motion tokens; no raw ms

- \[ \] prefers-reduced-motion verified by forcing the setting, not by reading the CSS

- \[ \] The reduced-motion selector is at least as specific as the rule it cancels

- \[ \] Any rule styling a \<p\> clears (0,3,0) — the theme's p:not(...) is (0,2,1)

- \[ \] Verified as a computed value, not by reading the stylesheet

- \[ \] Progressive enhancement tested with JavaScript **disabled**, not only enabled

- \[ \] Interaction-critical scripts carry a WP Rocket delay exclusion

- \[ \] Partials that override a third-party contract are imported late, and said so

- \[ \] Visually-hidden text is clipped, never display: none

- \[ \] Component invariants sit on the base class, not repeated across modifiers

- \[ \] A class that JavaScript toggles is aliased, not deleted

- \[ \] Hover verified with a real pointer, not in a headless browser

- \[ \] Sibling combinators written longhand where the parent is a descendant selector

- \[ \] Every interactive element has a visible focus ring — :focus-visible, not :focus

- \[ \] No outline: none or box-shadow: none on focus without a replacement

- \[ \] Z-index from the scale; no raw values except documented third-party numbers

- \[ \] Container width from the scale; no custom breakpoint boundaries
