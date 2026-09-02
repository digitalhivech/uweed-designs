# **uWeed — Component Library**

**Version 0.1 — draft, primitives only**

**Scope:** the reusable interface components of uweed.ch. Anatomy, variants, states, the tokens each one consumes, a reference implementation, responsive behaviour, and accessibility requirements.

**Not in this document:** token values themselves (→ 08 Design Tokens) · surface dimensions and export specs (→ 10 Surface Formats) · logo, photography, illustration (→ 11 Visual Identity) · copy inside components (→ 04 Tone of Voice, 05 Localisation Rules) · page templates and layout.

**Relationship to doc 08:** this document declares no values. Every colour, size, space, radius and shadow references a token. If a component appears to need a value that has no token, that is a finding about doc 08, not a licence to write a literal.

# **How to read this**

Each component follows the same shape:

**Anatomy** — the parts, named. **Variants** — what changes and when to use each. **States** — only those that apply. Never invent states a component doesn't have. **Tokens** — every value, referenced. **Implementation** — copy-pasteable HTML and CSS. **Responsive** — what changes at which breakpoint. **Accessibility** — roles, labels, keyboard, contrast, tap target. **Don't** — specific misuses, drawn from what is currently live.

The **Don't** sections are not padding. Most problems found in the audit were not missing rules but rules that exist and are contradicted elsewhere.

## **The gallery**

This document ships with a rendered companion — component-gallery-primitives.html — showing every variant and every state side by side, built from the same CSS printed here.

It exists because the states that matter most are the ones nobody checks: disabled, loading, invalid, indeterminate, focus. Each needs a scenario constructed on the live site, so each gets reviewed least and breaks quietest. The gallery forces all of them onto one page.

It also renders each component in German, French and English where string length is a constraint, and on a dark surface where the component appears there.

**The two must agree.** If the gallery and this document differ, that is a bug in one of them — fix it rather than working around it. When a component's CSS changes here, it changes there in the same edit.

# **Status**

> **Draft. 34 of 40 components documented.** Aligned to doc 08 v1.1 — the palette now assigns one job per family, and two rules follow from it: *saturated on controls, tint on labels*, and *inactive is not grey*.
>
> **Part 1** — six primitives, two navigation components, the accordion, the dropdown and the blog card. **Parts 2–3** — 32 placeholders, each stating what it covers, what is live, and what blocks it. **Part 5** — the open items register: 40 items, grouped by what unblocks them.
>
> **Two decisions block Part 1 itself:**

1.  **Input height.** The checkout uses 46px controls, the rest of the site 60–70px. The **radius is decided** — --radius-pill, matching the CTA shape. This document uses 46px; only the height is open. See §2.

2.  **Focus ring.** Four WCAG 2.4.7 failures are live and six patterns coexist. Every focus rule below is marked **proposed** until decisions B1–B4 land.

> Transitions use literal 150ms ease-out pending the motion tokens (D1–D2).
>
> **Remaining placeholders** need either a decision, a redesign that is in flight, or the z-index band.
>
> **One decision opens in §7:** the category tab nav's active colour. Blue is recommended and reasoned; the live implementation is green.

# **Part 1 · Primitives, navigation and disclosure**

## **Status — components 1–6 are live**

> Shipped. Verified against every P0 requirement, with three defects found and fixed during the build and two carried forward.

| **Item** | **Status** |
|----|----|
| Button — variants, 44px height, 160px floor, no-wrap labels, palette disabled | **Live.** DE 217 / FR 219 / EN 165px, zero overflowing labels at 1280 and 375 across four templates |
| Button — loading state | **CSS only.** No live template uses .is-loading yet |
| Input — 46px, pill, ≥16px, autofill, stripped spinners | **Live.** Both former heights reconciled |
| Input — postcode inputmode="numeric" | **Live.** Added in this pass; see below |
| Select — native, chevron, check-mark selection | **Live** |
| Select — enhanced panel | **CSS only.** Select2 still owns the country field until its own card lands |
| Checkbox and radio — appearance: none, 44px label target, --medium-gray disabled glyph | **Live** |
| Radio groups — \<fieldset\> + \<legend\> | **Not met on the site.** See below |
| Badge and link — all variants | **Live**, unaliased by design |
| :focus-visible only, every stripped outline replaced, tokens only | **Live** |
| Hover gated behind (hover: hover) | **Live in the primitives only.** See below |

> **Since shipped, in a second pass:** focus rings, motion, z-index and container widths are all now tokenised — see doc 08 Part 8. That closed the four decisions this library was waiting on, and unblocked the dropdown, tooltip and modal.
>
> **Component build status**, as of the latest pass — 16 new files, ~2,390 lines:

| **Component** | **State** |
|----|----|
| §12 Tooltip · §29 Pagination · §31 Carousel · §32 Age gate | **Live everywhere** |
| §33 PDP gallery | **Live behind ?uw_gallery=1** |
| §11 Blog card | **Live behind UWEED_BLOG_CARD_V2** |
| §20 Message · §26 Modal | **Built.** Pulled forward out of order — §28 is defined in terms of the message, §32 is the modal's --blocking variant. |
| §28 Coupon | **Written, unverified.** See §28. |
| §27 Form field · §30 Loading | **Built, not wired.** No template emits them yet. |

> **The dependency graph asserted itself.** Message and modal were scheduled with the general components but had to ship earlier, because two later components are defined in terms of them. Worth expecting again — §25 Card is underneath the tiles in the same way.
>
> **Regression evidence:** every control's geometry compared before and after across five templates. Two changed by ≥6px — .range-input 70px → 46px, which is the transparent slider overlay and renders pixel-identically, and the empty-cart CTA 74px → 56px, which is one line instead of a wrapped two. Klaviyo and Reviews.io widgets unchanged on all four pages that render them.

Components 1–6 are the primitives everything else is built from; no primitive depends on another. Components 7–8 are navigation. Components 9–12 are the accordion, the dropdown, the blog card and the tooltip, each consolidated from several live implementations — see the Technology Roadmap for the migration cards. Components 13–19 are the commerce path, documented largely as built, plus the price and quantity components that consolidating it surfaced. Components 20–26 are the general set — feedback, structure and overlays. Components 27–34 close the remaining consolidations.

## **Reduced motion must out-specify what it cancels**

A prefers-reduced-motion block only wins if its selector is at least as specific as the rule it is cancelling. This is easy to get wrong and **fails silently** — the animation keeps running and nothing reports it.

It happened during the primitives build. The checkbox base rule was raised to .uw-check .uw-check\_\_input (0,2,0) so it could out-specify the theme's global input\[type="checkbox"\] reset, but the reduced-motion override was left at .uw-check\_\_input (0,1,0). It lost, and the tick kept animating.

/\* The base rule had to be raised to beat a global theme reset \*/

.uw-check .uw-check\_\_input { transition: background-color 120ms ease-out; }

/\* WRONG — 0,1,0 loses to 0,2,0, and nothing tells you \*/

@media (prefers-reduced-motion: reduce) {

.uw-check\_\_input { transition: none; }

}

/\* RIGHT — match the selector you are cancelling \*/

@media (prefers-reduced-motion: reduce) {

.uw-check .uw-check\_\_input { transition: none; }

}

**Verify by forcing the setting**, not by reading the CSS. In Chrome DevTools: Rendering → Emulate CSS media feature prefers-reduced-motion. Every component in this library with a transition needs that check before it is called done.

## **One data point, one resolver**

The cannabinoid line was missing from every flower, hash and pollen tile and product page — not styled wrongly, absent.

**The catalogue stores the same number under three attribute names.** pa_cbd-content is a global taxonomy attribute used by the Swiss oils; flowers carry a per-product attribute labelled *CBD-Gehalt (%)*, which WooCommerce resolves as cbd-gehalt; English imports label the same field cbd-content. Only the first was ever read.

It is now one resolver — uweed_cannabinoid_content(\$product, 'CBD') — tried in order, rejecting na and Not tested numerically, keeping a declared zero, and trimming 11.0000 to 11. **Four surfaces read it:** the tile, both PDP image overlays, the lab-tested line and the products-data JSON generator.

**The rule this illustrates:** where a component displays a product fact, the component should not know how that fact is stored. One resolver, four consumers — otherwise the next surface reads the first attribute name again and shows nothing for two thirds of the catalogue.

## **Four ways a correct rule loses**

Every one of these shipped as a wrong colour, a wrong size or a broken layout, and none of them threw anything. Grouped because the diagnosis is the same each time: **read the computed value, then find out who won.**

### **1 · A tie loses on source order**

.subcategory-item.active { background-color: \#33A481 } and the correct --dark-blue rule were both **(0,2,0)**. The green file was imported about 134 KB later, so it won — and the right rule had been losing silently for as long as both existed.

**A wrong colour does not mean a missing rule.** Check whether the correct one is already there and losing.

### **2 · Component modifiers need two classes**

A consumer anchors its own panel — .v2-filter-menu { top: …; left: 0 } at (0,1,0) — and consumer partials import *after* the component. So a flat .uw-pop--above ties and loses.

**The failure is not that the flip does nothing.** The consumer's top and the modifier's bottom both apply, the box is over-constrained, and the panel collapses to a 10px sliver. Modifiers are written .uw-pop.uw-pop--above.

### **3 · :not() inherits its argument's specificity**

Twice now. p:not(\[class\*="has-"\]\[class\*="-color"\]) is (0,2,1), and ol li:not(:last-child) from gutenberg.scss is (0,1,2) — which beat a flat .uw-crumbs\_\_item at (0,1,0).

**The second one did not look like a loss.** Nothing wrapped or overflowed; every crumb except the last simply gained a 16px bottom margin, inflating the list from 21px to 37px and dropping the last crumb 8px below its siblings. Raised to .uw-crumbs\_\_list .uw-crumbs\_\_item.

### **4 · content-visibility: auto makes an ancestor the containing block for position: fixed**

.brand-category-section carries it as a performance optimisation, so the mobile sheet's inset: 0 sized it to **that section** — measured 351 × 9695, starting 857px down the page.

**It shows in no obvious computed property.** transform, filter, contain and container-type were all clean. Diagnosed by appending a bare position: fixed; inset: 0 probe beside the panel and another on \<body\>: identical wrong rect versus a correct one proved the ancestor.

Fixed by suspending containment while a sheet is open — **not** by moving the panel to \<body\>, which would take its checkboxes out of .v2-filter-dropdown where the filter logic finds them with closest().

### **And one case where CSS beats the style attribute**

The search plugin writes zIndex: 999999999 as an **inline style** on every open — not the 10000 the audit recorded. A stylesheet !important outranks a non-important inline style, which is the one situation where a stylesheet wins against style=. That is the lever used.

## **The theme has global rules that silently break component markup**

Four separate traps in one build, all the same shape: **the component markup was correct, and a global theme rule made it do something else.** None produced an error; each needed computed values or the accessibility tree to find.

| **Global rule** | **What it broke** | **The fix** |
|----|----|----|
| .quantity .screen-reader-text { display: none !important } | A visually-hidden \<label\> is removed from the **accessibility tree entirely** — the control ends up with no name at all | aria-label on the input instead of a hidden label |
| d-flex is display: flex !important in Bootstrap | Would have stretched the quantity pill to full row width | Removed; .uw-qty is inline-flex |
| \_primitives-legacy.scss @extends .uw-input onto bare input | The stepper's value box arrived with a 46px min-height, a --light-gray fill, a border and a pill radius — and input:focus repainted it white | A complete reset on .uw-qty\_\_value including min-height and a :focus override, winning on specificity rather than !important |
| p:not(\[class\*="has-"\]\[class\*="-color"\]) at (0,2,1) | Blog card excerpt at 16px instead of 14px | (0,3,0) — see below |

**The pattern to internalise: hiding something visually and hiding it from assistive technology are different, and this theme conflates them in at least one place.** display: none removes an element from the accessibility tree. Clipping — position: absolute; clip: rect(0,0,0,0) — does not.

That is why the checkout \<legend\> is **clipped, never display: none**. A display: none legend would put the fieldset straight back to announcing nothing, which is the defect it was added to fix.

## **Progressive enhancement is only real if you test it disabled**

Three separate carousel defects shipped looking correct, and each was invisible until measured with JavaScript off or with computed values read back. They are worth stating as a group because they share a shape: **the enhanced path worked, so nobody looked at the path underneath it.**

| **Trap** | **What happened** |
|----|----|
| **Scroll-snap scoped under a JS-added class** | .js-carousel .uw-car\_\_track { scroll-snap-type: … } works perfectly with JavaScript on, and does nothing at all without it. The whole point of choosing scroll-snap over a library was that it works before JS loads. |
| **Compat CSS imported too early** | Later partials set flex and width on .swiper-slide and won. The computed slide width was 34px. The stylesheet was correct; the cascade was not. |
| **Keyed on the wrong selector** | The compat layer targeted .swiper-slide. The homepage rail's children are .card-product.uw-tile. It matched nothing, silently. |

**The check that catches all three is the same:** disable JavaScript, then read computed values rather than the stylesheet.

AC7, JS DISABLED: {"ox":"auto","snap":"x mandatory","scrollable":true} × 4 rails

**Import order is part of the specification.** \_carousel-compat.scss has to load late, beside \_motion.scss, because it is overriding a third-party contract rather than defining one. Where a partial's position matters, this document says so.

## **:not() inherits its argument's specificity**

This is the second silent-specificity trap in this library, and it will hit **every component that styles a \<p\>**.

The theme carries a global paragraph rule:

p:not(\[class\*="has-"\]\[class\*="-color"\]) { font-size: 1rem; }

That reads like a class-plus-element selector, but :not() takes the specificity of its argument — here two attribute selectors. The rule is **(0,2,1)**, not (0,1,1).

.uw-post\_\_excerpt (0,1,0) loses

.uw-post .uw-post\_\_excerpt (0,2,0) still loses

.uw-post p.uw-post\_\_excerpt (0,3,0) wins

It shipped the blog card excerpt at 16px instead of 14px and the meta at 16px instead of 13px, and nothing reported it — the text simply looked slightly large.

**Any component in this library that sets a size on a \<p\>** — blog card, message, order info bar, toast, product info table, no-results copy — needs (0,3,0) or higher to beat it. Check the computed value, not the stylesheet.

## **Ship a renderer where the markup carries a contract**

A CSS class can enforce appearance. It cannot enforce that a trigger is a \<button type="button"\>, that an aria-describedby points at a real and unique id, or that a \<fieldset\> wraps a radio group.

**Where a component's accessibility depends on markup rather than styling, ship a PHP renderer alongside the CSS.** The tooltip (§12) does this and it is the reason its contract holds — uweed_tooltip() generates the id, fixes the roles and makes type="button" unforgettable.

Components in this library with the same property, none of which has a renderer yet:

| **Component** | **Contract a class cannot enforce** |
|----|----|
| Quantity selector (§19) | aria-label on both buttons, label on the input, name change on the remove state |
| Form field (§27) | aria-describedby linking control to the shared hint/error slot, aria-invalid on the control not the wrapper |
| Modal (§26) | role, aria-modal, aria-labelledby pointing at the title |
| Checkbox and radio (§4) | \<fieldset\> and \<legend\> around a group — **the one requirement in this library currently failing on the live site** |

**The last row is the argument.** .uw-check-group exists, the gallery demonstrates it, and no radio group on the site uses it — because nothing makes using it easier than not using it. A renderer would have.

# **1 · Button**

The primary action control. Every clickable thing that performs an action rather than navigating is a button.

## **Anatomy**

****┌─────────────────────────────────┐

│ \[icon\] LABEL │ ← optional leading icon, 20×20

└─────────────────────────────────┘

↑ ↑

padding-inline padding-inline

## **Variants**

**The rule is purpose, not prominence.** Colour tells the user what kind of thing will happen.

| **Variant** | **Purpose** | **Background** | **Border** | **Text** |
|----|----|----|----|----|
| **Buy** | Advances a purchase — add to cart, go to checkout, place order | --dark-green | --border-emphasis --dark-green | --white |
| **Navigate** | Takes the user somewhere — browse, discover, view | --dark-blue | --border-emphasis --dark-blue | --white |
| **Outline** | Secondary action beside a filled button | transparent | --border-emphasis --dark-blue | --dark-blue |
| **Text** | Tertiary — inline, low emphasis, disclosure | none | none | --dark-blue |

**One filled button per surface.** Two greens or two blues side by side means neither leads.

**Green never navigates.** A green "Mehr entdecken" tells the user they are buying something. Blue never adds to cart. This is the whole point of having two.

## **Size**

**One height: 44px.** It is the tap-target minimum and the size the theme already uses for its densest controls, so nothing needs a second value.

Icon-only buttons are 44 × 44.

**Width adjusts to the label**, with a floor of --btn-min-width (160px — roughly the English string plus padding). Below the floor a button looks like a fragment; above it, German and French set their own width rather than being truncated or wrapped.

Add to cart ← 11 chars, sits at the 160px floor

In den Warenkorb ← 17 chars, grows past it

Never set a fixed width. Never size to the English string.

## **States**

| **State** | **Change** | **When it appears** |
|----|----|----|
| **Rest** | As specified per variant | Default |
| **Hover** | Buy and navigate invert to the light tint of their family with dark text; outline fills with --light-blue; text shifts to --medium-blue | Mouse or trackpad over the button. Pointer devices only. |
| **Focus** | Ring around the button | **Keyboard only.** :focus-visible fires on Tab, not on click. |
| **Active** | transform: translateY(1px) | Mouse down, or finger down |
| **Disabled** | --light-gray background, --medium-gray text and border, not-allowed | The action is unavailable |
| **Loading** | Label replaced by spinner, width preserved, aria-busy="true" | Request in flight |

**On focus.** Pressing Tab moves through interactive elements in order. The ring is the only indication of where you are — without it, keyboard navigation is invisible. :focus-visible is used rather than :focus precisely because the older selector also fired on mouse click, which made rings appear where they looked wrong and led developers to delete them. That history is visible in this stylesheet: four rules strip focus with no replacement.

**On dark surfaces the ring is white.** --medium-blue on --dark-blue is roughly 1.5:1 — invisible. Any component inside .on-dark swaps to --white.

**Disabled is never opacity.** Opacity dims the label along with the control and produces unpredictable contrast against whatever sits behind it. Use the disabled palette from doc 08.

## **Tokens**

| **Property**   | **Token**                                  |
|----------------|--------------------------------------------|
| Font family    | --ff-body                                  |
| Font weight    | --fw-bold                                  |
| Font size      | --fs-cta                                   |
| Letter spacing | --ls-caps (uppercase requires it)          |
| Radius         | --radius-pill                              |
| Border width   | --border-emphasis                          |
| Transition     | --motion-fast *(pending — audit card 2.1)* |
| Padding inline | --space-l / --space-xl                     |

## **Implementation**

****\<button type="button" class="uw-btn uw-btn--buy"\>

In den Warenkorb

\</button\>

\<a class="uw-btn uw-btn--nav" href="/cbd-shop/"\>

Jetzt entdecken

\</a\>

\<button type="button" class="uw-btn uw-btn--outline"\>

Weiter einkaufen

\</button\>

\<button type="button" class="uw-btn uw-btn--buy" disabled\>

Ausverkauft

\</button\>

\<button type="button" class="uw-btn uw-btn--buy is-loading" aria-busy="true"\>

In den Warenkorb

\</button\>



.uw-btn {

display: inline-flex;

align-items: center;

justify-content: center;

gap: var(--space-xs);

min-height: 44px;

min-width: var(--btn-min-width); /\* 160px — roughly the EN string \*/

padding-inline: var(--space-l);

font-family: var(--ff-body);

font-size: var(--fs-cta);

font-weight: var(--fw-bold);

line-height: 1;

letter-spacing: var(--ls-caps);

text-transform: uppercase;

text-decoration: none;

white-space: nowrap; /\* labels never wrap — they grow \*/

border: var(--border-emphasis) solid transparent;

border-radius: var(--radius-pill);

cursor: pointer;

transition:

background-color 150ms ease-out,

border-color 150ms ease-out,

color 150ms ease-out;

}

/\* Variants — purpose, not prominence \*/

.uw-btn--buy {

background: var(--dark-green);

border-color: var(--dark-green);

color: var(--white);

}

.uw-btn--nav {

background: var(--dark-blue);

border-color: var(--dark-blue);

color: var(--white);

}

.uw-btn--outline {

background: transparent;

border-color: var(--dark-blue);

color: var(--dark-blue);

}

.uw-btn--text {

background: transparent;

border-color: transparent;

color: var(--dark-blue);

min-width: 0; /\* text buttons hug their label \*/

padding-inline: var(--space-xs);

text-transform: none;

letter-spacing: 0;

}

/\* Icon-only — square, label via aria-label \*/

.uw-btn--icon {

min-width: 44px;

width: 44px;

padding-inline: 0;

}

/\* Full width — sole action in a block, or below --bs-breakpoint-md \*/

.uw-btn--block { width: 100%; }

/\* Hover — pointer devices only.

On touch, :hover sticks after a tap until the user taps elsewhere. \*/

@media (hover: hover) and (pointer: fine) {

.uw-btn--buy:hover {

background: var(--light-green);

color: var(--dark-green);

}

.uw-btn--nav:hover {

background: var(--light-blue);

color: var(--dark-blue);

}

.uw-btn--outline:hover {

background: var(--light-blue);

}

.uw-btn--text:hover {

color: var(--medium-blue);

}

}

.uw-btn:active {

transform: translateY(1px);

}

/\* Focus — keyboard only. PROPOSED, pending decisions B1–B4. \*/

.uw-btn:focus-visible {

outline: var(--border-heavy) solid var(--medium-blue);

outline-offset: 2px;

}

.on-dark .uw-btn:focus-visible {

outline-color: var(--white);

}

/\* Disabled \*/

.uw-btn:disabled,

.uw-btn\[aria-disabled="true"\] {

background: var(--light-gray);

border-color: var(--medium-gray);

color: var(--medium-gray);

cursor: not-allowed;

pointer-events: none;

}

/\* Loading \*/

.uw-btn.is-loading {

position: relative;

color: transparent;

pointer-events: none;

}

.uw-btn.is-loading::after {

content: "";

position: absolute;

width: 18px;

height: 18px;

border: var(--border-emphasis) solid var(--white);

border-top-color: transparent;

border-radius: 50%;

animation: spin 700ms linear infinite;

}

@media (prefers-reduced-motion: reduce) {

.uw-btn { transition: none; }

.uw-btn.is-loading::after { animation-duration: 2s; }

}

> **New token needed.** --btn-min-width: 160px is a component dimension, not a design token, so it belongs in the component layer rather than doc 08. Noted here so it does not become a literal scattered across files.

## **Responsive**

**Height is 44px at every breakpoint.** There is no mobile size.

**Width grows with the label** from a 160px floor. Add .uw-btn--block where a button is the sole action in a block — add to cart, place order, form submit — below --bs-breakpoint-md. Buttons in a row of two or more stay auto-width and wrap.

Labels never wrap. A two-line button is a sign the label is too long, not that the button is too narrow.

## **Accessibility**

- \<button\> for actions, \<a\> for navigation. A link styled as a button still navigates; a button styled as a link still submits. The --nav variant is usually an \<a\>.

- Icon-only buttons need aria-label. The icon takes aria-hidden="true".

- Loading state sets aria-busy="true" and keeps the accessible name.

- Disabled: prefer disabled on real buttons. Use aria-disabled="true" only where the control must stay focusable to explain why it is disabled.

- 44 × 44px minimum — met by the single height.

- Contrast: every variant/state pair is in doc 08's approved pairings table. **--medium-green and --medium-orange never take white text.**

## **Don't**

- **Don't use green to navigate or blue to buy.** The two colours exist to tell those apart. A green "Mehr entdecken" tells the user they are purchasing.

- **Don't add a second size.** One height, one tap target, nothing to choose between.

- **Don't set a fixed width.** German and French are longer than English; a fixed width truncates or wraps them.

- **Don't remove the focus outline.** Four live rules do this today with no replacement — .btn-text, select, .accordion-button twice. All are WCAG 2.4.7 failures.

- **Don't use opacity for disabled.** It dims the label and produces unpredictable contrast.

- **Don't change border width between states.** A 2px border becoming 3px shifts layout. Change the colour.

- **Don't set uppercase without --ls-caps.** Capitals without positive tracking read as a solid block.

# **2 · Input**

Single-line text entry and its multi-line sibling.

> **Blocked.** Two input languages are live:

|            | **Checkout**                | **Site-wide**              |
|------------|-----------------------------|----------------------------|
| Height     | 46px                        | 60px (70px ≥1200px)        |
| Radius     | --radius-pill — **decided** | --radius-pill              |
| Border     | --border-hairline --line    | --border-emphasis \#e7e7e9 |
| Background | --light-gray                | \#fafafa                   |
| Font size  | --fs-body                   | --fs-body                  |

> Both are deliberate — the checkout was redesigned for density. **This document takes the checkout height (46px) with the pill radius**, which is the combination decided in review: dense enough to keep forms short, and matching the CTA shape so controls and buttons read as one system. Only the height remains open.

## **Anatomy**

****Label ← --fs-small, --dark-gray, above the field

┌──────────────────────────┐

│ Value or placeholder │ ← 46px, --radius-pill

└──────────────────────────┘

Helper or error message ← --fs-small

**Label above, always.** Never a placeholder as the label — it disappears on focus, fails for screen readers, and leaves the user with no reference once they start typing.

## **Variants**

| **Variant** | **Use** |
|----|----|
| **Text** | Default |
| **Textarea** | Multi-line. --radius-card — a pill on a 96px box reads as a lozenge and eats the corners. resize: vertical, min 3 rows |
| **Search** | Leading search icon, optional clear affordance |
| **Prefixed** | Inline prefix or suffix — currency, unit, domain |

## **States**

| **State** | **Border** | **Background** | **Notes** |
|----|----|----|----|
| **Rest** | --line | --light-gray |  |
| **Hover** | --medium-gray | --light-gray | Pointer devices only |
| **Focus** | --medium-blue | --white | Plus the focus ring |
| **Filled** | --line | --light-gray | Same as rest — content is the signal |
| **Disabled** | --medium-gray | --light-gray | --medium-gray text, not-allowed |
| **Invalid** | --medium-red | --light-red | Message below, aria-invalid="true" |
| **Autofill** | --line | --light-gray | Must be forced — see implementation |

## **Tokens**

| **Property**   | **Token**                              |
|----------------|----------------------------------------|
| Height         | 46px                                   |
| Padding inline | --space-m                              |
| Radius         | --radius-pill · textarea --radius-card |
| Border         | --border-hairline                      |
| Font           | --ff-body / --fs-body / --fw-regular   |
| Label          | --fs-small / --dark-gray               |
| Message        | --fs-small                             |
| Error          | --medium-red on --light-red            |

## **Implementation**

****\<div class="uw-field"\>

\<label class="uw-field\_\_label" for="email"\>E-Mail\</label\>

\<input class="uw-input" type="email" id="email" name="email"

autocomplete="email" required\>

\</div\>

\<div class="uw-field is-invalid"\>

\<label class="uw-field\_\_label" for="plz"\>Postleitzahl\</label\>

\<input class="uw-input" type="text" id="plz" name="plz"

inputmode="numeric" autocomplete="postal-code"

aria-invalid="true" aria-describedby="plz-err" required\>

\<p class="uw-field\_\_message" id="plz-err"\>Bitte gib eine gültige PLZ ein.\</p\>

\</div\>

\<div class="uw-field"\>

\<label class="uw-field\_\_label" for="note"\>Anmerkung\</label\>

\<textarea class="uw-input uw-input--area" id="note" name="note" rows="3"\>\</textarea\>

\</div\>



.uw-field {

display: flex;

flex-direction: column;

gap: var(--space-2xs);

}

.uw-field\_\_label {

font-family: var(--ff-body);

font-size: var(--fs-small);

font-weight: var(--fw-regular);

color: var(--dark-gray);

padding-inline-start: var(--space-m);

cursor: pointer;

}

.uw-field\_\_message {

margin: 0;

padding-inline-start: var(--space-m);

font-size: var(--fs-small);

line-height: 1.4;

color: var(--medium-gray);

}

.uw-input {

width: 100%;

min-height: 46px;

padding: 0 var(--space-m);

font-family: var(--ff-body);

font-size: var(--fs-body); /\* never below 16px — iOS zooms on focus \*/

font-weight: var(--fw-regular);

color: var(--dark-gray);

background: var(--light-gray);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-pill);

appearance: none;

transition: border-color 150ms ease-out, background-color 150ms ease-out;

}

.uw-input::placeholder {

color: var(--medium-gray);

opacity: 1; /\* Firefox dims placeholders by default \*/

}

@media (hover: hover) and (pointer: fine) {

.uw-input:hover:not(:disabled) { border-color: var(--medium-gray); }

}

.uw-input:focus {

outline: none; /\* replaced by the ring below \*/

border-color: var(--medium-blue);

background: var(--white);

}

.uw-input:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

}

.uw-input:disabled {

color: var(--medium-gray);

border-color: var(--medium-gray);

cursor: not-allowed;

}

/\* Invalid — driven by the wrapper so the label and message follow \*/

.uw-field.is-invalid .uw-input {

border-color: var(--medium-red);

background: var(--light-red);

}

.uw-field.is-invalid .uw-field\_\_label,

.uw-field.is-invalid .uw-field\_\_message {

color: var(--medium-red);

}

/\* Textarea \*/

.uw-input--area {

min-height: 96px;

padding: var(--space-s) var(--space-m);

border-radius: var(--radius-card);

resize: vertical;

line-height: var(--lh-body);

}

/\* Autofill — Chrome forces its own yellow otherwise.

The inset shadow is the only way to override it. \*/

.uw-input:-webkit-autofill,

.uw-input:-webkit-autofill:hover,

.uw-input:-webkit-autofill:focus {

-webkit-box-shadow: 0 0 0 1000px var(--light-gray) inset;

-webkit-text-fill-color: var(--dark-gray);

caret-color: var(--dark-gray);

}

/\* Number inputs — strip the spinner, it is unusable on touch \*/

.uw-input\[type="number"\] { -moz-appearance: textfield; }

.uw-input\[type="number"\]::-webkit-outer-spin-button,

.uw-input\[type="number"\]::-webkit-inner-spin-button {

-webkit-appearance: none;

margin: 0;

}

## **Responsive**

Height is constant. **Font size must never drop below 16px** — iOS Safari zooms the viewport on focus for anything smaller, and the user is left zoomed in with no way back.

Fields stack full-width below --bs-breakpoint-md. Paired fields (postcode + city, first + last name) may sit side by side above it.

## **Accessibility**

- Every input has a \<label\> with a matching for. Not aria-label, not a placeholder.

- Invalid: aria-invalid="true" plus aria-describedby pointing at the message. The error must be text, not colour alone.

- autocomplete on every field that has a standard token — this is a WCAG 1.3.5 requirement, and it materially improves checkout completion.

- inputmode for numeric fields so touch keyboards open correctly. inputmode="numeric" for postcodes, not type="number" — postcodes are strings and type="number" strips leading zeros.

- Required: required on the element. The visual asterisk is decorative and pseudo-element content is not announced.

## **Don't**

- **Don't use a placeholder as a label.** It disappears on focus and is not reliably announced.

- **Don't set font-size below 16px.** iOS zooms.

- **Don't signal an error with colour alone.** A red border with no message tells a colourblind user nothing.

- **Don't remove focus without replacing it.** Live rules do this on select and .range-input.

- **Don't use type="number" for postcodes or phone numbers.** Both are strings.

# **3 · Select**

A control for choosing one option from a known list.

## **Anatomy**

****Label

┌──────────────────────────┐

│ Selected option ▾ │ ← chevron, 12×12, --medium-gray

└──────────────────────────┘

Matches Input exactly except for the chevron. It is a form control and must not look like a button.

## **Variants**

| **Variant** | **Use** |
|----|----|
| **Native** | Default. Best mobile behaviour — the OS picker. |
| **Enhanced** | Only where search within options is genuinely needed (country lists). Currently Select2. |
| **Sort control** | A select in appearance but a control, not a form field — see note |

**Prefer native.** The OS picker is better on touch than anything we can build, it is keyboard accessible for free, and it does not break under assistive tech.

The **sort control** on listing pages is not a select at all — it changes the view rather than submitting a value, so it takes the filter pill treatment (§10). An earlier draft gave it a lighter borderless look at --medium-gray; that reads as disabled under doc 08's grey rule, and was 2.8:1 regardless.

## **States**

Identical to Input. The chevron takes --medium-gray at rest and --medium-blue on focus.

## **Implementation**

****\<div class="uw-field"\>

\<label class="uw-field\_\_label" for="country"\>Land\</label\>

\<div class="uw-select"\>

\<select class="uw-select\_\_control" id="country" name="country"

autocomplete="country"\>

\<option value="CH"\>Schweiz\</option\>

\<option value="DE"\>Deutschland\</option\>

\<option value="FR"\>Frankreich\</option\>

\</select\>

\<svg class="uw-select\_\_chevron" width="12" height="12"

viewBox="0 0 12 12" aria-hidden="true"\>

\<path d="M2 4l4 4 4-4" fill="none" stroke="currentColor"

stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/\>

\</svg\>

\</div\>

\</div\>



.uw-select { position: relative; }

.uw-select\_\_control {

width: 100%;

min-height: 46px;

padding: 0 calc(var(--space-m) + 20px) 0 var(--space-m);

font-family: var(--ff-body);

font-size: var(--fs-body);

color: var(--dark-gray);

background: var(--light-gray);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-pill);

appearance: none;

cursor: pointer;

}

/\* Enhanced-select panel. The native dropdown is drawn by the OS and

cannot be styled — this applies to Select2 and any custom listbox. \*/

.uw-select\_\_panel {

background: var(--white);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-card);

box-shadow: var(--shadow-lg);

padding: var(--space-2xs);

overflow: hidden;

}

.uw-select\_\_option {

padding: var(--space-xs) var(--space-s);

border-radius: var(--radius-inner);

color: var(--dark-gray);

cursor: pointer;

}

/\* Hover and keyboard-highlight — light blue. The only fill in the panel. \*/

.uw-select\_\_option:hover,

.uw-select\_\_option.is-active {

background: var(--light-blue);

color: var(--dark-blue);

}

/\* Selected — a check mark, not a fill. See §10 for why. \*/

.uw-select\_\_option\[aria-selected="true"\] {

color: var(--dark-blue);

font-weight: var(--fw-medium);

}

.uw-select\_\_option\[aria-selected="true"\]::after {

content: "";

width: 14px;

height: 9px;

margin-left: auto;

border-left: var(--border-emphasis) solid currentColor;

border-bottom: var(--border-emphasis) solid currentColor;

transform: rotate(-45deg) translate(1px, -2px);

}

.uw-select\_\_chevron {

position: absolute;

right: var(--space-m);

top: 50%;

transform: translateY(-50%);

color: var(--medium-gray);

pointer-events: none; /\* clicks must reach the select \*/

transition: color 150ms ease-out;

}

.uw-select\_\_control:focus + .uw-select\_\_chevron { color: var(--medium-blue); }

.uw-select\_\_control:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

}

.uw-select\_\_control:disabled {

color: var(--medium-gray);

border-color: var(--medium-gray);

cursor: not-allowed;

}

.uw-select\_\_control:disabled + .uw-select\_\_chevron { color: var(--medium-gray); }

## **Accessibility**

- Native \<select\> needs no ARIA. Adding roles to it usually breaks it.

- **The native dropdown panel cannot be styled.** Its highlight colour, radius and font come from the operating system — that is why a native select shows a solid blue highlight on Windows and a grey one on macOS. If the panel must match the brand, the control has to be an enhanced select, which means implementing the full combobox pattern below.

- The chevron is decorative: aria-hidden="true" and pointer-events: none.

- Enhanced selects must implement the full combobox pattern — role="combobox", aria-expanded, aria-controls, aria-activedescendant, arrow keys, Escape, type-ahead. **If that is not being implemented, use the native control.**

- Never rely on the chevron alone to signal that a control is a select. Its shape and label must too.

## **Don't**

- **Don't style a select as a button.** Users need to know it opens a list.

- **Don't replace a native select on mobile.** The OS picker is better than any custom implementation.

- **Don't use a select for two options.** That is a radio pair or a toggle.

- **Don't put pointer-events on the chevron.** Clicks must pass through to the control.

# **4 · Checkbox and radio**

Binary and single-choice controls.

> **Important inherited constraint.** The theme's global rule input\[type="checkbox"\] { background: transparent; border: none; } makes bare checkboxes **invisible**. Any checkbox not using the pattern below renders as nothing at all. This is why .custom-check + .checkmark exists.
>
> The implementation below uses appearance: none on the real input rather than a separate visual element. It is simpler, keeps the control and its box as one node, and does not depend on the global rule being fixed first.

## **Anatomy**

****☑ Label text ← 20×20 box, --space-xs gap

The **whole label is the hit area**, not just the box. A 20px box is far below the 44px minimum; the label carries the target.

## **Variants**

| **Variant** | **Use** |
|----|----|
| **Checkbox** | Independent on/off. Multiple selections. --radius-checkbox |
| **Radio** | One from a set. Circular. |
| **Checkbox with count** | Filter facets — label left, count right in --medium-blue |
| **Card radio** | Shipping and payment methods — the whole card is the control |

## **States**

| **State** | **Box** | **Label** |
|----|----|----|
| **Rest** | --white, --line border | --dark-gray |
| **Hover** | --medium-gray border | — |
| **Checked** | --dark-blue fill, white glyph | — |
| **Focus** | Ring on the box | — |
| **Disabled** | --light-gray fill, --medium-gray border | --medium-gray |
| **Disabled + checked** | --light-gray fill, --medium-gray glyph | --medium-gray |
| **Indeterminate** | --dark-blue fill, white dash | — |

## **Implementation**

****\<label class="uw-check"\>

\<input class="uw-check\_\_input" type="checkbox" name="terms" required\>

\<span class="uw-check\_\_label"\>Ich akzeptiere die AGB\</span\>

\</label\>

\<label class="uw-check uw-check--count"\>

\<input class="uw-check\_\_input" type="checkbox" name="brand" value="sweed"\>

\<span class="uw-check\_\_label"\>Sweed\</span\>

\<span class="uw-check\_\_count"\>24\</span\>

\</label\>

\<label class="uw-check uw-check--radio"\>

\<input class="uw-check\_\_input" type="radio" name="shipping" value="post"\>

\<span class="uw-check\_\_label"\>Swiss Post — Priority\</span\>

\</label\>



.uw-check {

display: flex;

align-items: center;

gap: var(--space-xs);

min-height: 44px; /\* §8 tap target — the LABEL is the hit area \*/

cursor: pointer;

font-family: var(--ff-body);

font-size: var(--fs-body);

color: var(--dark-gray);

}

.uw-check\_\_input {

appearance: none;

-webkit-appearance: none;

flex: 0 0 auto;

width: 20px;

height: 20px;

margin: 0;

background: var(--white);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-checkbox);

cursor: pointer;

display: inline-grid;

place-content: center;

transition: background-color 150ms ease-out, border-color 150ms ease-out;

}

.uw-check--radio .uw-check\_\_input { border-radius: 50%; }

/\* Glyph — a clip-path tick, so no icon font or SVG is needed \*/

.uw-check\_\_input::after {

content: "";

width: 10px;

height: 10px;

transform: scale(0);

transition: transform 120ms ease-out;

box-shadow: inset 1em 1em var(--white);

clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);

}

.uw-check--radio .uw-check\_\_input::after {

width: 8px;

height: 8px;

border-radius: 50%;

clip-path: none;

}

.uw-check\_\_input:checked {

background: var(--dark-blue);

border-color: var(--dark-blue);

}

.uw-check\_\_input:checked::after { transform: scale(1); }

.uw-check\_\_input:indeterminate {

background: var(--dark-blue);

border-color: var(--dark-blue);

}

.uw-check\_\_input:indeterminate::after {

transform: scale(1);

clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);

}

@media (hover: hover) and (pointer: fine) {

.uw-check\_\_input:hover:not(:disabled) { border-color: var(--medium-gray); }

}

.uw-check\_\_input:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

}

.uw-check\_\_input:disabled {

background: var(--light-gray);

border-color: var(--medium-gray);

cursor: not-allowed;

}

/\* Disabled + checked — the glyph is grey, not white.

White on --light-gray is 1.1:1 and effectively invisible. \*/

.uw-check\_\_input:disabled:checked,

.uw-check\_\_input:disabled:indeterminate {

background: var(--light-gray);

border-color: var(--medium-gray);

}

.uw-check\_\_input:disabled:checked::after,

.uw-check\_\_input:disabled:indeterminate::after {

box-shadow: inset 1em 1em var(--medium-gray);

}

.uw-check\_\_input:disabled ~ .uw-check\_\_label { color: var(--medium-gray); }

.uw-check\_\_label { flex: 1 1 auto; min-width: 0; }

/\* Filter variant — count on the right \*/

.uw-check--count .uw-check\_\_count {

flex: 0 0 auto;

font-size: var(--fs-meta);

color: var(--medium-blue);

font-variant-numeric: tabular-nums;

}

.uw-check--count:has(.uw-check\_\_input:checked) .uw-check\_\_count {

color: var(--medium-blue);

}

@media (prefers-reduced-motion: reduce) {

.uw-check\_\_input,

.uw-check\_\_input::after { transition: none; }

}

## **Accessibility**

- Wrap the input in its \<label\> — clicking the text toggles the control, and no for/id pair is needed.

- Radio groups need a \<fieldset\> with a \<legend\>. Without it, a screen reader announces each option with no idea what is being chosen.

- Never display: none a checkbox to hide it visually — it leaves the keyboard focus order. appearance: none keeps it focusable.

- Indeterminate is set in JavaScript (el.indeterminate = true); there is no HTML attribute.

- The 44px minimum is on the **label**, not the box.

## **Don't**

- **Don't rely on the global checkbox rule.** It renders bare checkboxes invisible. Always use this pattern.

- **Don't put a clamp on the row.** overflow: hidden with max-height: 50px clips the 20px box on single-line rows — this is live in the filter sidebar today.

- **Don't use a checkbox for a single-choice question.** That is a radio set.

- **Don't hide the input with display: none.** It stops being focusable.

# **5 · Badge and tag**

Small labels that classify, count or flag. Non-interactive unless explicitly removable.

## **Anatomy**

****┌──────────┐

│ LABEL │ ← --space-2xs --space-s padding

└──────────┘

## **Variants**

| **Variant** | **Background** | **Text** | **Use** |
|----|----|----|----|
| **Category** | --light-pink | --dark-pink | Editorial and product categories — Wellness, Schlaf, Sport |
| **Attribute** | --light-gray | --dark-gray | Product specs — CBD 10 % · THC 0.3 %, Indoor, 10 ml |
| **Sale** | --medium-red | --white | Discount |
| **New** | --dark-green | --white | New arrival |
| **Bestseller** | --medium-orange | --dark-blue | Bestseller, top rated |
| **Out of stock** | --light-gray | --dark-gray | Unavailable |
| **Cart count** | --dark-green | --white | Items in the cart |
| **Favourite count** | --medium-red | --white | Saved items |
| **Removable** | --light-gray | --dark-gray | Applied filter, coupon |

**Category and attribute are different things and now look different.** A category places the product in the catalogue; an attribute states a fact about it. On a product tile both appear — a pink category badge and a grey attribute chip — and conflating them was why every small label looked the same.

**Pink is the editorial section colour** (doc 08, Part 2). On badges that means one thing: the category chip, in --light-pink with --dark-pink text. Pink is never a control and never a state.

**Bestseller takes dark text.** White on --medium-orange is 2.0:1 and fails AA. This is a live defect being fixed by the token-corrections card.

**Removable badges are grey, not green.** Applied filters sit directly above the product grid; a row of green chips competes with the products and reads as promotion rather than state. Grey keeps them legible without pulling attention.

**The cart count is --dark-green; the favourites count is --medium-red.**

Cart is commerce, and green at 7.6:1 against white. Favourites follows its heart (§33): the filled red heart is a convention strong enough that fighting it costs more than it gains, and a count attached to a heart reads as "how many saved" rather than as an error. Red at 4.8:1 against white.

> An earlier draft made both green. That was right about cart and wrong about favourites — a green count beside a red heart reads as two features rather than one.

The live \#D95ABA is retired: not in the palette, and only 3.4:1.

**“New” moved from --light-green to --dark-green with white text.** The live badge is a mid-green pill with white text at roughly 2.1:1. Dark green reaches 7.6:1 and still reads as a green badge.

## **Tokens**

| **Property** | **Token**                               |
|--------------|-----------------------------------------|
| Font size    | --fs-meta                               |
| Font weight  | --fw-medium (600 for emphasis variants) |
| Radius       | --radius-pill                           |
| Padding      | --space-2xs --space-s                   |
| Line height  | 1                                       |

## **Implementation**

****\<span class="uw-badge"\>Wellness\</span\>

\<span class="uw-badge uw-badge--sale"\>−15%\</span\>

\<span class="uw-badge uw-badge--new"\>Neu\</span\>

\<span class="uw-badge uw-badge--bestseller"\>Bestseller\</span\>

\<span class="uw-badge uw-badge--count" aria-label="3 Artikel im Warenkorb"\>3\</span\>

\<span class="uw-badge uw-badge--removable"\>

Sweed

\<button type="button" class="uw-badge\_\_remove" aria-label="Filter Sweed entfernen"\>

\<svg width="12" height="12" aria-hidden="true"\>…\</svg\>

\</button\>

\</span\>



.uw-badge {

display: inline-flex;

align-items: center;

gap: var(--space-2xs);

padding: var(--space-2xs) var(--space-s);

font-family: var(--ff-body);

font-size: var(--fs-meta);

font-weight: var(--fw-medium);

line-height: 1;

white-space: nowrap;

background: var(--light-gray);

color: var(--dark-gray);

border-radius: var(--radius-pill);

}

.uw-badge--category { background: var(--light-pink); color: var(--dark-pink); }

.uw-badge--attribute { background: var(--light-gray); color: var(--dark-gray); }

.uw-badge--sale { background: var(--medium-red); color: var(--white); font-weight: var(--fw-bold); }

.uw-badge--new { background: var(--dark-green); color: var(--white); }

.uw-badge--bestseller { background: var(--medium-orange); color: var(--dark-blue); font-weight: var(--fw-bold); }

.uw-badge--oos { background: var(--light-gray); color: var(--dark-gray); }

/\* Count — circular, fixed size, for cart and notification badges \*/

.uw-badge--count {

justify-content: center;

min-width: 20px;

height: 20px;

padding: 0 var(--space-2xs);

background: var(--dark-green);

color: var(--white);

}

.uw-badge--count-fav {

background: var(--medium-red);

font-weight: var(--fw-bold);

font-variant-numeric: tabular-nums;

}

.uw-badge--count:empty { display: none; }

/\* Removable — applied filters, coupons \*/

.uw-badge--removable {

background: var(--light-gray);

color: var(--dark-gray);

padding-inline-end: var(--space-2xs);

}

.uw-badge\_\_remove {

display: grid;

place-items: center;

width: 20px;

height: 20px;

padding: 0;

border: 0;

border-radius: 50%;

background: transparent;

color: inherit;

cursor: pointer;

transition: background-color 150ms ease-out;

}

@media (hover: hover) and (pointer: fine) {

.uw-badge\_\_remove:hover { background: var(--medium-red); color: var(--white); }

}

.uw-badge\_\_remove:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 1px;

}

## **Accessibility**

- A badge that conveys information needs an accessible name. A cart count reading "3" alone is meaningless — use aria-label="3 Artikel im Warenkorb".

- Removable badges: the remove control is a real \<button\> with an aria-label naming what is removed.

- Count badges that update should sit in an aria-live="polite" region so the change is announced.

- Never convey meaning by colour alone. A red badge and a green badge with the same text read identically to a colourblind user.

- **Tap target:** the remove button is 20px. Where a badge row is the primary interaction, wrap it so the hit area reaches 44px.

## **Don't**

- **Don't make a badge look clickable if it isn't.** No hover lift, no pointer cursor.

- **Don't put white text on --medium-orange, --medium-green or --medium-pink.** All three fail AA. Use the dark tone of the family.

- **Don't use a category badge for a specification.** Pink means “this is a kind of thing”; grey means “this is a fact about the thing”.

- **Don't use more than two badges on one item.** Three competing flags means none reads.

> **Sold out is a badge in the tag stack, not a centred overlay.** It previously sat inside .out-of-stock-overlay, a full-card layer with align-items: center, so it was centred over the card by construction — covering the cannabinoid chip and the brand line.
>
> It now stacks top-right with Sale, Neu and Bestseller, **goes first, and counts against the two-badge ceiling**. A sold-out product's discount is not the thing to lead with. The overlay remains, reduced to the dim.

- **Don't let a count badge render empty.** :empty { display: none } — an empty red circle looks like an error.

# **6 · Link**

Inline navigation within text and standalone.

## **Anatomy**

Text with an affordance. Inside prose, that affordance is **underline plus colour**, never colour alone.

## **Variants**

Three, sorted by **whether the linkness has to announce itself** — not by where the link sits.

| **Variant** | **Use** | **Treatment** |
|----|----|----|
| **Inline** | Inside prose | --medium-blue, underlined |
| **Action** | A link that announces itself — "Alle Ergebnisse anzeigen", "Mehr erfahren" | --medium-blue, --fw-medium, underline on hover |
| **Navigation** | Linkness implied by context — menu rows, card titles, breadcrumbs, footer, tab nav | --dark-blue or the component's own colour, no underline, underline on hover |

**Why this axis and not position.** The earlier split was inline versus standalone, which sorts by where the link sits. That puts a menu row and a "see all results" link in the same bucket because both fall outside prose, when they behave nothing alike. In a menu the linkness needs no announcement — every row is clickable, so blue would be noise and the colour is better spent on structure. A single action link at the foot of a list has no such context and takes the link colour.

**Underline follows a separate rule.** Inline links are underlined at rest because a link surrounded by body copy has nothing else marking it out — --medium-blue against --dark-gray body text is about 2.5:1, nowhere near the 3:1 that would let colour work alone. An action link in a panel footer has position, padding, a divider and a hover state doing that work, so underline on hover is enough.

**On dark** is a context rather than a variant. All three take --white inside .on-dark.

**What was cut earlier:**

- **Quiet** was --dark-gray with no underline, for metadata and footer links. It differed from navigation only in colour and resolved to the same thing on dark. Navigation covers it.

- **Disclosure** ("Mehr anzeigen") was never a link — it expands content in place rather than navigating. It moves to **Button**, --text variant, where it picks up the 44px tap target for free.

## **States**

| **State** | **Change** | **When it appears** |
|----|----|----|
| **Rest** | Per variant | Default |
| **Hover** | Inline darkens to --dark-blue and thickens its underline; standalone gains an underline | Mouse over the link |
| **Focus** | Ring around the link | **Keyboard only** — Tab, not click |
| **Active** | No distinct treatment |  |
| **Visited** | No distinct treatment | Commerce sites reuse links too heavily for it to carry meaning |
| **Current** | aria-current="page", --fw-bold, no underline | The link points at the page you are on |

## **Implementation**

****\<p\>

Alle Produkte werden vor der Listung geprüft —

\<a class="uw-link" href="/laborberichte/"\>Laborberichte ansehen\</a\>.

\</p\>

\<a class="uw-link uw-link--action" href="/suche/?q=cbd"\>Alle Ergebnisse anzeigen\</a\>

\<a class="uw-link uw-link--nav" href="/cbd-shop/cbd-blueten/"\>CBD Blüten\</a\>

\<a class="uw-link uw-link--nav" href="/faq/" aria-current="page"\>Häufige Fragen\</a\>

\<div class="on-dark"\>

\<a class="uw-link" href="/versandoptionen/"\>Versandoptionen\</a\>

\</div\>



.uw-link {

color: var(--medium-blue);

text-decoration: underline;

text-underline-offset: 0.15em;

text-decoration-thickness: 1px;

transition: color 150ms ease-out;

}

@media (hover: hover) and (pointer: fine) {

.uw-link:hover {

color: var(--dark-blue);

text-decoration-thickness: 2px;

}

}

/\* Focus — keyboard only. PROPOSED, pending decisions B1–B4. \*/

.uw-link:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

border-radius: 2px;

}

/\* Action — announces itself as a link, but not inside prose \*/

.uw-link--action {

color: var(--medium-blue);

font-weight: var(--fw-medium);

text-decoration: none;

}

/\* Navigation — linkness implied by context \*/

.uw-link--nav {

color: var(--dark-blue);

font-weight: var(--fw-medium);

text-decoration: none;

}

@media (hover: hover) and (pointer: fine) {

.uw-link--action:hover,

.uw-link--nav:hover { text-decoration: underline; }

}

/\* On dark — a context, not a variant. Applies to both of the above. \*/

.on-dark .uw-link {

color: var(--white);

text-decoration: none;

}

@media (hover: hover) and (pointer: fine) {

.on-dark .uw-link:hover { text-decoration: underline; }

}

.on-dark .uw-link:focus-visible { outline-color: var(--white); }

/\* Current page \*/

.uw-link\[aria-current="page"\] {

font-weight: var(--fw-bold);

text-decoration: none;

}

## **Accessibility**

- **Inline links must be underlined.** WCAG 1.4.1: colour alone cannot be the only distinguishing factor. --medium-blue on white is 7.6:1 against the background but only ~2.5:1 against --dark-gray body text — nowhere near the 3:1 needed for colour to work alone.

- Link text must make sense out of context. Screen reader users navigate by link list. "Hier klicken" is useless; CBD Blüten aus Indoor-Anbau is not.

- Links that open a new tab must say so — visually and via the accessible name.

- Disclosure controls are \<button class="uw-btn uw-btn--text"\> with aria-expanded, not links. They do not navigate.

- Never wrap a whole sentence in a link. A few words.

## **Don't**

- **Don't use colour alone inline.** Underline is required.

- **Don't use generic link text.** "Mehr erfahren" is a doc 04 violation as well as an accessibility one.

- **Don't style a button as a link and vice versa**, unless the behaviour matches. A link navigates; a button acts. “Mehr anzeigen” expands — it is a button.

- **Don't add a fourth variant.** Three cover every case on the site. A new one means a new rule to remember and a new thing to get wrong.

- **Don't use --medium-blue for a menu row.** Everything in a menu is clickable; colouring every row blue spends the link colour on nothing.

- **Don't remove display: inline-block from base a casually** — it is live, and it changes how links wrap in prose. Worth reviewing, but not silently.

# **7 · Category tab nav**

## **Status — live, §7 and §8 both**

> Three drifted breadcrumb renderers collapsed into one uweed_crumbs(). Legacy CSS — breadcrumb-wrap, ol.breadcrumb, breadcrumb-active — is at zero in both style.css and pdp-critical.css. BreadcrumbList JSON-LD unchanged: it is generated in PHP from query objects with no DOM coupling, so the card's headline risk was closed by inspection rather than accepted.
>
> **The green tab was never this component's CSS.** .subcategory-item.active { background-color: \#33A481 } sat *outside* the .related-product-categories block it was written for, so it applied to every tab on the site. The correct --dark-blue rule already existed in \_filters.scss. Both were **(0,2,0)** — so source order decided it, and the green file was imported about 134 KB later.
>
> **The right rule had been losing silently the whole time.** Worth remembering before assuming a wrong colour means a missing rule.
>
> **Mobile had no breadcrumb at all.** .breadcrumb-back was display: none !important and the trail was d-none d-md-block. That is why AC6 had never been testable.

A horizontal row of filters over a listing or carousel. Narrows what is shown without leaving the page.

Distinct from **Link** (which navigates) and from **Filter panel** (which combines many facets). This is one axis, a handful of options, always visible.

## **Anatomy**

****ALLE PRODUKTE CBD ÖL 5% CBD ÖL 10% CBD ÖL 20% ← ─→

━━━━━━━━━━━━━

↑ active only, 3px ↑ scroll controls,

no rule under the row desktop only

**No continuous rule under the row.** Only the active item is underlined. A full-width grey bar makes the row look like a boundary between sections rather than a set of options, and it fights the card grid directly beneath it.

## **The active colour**

**--dark-blue.** A category tab changes which products are listed — it navigates, and §1 reserves green for advancing a purchase.

The live implementation uses green. Changing it is visible and needs the same QA pass as the card radii.

## **States**

| **State**  | **Label**                | **Underline**        |
|------------|--------------------------|----------------------|
| **Rest**   | --dark-gray, --fw-medium | none                 |
| **Hover**  | --dark-blue              | none — colour alone  |
| **Active** | --dark-blue, --fw-bold   | --dark-blue, 3px     |
| **Focus**  | unchanged                | ring around the item |

## **Implementation**

****\<nav class="uw-tabnav" aria-label="Produktkategorien"\>

\<ul class="uw-tabnav\_\_list"\>

\<li\>\<a class="uw-tabnav\_\_item is-active" href="/cbd-oel/" aria-current="page"\>Alle Produkte\</a\>\</li\>

\<li\>\<a class="uw-tabnav\_\_item" href="/cbd-oel/5-prozent/"\>CBD Öl 5 %\</a\>\</li\>

\<li\>\<a class="uw-tabnav\_\_item" href="/cbd-oel/10-prozent/"\>CBD Öl 10 %\</a\>\</li\>

\<li\>\<a class="uw-tabnav\_\_item" href="/cbd-oel/tropfen/"\>Tropfen\</a\>\</li\>

\</ul\>

\</nav\>



.uw-tabnav\_\_list {

display: flex;

gap: var(--space-l);

margin: 0;

padding: 0;

list-style: none;

overflow-x: auto;

scrollbar-width: none;

-webkit-overflow-scrolling: touch;

}

.uw-tabnav\_\_list::-webkit-scrollbar { display: none; }

.uw-tabnav\_\_item {

display: inline-flex;

align-items: center;

min-height: 44px;

padding-block: var(--space-s);

font-family: var(--ff-body);

font-size: var(--fs-small);

font-weight: var(--fw-medium);

letter-spacing: var(--ls-caps);

text-transform: uppercase;

text-decoration: none;

white-space: nowrap;

color: var(--dark-gray);

border-bottom: var(--border-heavy) solid transparent;

transition: color 150ms ease-out, border-color 150ms ease-out;

}

@media (hover: hover) and (pointer: fine) {

.uw-tabnav\_\_item:hover { color: var(--dark-blue); }

}

.uw-tabnav\_\_item.is-active,

.uw-tabnav\_\_item\[aria-current="page"\] {

color: var(--dark-blue);

font-weight: var(--fw-bold);

border-bottom-color: var(--dark-blue);

}

.uw-tabnav\_\_item:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: -2px;

border-radius: 2px;

}

**Uppercase is kept here** — it is one of the few places it works. The labels are short, the row is scanned rather than read, and --ls-caps is applied.

## **Responsive**

Scrolls horizontally below --bs-breakpoint-lg, with the scrollbar hidden. The active item should be scrolled into view on load.

**Scroll arrows are desktop only** and are progressive enhancement — the row must scroll by touch and by keyboard without them.

## **Accessibility**

- \<nav\> with aria-label. Without the label, a screen reader announces "navigation" with no idea which one.

- aria-current="page" on the active item. The underline and weight are visual only.

- Arrows, if present, are \<button\> with aria-label and aria-hidden="true" on the icon. They must not be the only way to reach items.

- A horizontally scrolling region needs to be keyboard-reachable — tabbing to an off-screen item must scroll it into view, which browsers do natively as long as nothing traps focus.

## **Don't**

- **Don't use this for more than about eight options.** Beyond that it becomes a filter panel.

- **Don't hide options behind arrows on touch.** Arrows supplement scrolling, they do not replace it.

- **Don't use green for the active state** — it collides with the buy signal.

- **Don't add a rule under the whole row.** Only the active item is underlined.

# **8 · Breadcrumb**

Shows where the current page sits and gives one-click access to each level above it.

## **Anatomy**

****Startseite › CBD Shop › CBD Öl › CBD Öl 10 % Vollspektrum

↑ links, --medium-gray ↑ separator ↑ current, --dark-gray, not a link

## **Proposal**

Deliberately quiet. A breadcrumb is orientation, not navigation people came for — it should be findable and never compete with the H1 directly beneath it.

| **Property** | **Value** | **Why** |
|----|----|----|
| **Font** | --ff-body, --fs-meta (13px), --fw-regular | Smallest step in the scale; this is metadata |
| **Case** | Sentence case, **never uppercase** | Uppercase costs ~12 % width, and German breadcrumbs are already the longest of the three languages. It also slows scanning, which is the one thing a breadcrumb must be fast at. |
| **Link colour** | --medium-gray | Recedes; still 2.8:1 against white, acceptable for non-essential UI |
| **Link hover** | --medium-blue + underline | Only then does it announce itself as clickable |
| **Current page** | --dark-blue, --fw-medium, no link | The heading colour, not a link colour. Against --medium-gray siblings it reads as “you are here”, and it ties the trail to the H1 directly beneath |
| **Separator** | › in --line | See below |
| **Spacing** | --space-xs either side of the separator |  |

**Not --dark-green for the current page**, which is what the live site uses. Green is the buy signal; a green breadcrumb tail is the same category error as a green nav tab.

**On --dark-blue for the current page.** The one risk is that standalone links are also --dark-blue at medium weight, so in isolation the last crumb has the same treatment as a link. In practice it does not read that way: its siblings are --medium-gray, and that contrast within the component is what says “you are here” rather than “another link”. It also matches the H1 immediately below, which makes the trail feel attached to the page rather than floating above it. The alternative — --dark-gray — removes the risk but also the connection.

**Separator: ›.** Directional, reads as hierarchy, sits on the baseline at 13px. Doc 04 retires the bullet • because search engines parse it poorly; the chevron is unaffected, since it is a CSS pseudo-element inside a properly marked-up \<nav\>.

### **Correction — a pseudo-element does enter the accessibility tree**

> This document previously said a generated separator "never enters the text". **It does.** Chrome exposes content: "›" as StaticText "›" between every crumb — the same defect a literal character produces, reached by a different route.

.uw-crumbs\_\_item + .uw-crumbs\_\_item::before {

content: "\203A"; /\* fallback for parsers without alt-text syntax \*/

content: "\203A" / ""; /\* empty alt text — visible, not announced \*/

}

> The plain content is declared **first**, so a browser that cannot parse the alt-text syntax keeps a visible separator rather than losing it entirely.
>
> **Measured: accessibility nodes 3237 → 3229.** The claim had never been checked, which is why it survived — "pseudo-elements aren't in the accessibility tree" is a widely repeated half-truth.

## **Implementation**

****\<nav class="uw-crumbs" aria-label="Brotkrumen"\>

\<ol class="uw-crumbs\_\_list"\>

\<li class="uw-crumbs\_\_item"\>

\<a class="uw-crumbs\_\_link" href="/"\>Startseite\</a\>

\</li\>

\<li class="uw-crumbs\_\_item"\>

\<a class="uw-crumbs\_\_link" href="/cbd-shop/"\>CBD Shop\</a\>

\</li\>

\<li class="uw-crumbs\_\_item"\>

\<a class="uw-crumbs\_\_link" href="/cbd-shop/cbd-oel/"\>CBD Öl\</a\>

\</li\>

\<li class="uw-crumbs\_\_item"\>

\<span class="uw-crumbs\_\_current" aria-current="page"\>CBD Öl 10 % Vollspektrum\</span\>

\</li\>

\</ol\>

\</nav\>



.uw-crumbs\_\_list {

display: flex;

align-items: center;

flex-wrap: nowrap;

gap: 0;

margin: 0;

padding: 0;

list-style: none;

font-family: var(--ff-body);

font-size: var(--fs-meta);

line-height: 1.6;

overflow-x: auto;

scrollbar-width: none;

-webkit-overflow-scrolling: touch;

}

.uw-crumbs\_\_list::-webkit-scrollbar { display: none; }

.uw-crumbs\_\_item {

display: flex;

align-items: center;

white-space: nowrap;

}

/\* Separator — generated, so it is never in the accessibility tree \*/

.uw-crumbs\_\_item + .uw-crumbs\_\_item::before {

content: "›";

margin-inline: var(--space-xs);

color: var(--line);

font-size: 1.15em; /\* the glyph is small at 13px \*/

line-height: 1;

}

.uw-crumbs\_\_link {

color: var(--medium-gray);

text-decoration: none;

transition: color 150ms ease-out;

}

@media (hover: hover) and (pointer: fine) {

.uw-crumbs\_\_link:hover {

color: var(--medium-blue);

text-decoration: underline;

text-underline-offset: 0.15em;

}

}

.uw-crumbs\_\_link:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

border-radius: 2px;

}

.uw-crumbs\_\_current {

color: var(--dark-blue);

font-weight: var(--fw-medium);

}

/\* Mobile — the last crumb may be very long on a PDP.

Truncate the current page rather than wrapping the trail. \*/

@media (max-width: 767px) {

.uw-crumbs\_\_current {

overflow: hidden;

text-overflow: ellipsis;

max-width: 22ch;

}

}

## **Responsive**

Scrolls horizontally rather than wrapping — a two-line breadcrumb above an H1 is visual noise. On a PDP the last crumb is the full product name, so it truncates at 22 characters below --bs-breakpoint-md.

**Alternative for very deep trails:** collapse the middle with an ellipsis that expands on click — Startseite › … › CBD Öl › Produkt. Not needed at the site's current depth of four.

## **Accessibility**

- \<nav aria-label="Brotkrumen"\> wrapping an \<ol\>. The ordered list is what conveys hierarchy — a \<div\> of links does not.

- aria-current="page" on the last item, which is a \<span\>, not a link. Linking to the page you are on is a dead control.

- **The separator is a CSS pseudo-element**, so it never enters the accessibility tree. A literal › in the markup gets read aloud between every item.

- Localise the aria-label: Brotkrumen / Fil d'Ariane / Breadcrumb.

- Contrast: --medium-gray on white is 2.8:1. Below the 4.5:1 body-text threshold, which is acceptable for supplementary navigation but **not** if the breadcrumb is the only way to reach a parent category. It is not on this site — the header nav covers it.

## **Don't**

- **Don't uppercase it.** Longer, slower to scan, and German is already the longest of the three.

- **Don't use green for the current page.** Green is the buy signal.

- **Don't link the current page.**

- **Don't put the separator in the markup.** It gets announced.

- **Don't wrap to a second line.** Scroll or truncate.

# **9 · Accordion**

## **Status — live, no flag**

> **There are nine accordions, not eight.** single-product-v2/product-faq.php was missed by the audit. Migrated, since P0 names "the per-block scripts in the PDP" — worth confirming that reading. Two files the card listed, template-parts/faq.php and accordion-agreed-v2.html, do not exist.
>
> Twelve surfaces now render through one uweed_accordion(). Deleted alongside: js/faq-schema.js, js/faq-block.js, a PDP inline script, and three escalating id-chains in \_touch-targets.scss (14 selectors, then 18, then 8).
>
> **Two max-height caps that silently clipped content are gone** — 720px on brand D and why-buy, 500px on the PDP FAQ. A cap on a disclosure panel is a content bug that only appears when someone writes enough text.

### **The FAQ schema risk was real**

> js/faq-schema.js built FAQPage JSON-LD by querying .faq-section .faq-item → .faq-question h3 + .faq-answer .faq-content — **every selector this change removes.** It is now uweed_accordion_faq_schema(), generated in PHP from the same array the panels render from.
>
> This is the case the DOM-scraping warnings in this library were written for. The other two — Product and BreadcrumbList — turned out to read objects. This one did not.

### **Two deliberate deviations from the printed reference below**

> **State colour sits on the trigger; the heading takes color: inherit and the chevron currentColor.** The reference prints an explicit colour on the chevron, which is the one thing that stops it following the label — contradicting this section's own States table. One declaration per state now.
>
> **.uw-acc .uw-acc\_\_heading is (0,2,0), not the flat (0,1,0) printed below**, because .cat-v2-faq-section h3 is (0,1,1) and the category FAQ sits inside it.

### **The hover bug, and why it is the fifth of its kind**

> Written flat, :hover at (0,2,0) **tied** with .uw-acc--boxed .uw-acc\_\_trigger at (0,2,0) and lost on source order — so hover did nothing on all four boxed surfaces.
>
> Now one hover block, placed last, each selector one class above the rest colour it beats. Same failure as the tab nav, the panel modifiers and both :not() cases: see *Four ways a correct rule loses* in Part 1.

### **Not done**

> Rich Results Test needs a public URL — validated locally only, and the "before" no longer exists. Safari unverified. DE only; FR and EN outstanding.

A disclosure control. Hides content behind a label the reader chooses to open.

Replaces **eight** live implementations. Distinct from **Content tabs**, which switch between panels one at a time and keep a persistent rail; an accordion stacks and any number can be open.

## **Anatomy**

****┌───────────────────────────────────────────┐

│ Wie schnell wird geliefert? ⌄ │ ← summary \> h3, min 44px

└───────────────────────────────────────────┘

Bestellungen vor 16:00 gehen … ← panel

────────────────────────────────────────────── ← divider (flush only)

## **Variants**

Three surfaces, one component. The footer is not a separate variant — it is the flush variant inside .on-dark, exactly as links and buttons already work there.

| **Variant** | **Class** | **Use** |
|----|----|----|
| **Flush** | .uw-acc | Inside a page — PDP mobile tabs, category text, generic page accordions, homepage. Hairline dividers, no fill. |
| **Boxed** | .uw-acc--boxed | Standing apart — FAQ blocks, brand page sections. --light-blue fill, gapped. |
| **On dark** | .uw-acc in .on-dark | Footer columns on mobile. |

There is no icon slot. Labels are text only.

## **States**

**Weight and chevron carry the state on every surface. Colour varies only where the background allows it.**

| **Surface** | **Closed** | **Open** | **Contrast, closed** |
|----|----|----|----|
| Flush — on white | --medium-gray, --fw-semibold | --dark-blue, --fw-bold | 2.8:1 |
| Boxed — on --light-blue | --dark-blue, --fw-semibold | --dark-blue, --fw-bold | 12.9:1 |
| On dark — on --dark-green | --white, --fw-semibold | --white, --fw-bold | 7.6:1 |

Hover is --medium-blue on flush and boxed, --light-green on dark. Focus places a ring on the trigger and does not change its colour. The chevron uses currentColor and follows the label in every state.

**Why colour is constant on two of the three surfaces.** Grey on --light-blue is 1.9:1 and grey on --dark-green is 2.4:1 — both genuinely hard to read, not borderline. There the weight does the work alone, which it can: bold against semibold plus a rotated chevron is a clear difference with no colour change at all.

**Accessibility note on flush.** --medium-gray on white is 2.8:1, below the 4.5:1 in WCAG 1.4.3. A **deliberate exception**, taken because the open/closed separation is what makes a long accordion scannable. Mitigated rather than ignored: weight and chevron carry the state independently of colour, so 1.4.1 is satisfied and the distinction survives greyscale.

## **Radius**

**Radius is proportional to the element, not uniform.** A pill works where height is fixed and small — the curve reads as the shape of the control. --radius-card works where height varies with content — the curve reads as a softened corner. A pill on a 400px container becomes the silhouette; 16px on a 44px button looks hesitant.

The boxed variant is both, so its radius follows the state:

| **State** | **Token**                                            |
|-----------|------------------------------------------------------|
| Closed    | --radius-pill — a fixed-height row, matching the CTA |
| Open      | --radius-card — a container                          |

The transition runs alongside the chevron. Flush has no radius; on dark inherits flush.

## **Type**

| **Property**   | **Value**                            |
|----------------|--------------------------------------|
| Element        | \<h3\> in almost every case          |
| Font           | --ff-heading                         |
| Size           | --fs-h5                              |
| Weight         | --fw-semibold closed, --fw-bold open |
| Line height    | --lh-h5                              |
| Letter spacing | --ls-h5                              |

**Heading level.** \<h3\> on FAQ blocks, PDP tabs, brand sections and generic page accordions — the outline matters, and FAQ blocks need it for FAQPage rich results. Where the surrounding structure makes h3 wrong, the *level* moves and the *size* does not: an accordion nested under an existing h3 takes \<h4\> and still renders at --fs-h5. The footer is the exception — its column labels are not headings and stay a plain trigger.

This is §5's rule applied: the element is chosen for document structure, the size for the component. At full --fs-h3 a list of six FAQ questions reads as six section headings and swamps the answers.

## **Implementation**

\<details\> / \<summary\> — no JavaScript.

**The \<summary\> must be the first child of \<details\>.** Wrapping it in a heading is invalid: the browser fails to find a summary, generates its own default marker, and treats the intended trigger as panel content. The heading goes *inside* the summary — the spec allows exactly one heading element there.

\<div class="uw-acc"\>

\<details class="uw-acc\_\_item" open\>

\<summary class="uw-acc\_\_trigger"\>

\<h3 class="uw-acc\_\_heading"\>Beschreibung\</h3\>

\</summary\>

\<div class="uw-acc\_\_panel"\>

\<p\>Dichte Indoor-Blüten, handverlesen und langsam getrocknet.\</p\>

\</div\>

\</details\>

\</div\>

Footer columns are not headings, so they use a \<span\> in the same slot:

\<summary class="uw-acc\_\_trigger"\>

\<span class="uw-acc\_\_heading"\>Shop\</span\>

\</summary\>



.uw-acc\_\_item {

border-bottom: var(--border-hairline) solid var(--line);

}

.uw-acc\_\_item:last-child { border-bottom: 0; }

/\* The trigger carries layout only. Type lives on the heading inside it,

so the same rules work whether that is an \<h3\> or a \<span\>. \*/

.uw-acc\_\_trigger {

display: flex;

align-items: center;

justify-content: space-between;

gap: var(--space-m);

width: 100%;

min-height: 44px;

padding: var(--space-m) 0;

cursor: pointer;

list-style: none; /\* Firefox marker \*/

}

/\* The default marker must be suppressed BOTH ways.

Missing either leaves a browser triangle beside the chevron. \*/

.uw-acc\_\_trigger::-webkit-details-marker { display: none; }

.uw-acc\_\_trigger::marker { content: ""; }

.uw-acc\_\_heading {

margin: 0;

flex: 1 1 auto;

min-width: 0;

font-family: var(--ff-heading);

font-size: var(--fs-h5);

font-weight: var(--fw-semibold);

line-height: var(--lh-h5);

letter-spacing: var(--ls-h5);

color: var(--medium-gray);

transition: color 150ms ease-out;

}

\[open\] \> .uw-acc\_\_trigger .uw-acc\_\_heading {

color: var(--dark-blue);

font-weight: var(--fw-bold);

}

@media (hover: hover) and (pointer: fine) {

.uw-acc\_\_trigger:hover .uw-acc\_\_heading { color: var(--medium-blue); }

}

.uw-acc\_\_trigger:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

border-radius: var(--radius-inner);

}

/\* Chevron drawn in CSS rather than as an SVG, so the \<summary\> holds

exactly one heading element and stays valid. \*/

.uw-acc\_\_trigger::after {

content: "";

flex: 0 0 auto;

width: 9px;

height: 9px;

margin-bottom: 3px;

border-right: var(--border-emphasis) solid currentColor;

border-bottom: var(--border-emphasis) solid currentColor;

color: var(--medium-gray);

transform: rotate(45deg);

transition: transform 200ms ease-out, color 150ms ease-out;

}

\[open\] \> .uw-acc\_\_trigger::after {

transform: rotate(-135deg);

margin-bottom: -3px;

color: var(--dark-blue);

}

.uw-acc\_\_panel {

padding-bottom: var(--space-m);

font-family: var(--ff-body);

font-size: var(--fs-body);

font-weight: var(--fw-regular);

color: var(--dark-gray);

}

/\* ---- Boxed ---------------------------------------------------------- \*/

.uw-acc--boxed {

display: flex;

flex-direction: column;

gap: var(--space-xs);

}

.uw-acc--boxed .uw-acc\_\_item {

border: 0;

background: var(--light-blue);

border-radius: var(--radius-pill);

overflow: hidden;

transition: border-radius 200ms ease-out;

}

.uw-acc--boxed .uw-acc\_\_item\[open\] { border-radius: var(--radius-card); }

.uw-acc--boxed .uw-acc\_\_trigger { padding: var(--space-m) var(--space-l); }

/\* Grey would be 1.9:1 on this background \*/

.uw-acc--boxed .uw-acc\_\_heading,

.uw-acc--boxed .uw-acc\_\_trigger::after { color: var(--dark-blue); }

.uw-acc--boxed .uw-acc\_\_panel { padding: 0 var(--space-l) var(--space-m); }

/\* ---- On dark -------------------------------------------------------- \*/

.on-dark .uw-acc\_\_item { border-bottom-color: \#FFFFFF33; }

/\* Grey would be 2.4:1 on this background \*/

.on-dark .uw-acc\_\_heading {

color: var(--white);

text-transform: uppercase;

font-size: var(--fs-body);

letter-spacing: var(--ls-caps);

}

.on-dark \[open\] \> .uw-acc\_\_trigger .uw-acc\_\_heading { color: var(--white); }

.on-dark .uw-acc\_\_trigger::after,

.on-dark \[open\] \> .uw-acc\_\_trigger::after { color: var(--white); }

@media (hover: hover) and (pointer: fine) {

.on-dark .uw-acc\_\_trigger:hover .uw-acc\_\_heading { color: var(--light-green); }

}

.on-dark .uw-acc\_\_trigger:focus-visible { outline-color: var(--white); }

.on-dark .uw-acc\_\_panel { color: var(--white); }

@media (prefers-reduced-motion: reduce) {

.uw-acc\_\_heading,

.uw-acc\_\_trigger::after,

.uw-acc--boxed .uw-acc\_\_item { transition: none; }

}

**Why the chevron is CSS, not an SVG.** \<summary\>'s content model is either phrasing content *or* a single heading element — not both. An SVG alongside the \<h3\> would break that. A border-drawn chevron sits in ::after, inherits currentColor, and keeps the markup valid.

**Why \<details\>.** It removes the open/close JavaScript entirely and brings four things with it: aria-expanded announced by the browser, the panel correctly exposed and hidden to screen readers, find-in-page reaching text inside closed panels and opening them, and working before JS loads. The eight live implementations wrote roughly 120 lines to get less than this, and three of them never set aria-expanded at all.

**The one trade-off.** Panel height cannot be transitioned in every browser without interpolate-size: allow-keywords or a script. The chevron rotation and the radius change are the motion; the panel appears immediately.

## **Defaults**

| **Surface** | **First item** |
|----|----|
| PDP tabs | **Open.** The description is the reason the page exists. |
| FAQ | **Closed.** An open first answer implies it is the important one. |
| Everything else | Closed |

Several panels open at once is the default and the intended behaviour. One-at-a-time is available natively via \<details name="…"\> but is not used — it hides content the reader just chose to see.

## **Responsive**

The component is identical at every breakpoint. What changes is where it appears: PDP tabs are a vertical rail above --bs-breakpoint-lg and an accordion below it; footer columns are expanded above --bs-breakpoint-lg and an accordion below.

German is the constraint on the boxed variant — a long question must still fit the trigger without the chevron wrapping.

## **Accessibility**

- \<summary\> is the trigger. It is focusable, and Enter and Space work, without any script.

- **The heading goes inside the \<summary\>, not around it.** \<summary\>\<h3\> is valid and keeps the outline; \<h3\>\<summary\> is invalid — the browser cannot find a summary as the first child of \<details\>, so it generates its own default marker and the intended trigger becomes panel content.

- The chevron is decorative — aria-hidden="true".

- Do not add role="button" or aria-expanded to \<summary\>. The browser provides both, and overriding them breaks the native behaviour.

- Open and closed must be distinguishable without colour. Weight plus chevron direction does this; colour alone would not.

- The trigger clears 44 × 44px on every surface.

## **Don't**

- **Don't use + / − as the icon.** A plus means "add" on a shop — it is the add-to-cart glyph. A chevron says "more below" without competing.

- **Don't grey the label on --light-blue or --dark-green.** 1.9:1 and 2.4:1 respectively. Let the weight carry the state.

- **Don't use green on the open state.** Opening a panel does not advance a purchase.

- **Don't add an icon slot.** It was removed from two surfaces; adding it back means a fourth variant.

- **Don't force one panel open at a time.** It hides content the reader just asked for.

- **Don't suppress only one marker pseudo-element.** Both ::-webkit-details-marker and ::marker are needed, or a browser triangle appears beside the chevron.

- **Don't put the heading outside the \<summary\>.** The summary must be the first child of \<details\>.

- **Don't add an SVG alongside the heading inside \<summary\>.** Its content model allows one heading *or* phrasing content, not both. The chevron is drawn in CSS for this reason.

# **10 · Dropdown**

A panel that opens from a trigger and floats above the page. Replaces **eight** live treatments.

## **Status — live, all eight migrated**

> Every panel reports 16px radius, --line hairline, --shadow-lg, z-index 1035, max-height and overscroll: contain. One surface block in the compiled CSS, \#5897fb at zero, no role="menu" anywhere. All three keyboard models tested separately.
>
> **The blocking decision resolved from doc 08 rather than being invented.** --z-panel: 1035 already existed, and its comment named these exact consumers.

### **The audit undercounted, and two of the eight were dead**

> The sort trigger alone carried **three** treatments — .btn-sort in two files plus .btn-dropdown, one with eleven !important declarations at 30px radius.
>
> Meanwhile .custom-dropdown could never open — nothing anywhere toggled the .dropdown-open class it waited on, confirmed by clicking it — and .language-switcher-dropdown renders nowhere, its shortcode appearing in 0 posts and 0 widgets. **An inventory counts CSS blocks, not working components.**

### **critical.css was overriding the panel on one template only**

> body.home .dropdown-menu { overflow: visible !important; z-index: 9999 !important } defeated the mega menu's max-height **on the homepage alone** — a 430px menu ran past the fold there and scrolled everywhere else — and put it above modals, the cart drawer and the age gate.
>
> A critical CSS file is not in the SCSS tree, so it does not appear in a partial-by-partial audit. **Grep the compiled output, not the source.**

### **max-height alone is not AC1**

> A 420px panel opening from a trigger 200px above the fold still hung 268px past the viewport bottom. uw-pop.js places on **both axes** — flip above when there is more room, otherwise clamp to the space that exists.

### **Out of scope and now visibly inconsistent**

> .v2-filter-option.is-checked keeps a green fill and .v2-filter-tag a green chip — panel *contents* belong to the filter rework. Both now sit beside blue pills, and the checked-row fill also contradicts **hover is the only fill**. Three lines whenever it is wanted.

## **One surface, three behaviours**

The eight live treatments are not one component. They share a surface, but their keyboard models are incompatible — forcing one pattern onto all three would break at least two.

| **Behaviour** | **Does what** | **Keyboard** |
|----|----|----|
| **Menu** | Navigates. Every row is a link. | Tab through the links. No role="menu" and no roving focus — these are navigation, not application menus. |
| **Panel** | Changes the current view: sort order, filter facets. | Disclosure. Tab into the controls, Escape closes and returns focus to the trigger. |
| **Listbox** | Picks one value, usually filtered by typing. | Full combobox: arrows move aria-activedescendant, Enter selects, Escape reverts. Focus stays in the input. |

.uw-pop is the shared surface. The behaviour is chosen per use.

## **Anatomy**

****\[ Trigger ▾ \]

╭──────────────────────────────╮

│ Row │ ← --radius-inner, 44px min

│ Row ✓ │ ← selected: check, not a fill

│ ───────────────────────── │ ← separator

│ Row 24 │ ← meta, --medium-blue

├──────────────────────────────┤

│ \[ Secondary \] \[ Primary \] │ ← footer, optional

╰──────────────────────────────╯

--radius-card, --shadow-lg, 4px inset

The 4px inset padding matters: without it, a hovered row's fill reaches the panel's rounded corner and squares it off.

## **Colour logic**

**Hover is the only fill in the component.** Everything else is carried by a mark or by weight. This is deliberate — an earlier draft filled the selected row as well, and the two collided: hover the selected item and one has to win, leaving the other invisible.

| **Meaning** | **Treatment** | **Why** |
|----|----|----|
| **Hover / keyboard highlight** | --light-blue fill | Transient. "Where you are pointing." |
| **Selected value** — sort, listbox, select | Check mark + --dark-blue + --fw-medium | Persistent. Survives hover, greyscale, and a light-blue background behind it. |
| **Ticked facet** — filter checkboxes | The checkbox itself, --dark-blue fill with a white check | The control already carries the state. Filling the row says it twice. |
| **Current page** — menus | --fw-bold, no fill, no mark | "You are here" is not "you chose this". A check mark would imply a choice. |

Counts and other row metadata take --medium-blue, matching the filter counts in §4.

## **Width**

**Min 260px, max 360px**, content-sized between.

That range is one product-grid column across every desktop container — 262px at a 1120px container, 348px at 1464px — so the panel reads as aligned to the grid without being coupled to it. Deriving the width from the grid would mean knowing the container width at runtime, and container widths are deliberately untokenised.

**Above 360px rows stop being scannable.** A facet row is a short label plus a count; past that width the gap between them becomes a gulf.

Long lists grow to the maximum and then scroll — max-height: min(60vh, 420px) with overscroll-behavior: contain, so scrolling the panel does not scroll the page behind it. Only two of the eight live treatments set a max height at all; the rest can run off-screen.

## **Filter and sort pill**

The trigger for a filter or sort panel. Specified here because it is inseparable from the panel it opens; the filter *panel* is documented with the filter component when that rework lands.

**Filters and sort are blue.** A filter changes which products are listed — the same job as the category tab nav (§7), and not a purchase. The live implementation fills active pills with --dark-green, which spends the buy signal on a view control; on a category page those pills sit directly above a grid of green add-to-cart buttons.

| **State** | **Surface** | **Border** | **Label** |
|----|----|----|----|
| Rest | --white | --line | --dark-blue |
| Hover | --light-blue | --light-blue | --dark-blue |
| Open | --light-blue | --medium-blue | --dark-blue |
| Active — filter applied | --dark-blue | --dark-blue | --white, count bubble white on dark |
| Disabled — no options | --light-gray | --line | --medium-gray |

**Rest is white, not grey.** Doc 08's *inactive is not grey* rule exists because of this control: an unapplied filter and a filter with no options would otherwise look identical, and the one you can use would be the one that looks unusable.

**The sort control is the same component.** It sits at rest permanently, showing its current value — Sortieren: Beliebtheit. It is not a select and not a form field.

.uw-fp {

display: inline-flex;

align-items: center;

gap: var(--space-xs);

height: 44px;

padding: 0 var(--space-m);

font-family: var(--ff-body);

font-size: var(--fs-small);

font-weight: var(--fw-medium);

line-height: 1;

background: var(--white);

color: var(--dark-blue);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-pill);

cursor: pointer;

transition: background-color 120ms ease-out, border-color 120ms ease-out,

color 120ms ease-out;

}

@media (hover: hover) and (pointer: fine) {

.uw-fp:hover { background: var(--light-blue); border-color: var(--light-blue); }

}

.uw-fp:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

}

.uw-fp\[aria-expanded="true"\] {

background: var(--light-blue);

border-color: var(--medium-blue);

}

.uw-fp.is-active {

background: var(--dark-blue);

border-color: var(--dark-blue);

color: var(--white);

}

/\* Count bubble — inverts inside an active pill \*/

.uw-fp\_\_count {

display: inline-flex;

align-items: center;

justify-content: center;

min-width: 20px;

height: 20px;

padding: 0 6px;

font-size: var(--fs-meta);

font-weight: var(--fw-bold);

font-variant-numeric: tabular-nums;

background: var(--white);

color: var(--dark-blue);

border-radius: var(--radius-pill);

}

.uw-fp:disabled {

background: var(--light-gray);

border-color: var(--line);

color: var(--medium-gray);

cursor: not-allowed;

}

**The row around it**

| **Element** | **Treatment** | **Why** |
|----|----|----|
| Applied-filter chip | --light-gray with --dark-gray | A label describing state, not a control. It sits above the grid and must not compete with it. |
| Chip remove button | Red on hover | Removal is destructive, and it is the only destructive control on the page |
| Reset all | Action link, --medium-blue | Announces itself as clickable, and is not a primary action |
| Result count | --dark-gray | Metadata |

This is doc 08's *saturated on controls, tint on labels* rule in one row: the applied filter is a control in an on state and takes the fill; the chip naming that filter is a label and takes the tint.

## **Implementation**

****\<!-- Menu --\>

\<div class="uw-pop" role="none"\>

\<a class="uw-pop\_\_item" href="/cbd-shop/cbd-blueten/"\>CBD Blüten\</a\>

\<a class="uw-pop\_\_item" href="/cbd-shop/cbd-oel/"\>CBD Öl\</a\>

\<div class="uw-pop\_\_sep"\>\</div\>

\<a class="uw-pop\_\_item" href="/cbd-shop/" aria-current="page"\>Alle Kategorien\</a\>

\</div\>

\<!-- Panel — sort --\>

\<div class="uw-pop" role="listbox" aria-label="Sortierung"\>

\<div class="uw-pop\_\_item" role="option" aria-selected="true"\>Beliebtheit\</div\>

\<div class="uw-pop\_\_item" role="option" aria-selected="false"\>Preis aufsteigend\</div\>

\</div\>

\<!-- Panel — filter facet --\>

\<div class="uw-pop"\>

\<label class="uw-pop\_\_item"\>

\<input class="uw-check\_\_input" type="checkbox" checked\>

Sweed

\<span class="uw-pop\_\_meta"\>24\</span\>

\</label\>

\</div\>

\<!-- Listbox — autocomplete --\>

\<ul class="uw-pop" role="listbox" id="addr-list"\>

\<li class="uw-pop\_\_item is-active" role="option" id="addr-0" aria-selected="false"\>

Bahnhofstrasse 1, 8001 Zürich

\</li\>

\</ul\>



.uw-pop {

background: var(--white);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-card);

box-shadow: var(--shadow-lg);

padding: var(--space-2xs);

min-width: 260px;

max-width: 360px;

max-height: min(60vh, 420px);

overflow-y: auto;

overscroll-behavior: contain;

margin: 0;

list-style: none;

/\* z-index — see Open items \*/

}

.uw-pop\_\_item {

display: flex;

align-items: center;

gap: var(--space-xs);

min-height: 44px;

padding: var(--space-xs) var(--space-s);

border-radius: var(--radius-inner);

font-family: var(--ff-body);

font-size: var(--fs-body);

color: var(--dark-gray);

text-decoration: none;

cursor: pointer;

transition: background-color 120ms ease-out, color 120ms ease-out;

}

/\* Hover and keyboard highlight — the only fill \*/

@media (hover: hover) and (pointer: fine) {

.uw-pop\_\_item:hover { background: var(--light-blue); color: var(--dark-blue); }

}

.uw-pop\_\_item.is-active { background: var(--light-blue); color: var(--dark-blue); }

/\* Selected — a check mark \*/

.uw-pop\_\_item\[aria-selected="true"\] {

color: var(--dark-blue);

font-weight: var(--fw-medium);

}

.uw-pop\_\_item\[aria-selected="true"\]::after {

content: "";

flex: 0 0 auto;

width: 14px;

height: 9px;

margin-left: auto;

border-left: var(--border-emphasis) solid currentColor;

border-bottom: var(--border-emphasis) solid currentColor;

transform: rotate(-45deg) translate(1px, -2px);

}

/\* Current page in a menu — weight only \*/

.uw-pop\_\_item\[aria-current="page"\] {

color: var(--dark-blue);

font-weight: var(--fw-bold);

}

.uw-pop\_\_item:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: -2px;

}

.uw-pop\_\_group {

padding: var(--space-xs) var(--space-s) var(--space-2xs);

font-size: var(--fs-meta);

font-weight: var(--fw-bold);

letter-spacing: var(--ls-caps);

text-transform: uppercase;

color: var(--dark-gray);

}

.uw-pop\_\_sep {

height: 1px;

background: var(--line);

margin: var(--space-2xs) var(--space-s);

}

.uw-pop\_\_meta {

margin-left: auto;

font-size: var(--fs-meta);

color: var(--medium-blue);

font-variant-numeric: tabular-nums;

}

.uw-pop\_\_foot {

display: flex;

gap: var(--space-xs);

padding: var(--space-xs);

border-top: var(--border-hairline) solid var(--line);

margin-top: var(--space-2xs);

}

/\* Rich rows — search suggestions \*/

.uw-pop\_\_thumb {

width: 36px;

height: 36px;

border-radius: var(--radius-checkbox);

background: var(--light-gray);

flex-shrink: 0;

}

.uw-pop\_\_sub {

display: block;

font-size: var(--fs-meta);

color: var(--dark-gray); /\* never --medium-gray — 2.8:1 as text \*/

}

## **Responsive**

**Below --bs-breakpoint-lg the filter panel becomes a full-screen sheet**, not a floating panel and not a partial bottom sheet. A 300px popover anchored to a filter pill is unusable at 375px, and a half-height sheet leaves a facet list scrolling inside a scrolling page.

The sheet keeps a fixed header and footer with the list scrolling between them, so the apply action is always reachable. Same rows, same tokens — only the container changes.

**The sheet has an apply footer; the desktop panel does not.** On desktop each tick re-queries immediately because the grid is visible behind the panel. On a full-screen sheet the results are hidden, so live re-querying gives no feedback — the count on the button ("24 anzeigen") is the feedback instead.

Menus and listboxes stay panels at every width.

## **Accessibility**

- **Menu:** plain links in a container. Do not add role="menu" — that pattern implies arrow-key navigation and a roving tabindex, which is wrong for navigation and worse than the default.

- **Panel:** the trigger carries aria-expanded. Escape closes and returns focus to the trigger. Focus moves into the panel.

- **Listbox:** role="listbox" on the panel, role="option" on rows, aria-activedescendant on the input. Focus never leaves the input. Escape reverts to the typed value.

- Every row clears 44px.

- overscroll-behavior: contain stops the page scrolling when the panel's list reaches its end — a real annoyance on touch.

- The check mark is a CSS pseudo-element, so it never enters the accessibility tree. aria-selected carries the meaning.

## **Don't**

- **Don't fill the selected row.** Hover is the only fill; two fills collide.

- **Don't use a check mark for aria-current.** It implies a choice that was not made.

- **Don't use --medium-gray for secondary text in a row.** It is 2.8:1 — UI only, never text.

- **Don't omit max-height.** Six of the eight live treatments do, and the tallest run off-screen.

- **Don't reach for role="menu"** unless building an application menu, which this site has none of.

- **Don't fill an active filter pill with green.** It is a view control, not a purchase — and on a category page it would sit directly above a grid of green add-to-cart buttons.

- **Don't grey a filter pill at rest.** Grey means unavailable. A filter with options waiting must look usable.

- **Don't let the mega menu live here.** It borrows the surface; its columns, widening behaviour, hover intent and cross-column keyboard navigation are Header business — see §24.

## **Open items**

| **\#** | **Item** | **Status** |
|----|----|----|
| 1 | **z-index band.** The eight live treatments sit across three bands (11 · 20 · 180 · 1000 · 1001 · 10000 !important). The panel needs one band, below modals and the cart drawer, above sticky headers and page content. | **Blocking** — audit card decisions C1–C3 |
| 2 | Select2 removal — its own dev card. Until then, checkout country fields do not use this component. | In progress |

# **11 · Blog card**

Represents an article in a listing. Replaces **five** live treatments.

## **Status — live, with three gaps**

> Shipped behind UWEED_BLOG_CARD_V2. All P0 requirements met except the CSS deletion, which is rollout step 4 and correctly still pending while the flag can be switched off.

| **Gap** | **Status** |
|----|----|
| Old CSS still compiled — .card-blog-large, .blog-archive\_\_card, .category-blog-articles, .product-blog-articles | **Open.** Rollout step 4. Required while the flag can be off; the card says this step is part of the work, not after it. |
| --featured and --compact built but unused | The surfaces they exist for — archive top slot, sidebar, related posts — are out of scope or do not exist. **Built to spec, waiting for a consumer.** |
| Badge suppression, and AC10 | Not exercisable. Both depend on the archive, which went out of scope. |

> **Measured wins:** PDP went from 4 links per card to 1. CLS improved rather than held — 0.0007 → 0.0002. Desktop cards 441px × 5, identical; mobile 116px × 4. At 375px in German the text block is 84px against a 91px image, so the height rule holds with 7px to spare.
>
> **AC3 is worth reading as a number:** a solid 2px ring at rgb(51,75,193) with 2px offset on a 567×349 card, versus a 92×225 anchor. The ring is on the card, not the stretched overlay — which is the thing that is easy to get wrong and impossible to notice without measuring.

### **QA note — Bootstrap makes scrollIntoView async**

> scroll-behavior: smooth is set globally, so scrollIntoView() returns before the scroll finishes. A click test that fires immediately afterwards hits the wrong coordinates and reports a false failure. It produced one during this audit. Anyone scripting QA on this site needs to await the scroll.

## **Variants**

| **Variant** | **Use** | **Layout** |
|----|----|----|
| **Standard** | Blog archive, related posts, editorial blocks | Stacked on desktop, horizontal list on mobile |
| **Featured** | One per archive, top slot | Horizontal at 52 % image on desktop, list row below --bs-breakpoint-md |
| **Compact** | Sidebar, "weitere Artikel" | Horizontal at every width, no excerpt, no badge |

Five collapse to three: the "archive index" and "category page" treatments differed from the standard card only in radius and border, which is drift rather than intent.

## **The image**

**16:9 everywhere, one source file.** The card, the featured slot and the article header all read the same image. No second crop, no derivative asset — and 16:9 is what AI generation defaults to, which matters for a blog producing its own imagery.

The image is **decorative**: it takes alt="" and explicit width/height. The headline beside it carries the meaning, and an alt repeating the headline would be announced twice.

## **Anatomy**

****Desktop — stacked Mobile — horizontal list

╭────────────────────╮ ┌──────────┐

│ \[badge\] │ │ \[badge\] │ Headline over

│ 16:9 image │ │ 16:9 │ up to three lines

╰────────────────────╯ │ │ August 2026

Headline, up to 3 lines └──────────┘

Excerpt, 2 lines ─────────────────────────

August 2026 ┌──────────┐

│ 16:9 │ Next headline

## **One link per card**

**The link sits on the title and stretches over the whole card.** The image is not a link; there is no "Weiterlesen" link.

|  | **Before** | **After** |
|----|----|----|
| Links per card | Up to 3 | 1 |
| Nine-card archive | 27 links, "Weiterlesen" nine times | 9 links, each named by its headline |
| Tab stops | 27 | 9 |

A screen-reader user navigating by link list hears each link's accessible name. "Weiterlesen" nine times conveys nothing; the headline does. This is also doc 04's rule — link text must make sense out of context.

The theme already ships .stretched-link with this pseudo-element pattern; it is simply not used on blog cards.

**Two things the pattern needs.** Text inside the card stops being selectable, which is acceptable on something whose whole purpose is to be clicked. And the focus ring must move to the card rather than sitting on the invisible overlay — :has(a:focus-visible) does that.

## **What goes on the card**

| **Element** | **Standard** | **Featured** | **Compact** |
|----|----|----|----|
| Category badge | Yes | Yes | No |
| Headline | 3 lines | 3 lines | 2 lines |
| Excerpt | 2 lines, hidden below --bs-breakpoint-md | 3 lines | No |
| Date | Yes | Yes | Yes |
| Reading time | No | No | No |

**Category badge is a label, not a link.** It is the highest-value item on the card — it tells the reader what kind of thing this is before they read the headline. Making it a link would put a second link back on every card; category navigation belongs in the tab nav (§7), where it is one control instead of one per card.

**Suppress the badge when the listing is already filtered to that category.** On a category archive every card would carry the same badge, repeating what the page heading already says.

**Date is month and year — "August 2026".** No "Aktualisiert" prefix; it adds a word without adding information. Day-level precision implies news, and nothing on this blog is news.

**A date on a card has no SEO value.** Google reads datePublished and dateModified from the article page's structured data. What a listing displays affects nothing in search. This is a user decision only.

**Reading time is dropped.** No search value, no standard schema, and it competes for a line that is already tight. Cheap to add later if bounce on long articles proves to be a problem.

**Excerpt is hidden by CSS on mobile, not conditionally rendered.** Server-side device detection fragments the page cache; one HTML output, CSS decides what shows. display: none also removes it from the accessibility tree, so a screen reader on mobile hears what a sighted user sees.

## **Card height**

**Set by the image, never by the title.** The title clamp guarantees the text can never exceed the image height, so a one-line headline and a three-line headline produce identical cards.

A fixed pixel height would break the moment the viewport changes width — the image is a percentage, so its height moves with it. Letting the image lead means one rule holds at every screen size.

**This is a constraint on the text, not only on the layout.** Every variant's type sizes and clamps are chosen so the text block stays shorter than the image at the narrowest width that variant is used at — the featured card at 768px is the tightest case. Raising a font size or adding a line means re-checking that the image still fills; if the text wins, the card grows and a strip of empty card appears beside the picture.

| **Variant** | **Narrowest width** | **Image height** | **Text block** |
|-------------|---------------------|------------------|----------------|
| Featured    | 720px container     | ~210px           | ~185px         |
| Standard    | 262px card          | ~147px           | ~135px         |
| Mobile row  | 343px row           | 89px             | ~85px          |

## **Mobile: the box is dropped**

Below --bs-breakpoint-md the card loses its border, shadow and radius and becomes a list row with a hairline between items.

**This is not only a layout change.** Six card outlines stacked on a phone is a lot of chrome for very little separation; dividers do the same job for a fraction of the visual cost. It also removes the height problem entirely — with no box around it the image is free to be exactly 16:9 and the text sits beside it, so nothing needs to reconcile.

**The consequence, stated deliberately:** the component has two visual identities, not just two layouts. The desktop card is a browse surface; the mobile list is a scan surface. Every future change is made and verified twice.

**The divider is centred by construction** — equal padding above and below each row, with the border on .uw-post + .uw-post. No divider before the first item or after the last.

## **The five literals in this component**

The "tokens only" checklist item fails here, and **the cause is this document rather than the build** — these five values were carried verbatim out of the CSS below. Recorded so the next reader knows which are deliberate and which are a gap.

| **Value** | **Verdict** |
|----|----|
| flex: 0 0 52% / 0 0 46% | **Component-level, correct.** A proportion, not a spacing value. Tokenising it would be inventing a token for one consumer. |
| line-height: 1.2 / 1.15 / 1.25 | **Component-level, correct.** Doc 08's scale defines line-height per type step; these are tightened deliberately, and the tightening is the reason the mobile row fits. |
| translateY(-2px) | **Should be a token.** The same lift appears on the card (§25), the blog card and the tiles. It is a system behaviour with three consumers, which is doc 08's bar. |
| gap: 2px | **Below the scale.** --space-2xs is 4px and there is nothing under it. Either it becomes 4px or the scale gains a step — 4px is almost certainly fine here. |
| Badge top / left: 5px | **A gap.** 5px is not on any scale. Should be --space-2xs (4px); the 1px difference is not doing work. |

**Two of the five are real drift** and should close with the token-corrections card. The other three are legitimate component-level values and this document should have said so rather than leaving a developer to guess — which is what produced the failing checklist row.

## **Type**

| **Property** | **Desktop** | **Mobile** |
|----|----|----|
| Headline element | \<h3\> | \<h3\> |
| Headline size | --fs-h5 · featured --fs-h4 | --fs-small |
| Headline line-height | --lh-h5 | 1.25 |
| Headline clamp | 3 lines · featured 2 | 3 lines |
| Date | --fs-meta | --fs-meta, line-height 1.15 |
| Badge | --fs-meta | --fs-meta |

> **Component-level exception.** The mobile headline uses --fs-small, which doc 08 defines as body-adjacent prose rather than a heading size. The scale has no size for *a heading that must be small* — it runs --fs-body 16px then --fs-h6 16/18px. Borrowing --fs-small is the pragmatic choice; adding an --fs-h7 would be a new token for one component, which doc 08 sets a higher bar for. Recorded here so it does not read as a slip.
>
> The fit at 46 % comes from **tightened line-heights, not smaller type**. A two-word date does not need leading built for paragraphs.

## **Implementation**

****\<article class="uw-post"\>

\<div class="uw-post\_\_media"\>

\<img src="…" alt="" width="1600" height="900" loading="lazy"\>

\<span class="uw-post\_\_badge"\>Law &amp; Safety\</span\>

\</div\>

\<div class="uw-post\_\_body"\>

\<h3 class="uw-post\_\_title"\>

\<a href="/blog/cbd-am-steuer/"\>CBD am Steuer: was in der Schweiz gilt\</a\>

\</h3\>

\<p class="uw-post\_\_excerpt"\>Grenzwerte, Kontrollen und was bei einem Test passiert.\</p\>

\<p class="uw-post\_\_meta"\>\<time datetime="2026-08"\>August 2026\</time\>\</p\>

\</div\>

\</article\>



/\* ---- Desktop: stacked card ------------------------------------------ \*/

.uw-post {

position: relative;

display: flex;

flex-direction: column;

background: var(--white);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-card);

box-shadow: var(--shadow-xs);

overflow: hidden;

transition: transform .15s ease, box-shadow .15s ease;

}

@media (hover: hover) and (pointer: fine) {

.uw-post:hover {

transform: translateY(-2px);

box-shadow: var(--shadow-md);

}

}

.uw-post\_\_media {

position: relative;

aspect-ratio: 16 / 9;

background: var(--light-gray);

flex-shrink: 0;

}

.uw-post\_\_media img {

width: 100%;

height: 100%;

object-fit: cover;

display: block;

}

.uw-post\_\_badge {

position: absolute;

top: var(--space-s);

left: var(--space-s);

display: inline-flex;

padding: var(--space-2xs) var(--space-s);

font-size: var(--fs-meta);

font-weight: var(--fw-medium);

line-height: 1.2;

background: var(--light-pink);

color: var(--dark-pink);

border-radius: var(--radius-pill);

}

.uw-post\_\_body {

display: flex;

flex-direction: column;

gap: var(--space-xs);

padding: var(--space-m);

flex: 1;

min-width: 0;

overflow: hidden;

}

.uw-post\_\_title {

font-family: var(--ff-heading);

font-size: var(--fs-h5);

font-weight: var(--fw-semibold);

line-height: var(--lh-h5);

letter-spacing: var(--ls-h5);

color: var(--dark-blue);

margin: 0;

display: -webkit-box;

-webkit-line-clamp: 3;

-webkit-box-orient: vertical;

overflow: hidden;

}

.uw-post\_\_title a { color: inherit; text-decoration: none; }

/\* The one link, stretched over the card \*/

.uw-post\_\_title a::after {

content: "";

position: absolute;

inset: 0;

z-index: 1;

}

@media (hover: hover) and (pointer: fine) {

.uw-post:hover .uw-post\_\_title { color: var(--medium-blue); }

}

/\* Ring on the card, not on the invisible overlay \*/

.uw-post:has(a:focus-visible) {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

}

.uw-post\_\_excerpt {

font-size: var(--fs-small);

color: var(--dark-gray);

margin: 0;

display: -webkit-box;

-webkit-line-clamp: 2;

-webkit-box-orient: vertical;

overflow: hidden;

}

.uw-post\_\_meta {

margin-top: auto;

padding-top: var(--space-2xs);

font-size: var(--fs-meta);

line-height: 1.15;

color: var(--medium-gray);

}

/\* ---- Featured -------------------------------------------------------- \*/

/\* The text block must stay shorter than the image at every width, or the

card grows and the picture stops filling its side. Title at --fs-h4 with

a 2-line clamp and a 2-line excerpt keeps it under even at 768px. \*/

.uw-post--featured { flex-direction: row; }

.uw-post--featured .uw-post\_\_media { flex: 0 0 52%; align-self: flex-start; }

.uw-post--featured .uw-post\_\_body { padding: var(--space-l); justify-content: center; }

.uw-post--featured .uw-post\_\_title {

font-size: var(--fs-h4);

font-weight: var(--fw-bold);

line-height: var(--lh-h4);

letter-spacing: var(--ls-h4);

-webkit-line-clamp: 2;

}

.uw-post--featured .uw-post\_\_excerpt {

-webkit-line-clamp: 2;

font-size: var(--fs-body);

}

/\* ---- Compact — sidebar, related. Horizontal at every width. ---------- \*/

.uw-post--compact {

flex-direction: row;

align-items: center;

background: none;

border: 0;

border-radius: 0;

box-shadow: none;

padding: var(--space-s) 0;

}

.uw-post--compact + .uw-post--compact {

border-top: var(--border-hairline) solid var(--line);

}

@media (hover: hover) and (pointer: fine) {

.uw-post--compact:hover { transform: none; box-shadow: none; }

}

.uw-post--compact .uw-post\_\_media {

flex: 0 0 46%;

border-radius: var(--radius-inner);

overflow: hidden;

}

.uw-post--compact .uw-post\_\_body {

padding: 0 0 0 var(--space-s);

gap: var(--space-2xs);

justify-content: center;

}

.uw-post--compact .uw-post\_\_title {

font-size: var(--fs-small);

line-height: 1.25;

-webkit-line-clamp: 2;

}

.uw-post--compact .uw-post\_\_excerpt,

.uw-post--compact .uw-post\_\_badge { display: none; }

.uw-post--compact .uw-post\_\_meta { margin-top: 0; padding-top: 0; }

/\* ---- Mobile: the box is dropped -------------------------------------- \*/

@media (max-width: 767px) {

.uw-post,

.uw-post--featured {

flex-direction: row;

align-items: center;

background: none;

border: 0;

border-radius: 0;

box-shadow: none;

padding: var(--space-s) 0;

}

.uw-post + .uw-post {

border-top: var(--border-hairline) solid var(--line);

}

.uw-post:hover { transform: none; box-shadow: none; }

.uw-post\_\_media {

flex: 0 0 46%;

border-radius: var(--radius-inner);

overflow: hidden;

align-self: center;

}

.uw-post\_\_badge { top: 5px; left: 5px; }

.uw-post\_\_body {

padding: 0 0 0 var(--space-s);

gap: 2px;

justify-content: center;

}

.uw-post\_\_title,

.uw-post--featured .uw-post\_\_title {

font-size: var(--fs-small);

font-weight: var(--fw-semibold);

line-height: 1.25;

letter-spacing: 0;

-webkit-line-clamp: 3;

}

.uw-post\_\_excerpt { display: none; }

.uw-post\_\_meta { margin-top: 0; padding-top: 0; }

}

@media (prefers-reduced-motion: reduce) {

.uw-post { transition: none; }

}

## **Responsive**

| **Breakpoint** | **Layout** | **Columns** | **Image** | **Headline** | **Excerpt** |
|----|----|----|----|----|----|
| ≥ 992px | Stacked card | 3 | Full width, 16:9 | --fs-h5, 3 lines | 2 lines |
| 768–991px | Stacked card | 2 | Full width, 16:9 | --fs-h5, 3 lines | 2 lines |
| \< 768px | List row, no box | 1 | 46 %, 16:9 | --fs-small, 3 lines | Hidden |

At 375px the row is 343px wide, the image 158 × 89px, and about six items fit on screen.

## **Accessibility**

- One link per card, named by the headline. Never a bare "Weiterlesen".

- The image is decorative: alt="". Explicit width and height reserve the space and prevent layout shift.

- The focus ring sits on the card, not on the stretched overlay.

- \<time datetime="2026-08"\> so the date is machine-readable even though it displays as month and year.

- The badge is a \<span\>. If it were a link it would be a second tab stop on every card.

- The headline is \<h3\> — h1 is the archive title, so cards are h3.

## **Don't**

- **Don't link the image, the title and a "Weiterlesen" separately.** Three links to one URL is the defect this component exists to fix.

- **Don't make the badge a link.** Category navigation is the tab nav's job.

- **Don't let the title drive the card height.** The image sets it; the clamp enforces it. Raising a font size or adding a line means re-checking that the text still fits inside the image height at the narrowest width.

- **Don't render the excerpt conditionally by device.** It fragments the page cache. Hide it with CSS.

- **Don't crop a second image for the card.** One 16:9 source serves card, featured slot and article header.

- **Don't add reading time back without a reason.** It was removed deliberately.

# **12 · Tooltip**

A short clarification attached to a control that is already labelled. Replaces **three** live implementations, none of which is the basis — all three were hover-only pseudo-element text, which is the same defect three times.

## **Status — live**

> Shipped and verified. Three files added, nine modified, 88 automated checks green across 8 suites. Every row of the token table verified as computed values against resolved tokens, and all six acceptance criteria tested — including AC4 against the real form.checkout.

| **Requirement** | **Status** |
|----|----|
| P0 — one component, button trigger, DOM text, hover/focus/tap, Escape, 44px target | **Met** |
| P1 — placement modifiers and edge detection | **Met** |
| P2 — CSS anchor positioning | **Deferred.** Browser support is not there; correctly not built. |

> **The tooltip ships as a PHP renderer, not a CSS class.** uweed_tooltip() in inc/tooltip.php emits the whole structure. See below — this is the part worth copying to other components.
>
> **uw-tooltip.js is excluded from WP Rocket's delay.** Escape-to-dismiss and edge fitting have to work on first interaction; a delayed script would leave the tooltip unclosable for the first few seconds of a session, which is the same reasoning that made the marquee pause control CSS-only (doc 08, Part 8).

## **Ship the renderer, not just the class**

The tooltip has a markup contract that is easy to get subtly wrong: the trigger must be a \<button type="button"\>, it must carry aria-describedby, the bubble must carry role="tooltip" and a matching id, and the two ids must be unique on the page.

**A CSS class cannot enforce any of that.** A PHP function can, and does:

uweed_tooltip( 'Etwa 89.20 EUR zum heutigen Kurs.', \[ 'label' =\> 'Währung' \] );

The id is generated, the roles are fixed, type="button" cannot be forgotten, and the next person to add a tooltip cannot produce a broken one by copying a partial example.

**Worth applying wherever markup carries an accessibility contract** rather than only a visual one — the quantity selector, the form field and the modal all have the same property.

## **First: most things that want a tooltip should not have one**

A tooltip adds nuance. It never carries information the reader needs to complete a task, because it is hidden by default and stays hidden for anyone who does not know to look.

| **If the content is…** | **Then it is…** |
|----|----|
| A short clarification the reader could do without | A **tooltip** |
| Needed to make a decision, or explains why something is disabled | **Not a tooltip** — put it inline |
| More than two sentences, or contains a link | A **popover** — click-toggled, not a hover bubble |
| The only label a control has | **Not a tooltip** — the control needs a visible label |

**The live out-of-stock tooltip was the wrong pattern.** .has-oos-tooltip hid the reason a variation could not be selected behind a hover, so on a phone that reason was never available at all. It was not a tooltip to fix but a tooltip to delete.

> **Deleted, and it exposed a second gap.** Replacing it with a visible badge string meant writing that string — and the V1 product branch turned out never to have had one at all. It showed nothing, which is why nobody had reported it: an invisible tooltip and an absent label look identical.
>
> **Removing a bad pattern is how you find an absent one.** Worth expecting on the other deletions in this library rather than treating it as scope creep.

**The THC tooltip moved from client-side stamping to server rendering.** addThcTooltip() is gone — the markup is emitted by PHP, so it exists at first paint instead of being added by JavaScript after load, and it survives caching without a hydration step.

## **Colour**

**The bubble is --dark-blue with white text.** A tooltip is a *surface* — the same category as a modal, a dropdown panel and a toast — and doc 08 reserves colour families for meaning, not for containers. If a tooltip were coloured for being "informational", so would a sort dropdown be.

At 17.8:1 it is also the strongest surface in the palette, which matters for something whose whole purpose is to be read.

On dark surfaces the bubble inverts to --white with --dark-gray text. A dark bubble on a dark background has no edge.

## **Anatomy**

**** ╭──────────────────────────────╮

│ Etwa 89.20 EUR zum heutigen │ ← --dark-blue, --radius-inner,

│ Kurs. Abgerechnet wird in │ --shadow-lg, max 280px

│ CHF. │

╰──────────────▼───────────────╯

84.15 CHF (i) ← trigger: 20px circle, 44px hit area

## **Interaction**

**Three inputs, one component.**

| **Input** | **Shows** | **Hides** |
|----|----|----|
| Mouse | Hover on the trigger | Pointer leaves |
| Keyboard | Tab to the trigger — it is a real \<button\> | Tab away, or Escape |
| Touch | Tap — the button takes focus | Tap elsewhere, which blurs it |

**The trigger is a \<button\>, and that is what makes all three work.** A \<span\> — which is what all three live implementations use — is not focusable, so keyboard and touch have nothing to act on. Nothing else about the pattern matters if the trigger is not a button.

**Shown on :focus, not :focus-visible.** Deliberate and unusual: :focus-visible specifically does not fire on tap, which is the case that needs it most. A tooltip appearing on mouse click is harmless; a tooltip that never appears on a phone is the defect being fixed.

**The hit area is 44px, the circle is 20px.** A ::before with inset: -12px extends the target without a small control growing to dominate the line it sits in.

## **Implementation**

****\<!-- aria-describedby, not aria-label: the tooltip supplements the

control's name, it does not replace it --\>

\<span class="uw-tip"\>

\<button class="uw-tip\_\_trigger" type="button" aria-describedby="tip-eur"\>

i

\<span class="visually-hidden"\>Mehr Informationen zur Währung\</span\>

\</button\>

\<span class="uw-tip\_\_bubble" role="tooltip" id="tip-eur"\>

Etwa 89.20 EUR zum heutigen Kurs. Abgerechnet wird in CHF.

\</span\>

\</span\>



.uw-tip { position: relative; display: inline-flex; }

.uw-tip\_\_trigger {

display: inline-grid;

place-items: center;

width: 20px;

height: 20px;

padding: 0;

border: var(--border-hairline) solid var(--medium-gray);

border-radius: 50%;

background: transparent;

color: var(--medium-gray);

font-family: var(--ff-body);

font-size: var(--fs-meta);

font-weight: var(--fw-bold);

line-height: 1;

cursor: pointer;

transition: color 120ms ease-out, border-color 120ms ease-out;

}

/\* 44px hit area without a 44px circle \*/

.uw-tip\_\_trigger::before {

content: "";

position: absolute;

inset: -12px;

border-radius: 50%;

}

@media (hover: hover) and (pointer: fine) {

.uw-tip\_\_trigger:hover {

color: var(--dark-blue);

border-color: var(--dark-blue);

}

}

.uw-tip\_\_trigger:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

}

.uw-tip\_\_bubble {

position: absolute;

bottom: calc(100% + 10px);

left: 50%;

transform: translateX(-50%) translateY(4px);

/\* z-index — see Open items \*/

width: max-content;

max-width: min(280px, 70vw);

padding: var(--space-xs) var(--space-s);

background: var(--dark-blue);

color: var(--white);

border-radius: var(--radius-inner);

box-shadow: var(--shadow-lg);

font-family: var(--ff-body);

font-size: var(--fs-small);

font-weight: var(--fw-regular);

line-height: 1.45;

text-align: left;

opacity: 0;

visibility: hidden;

pointer-events: none;

transition: opacity 120ms ease-out, transform 120ms ease-out, visibility 120ms;

}

.uw-tip\_\_bubble::after {

content: "";

position: absolute;

top: 100%;

left: 50%;

transform: translateX(-50%);

border: 6px solid transparent;

border-top-color: var(--dark-blue);

}

/\* :focus, not :focus-visible — see Interaction \*/

.uw-tip\_\_trigger:hover + .uw-tip\_\_bubble,

.uw-tip\_\_trigger:focus + .uw-tip\_\_bubble {

opacity: 1;

visibility: visible;

transform: translateX(-50%) translateY(0);

}

/\* Placement modifiers — cover the predictable edge cases without script \*/

.uw-tip--start .uw-tip\_\_bubble { left: 0; transform: translateX(0) translateY(4px); }

.uw-tip--start .uw-tip\_\_bubble::after { left: 14px; transform: none; }

.uw-tip--end .uw-tip\_\_bubble { left: auto; right: 0; transform: translateX(0) translateY(4px); }

.uw-tip--end .uw-tip\_\_bubble::after { left: auto; right: 14px; transform: none; }

.uw-tip--below .uw-tip\_\_bubble {

bottom: auto;

top: calc(100% + 10px);

transform: translateX(-50%) translateY(-4px);

}

.uw-tip--below .uw-tip\_\_bubble::after {

top: auto;

bottom: 100%;

border-top-color: transparent;

border-bottom-color: var(--dark-blue);

}

/\* On dark surfaces the bubble inverts \*/

.on-dark .uw-tip\_\_trigger { border-color: \#FFFFFF80; color: var(--white); }

.on-dark .uw-tip\_\_trigger:focus-visible { outline-color: var(--white); }

.on-dark .uw-tip\_\_bubble { background: var(--white); color: var(--dark-gray); }

.on-dark .uw-tip\_\_bubble::after { border-top-color: var(--white); }

/\* Inline text trigger — dotted, so it is not mistaken for a link \*/

.uw-tip\_\_trigger--text {

width: auto;

height: auto;

border: 0;

border-radius: 0;

color: var(--dark-gray);

font-size: inherit;

font-weight: inherit;

text-decoration: underline dotted;

text-underline-offset: .2em;

}

@media (prefers-reduced-motion: reduce) {

.uw-tip\_\_bubble { transition: opacity 1ms, visibility 1ms; transform: translateX(-50%); }

}

**Two things need JavaScript, and only two:** Escape to dismiss, and flipping the bubble when it would run off-screen. The --start, --end and --below modifiers cover the predictable cases with no script. CSS anchor positioning will remove even that, but browser support is not there yet.

document.addEventListener('keydown', function (e) {

if (e.key !== 'Escape') return;

var el = document.activeElement;

if (el && el.classList.contains('uw-tip\_\_trigger')) el.blur();

});

## **Tokens**

| **Property** | **Token** |
|----|----|
| Bubble background | --dark-blue · --white on dark |
| Bubble text | --white at 17.8:1 · --dark-gray inverted |
| Radius | --radius-inner — smaller than a card, because it is small |
| Shadow | --shadow-lg — it is an overlay |
| Padding | --space-xs --space-s |
| Font | --ff-body at --fs-small, line-height 1.45 |
| Max width | min(280px, 70vw) — never wider than the phone it is on |
| Trigger | 20px circle, --medium-gray border, 44px hit area |
| Motion | 120ms fade and 4px rise, disabled under prefers-reduced-motion |

## **Accessibility**

- aria-describedby on the trigger, role="tooltip" on the bubble. Not aria-label — that replaces the control's name rather than supplementing it.

- The text is in the DOM, not in a CSS content property. All three live tooltips use content, which is not reliably announced.

- The trigger is a real \<button\> with type="button", so it does not submit a surrounding form.

- An icon-only trigger needs a visually-hidden label; the i glyph is not a name.

- 44 × 44px hit area.

- Escape dismisses, and focus stays where it was.

## **Don't**

| **Don't** | **Because** |
|----|----|
| Put essential information in a tooltip | It is hidden by default. If the reader needs it to decide, it goes inline. |
| Use a \<span\> as the trigger | Not focusable — keyboard and touch have nothing to act on. This is the entire live defect. |
| Put the text in a CSS content property | Not in the DOM, so not reliably announced |
| Put a link or a button inside the bubble | It disappears when the pointer leaves. If it needs interaction, it is a popover. |
| Use aria-label for the tooltip text | That replaces the control's name instead of supplementing it |
| Colour the bubble for its content | A tooltip is a surface. Colour families mean things; containers do not. |
| Write more than two sentences | Past that it is a popover, and probably body copy |
| Attach one to a control with no visible label | The control needs a label, not a tooltip |

## **Open items**

| **\#** | **Item** | **Status** |
|----|----|----|
| 1 | **z-index band** | **Closed.** --z-tooltip (1046) — above panels, below backdrops. The three live values at 9999 and 10000 !important are gone. |
| 2 | A popover variant. None of the live cases needs one; worth not building until something does. | Not started, deliberately |

# **13 · Stock status**

A one-line statement of availability on a PDP.

Documented as-is — .stock-status-v2 is well built and needs no consolidation. Two corrections follow from decisions taken since it shipped.

## **Variants**

| **State** | **Dot** | **Text** | **When** |
|----|----|----|----|
| **In stock** | --dark-green | --dark-green | Comfortable quantity available |
| **Low stock** | --medium-orange | --dark-gray | Below the low-stock threshold |
| **Last units** | --medium-orange | --dark-gray | Very few left, with the number shown |
| **Out of stock** | --medium-gray | --dark-gray | None available |

**Out of stock is grey, not red** (doc 08, Part 2). Red is for discounts and alerts only; availability is a fact, not something the shopper did wrong.

> **Shipped.** .stock-status-v2 rebuilt to this spec: red retired from "last units", orange and red text moved to --dark-gray, and the missing dot built as an inline-block ::before rather than with flex — the surrounding rule carries display: block !important, so flex was not available.

**On a PDP the label goes --dark-blue at --fw-bold** when out of stock, so weight carries the legibility that colour would otherwise. The line is not carrying the state alone either: the add-to-cart button is disabled and reads *Ausverkauft*, the variation is struck out, and a notify-me control appears.

**The tile overlay uses the same grey.** .out-of-stock-overlay belongs to the product tile and is documented with it, but it must match — a grey label on the tile and a red one on the PDP would be the same fact told two ways.

**Low stock is orange, and this is the one place orange is not "earned recognition".** It is closer to urgency than to merit. The alternative — red — would be worse, because it puts an alarm colour on a normal shopping state and devalues real errors. Recorded as a deliberate exception rather than a redefinition of orange.

**Text is --dark-gray, not the dot colour**, on every state except in-stock. --medium-orange as text is 2.0:1 against white and unreadable; the dot carries the colour and the text stays legible.

## **Implementation**

****\<p class="uw-stock uw-stock--low"\>

\<span class="uw-stock\_\_dot" aria-hidden="true"\>\</span\>

Nur noch 3 verfügbar

\</p\>



.uw-stock {

display: flex;

align-items: center;

gap: var(--space-xs);

margin: 0;

font-family: var(--ff-body);

font-size: var(--fs-small);

font-weight: var(--fw-medium);

color: var(--dark-gray);

}

.uw-stock\_\_dot {

flex: 0 0 auto;

width: 8px;

height: 8px;

border-radius: 50%;

background: var(--medium-gray);

}

.uw-stock--in { color: var(--dark-green); }

.uw-stock--in .uw-stock\_\_dot { background: var(--dark-green); }

.uw-stock--low .uw-stock\_\_dot,

.uw-stock--last .uw-stock\_\_dot { background: var(--medium-orange); }

.uw-stock--out .uw-stock\_\_dot { background: var(--medium-gray); }

## **Accessibility**

- The dot is decorative — aria-hidden="true". The text carries the meaning, so the state survives greyscale and colour blindness.

- When stock changes after a variation switch, the line sits in an aria-live="polite" region so the change is announced.

- Never state stock with the dot alone.

## **Don't**

- **Don't use red for out of stock.** It is not an error.

- **Don't colour the text --medium-orange.** 2.0:1. The dot carries colour; the text stays --dark-gray.

- **Don't show an exact count above the low-stock threshold.** "Nur noch 47 verfügbar" reads as a warning about nothing.

# **14 · Order info bar**

The four reassurance items below add-to-cart on a PDP — delivery, returns, payment, lab testing.

Documented as-is. .order-info-v2 is sound; only the icon colour changes.

## **Layout**

| **Breakpoint** | **Layout**                      |
|----------------|---------------------------------|
| ≥ 992px        | Four across, evenly distributed |
| 768–991px      | Two by two                      |
| \< 768px       | Stacked, one per row            |

Each item is an icon, a label and a supporting line. The supporting line is where a tooltip would otherwise be tempting — it is essential reassurance, so it stays visible.

## **Tokens**

| **Property**          | **Token**                                         |
|-----------------------|---------------------------------------------------|
| Icon                  | 24px, --dark-blue                                 |
| Label                 | --ff-body, --fs-small, --fw-semibold, --dark-blue |
| Supporting line       | --fs-meta, --dark-gray                            |
| Divider between items | --border-hairline --line, desktop only            |
| Gap                   | --space-m                                         |

**Icons are --dark-blue, not green.** These are informational statements, not purchase actions — green would claim the buy signal for a reassurance strip sitting directly beneath the actual buy button.

**Not pink either.** Pink is the editorial section colour (doc 08, Part 2); a USP strip on a PDP is shop. The strip separates itself by position and dividers, not by borrowing a meaning.

**Icons are stroked SVG at 24px, stroke-width: 1.5**, matching the chevrons elsewhere, with aria-hidden="true". Never emoji — they render differently on every platform, cannot be recoloured, and are announced by screen readers as their unicode name.

## **Don't**

- **Don't put the supporting line in a tooltip.** It is the reassurance; hiding it defeats the block.

- **Don't exceed four items.** A fifth turns a scannable strip into a list nobody reads.

- **Don't colour the icons green.** The add-to-cart button is directly above.

# **15 · Order summary**

The line-item breakdown of what is being bought, on the cart page and in checkout.

## **Anatomy**

****Zwischensumme 168.30 CHF

Versand gratis

Rabatt ANGEBOT10 −16.83 CHF ← --medium-red

─────────────────────────────────────────────────

Gesamt 151.47 CHF ← --fs-h5, --fw-bold

inkl. MwSt. ← --fs-meta

## **Rules**

**Numbers are right-aligned and tabular.** font-variant-numeric: tabular-nums so digits sit in columns and a total that changes does not shift the layout beside it.

**Discounts are --medium-red with an explicit minus sign.** Red is "alarm and reduction" (doc 08) and a discount is the reduction half. The minus sign matters — a red number without one reads as a surcharge.

**"Gratis", not "0.00 CHF".** A zero shipping cost stated as a word reads as a benefit; stated as a number it reads as an unfilled field. FR uses *offert* rather than *gratuit* — doc 05, on premium tone.

**The total is the only line at --fs-h5.** Everything above it is --fs-body; the tax note below is --fs-meta. One step up and one step down is enough hierarchy for a five-line block.

**A rule separates the total, not a background fill.** A filled total row on a page that already has cards inside cards is one container too many.

## **The \<dl\> sits inside a \<td\>, not instead of the table**

> **This looks like a compromise and is a constraint.** WooCommerce's update_order_review fragment is keyed on .woocommerce-checkout-review-order-table and replaceWiths that element with the template's whole output. A \<table\> plus a sibling \<dl\> would **accumulate a second copy on every address, shipping or quantity change.**
>
> So the \<dl\> lives inside one full-width \<td\>. The semantics are correct — each label is a \<dt\> paired with its \<dd\> — and the fragment still replaces exactly one element.

**The row classes survive deliberately.** cart-subtotal, cart-discount, order-total and woocommerce-shipping-totals are read by js/currency-switcher.js, form-shipping.php and the first-order coupon test. Only the inner element changed, \<td\> → \<dd\>, and the sticky-bar selector was updated with a td fallback.

**Four table-layout hacks were deleted** that existed only to beat \<tr\>/\<th\>/\<td\> semantics into a row shape — display: inline-table on the shipping row, display: table-cell on its cells, cell padding and a right-align. A flex row does all of it by construction.

## **Mobile**

The summary collapses behind a toggle above the payment step, showing the total and an expand control. The total stays visible when collapsed — it is the number people are checking.

This is the accordion component (§9) with the total in the trigger row, not a bespoke disclosure.

## **Accessibility**

- The summary is a \<dl\>. Each line is a \<dt\> label and \<dd\> value, so a screen reader pairs them rather than reading twelve loose numbers.

- The total updates in an aria-live="polite" region — a changed total that is announced only on the next navigation is a trust problem.

- Never state a discount by colour alone. The minus sign and the coupon code carry it.

## **Don't**

- **Don't right-align the labels.** Only the numbers.

- **Don't hide the total on mobile.** It is the reason the summary exists.

- **Don't use green for a discount.** Green is the purchase path; a saving is a reduction, which is red's other half.

# **16 · Cart drawer**

The slide-in cart. The most internally consistent component on the site — documented as it is, with two corrections.

## **Anatomy**

****┌──────────────────────────────────┐

│ Warenkorb (3) × │ ← header, sticky

├──────────────────────────────────┤

│ \[img\] Product name │

│ 10 ml · 4.41 CHF/ml │ ← scrolls

│ \[− 1 +\] 44.10 CHF │

│ ────────────────────────────── │

│ … more items │

├──────────────────────────────────┤

│ Gutschein \[ \] \[Anwenden\]│ ← footer, sticky

│ Zwischensumme 151.47 CHF │

│ \[ ZUR KASSE \] │

│ Zahlungsarten · Versandhinweis │

└──────────────────────────────────┘

**Header and footer are fixed; only the item list scrolls.** The checkout button is always reachable without scrolling past however many items are in the cart.

## **Tokens**

| **Property** | **Token** |
|----|----|
| Panel | --white, --shadow-xl |
| Width | min(420px, 100vw) |
| Header and footer divider | --border-hairline --line |
| Item thumbnail | 64px, --radius-inner |
| Item name | --fs-small, --fw-medium, --dark-blue |
| Item meta | --fs-meta, --dark-gray — **size only**, no price per unit |
| Item price | Price component, list role (§18) |
| Checkout button | Buy variant, --btn--block |
| Overlay | \#0B102A80 |

## **Corrections**

**Item meta was --medium-gray.** 2.8:1 — UI only, never text (doc 08). Now --dark-gray.

**Item meta is the size only** — "10 ml", not "10 ml · 8.42 CHF / ml". Price per unit is a comparison aid and belongs where a choice is being made: the tile and the PDP variation table. In the cart the choice is made, and the only useful number is what this line costs.

**The quantity control is the quantity selector component** (§19) at md, with the minus button swapping to remove at quantity 1.

## **States**

| **State** | **Treatment** |
|----|----|
| Empty | Centred message, a line of copy, and a nav-variant button back to the shop. No illustration. |
| Loading | The item list keeps its height and shows skeleton rows. The drawer never collapses and re-expands. |
| Item removing | The row fades and collapses over --motion-base; the total updates after |
| Coupon invalid | Inline error below the field, from the input component's invalid state |

## **Accessibility**

- role="dialog" with aria-modal="true" and an aria-labelledby pointing at the header.

- **Focus moves into the drawer on open and returns to the trigger on close.** Escape closes.

- Focus is trapped while open — a keyboard user must not tab into the page behind it.

- The item count in the header is part of the accessible name: "Warenkorb, 3 Artikel".

- The remove control is a real button with aria-label naming the product. "×" alone is not a name.

- Quantity changes announce the new subtotal via aria-live="polite".

## **Don't**

- **Don't let the footer scroll away.** The checkout button is the point.

- **Don't use --medium-gray for the item meta.** 2.8:1.

- **Don't collapse the drawer while loading.** Reserve the height.

- **Don't put the cart count badge in pink.** It is commerce — --dark-green (§5).

## **Open items**

| **\#** | **Item** | **Status** |
|----|----|----|
| 1 | **z-index** | **Closed.** --z-drawer (1060), above modals — the position it already held, now named. |
| 2 | Quantity selector component, of which this holds the reference implementation | Not yet written |

# **17 · Checkout form**

The most heavily specified surface on the site, and largely correct. Documented as-is.

## **Structure**

| **Step** | **Contains** |
|----|----|
| **Contact** | Email, phone. Guest by default, with a login link for returning customers. |
| **Delivery** | Name, address with autocomplete, postcode, city, country |
| **Shipping method** | Radio cards, one per method, with price and delivery estimate |
| **Payment** | Radio cards, one per method |
| **Review** | Order summary (§15) and the place-order bar |

**One column on mobile, two on desktop** with the summary sticky in the right column above --bs-breakpoint-lg.

## **Field rules**

These come from the input, select and checkbox components (§2, §3, §4). Restated only where checkout adds something:

**autocomplete on every field that has a standard token.** WCAG 1.3.5, and it materially improves completion. email, tel, given-name, family-name, address-line1, postal-code, address-level2, country.

**inputmode="numeric" for postcodes, not type="number".** Postcodes are strings and type="number" strips leading zeros.

**Errors appear on blur, not on keystroke.** Validating as someone types tells them their email is invalid while they are still writing it.

**Errors are summarised at the top on submit**, with each item linking to its field. A single error below the fold is invisible.

**The place-order bar is sticky on mobile**, showing the total and the buy-variant button.

## **Shipping and payment method cards**

The whole card is the control, not just the radio — a 20px radio in a 72px card is a poor target.

| **State** | **Treatment**                                          |
|-----------|--------------------------------------------------------|
| Rest      | --white, --border-hairline --line, --radius-pill       |
| Hover     | --light-blue                                           |
| Selected  | --border-emphasis --dark-blue, radio filled            |
| Disabled  | --light-gray, --medium-gray text, reason stated inline |

**Selection is shown by the radio and the border, not by a fill.** A filled selected card at checkout competes with the place-order button for attention.

**The border is --dark-blue, not green.** Everything in checkout is commerce, so if selection states go green the whole page does and the button stops standing out. The one green thing on a checkout step is the action you take next. Blue also keeps selection consistent with every other chosen value in the system — the dropdown, the enhanced select, the tab nav.

**Radius is --radius-pill.** These cards hold two lines. **That is a constraint, not an observation:** a method needing a third line — a pickup point with an address, an express option with a cut-off time — either moves to --radius-card or puts the third line elsewhere. A pill past about 90px tall reads as a lozenge.

**A disabled method states its reason inline.** "Nicht verfügbar für diese Adresse" — not a tooltip (§12).

## **Accessibility**

- Shipping and payment options are each a \<fieldset\> with a \<legend\>. **No radio group on the live site does this** — a screen reader announces each option with no idea what is being chosen. This is a WCAG 1.3.1 failure across the whole checkout.

- Step headings are \<h2\>, so the outline is navigable.

- The error summary takes focus on submit and is role="alert".

- The sticky bar must not obscure the last field — reserve its height at the bottom of the form.

## **Don't**

- **Don't validate on keystroke.**

- **Don't use a tooltip for an unavailable method.**

- **Don't fill the selected method card.** Border and radio carry it.

- **Don't use green for the selected method.** The place-order button is the only green on the step.

- **Don't omit the fieldset and legend.** It is the largest accessibility defect in checkout.

# **18 · Price**

Every price on the site. Five surfaces, and before this they used four colours with no rule saying which was which.

## **The rule**

**All prices are --dark-blue**, except when reduced.

| **Role** | **Colour** | **Size** | **Where** |
|----|----|----|----|
| **Hero** | --dark-blue | --fs-h4, --fw-bold | PDP main price |
| **Tile** | --dark-blue | --fs-h5, --fw-bold | Product tile |
| **List** | --dark-blue | --fs-small, --fw-bold | Cart line, order summary line, order history |
| **Total** | --dark-blue | --fs-h5, --fw-bold | Order summary total |
| **Sale** | --medium-red, original struck in --dark-gray | as its role | Anywhere reduced |
| **Discount line** | --medium-red with an explicit minus | --fs-body | Order summary |
| **Per unit** | --medium-blue | --fs-meta, --fw-regular | Tile, PDP variation table |

**Why not green.** Green survives as a signal by meaning exactly one thing: press this to buy. A price is not an action — nothing happens when you look at it. Colouring prices green would put green on every number on the site and leave the add-to-cart button competing with the figure above it.

An earlier draft made hero prices green and list prices blue. That failed on the order summary, where a green total read as a *different kind* of number rather than a bigger one — size and weight were already doing the hierarchy, and the colour added a second signal saying something the first did not.

**Per unit is --medium-blue because it is a comparison aid, not a price you pay.** Same reasoning as filter counts, which use the same token. It tells you whether 30 ml is better value than 10 ml; it is never the number on the invoice.

### **The unit has to be the one the shopper is comparing**

**Oils are priced per mg CBD, not per ml.** Pack size answers "how much liquid", which is the wrong question — two 10 ml bottles at 5% and 40% are not comparable per millilitre. The figure is not computed; \_price_unit already carries it on the variation.

| **Category**          | **Basis**  | **Header**         |
|-----------------------|------------|--------------------|
| Oils                  | per mg CBD | *Preis pro mg CBD* |
| Flowers, hash, pollen | per gram   | *Preis pro g*      |

**Values below 0.10 print three decimals.** At two, 0.025 and 0.021 both render as "0.02" — a comparison aid that cannot distinguish the two things being compared is worse than none.

## **Status — live, no flag**

> Applied to **twelve surfaces**: PDP hero and sticky bar, cart line price and subtotal, cart totals ×5, drawer item and totals ×3, checkout summary via uweed_sum_row(), checkout line subtotal and mobile summary header.

## **The base class carries what must never be forgotten**

.uw-price sets color: var(--dark-blue) **and** font-variant-numeric: tabular-nums. The four role modifiers set only size and weight.

**That split is the point.** Both invariants are inherited by every role, so neither can be omitted by someone adding a fifth role later. A modifier that had to re-declare the colour is a modifier that will eventually not.

## **Removing colour drift at source, not layering over it**

Six rules were changed rather than overridden:

| **Was** | **Now** |
|----|----|
| .sale-red { color: \#ee2e31 } | var(--medium-red), aliased to .uw-price.is-sale |
| .price del { color: \$error-color } | --dark-gray — both numbers were red, and only the line-through told them apart |
| .text-sale.reg-price-show { color: --medium-gray !important } | --dark-gray. 2.8:1 is UI-only. |
| .variation-sale-info { background: \#ee2e31 } | Token |
| .woocommerce-mini-cart-item ins { color: \#ee2e31 } | inherit, so the wrapper's .is-sale owns it |
| Tile price --dark-green | --dark-blue |

> **.sale-red was kept, not deleted.** The variation JS toggles it, so removing the class would leave the sale colour stuck on after switching to a non-reduced variant. It is now an alias, and both classes are toggled together.
>
> **A class that JavaScript owns cannot be deleted from CSS alone.** Alias it, or change the JavaScript in the same commit.

## **\<s\> is applied at call sites, not globally**

woocommerce_format_sale_price also feeds archives, the search dropdown and the header menu, and **seven CSS blocks still key on del**. Hooking the rewrite globally would have changed all of them at once.

Instead uweed_price_use_s() runs at the call sites this component owns, carrying aria-hidden and any classes across untouched. In-scope partials list s alongside del so both render identically during the transition.

**The discount minus sign is WooCommerce's, not ours** — wc_cart_totals_coupon_html() emits '-' . wc_price( \$amount ). Only the colour is .uw-price\_\_discount.

## **Implementation**

****\<!-- regular --\>

\<p class="uw-price uw-price--hero"\>84.15 CHF

\<span class="uw-price\_\_unit"\>8.42 CHF / ml\</span\>

\</p\>

\<!-- reduced --\>

\<p class="uw-price uw-price--hero is-sale"\>44.10 CHF

\<s class="uw-price\_\_was"\>49.00 CHF\</s\>

\</p\>



.uw-price {

margin: 0;

color: var(--dark-blue);

font-variant-numeric: tabular-nums; /\* digits align in columns \*/

}

.uw-price--hero { font-size: var(--fs-h4); font-weight: var(--fw-bold); }

.uw-price--tile { font-size: var(--fs-h5); font-weight: var(--fw-bold); }

.uw-price--list { font-size: var(--fs-small); font-weight: var(--fw-bold); }

.uw-price--total { font-size: var(--fs-h5); font-weight: var(--fw-bold); }

.uw-price.is-sale { color: var(--medium-red); }

.uw-price\_\_was {

margin-left: var(--space-xs);

font-size: .8em;

font-weight: var(--fw-regular);

color: var(--dark-gray);

text-decoration: line-through;

}

.uw-price\_\_unit {

margin-left: var(--space-xs);

font-size: var(--fs-meta);

font-weight: var(--fw-regular);

color: var(--medium-blue);

}

.uw-price\_\_discount { color: var(--medium-red); }

## **Rules**

**font-variant-numeric: tabular-nums on every price.** Digits sit in columns, so a total that changes does not shift the layout beside it and a column of prices aligns on the decimal.

**"Gratis", not "0.00 CHF".** A word reads as a benefit; a zero reads as an unfilled field. FR uses *offert* rather than *gratuit* — doc 05, on premium tone.

**A discount always carries an explicit minus.** A red number without one reads as a surcharge.

**The struck original uses \<s\>, not \<del\>.** \<del\> means removed from a document; \<s\> means no longer accurate, which is what a former price is.

## **Accessibility**

- A sale price needs its accessible name to survive: \<s\> is announced as struck-through by some screen readers and silently by others, so the reduced price comes first in the DOM and the original follows.

- Never state a reduction by colour alone. The struck original and the minus sign carry it.

- A price that changes after a variation switch or a quantity change sits in an aria-live="polite" region.

## **Don't**

- **Don't colour a price green.** Green is the buy action.

- **Don't mix roles on one surface.** Every price in an order summary is a list price except the total, which is a total.

- **Don't omit tabular numerals.** A cart whose total jumps sideways as it updates reads as broken.

- **Don't show price per unit in the cart.** The choice is made — see §16.

# **19 · Quantity selector**

Increment, decrement and direct entry. Three densities, one component.

## **Stepper, not a dropdown**

|  | **Stepper** | **Dropdown** |
|----|----|----|
| Taps to go 1 → 2 | **One** | Three — open, choose, close |
| Taps to go 1 → 8 | Seven | **Three** |
| Needs a maximum | **No** | Yes, and it must track stock |
| Shows availability | **Plus disables at the stock limit** | The list silently ends |
| Direct entry | **Yes — the value is an input** | No |

Typical order quantities here are one to three, where the stepper is fastest, and the value stays a real input so someone buying twelve can type it. A dropdown would have to know the stock limit to build its list, coupling a UI control to inventory for no gain.

## **Sizes**

| **Size** | **Height** | **Use**                    | **Interactive?**   |
|----------|------------|----------------------------|--------------------|
| lg       | 56px       | PDP                        | Yes                |
| md       | 40px       | Cart drawer, cart page     | Yes                |
| sm       | 32px       | Order review, confirmation | **No — read-only** |

**sm is below the 44px minimum, so it is not a control.** It displays a quantity in the order review. If checkout needs an editable quantity, it uses md.

## **At quantity 1, minus becomes remove**

In the cart, a disabled minus at quantity 1 is a dead end — the shopper has to hunt for a separate remove control. Swapping it for a bin icon puts removal where the hand already is and makes the most common cart action one tap. The icon goes --medium-red on hover, since it is destructive.

**On a PDP the minus simply disables at 1.** There is nothing to remove yet.

**Cost:** a class toggle and a branch inside the change handler that already exists. No new listener.

## **Implementation**

****\<div class="uw-qty uw-qty--md"\>

\<button class="uw-qty\_\_down" type="button" aria-label="Menge verringern"\>−\</button\>

\<input class="uw-qty\_\_value" type="text" inputmode="numeric"

value="1" aria-label="Menge"\>

\<button class="uw-qty\_\_up" type="button" aria-label="Menge erhöhen"\>+\</button\>

\</div\>



.uw-qty {

display: inline-flex;

align-items: center;

background: var(--white);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-pill);

}

.uw-qty button {

border: 0;

background: none;

cursor: pointer;

color: var(--dark-blue);

display: grid;

place-items: center;

font-family: var(--ff-body);

line-height: 1;

}

.uw-qty\_\_value {

border: 0;

background: none;

padding: 0;

text-align: center;

font-family: var(--ff-body);

font-weight: var(--fw-medium);

color: var(--dark-blue);

font-variant-numeric: tabular-nums;

-moz-appearance: textfield;

}

.uw-qty\_\_value::-webkit-outer-spin-button,

.uw-qty\_\_value::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

.uw-qty button:disabled { color: var(--medium-gray); cursor: not-allowed; }

@media (hover: hover) and (pointer: fine) {

.uw-qty button:not(:disabled):hover { color: var(--medium-blue); }

.uw-qty\_\_down.is-remove:hover { color: var(--medium-red); }

}

.uw-qty button:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: -2px;

border-radius: var(--radius-pill);

}

/\* Sizes \*/

.uw-qty--lg { height: 56px; }

.uw-qty--lg button { width: 52px; height: 54px; font-size: 20px; }

.uw-qty--lg .uw-qty\_\_value { width: 44px; font-size: var(--fs-body); }

.uw-qty--md { height: 40px; }

.uw-qty--md button { width: 38px; height: 38px; font-size: 17px; }

.uw-qty--md .uw-qty\_\_value { width: 34px; font-size: var(--fs-small); }

.uw-qty--sm { height: 32px; }

.uw-qty--sm button { display: none; } /\* read-only \*/

.uw-qty--sm .uw-qty\_\_value { width: auto; padding-inline: var(--space-s); }

## **Status — live, no flag**

> One module, js/uw-qty.js, replaced three implementations: two 60px circles on the PDP, a 36px pill in the drawer with its own syncStepper(), and 28px buttons in checkout review with inline JS.
>
> **Deleted along the way:** a removeQuantityHandlers() / initQuantityControls() unbind-rebind pair, a setInterval re-binding handlers **every three seconds** if it could not find its own, and a \<style\> block injected into \<head\> carrying !important disabled states.

## **It writes a value and fires change. It does not talk to the server.**

Each surface already has an update path that listens for change — the PDP through the variation form, the cart page through js/wc-utility.js, the drawer through updateMiniCartQuantity(), checkout review through uphc_checkout_update_qty.

**The component deliberately does not add a fifth.** No new request shape on the purchase path, and no surface has to be re-tested for a changed contract — only for a changed control.

**Remove at quantity 1 follows the same principle.** It clicks the row's own .remove_from_cart_button, rather than inventing a third removal request: same endpoint, same nonce, same analytics. Where no remove link exists — checkout review — it sets 0, which is how WooCommerce removes a line.

**data-remove-at-1 is opt-in per instance.** Cart, drawer and checkout review set it. The PDP does not, because there is nothing to remove yet.

**Debounce is 400ms, down from 1000ms.** Three fast taps still collapse to one request.

## **Behaviour**

| **Rule** | **Why** |
|----|----|
| type="text" with inputmode="numeric", never type="number" | Number inputs bring a spinner that is unusable on touch, and accept "e" and "-" |
| Plus disables at the stock limit | Shows the ceiling rather than silently refusing |
| The displayed value updates instantly; the request is debounced ~400ms | Three taps become one request, and the number never lags the finger |
| Quantity changes announce the new line total via aria-live="polite" | A price that changes silently is a trust problem |
| Non-numeric entry reverts on blur | No error state needed for a control with one valid character class |

## **Accessibility**

- Both buttons need aria-label. "−" and "+" are not names.

- The input needs its own label — "Menge" — even inside a labelled row.

- The remove state changes the button's accessible name to "Artikel entfernen". A control whose meaning changes must change its name.

- 44px minimum on lg and md. sm is read-only precisely because it cannot meet it.

## **Don't**

- **Don't use type="number".**

- **Don't make sm interactive.** It is 32px.

- **Don't leave minus disabled at 1 in a cart.** Swap it for remove.

- **Don't debounce the display.** Only the request.

# **20 · Message**

Inline feedback at page or section level. Consolidates .woocommerce-message, -info, -error and .uw-callout — the last of which is the most complete and becomes the base.

## **Variants**

| **Variant** | **Background** | **Border** | **Icon** | **Use** |
|----|----|----|----|----|
| **Neutral** | --light-gray | --medium-gray | --dark-gray | Context with no valence — a shipping note, a store closure |
| **Info** | --light-blue | --medium-blue | --medium-blue | Something worth knowing before acting |
| **Success** | --light-green | --dark-green | --dark-green | Something completed |
| **Warning** | --light-orange | --medium-orange | \#8A5A12 | Caution — compliance, suitability, restrictions |
| **Error** | --light-red | --medium-red | --medium-red | Something failed or needs fixing |

**Warning is the second place orange means caution rather than earned recognition** (the first is low stock). Red would be worse — it is reserved for failure, and "not suitable during pregnancy" is a restriction, not a failure. A deliberate exception, recorded rather than a redefinition of orange.

**The warning icon is \#8A5A12, not --medium-orange.** Orange on --light-orange is 1.6:1. The darker tone is a component-level value; if warnings become common enough it earns a token.

## **Structure**

**A 3px left border, an icon, and an optional title.** Four tinted backgrounds are hard to tell apart in greyscale — border plus icon plus title means the type of message survives without colour, which is WCAG 1.4.1.

**Alignment follows content.** A message with a title aligns to the top, so the icon sits beside the heading rather than floating mid-paragraph. A message without one centres. Handled with :has(), so there is no variant class to remember.

## **Implementation**

****\<div class="uw-msg uw-msg--warning" role="status"\>

\<span class="uw-msg\_\_ic" aria-hidden="true"\>\<svg width="20" height="20"\>…\</svg\>\</span\>

\<div class="uw-msg\_\_b"\>

\<p class="uw-msg\_\_t"\>Nicht für Schwangere geeignet\</p\>

\<p\>Bei Schwangerschaft oder Stillzeit vor der Anwendung ärztlichen Rat einholen.\</p\>

\</div\>

\</div\>



.uw-msg {

display: flex;

align-items: flex-start;

gap: var(--space-s);

padding: var(--space-m);

border-radius: var(--radius-card);

border-left: var(--border-heavy) solid;

font-size: var(--fs-small);

line-height: 1.55;

}

/\* Single-line messages centre; titled ones align to the top \*/

.uw-msg:not(:has(.uw-msg\_\_t)) { align-items: center; }

.uw-msg\_\_ic { flex: 0 0 auto; display: grid; place-items: center; }

.uw-msg:has(.uw-msg\_\_t) .uw-msg\_\_ic { margin-top: 1px; }

.uw-msg\_\_b { flex: 1; min-width: 0; }

.uw-msg\_\_t { font-weight: var(--fw-bold); color: var(--dark-blue); margin: 0 0 2px; }

.uw-msg p { margin: 0; }

.uw-msg--neutral { background: var(--light-gray); border-color: var(--medium-gray); }

.uw-msg--neutral .uw-msg\_\_ic { color: var(--dark-gray); }

.uw-msg--info { background: var(--light-blue); border-color: var(--medium-blue); }

.uw-msg--info .uw-msg\_\_ic { color: var(--medium-blue); }

.uw-msg--success { background: var(--light-green); border-color: var(--dark-green); }

.uw-msg--success .uw-msg\_\_ic { color: var(--dark-green); }

.uw-msg--warning { background: var(--light-orange); border-color: var(--medium-orange); }

.uw-msg--warning .uw-msg\_\_ic { color: \#8A5A12; } /\* orange on light-orange is 1.6:1 \*/

.uw-msg--error { background: var(--light-red); border-color: var(--medium-red); }

.uw-msg--error .uw-msg\_\_ic { color: var(--medium-red); }

.uw-msg { color: var(--dark-gray); }

## **Accessibility**

- **Errors take role="alert"; everything else takes role="status".** An alert interrupts a screen reader mid-sentence, which is right for a failure and wrong for a coupon confirmation.

- The icon is decorative — aria-hidden="true". The title and text carry the meaning.

- A message that appears after an action must be in the DOM at that moment, not revealed from a hidden container, or it may not be announced.

## **Don't**

- **Don't use a message where a toast belongs.** A message persists; a toast confirms and leaves.

- **Don't rely on the background tint alone.** Border, icon and title are what make the type survive greyscale.

- **Don't use red for a restriction.** Red is failure. A restriction is a warning.

# **21 · Toast**

Transient confirmation. Bottom-right on desktop, bottom-centre on mobile above any sticky bar. Replaces .notification-box and \#favorites_notification_box.

## **Light by default, dark available**

| **Variant** | **Use** |
|----|----|
| **Light** (default) | Every standard confirmation |
| **Dark** | Over imagery or a light-heavy surface where a white card has no contrast |

**Light is the default because it resolves a link problem.** On a dark surface the action link had to be white and underlined — a fourth link treatment existing nowhere else. On white it is simply the **action link** from §6: --medium-blue, --fw-medium, underline on hover.

**The light toast needs a border.** A white card floating on a white page has no edge, and --shadow-lg alone does not hold the corners. --radius-card rather than --radius-inner, since at this size it reads as a small card.

## **Rules**

**Never use a toast for an error.** It disappears, and an error the reader missed is one they cannot act on. That is the message component's job.

**Five seconds, paused on hover and on focus.** Never auto-dismissed if it contains a link — a control that vanishes while being reached for is worse than no control.

**One at a time.** A second toast replaces the first rather than stacking. Stacked toasts obscure the page and nobody reads the third.

## **Implementation**

****\<div class="uw-toast" role="status" aria-live="polite"\>

\<span class="uw-toast\_\_ic" aria-hidden="true"\>\<svg width="18" height="18"\>…\</svg\>\</span\>

\<div class="uw-toast\_\_b"\>

\<p class="uw-toast\_\_t"\>Zum Warenkorb hinzugefügt\</p\>

\<p\>CBD Öl 20 % Vollspektrum · 10 ml\</p\>

\<a class="uw-toast\_\_a" href="/warenkorb/"\>Warenkorb ansehen\</a\>

\</div\>

\<button class="uw-toast\_\_x" type="button" aria-label="Schliessen"\>×\</button\>

\</div\>



.uw-toast {

display: flex;

align-items: flex-start;

gap: var(--space-s);

max-width: 380px;

padding: var(--space-s) var(--space-m);

background: var(--white);

color: var(--dark-gray);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-card);

box-shadow: var(--shadow-lg);

font-size: var(--fs-small);

/\* z-index — see §26 \*/

}

.uw-toast\_\_ic { flex: 0 0 auto; margin-top: 2px; color: var(--dark-green); }

.uw-toast\_\_b { flex: 1; min-width: 0; }

.uw-toast\_\_t { font-weight: var(--fw-bold); color: var(--dark-blue); margin: 0 0 1px; }

.uw-toast p { margin: 0; }

.uw-toast\_\_a {

display: inline-block;

margin-top: 4px;

color: var(--medium-blue);

font-weight: var(--fw-medium);

text-decoration: none;

}

.uw-toast\_\_a:hover { text-decoration: underline; text-underline-offset: .15em; }

.uw-toast\_\_x {

flex: 0 0 auto;

width: 24px; height: 24px;

border: 0; background: none;

color: var(--medium-gray);

cursor: pointer;

display: grid; place-items: center;

}

/\* Dark — over imagery, or where a white card has no contrast \*/

.uw-toast--dark {

background: var(--dark-blue);

border-color: transparent;

color: \#FFFFFFCC;

}

.uw-toast--dark .uw-toast\_\_t { color: var(--white); }

.uw-toast--dark .uw-toast\_\_ic { color: var(--medium-green); }

.uw-toast--dark .uw-toast\_\_a { color: var(--white); text-decoration: underline; }

.uw-toast--dark .uw-toast\_\_x { color: \#FFFFFF99; }

## **Accessibility**

- role="status" with aria-live="polite", so it is announced without interrupting.

- The close button is a real button with a label. "×" is not a name.

- The toast must not steal focus. A keyboard user reaches it by tabbing, in DOM order.

## **Don't**

- **Don't stack toasts.**

- **Don't auto-dismiss one containing a link.**

- **Don't use one for an error.**

# **22 · Content tabs**

PDP desktop tabs. Vertical rail, panel to the right. Below --bs-breakpoint-lg it becomes the accordion (§9).

## **Corrections**

**The inactive label was \#9ca3af** — an off-palette Tailwind grey at 2.6:1, failing WCAG for interactive text. Now --medium-gray, with the active state carried by weight and the rail marker as well as colour.

**Active is --dark-blue, not green.** Switching a panel does not advance a purchase.

> **Shipped.** Active moved from --dark-green to --dark-blue on both the label and the rail marker, desktop and mobile. Hover was restored to --medium-blue, and **weight now carries the active state** — both became necessary once the inactive label was legible enough to compete with the active one. A fix in one place creating work in another is normal; worth noting so it does not look like scope creep.

**The marker is a rounded 3px bar spanning only the active label**, not a square border running the full rail. The track behind it takes the same rounding in --line, so track and marker are the same shape — matching the carousel scroll indicator, and making the marker a token-consistent shape rather than a border side effect.

## **Implementation**

****.uw-tabs { display: flex; gap: var(--space-xl); }

.uw-tabs\_\_rail {

position: relative;

display: flex;

flex-direction: column;

min-width: 170px;

flex-shrink: 0;

padding-right: var(--space-m);

}

/\* The track \*/

.uw-tabs\_\_rail::before {

content: "";

position: absolute;

top: 0; bottom: 0; right: 0;

width: 3px;

background: var(--line);

border-radius: var(--radius-pill);

}

.uw-tabs\_\_t {

position: relative;

padding: var(--space-s) 0;

text-align: left;

background: none;

border: 0;

cursor: pointer;

font-family: var(--ff-heading);

font-size: var(--fs-h6);

font-weight: var(--fw-semibold);

color: var(--medium-gray);

transition: color 120ms ease-out;

}

/\* The marker — spans only this label \*/

.uw-tabs\_\_t::after {

content: "";

position: absolute;

top: 6px; bottom: 6px;

right: calc(var(--space-m) \* -1);

width: 3px;

border-radius: var(--radius-pill);

background: transparent;

transition: background-color 150ms ease-out;

}

.uw-tabs\_\_t\[aria-selected="true"\] {

color: var(--dark-blue);

font-weight: var(--fw-bold);

}

.uw-tabs\_\_t\[aria-selected="true"\]::after { background: var(--dark-blue); }

.uw-tabs\_\_p { flex: 1; min-width: 0; }

## **Accessibility**

- A real tablist: role="tablist" with aria-orientation="vertical", role="tab" with aria-selected, role="tabpanel".

- **Arrow keys move between tabs; Tab moves into the panel.** This is why tabs and the accordion are separate components rather than one responsive thing — the accordion has no roving focus and no arrow-key model.

- Only the selected tab is in the tab order (roving tabindex).

## **Don't**

- **Don't use \#9ca3af or any grey below 4.5:1 for an inactive tab.** It is interactive text.

- **Don't reuse the accordion's markup with tab roles bolted on.** The keyboard models differ.

# **23 · Footer**

## **Structure**

Four link columns, then a bottom row with copyright and the currency and language switchers.

**Below --bs-breakpoint-lg the columns become the accordion (§9) inside .on-dark** — not a separate footer accordion, which is what exists today.

## **Corrections**

**All footer text is --white, not \#F5F5F5.** Already in the token-corrections card; the component inherits it.

**The switcher pills sit in a translucent white well**, not a solid white one. The pressed pill is solid white with the footer's own colour as its text, so it inverts correctly without introducing a third colour. Hover on an unpressed pill lightens the well.

.uw-sw {

display: inline-flex;

background: \#FFFFFF1F;

border-radius: var(--radius-pill);

padding: 3px;

}

.uw-sw button {

border: 0;

background: none;

padding: 5px 14px;

border-radius: var(--radius-pill);

font-family: var(--ff-body);

font-size: var(--fs-meta);

font-weight: var(--fw-medium);

color: \#FFFFFFCC;

cursor: pointer;

transition: background-color 120ms ease-out, color 120ms ease-out;

}

.uw-sw button:hover { color: var(--white); background: \#FFFFFF26; }

.uw-sw button\[aria-pressed="true"\] {

background: var(--white);

color: var(--dark-green); /\* the footer's own colour \*/

}

## **Open item**

> **The footer surface stays --dark-green for now**, revisited if the footer is redesigned.
>
> Worth recording why it is an open question rather than settled: doc 08 v1.1 lists green as the purchase path — add to cart, checkout, cart count, in-stock, loyalty. A footer is navigation and utility, which is blue's job, and it is the largest single block of green on the site.
>
> The counter-argument is real: the palette names green *CBD Shop*, and the green footer is a long-standing brand signal. If green is the brand's colour rather than the buy signal's, the footer is where it belongs and the button rule is what should change. That is coherent, but it is a different system from the one the rest of this library is built on.
>
> **The pills work on either**, so nothing is blocked.

## **Accessibility**

- Each column heading is a real heading; the links are a list.

- The switchers use aria-pressed, not aria-current — they change a setting rather than marking a location.

- Contrast: white on --dark-green is 7.6:1.

# **24 · Product info table**

Product attributes on a PDP.

## **Corrections**

**Column widths were 20 % and 65 %**, totalling 85 % with the remainder unassigned. Now **34 % / 66 %**.

**\<th scope="row"\>, not two \<td\>s.** The label is a header for its row, and that is what pairs it with its value for a screen reader — the same reasoning as the order summary being a \<dl\>.

**Duplicated twice today**, in both the V1 and V2 tab blocks. The dedup card removes the V1 copy.

.uw-pit {

width: 100%;

border-collapse: collapse;

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-card);

overflow: hidden;

font-size: var(--fs-small);

}

.uw-pit th {

width: 34%;

text-align: left;

font-weight: var(--fw-semibold);

color: var(--dark-blue);

padding: var(--space-s) var(--space-m);

vertical-align: top;

}

.uw-pit td {

padding: var(--space-s) var(--space-m);

color: var(--dark-gray);

vertical-align: top;

}

.uw-pit tr + tr th,

.uw-pit tr + tr td { border-top: var(--border-hairline) solid var(--line); }

**No zebra striping.** The live V1 copy stripes odd rows; a hairline between rows does the same job without a second background colour.

# **25 · Card**

The base that tiles and panels inherit. **Not a component you place directly** — you will rarely write class="uw-card" on its own.

Its value is that when the blog card, city tile, order summary and cart drawer are written independently, they land on the same border, radius and elevation instead of four near-misses. That is precisely what happened on the live site: four radii and three shadows across five card types.

## **Variants**

| **Variant** | **Treatment** | **Use** |
|----|----|----|
| **Default** | Border, --radius-card, --shadow-xs | Sitting directly on the page background — city tile, team card, review card |
| **--link** | As default, plus a 2px lift and --shadow-md on hover | The whole card navigates — blog card, category tile |
| **--flat** | No shadow | A card inside another container. Two stacked elevations means neither reads. |
| **--tint** | --light-gray fill, no border, no shadow | Grouping within a page — order summary, boxed accordion, sidebar blocks |

**Only --link lifts.** A card that moves on hover but goes nowhere is a false affordance, and a lift without a shadow change reads as a rendering glitch rather than depth.

.uw-card {

background: var(--white);

border: var(--border-hairline) solid var(--line);

border-radius: var(--radius-card);

box-shadow: var(--shadow-xs);

}

.uw-card--flat { box-shadow: none; }

.uw-card--tint {

background: var(--light-gray);

border-color: transparent;

box-shadow: none;

}

.uw-card--link {

position: relative;

transition: transform .15s ease, box-shadow .15s ease;

}

@media (hover: hover) and (pointer: fine) {

.uw-card--link:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

}

@media (prefers-reduced-motion: reduce) { .uw-card--link { transition: none; } }

## **Don't**

- **Don't nest cards more than one deep**, and the inner one drops its frame. A bordered card inside a bordered card inside a page is three frames around one piece of content.

- **Don't lift a card that does not navigate.**

- **Don't add a fifth variant.** If a surface needs something else, it is a component, not a card.

# **26 · Modal**

A focus-trapping overlay for a decision that must be made before continuing.

## **When**

**Rarely.** A modal interrupts, and most things that reach for one are better as a page, a panel or an inline message. It is right for a destructive confirmation, a required choice, and little else.

The cart drawer (§16) is not a modal — it is a drawer with modal behaviour.

## **Structure**

Header with title and close, body, footer with actions right-aligned.

**The destructive action is red and is not the default focus.** On open, focus lands on cancel — the safe one.

**Escape closes**, except when confirming something destructive, where an accidental Escape would lose the decision.

## **Accessibility**

- role="dialog", aria-modal="true", aria-labelledby pointing at the title.

- **Focus is trapped while open and returns to the trigger on close.**

- The page behind must be **inert**, not merely covered. A keyboard user must not tab into it.

- The close button is 44px and carries a label.

## **Stacking order**

Every overlay in this library is specified as "above X, below Y" rather than as a number — the dropdown says below modals, the tooltip says above panels and below modals, the cart drawer says above modals. **Three components each holding one fragment of an ordering nobody has written down in full.**

**This has now shipped** (doc 08, Part 8). The ordering the components required is the ordering that was built.

| **Token** | **Value** | **What sits there** |
|----|----|----|
| --z-behind | −1 | Decorative layers beneath content |
| --z-base | 0 | Page content |
| --z-raised | 1 | In-card layering |
| --z-overlap | 10 | Spinners, local overlaps |
| --z-sticky | 1020 | Sticky filter bar, PDP sticky bar |
| --z-header | 1030 | Sticky header |
| --z-panel | 1035 | Dropdown, mega menu, filter panel, autocomplete |
| --z-tooltip | 1046 | Tooltip — above panels, so a tooltip on a filter is visible |
| --z-backdrop | 1050 | Modal and drawer backdrops |
| --z-modal | 1055 | Modal |
| --z-drawer | 1060 | Cart drawer |
| --z-toast | 1090 | Toast — above everything, because it confirms an action that may have opened a modal |

**Both contentious questions were answered.** The header takes 1030, breaking its tie with Intercom's 1000 — which stays as a third-party number rather than being adopted into the scale. And the cart drawer sits **above** modals at 1060, keeping the position it held at 99999 but as a named value.

**56 in-card values in the 1–20 band were deliberately left alone.** They are local stacking inside a component and do not interact with the page-level scale.

## **Don't**

- **Don't use a modal for information.** That is a message or a page.

- **Don't focus the destructive action on open.**

- **Don't leave the page behind reachable by keyboard.**

# **27 · Form field**

The wrapper that assembles a label, a control, help text, a required marker and an error. Not a new control — it is the arrangement input (§2), select (§3) and checkbox (§4) sit inside.

## **Rules**

| **Rule** | **Why** |
|----|----|
| Help text and error occupy **the same slot** | The error replaces the hint rather than pushing it down. A field that grows taller on error shifts everything below it, and on a long form that moves the submit button mid-tap. |
| **The label stays --dark-gray in the error state** | The border, the tinted fill, the icon and the message already carry the error four times. Reddening the label adds a fifth signal and makes the field harder to scan for what it *is* — which is what someone needs when correcting it. Material, Carbon and GOV.UK all leave the label alone. |
| The required asterisk is decorative | aria-hidden on the asterisk; required on the input is what gets announced. A pseudo-element asterisk is announced by nothing. |
| Mark **optional** fields where most are required | On checkout almost everything is required, so asterisks become noise. Ten markers say less than one "optional". |
| The error carries an icon | Red text alone fails WCAG 1.4.1. Icon plus words carry it without colour. |

## **Implementation**

****\<div class="uw-field is-invalid"\>

\<label class="uw-field\_\_label" for="plz"\>

Postleitzahl \<span class="uw-field\_\_req" aria-hidden="true"\>\*\</span\>

\</label\>

\<input class="uw-input" id="plz" type="text" inputmode="numeric" required

aria-invalid="true" aria-describedby="plz-err"\>

\<p class="uw-field\_\_hint uw-field\_\_err" id="plz-err"\>

\<svg width="14" height="14" aria-hidden="true"\>…\</svg\>

Bitte gib eine gültige PLZ ein.

\</p\>

\</div\>



.uw-field { display: flex; flex-direction: column; gap: var(--space-2xs); }

.uw-field\_\_label {

font-size: var(--fs-small);

color: var(--dark-gray);

padding-inline-start: var(--space-m); /\* aligns with the pill's inner edge \*/

cursor: pointer;

}

.uw-field\_\_req { color: var(--medium-red); }

.uw-field\_\_hint {

margin: 0;

padding-inline-start: var(--space-m);

font-size: var(--fs-small);

color: var(--dark-gray);

line-height: 1.4;

}

.uw-field.is-invalid .uw-input {

border-color: var(--medium-red);

background: var(--light-red);

}

/\* The hint turns red; the label does not. \*/

.uw-field.is-invalid .uw-field\_\_hint { color: var(--medium-red); }

.uw-field\_\_err { display: flex; align-items: flex-start; gap: 5px; }

.uw-field\_\_err svg { flex-shrink: 0; margin-top: 3px; }

## **Accessibility**

- aria-describedby links the control to its hint **and** its error, since they share a slot and therefore an id.

- aria-invalid="true" on the control, not on the wrapper.

- Errors appear on blur, never on keystroke — telling someone their email is invalid while they are still typing it is noise.

# **28 · Coupon form**

Three implementations today — .coupon on the cart page, .uw-mc-disc in the drawer, .checkout_coupon at checkout.

## **Collapsed by default, everywhere**

An open coupon field is an invitation to leave and go hunting for a code — a well-documented checkout drop-off. Collapsed costs nothing to the visitor who has a code and does not prompt the one who does not.

**The trigger is an outline button, not a text link.** It reads as a control rather than a footnote, without claiming the buy signal for something that only reveals a field.

## **The apply button**

**Outline, in green.** Applying a coupon is part of the purchase path, so the family is green — but the treatment is outline rather than filled, because the filled green button on that step is already spoken for: *Zur Kasse* on the cart page, *Jetzt bestellen* at checkout.

> **This is the one place two greens sit near each other**, and the rule that keeps them apart is doc 08's control/label distinction extended one step: **one filled green per step.** A second filled green a few centimetres away — closer still on a phone — puts the wrong button under the thumb.

## **Applied state**

A removable chip using the badge component: --light-green with --dark-green, showing the code and the amount. The remove control goes --medium-red on hover.

## **Status — written, unverified, and this is the riskiest gap in the set**

> Cart and checkout are migrated. **Neither has been exercised**, because the test cart is empty and the coupon form never renders without one.
>
> **That matters more here than elsewhere.** A prior fix on this site documents that getting the checkout coupon markup wrong **wipes the Contact block** — the form is nested inside the review-order template, and a mis-closed element takes a sibling with it. The migration deliberately keeps it a \<div\> for that reason, but keeping the shape and verifying the shape are different things.
>
> **Populate a cart and check the Contact block still renders before this ships.** It is a two-minute test guarding a failure that removes a required checkout field.
>
> **The mini cart was deliberately not migrated.** .uw-mc-disc already collapses and already has a working remove-chip; consolidating it is cosmetic and risks live behaviour on the purchase path for no functional gain. Open for a decision rather than an oversight.

**Success and failure use the message component (§20), inline below the field.** Not a toast — a coupon failure has to persist while the visitor retypes.

.uw-coupon { display: flex; gap: var(--space-xs); }

.uw-coupon .uw-input { flex: 1; }

/\* Outline, green family \*/

.uw-btn--apply {

background: transparent;

border-color: var(--dark-green);

color: var(--dark-green);

}

@media (hover: hover) and (pointer: fine) {

.uw-btn--apply:hover { background: var(--light-green); }

}

## **Don't**

- **Don't expand the field by default.**

- **Don't fill the apply button.** One filled green per step.

- **Don't announce a coupon failure in a toast.**

# **29 · Pagination**

Three implementations — \#pagination-container, .blog_pagination, .blog-archive\_\_pagination — differing in radius, active treatment and whether the arrows are bordered.

## **Rules**

| **Rule** | **Detail** |
|----|----|
| Every target is 44 × 44px | Pagination is the densest cluster of small targets on the site |
| Chevrons are 20px stroked SVG | Not a text character, so the weight matches the numbers instead of inheriting a font's glyph |
| **The current page is a \<span\>, not a link** | No hover, no pointer, not focusable, not in the tab order. A link to the page you are on is a control that does nothing. |
| **The ellipsis is not clickable** | \<span aria-hidden="true"\>. A clickable ellipsis is a hidden control nobody discovers, and a jump-to-page input is a lot of machinery for twelve pages. Screen readers get position from the count line. |
| The disabled arrow stays visible | Removing it shifts the row and moves the other arrow under the finger that just tapped |
| A count line below | "Seite 1 von 12 · 284 Produkte" tells a visitor whether to keep going, and is the only thing that helps on a phone where fewer numbers fit |

**Arrow circles are green when active, grey when disabled.**

> **Recorded as a deliberate exception.** Pagination is navigation, and the *Category tab nav and breadcrumb* roadmap card removes green from navigation for exactly that reason. This goes the other way on the arrows specifically. Noted here so a developer following that card does not "correct" it back to blue — and so that if the rule is ever revisited, this is the known exception rather than a stray.

.uw-pg { display: flex; align-items: center; gap: var(--space-2xs); flex-wrap: wrap; }

.uw-pg a,

.uw-pg \> span {

display: inline-grid;

place-items: center;

min-width: 44px;

height: 44px;

padding-inline: var(--space-xs);

border-radius: var(--radius-pill);

font-family: var(--ff-body);

font-size: var(--fs-small);

font-weight: var(--fw-medium);

color: var(--dark-blue);

text-decoration: none;

}

.uw-pg a:hover { background: var(--light-blue); }

.uw-pg\_\_cur {

background: var(--dark-blue);

color: var(--white);

font-weight: var(--fw-bold);

}

.uw-pg\_\_gap { color: var(--medium-gray); }

/\* Arrows — green while there is somewhere to go \*/

.uw-pg\_\_arrow {

border: var(--border-hairline) solid var(--dark-green);

color: var(--dark-green);

}

.uw-pg\_\_arrow:hover { background: var(--light-green); }

.uw-pg\_\_arrow\[aria-disabled="true"\] {

border-color: var(--line);

color: var(--medium-gray);

pointer-events: none;

}

.uw-pg\_\_count { font-size: var(--fs-meta); color: var(--dark-gray); }

**\<nav aria-label="Seitennummerierung"\> around it**, or a screen reader announces a row of numbers with no context.

> If a category ever exceeds roughly 40 pages the ellipsis question returns — at that point a jump control earns its place. At twelve it does not.

# **30 · Loading and skeleton**

## **Which one**

**Skeleton when the shape is known, spinner when it is not.** A product grid reloading after a filter knows it will be nine cards, so a skeleton reserves the space and prevents the shift. A form submitting does not know what comes next.

## **This fixes a live defect**

@keyframes spinner declares only -webkit-transform, so it is a no-op in modern browsers — **six spinners on the site do not currently rotate.** The dedup card removes it; this component replaces it.

.uw-sk {

background: var(--light-gray);

border-radius: var(--radius-inner);

position: relative;

overflow: hidden;

}

.uw-sk::after {

content: "";

position: absolute;

inset: 0;

transform: translateX(-100%);

background: linear-gradient(90deg, transparent, \#FFFFFFB3, transparent);

animation: uw-shimmer 1.4s infinite;

}

@keyframes uw-shimmer { 100% { transform: translateX(100%); } }

.uw-spin {

width: 20px;

height: 20px;

border: 2px solid var(--line);

border-top-color: var(--dark-blue);

border-radius: 50%;

animation: uw-spin .7s linear infinite;

}

@keyframes uw-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {

.uw-sk::after { animation: none; }

.uw-spin { animation-duration: 2s; }

}

## **Rules**

- **Never collapse a container while it loads.** The cart drawer, the product grid and the filter results keep their height. A container that shrinks and re-expands reads as broken even when it is faster.

- The shimmer respects prefers-reduced-motion, falling back to a static tint. An infinite shimmer is exactly the motion that setting exists for.

- The spinner keeps turning under reduced motion, but slower — it conveys state, so removing it entirely would remove information.

- A spinner carries role="status" and an accessible label. A silent spinner is invisible to a screen reader.

# **31 · Carousel**

Two mechanisms live: Swiper instances and a hand-rolled transform track. The proposal is neither — **native CSS scroll-snap**.

|  | **Scroll-snap** | **Swiper** |
|----|----|----|
| JavaScript | **None for scrolling** | ~40 KB |
| Touch | Native momentum | Emulated |
| Keyboard | Native — arrows scroll the region | Needs configuration |
| Works before JS loads | **Yes** | No |
| Arrows and progress | ~20 lines | Built in |
| Loop / autoplay | **Not supported** | Built in |

**The trade-off is loop and autoplay.** Nothing currently on the site needs either, and autoplay on a product rail is usually a liability. Worth knowing before choosing rather than discovering later.

## **Status — live everywhere**

> **Swiper is enqueued zero times.** Verified on homepage, PDP, shop and blog. 17 templates migrated, four rails taken over, no console errors. **156 KB out of the bundle.**

### **The migration used a shim, not a rewrite**

> uw-swiper-shim.js — **10 KB implementing window.Swiper on top of scroll-snap**, replacing 143 KB of library.
>
> Seventeen templates call new Swiper(...). Rewriting all of them is seventeen chances to miss one and a large diff to review. Instead the shim answers to the same API and drives the scroll-snap track underneath, so the templates did not change at all.
>
> **This is worth reaching for whenever a dependency is leaving but its call sites are numerous.** The cost is one file that has to keep pretending; the saving is not touching seventeen templates and not having a migration window where some rails are new and some are old.

### **The shim answers the API; it does not implement all of it**

> centeredSlides: true had been in the Swiper config all along and did nothing, because the shim does not implement it. At 50vw two cards filled a 390px phone exactly and the rail read as a two-up grid rather than a carousel.
>
> **A shim that satisfies the call signature can still ignore the option.** Anything the config asks for has to be verified against behaviour, not against the absence of an error. Cards are now 60vw with scroll-snap-align: center.

### **The progress bar is measured from scroll position, not slide index**

> scrollLeft / (scrollWidth - clientWidth) is exactly 1 at the end. A slide index is not: with a card wider than the per-view fraction the last card never reaches the centre, so realIndex topped out at 4 of 6 and the fill stopped short of the track end.

### **classList.toggle(name, undefined) flips rather than sets**

> The arrows did nothing. Init inverted the disabled state the shim had just set correctly, and .swiper-button-disabled carries pointer-events: none.
>
> **It appeared to work when tested from the console, which is the trap.** A programmatic .click() ignores pointer-events, so it is not a valid test of a control that may be pointer-disabled. Click it with a pointer, or assert the computed pointer-events value.
>
> js/swiper-bundle.min.js is de-enqueued but **still on disk** — deletion is the last rollout step, correctly held until the flag work finishes.

## **The progress bar**

**6px, --radius-pill, doubling as the mobile navigation.** Six dots are six 8px targets that say very little; a bar shows position and proportion. At 3px it reads as a hairline — at 6px it reads as a control.

## **Arrows**

**48px circles with 22px chevrons, green while there is somewhere to go.** A 14px glyph in a 44px circle looks like a mistake; the chevron should fill roughly half the circle. Same green-when-active exception as pagination (§29).

Arrows are **desktop-only progressive enhancement** — the track scrolls by touch and by keyboard without them.

.uw-car\_\_track {

display: flex;

gap: var(--space-m);

overflow-x: auto;

scroll-snap-type: x mandatory;

scrollbar-width: none;

}

.uw-car\_\_track::-webkit-scrollbar { display: none; }

.uw-car\_\_item { scroll-snap-align: start; }

.uw-car\_\_bar {

height: 6px;

background: var(--line);

border-radius: var(--radius-pill);

}

.uw-car\_\_thumb {

height: 6px;

background: var(--dark-blue);

border-radius: var(--radius-pill);

}

.uw-car\_\_b {

width: 48px;

height: 48px;

border: var(--border-hairline) solid var(--dark-green);

border-radius: 50%;

background: var(--white);

color: var(--dark-green);

cursor: pointer;

display: grid;

place-items: center;

}

.uw-car\_\_b:hover { background: var(--light-green); }

.uw-car\_\_b\[aria-disabled="true"\] {

border-color: var(--line);

color: var(--medium-gray);

pointer-events: none;

}

> **Open — the progress thumb is green on the homepage**, where this section specifies --dark-blue. The design mock-up shows green and it was not on the change list, so it was left as drawn. Either the mock or this document should move; two carousels with different thumb colours is the outcome to avoid.
>
> The arrows went the other way: green per this document, where the mock draws a grey border. **So the same component currently follows the doc on one control and the mock on another** — which is the specific inconsistency worth closing.

# **32 · Age gate**

**Not its own component — the modal (§26) with a --blocking variant.**

| **Modal** | **Age gate** |
|----|----|
| Close button in the header | **None.** There is no dismiss. |
| Escape closes | **Escape does nothing.** |
| Focus returns to the trigger | **Nothing to return to** — there was no trigger, and the page behind has not been seen |

Each difference is worth naming, because "a modal you cannot dismiss" otherwise contradicts the modal spec.

## **Content**

- **An icon mark**, not the wordmark, in a --light-green disc at 56px.

- **Neither answer is pre-focused.** *Ja* is filled and *Nein* is outline because one is the expected path — but a legally meaningful confirmation should not be one stray Enter away.

- **The legal line is italic**, --fs-meta, --dark-gray. Italic separates it from the question above without another colour or a rule.

.uw-gate\_\_legal {

font-size: var(--fs-meta);

font-style: italic;

color: var(--dark-gray);

line-height: 1.45;

}

## **The behaviour spec stands separately**

The existing developer spec covers the cache-safe client-side cookie architecture, the JavaScript-off lockout, ARIA gaps, focus handling and analytics instrumentation. This entry documents the appearance and the modal relationship only.

**One open item from that spec closes here:** the canonical button font size, 1rem versus 1.1rem. Under the button component it is --fs-cta, which is 1rem.

# **33 · PDP gallery**

Product imagery on a PDP. Consolidates **two thumbnail navs** — .product-thumb-nav and \#slider-product-thumbnails — and adds the zoom that mobile currently has no access to at all.

## **Layout**

**Thumbnails sit below the main image, not beside it.**

A vertical rail costs about 80px of column width, which on a two-column PDP comes straight out of the image. It is also capped by the image height at roughly four thumbnails; a horizontal strip takes any number and scroll-snaps.

Freed from the height constraint the thumbnails go to **76px**, where one bud is actually distinguishable from the next.

┌────────────────────────────┐

│ ♥ \[−15%\] │ ♥ top-left · tags top-right

│ \[Bestseller\]│

│ HAUPTBILD │

│ (⌕) │ ⌕ decorative hint

└────────────────────────────┘

\[76\] \[76\] \[76\] \[76\] \[76\] → scroll-snapped

## **Overlays**

| **Element** | **Position** | **Treatment** |
|----|----|----|
| **Tags** | Top right, stacked | Badge component (§5). Non-interactive, pointer-events: none. |
| **Favourites** | Top left | No circle. Outline --dark-blue → red on hover → filled red when saved. |
| **Zoom hint** | Bottom right | Decorative only, pointer-events: none |

**The favourites heart is --medium-red.**

> **Recorded exception.** Doc 08 gives red to alarm and reduction. The filled red heart is a convention strong enough that fighting it would cost more than it gains — a blue or pink heart reads as a different feature. Noted here so it is a known exception rather than drift.
>
> **The favourites count badge follows the heart to --medium-red**, reversing the earlier move to green for that badge only. The heart and its count are one feature, and a count attached to a heart reads as "how many saved" rather than as an error. **The cart count stays --dark-green.**

**A drop-shadow, not a container.** Without a circle the heart sits directly on the photograph, and a product shot can be any brightness. A 1px drop-shadow keeps the outline legible over both a pale bottle and a dark bud, without adding a chip that would compete with the tags opposite.

**The saved heart keeps its stroke in the same red**, so the shape stays crisp instead of turning into a soft blob at 26px.

## **Zoom**

**The whole image is the control** — a \<button\> wrapping the \<img\>, cursor: zoom-in, opening the lightbox on click or tap. One target the size of the image rather than a 40px button, and one behaviour instead of two.

**The zoom glyph stays as a hint**, with pointer-events: none. Without it nothing signals the image is interactive, and a lightbox nobody knows about is a lightbox nobody opens.

**The hover lens is removed.** It could coexist, but it means two zoom behaviours on one image where one has no touch equivalent — so most visitors never learn it exists.

## **The lightbox: native \<dialog\>, no library**

|  | **PhotoSwipe / Fancybox** | **\<dialog\> + scroll-snap** |
|----|----|----|
| Payload | 30–45 KB gzipped plus CSS | **~1 KB** — reuses modal §26 and carousel §31 |
| Pinch zoom | Re-implemented in JS | Native |
| Pan | JS per frame | Native scrolling, GPU-composited |
| Focus trap, inert, Escape | Re-implemented | Free with showModal() |
| Swipe between images | JS | CSS scroll-snap |
| Main-thread cost | Parse and execute on every PDP | Effectively none |

A library re-implements in JavaScript what the browser now does natively, and does it on the main thread. Native pinch and native scrolling are composited, so they stay smooth on the mid-range Android that matters most for a mobile-heavy audience.

### **The performance decision that actually matters**

> **Full-resolution images load on open, never on page load.**
>
> The PDP already ships five images at gallery size. If the lightbox also ships them at 2000px, that is several megabytes on a page nobody asked for them from — landing on LCP and on mobile data.
>
> The gallery \<img\> keeps its srcset at display size. The lightbox holds the same images with data-full, and src is assigned when the dialog opens. Most visitors never open it and never pay for it.

## **Implementation**

****\<!-- The whole image is the control --\>

\<button class="uw-gal\_\_main" aria-label="Bild vergrössern" data-lightbox\>

\<img src="produkt-600.webp"

srcset="produkt-600.webp 600w, produkt-900.webp 900w"

sizes="(min-width: 992px) 440px, 100vw"

alt="" width="600" height="600"\>

\<span class="uw-gal\_\_tags"\>

\<span class="uw-badge uw-badge--sale"\>−15%\</span\>

\</span\>

\<span class="uw-gal\_\_hint" aria-hidden="true"\>\<svg\>…\</svg\>\</span\>

\</button\>

\<button class="uw-gal\_\_fav" type="button"

aria-pressed="false" aria-label="Zu Favoriten hinzufügen"\>

\<svg width="26" height="26" viewBox="0 0 24 24"\>…\</svg\>

\</button\>

\<div class="uw-gal\_\_strip" aria-label="Produktbilder"\>

\<button class="uw-gal\_\_t" aria-current="true" aria-label="Bild 1 von 5"\>…\</button\>

…

\</div\>

\<dialog class="uw-lightbox" aria-label="Produktbilder"\>

\<button class="uw-lightbox\_\_close" aria-label="Schliessen"\>&times;\</button\>

\<div class="uw-lightbox\_\_track"\>

\<!-- src is empty until open --\>

\<div class="uw-lightbox\_\_slide"\>\<img data-full="produkt-2000.webp" alt=""\>\</div\>

\</div\>

\</dialog\>



.uw-gal\_\_main {

position: relative;

display: block;

width: 100%;

aspect-ratio: 1 / 1;

padding: 0;

border: 0;

border-radius: var(--radius-card);

overflow: hidden;

background: var(--light-gray);

cursor: zoom-in;

}

.uw-gal\_\_tags {

position: absolute;

top: var(--space-s);

right: var(--space-s);

display: flex;

flex-direction: column;

gap: var(--space-2xs);

align-items: flex-end;

pointer-events: none;

}

/\* Favourites — no circle, shadow for legibility over any photo \*/

.uw-gal\_\_fav {

position: absolute;

top: var(--space-s);

left: var(--space-s);

width: 44px;

height: 44px;

padding: 0;

border: 0;

background: none;

cursor: pointer;

color: var(--dark-blue);

display: grid;

place-items: center;

filter: drop-shadow(0 1px 2px \#0B102A40);

transition: color 120ms ease-out;

}

.uw-gal\_\_fav svg { fill: none; stroke: currentColor; }

@media (hover: hover) and (pointer: fine) {

.uw-gal\_\_fav:hover { color: var(--medium-red); }

}

.uw-gal\_\_fav\[aria-pressed="true"\] { color: var(--medium-red); }

.uw-gal\_\_fav\[aria-pressed="true"\] svg { fill: currentColor; }

.uw-gal\_\_fav:focus-visible {

outline: var(--border-emphasis) solid var(--medium-blue);

outline-offset: 2px;

border-radius: 50%;

}

/\* Thumbnails — horizontal, scroll-snapped \*/

.uw-gal\_\_strip {

display: flex;

gap: var(--space-xs);

margin-top: var(--space-s);

overflow-x: auto;

scroll-snap-type: x mandatory;

scrollbar-width: none;

}

.uw-gal\_\_strip::-webkit-scrollbar { display: none; }

.uw-gal\_\_t {

flex: 0 0 76px;

aspect-ratio: 1 / 1;

padding: 0;

background: none;

border: var(--border-emphasis) solid transparent;

border-radius: var(--radius-inner);

overflow: hidden;

cursor: pointer;

scroll-snap-align: start;

}

.uw-gal\_\_t\[aria-current="true"\] { border-color: var(--dark-blue); }

.uw-gal\_\_t:hover { border-color: var(--light-blue); }

.uw-gal\_\_t\[aria-current="true"\]:hover { border-color: var(--dark-blue); }

/\* Lightbox \*/

.uw-lightbox {

border: 0;

padding: 0;

width: 100vw;

height: 100dvh;

max-width: 100vw;

max-height: 100dvh;

background: var(--dark-blue);

}

.uw-lightbox::backdrop { background: \#0B102AE6; }

.uw-lightbox\_\_track {

display: flex;

height: 100%;

overflow-x: auto;

scroll-snap-type: x mandatory;

scrollbar-width: none;

}

.uw-lightbox\_\_slide {

flex: 0 0 100%;

scroll-snap-align: center;

display: grid;

place-items: center;

overflow: auto; /\* pan when zoomed \*/

touch-action: pinch-zoom pan-x pan-y;

}

.uw-lightbox\_\_slide img {

max-width: 100%;

max-height: 100%;

transition: max-width .2s ease;

}

/\* Double-tap toggles; pan from here is native scrolling \*/

.uw-lightbox\_\_slide.is-zoomed img { max-width: 250%; max-height: none; }



const dlg = document.querySelector('.uw-lightbox');

document.querySelector('\[data-lightbox\]').addEventListener('click', () =\> {

// Fetch full-size only now

dlg.querySelectorAll('img\[data-full\]').forEach(img =\> {

if (!img.src) img.src = img.dataset.full;

});

dlg.showModal(); // focus trap, inert page, Escape — all free

});

dlg.addEventListener('dblclick', e =\> {

e.target.closest('.uw-lightbox\_\_slide')?.classList.toggle('is-zoomed');

});

**showModal() gives the focus trap, the inert background and Escape-to-close for nothing** — the three parts of a modal most often got wrong.

## **Mobile**

Full-width swipe with the carousel's 6px progress bar (§31). **No thumbnails** — a row of them under a square image eats a third of the screen to duplicate a gesture people already use. Tapping a slide opens the lightbox, where pinch is native.

## **Accessibility**

- Thumbnails are \<button\>s, not links — they change the view rather than navigating. Each labelled "Bild 2 von 5"; a bare thumbnail is announced as nothing.

- The main image is decorative inside its button: alt="" with the button carrying the label. Otherwise the name is announced twice.

- The favourites control is one button with aria-pressed, not two swapped controls.

- The lightbox is a native \<dialog\> opened with showModal(), so the page behind is genuinely inert rather than merely covered.

- Explicit width and height on every image, so nothing shifts as they load.

## **Status — live behind ?uw_gallery=1**

> AC9, AC10 and AC11 verified in a browser:

dialog open before/after : false / true

lightbox src : EMPTY,EMPTY,EMPTY → SET,SET,SET

thumbnail labels : Bild 1 von 3 \| Bild 2 von 3 \| Bild 3 von 3

favourites aria-pressed : false → true

> **The EMPTY → SET line is the performance rule holding.** Three lightbox images carry no src until the dialog opens.

### **Two risks closed with evidence**

> **Product schema.** I flagged that changing the gallery markup could silently break Product structured data if it were scraped from the DOM. Diffed the JSON-LD with the flag on and off: **identical.** It reads the product object, not the DOM. The risk is closed rather than accepted.
>
> **The existing zoom was Swiper's swiper-zoom-container** — already loaded for the rails, so it looked free. Swiper leaves anyway, which means the ~1 KB figure for the native \<dialog\> lightbox holds rather than being a comparison against a dependency we were keeping.
>
> **The hover lens is gone when the flag is on and still present in the legacy branch**, which is correct while the flag can be switched off.

## **Caveats**

| **Item** | **Note** |
|----|----|
| **iOS pinch inside a fixed dialog** | Historically unreliable, which is why touch-action and the double-tap fallback are both specified. **Double-tap is the mechanism; pinch is the enhancement.** |
| **\<dialog\> support** | Safari 15.4+. Below that it degrades to an inline block — worth one check against analytics before assuming it is irrelevant. |

## **Don't**

- **Don't load full-resolution images on page load.**

- **Don't keep the hover lens alongside the lightbox.** Two zoom behaviours, one of them invisible to most traffic.

- **Don't put thumbnails on mobile.**

- **Don't wrap the heart in a circle.** The drop-shadow does the legibility work without competing with the tags.

# **34 · Search bar**

Header search and its suggestion panel. Specified in full in the interaction spec; this entry records the component, the two token conflicts it surfaced, and **what the plugin makes impossible**.

## **Two token conflicts to resolve first**

> **1 · The hairline has two values in circulation.**

| **Source**  | **Token** | **Value** |
|-------------|-----------|-----------|
| Doc 08      | --line    | \#E7E7E9  |
| Search spec | --uw-line | \#E4E4E4  |

> Same job, two hexes, both described as "the hairline". \#E7E7E9 carries the palette's blue tint, consistent with the shadow scale being \#0B102A-tinted; \#E4E4E4 is neutral grey and was proposed first, for the mini cart.
>
> **Recommendation: \#E7E7E9**, on tint consistency. Either is defensible — what is not defensible is shipping both. **This must close before the mini cart, the search bar or the token-corrections card ships**, since all three write a hairline.
>
> **2 · Two naming conventions.**
>
> The search spec uses --uw-green-dark; doc 08 uses --dark-green. Same colour, two names.
>
> **Doc 08's naming is canonical** — it is what the token-corrections card ships and what every other component here references. The search spec's names are a translation layer to remove, not a second system to maintain.

## **States**

| **State** | **Border** | **Ring** | **Notes** |
|----|----|----|----|
| Rest | --line | — | Magnifier --dark-gray |
| Hover | --medium-green | — | Border colour only |
| Focus | --dark-green | --light-green | **The ring is a box-shadow, never a wider border** — a border would grow the box and shift the page |
| Typing | --dark-green | --light-green | Query text --dark-blue, clear button appears |
| Disabled | --line | — | --light-gray fill |

## **The panel**

Uses the dropdown surface (§10): --radius-card, --shadow-lg, hairline border, 4px inset. Rows follow the same rules — **hover is the only fill**, at --light-blue; the keyboard cursor is a separate treatment so pointer and keyboard positions never merge.

Groups: products, categories, brands. Matched terms are --dark-blue at --fw-bold within otherwise --dark-gray rows.

## **Motion**

| **Behaviour** | **Value** |
|----|----|
| Border, ring, background | 150ms ease-out |
| Panel open | 120ms ease-out, opacity + translateY(-4px → 0) |
| Panel close | Immediate, no exit animation |
| Query debounce | 250ms after the last keystroke |
| Minimum characters | 2 |
| Skeleton | Shown only after 150ms, so fast responses never flash it |
| Reduced motion | All transitions and the skeleton pulse drop to 0ms |

**Panel close is deliberately instant.** An exit animation on something you dismissed makes the interface feel slower than it is — the only place in this library where an asymmetric transition is correct.

## **Mobile**

Full-screen overlay covering the site header as well as the page. Locks background scroll, restores position on close, closes via a 44px cross with aria-label, Escape, or the hardware back gesture.

Input is 16px so iOS does not zoom. enterkeyhint="search".

## **What the plugin makes impossible**

FiboSearch (dgwt-wcas) renders the suggestion DOM. Seven spec items cannot be met against it, and **six share one root cause: there is no DOM to style and no hook to attach to.**

| **Item** | **Why not** | **Class** |
|----|----|----|
| Skeleton rows | The plugin shows a preloader spinner; no rows exist to style | Needs plugin JS |
| Error state | onSearchError is a no-op — a failed request renders nothing | Needs plugin JS |
| **ARIA combobox** | The plugin emits only aria-label. No role="listbox", no role="option", no aria-expanded, no aria-activedescendant, no live region | Needs plugin JS |
| No-results chips | One flat text string, no chip markup | Needs plugin JS |
| See-all copy | A global label plus a count — it does not interpolate the query | Needs plugin JS |
| Per-instance styling | **One .dgwt-wcas-suggestions-wrapp is appended to \<body\> and reused for every search on the page.** No selector reaches "the banner's dropdown" — panel styling, min_chars, debounce and recent searches are all one shared config | Architectural |
| Popular searches | The feature does not exist. Recent searches only, via localStorage | Feature gap |

**The per-instance limitation is the structural one.** It means the banner search and the header search are the same panel with the same settings — not a styling gap but a constraint on what can ever be specified separately. Anything wanting genuinely different behaviour per instance needs a different search entirely.

**The ARIA gap is the one that matters.** The others are polish; a suggestion list with no role="listbox" and no aria-activedescendant is unusable by screen reader, and it is acceptance criterion 4. See the roadmap card for the three ways forward.

## **Open decisions**

| **\#** | **Decision** | **Status** |
|----|----|----|
| 1 | Hairline value | **Blocking** — see above |
| 2 | Submit button on mobile | Recommend dropping it. A 40px circle cannot hold 44px without growing the bar to 52px, and the keyboard's search key makes it redundant. |
| 3 | Idle panel content | **Answered by implementation** — recent only. Popular searches do not exist in the plugin. |
| 4 | Result mix and caps | 4 products / 3 categories / 3 brands as mocked. Confirm whether out-of-stock is suppressed or greyed. |
| 5 | Mobile entry point | Full-screen overlay, as built |

## **Don't**

- **Don't use a wider border for focus.** The ring is a box-shadow; a border grows the box and shifts the page.

- **Don't animate the panel closed.**

- **Don't use --medium-red for "no results".** Nothing failed. Red is reserved for a broken search endpoint.

- **Don't specify per-instance panel behaviour** until the plugin question is settled — there is one panel.

# **Part 2 · Composites — placeholders**

Not yet written. Each entry states what it covers, what is live today, and what blocks it.

**Status key:** ✅ ready to write · ⚠️ needs a decision first · ⛔ blocked externally

## **11 · Variation selector ⛔**

Choosing size, weight or format on a PDP. **Live:** V2 card (.var-weight / .var-ppg / .var-badge), V1 pill, tile pill, sticky-bar pill override **Blocks:** being redesigned as a comparison table — Grösse / Gesamtpreis / Preis pro ml / Ersparnis. Different semantics entirely: a real \<table\> rather than a radio set, which changes the accessibility model. Document once the redesign lands.

## **12 · Product tile ⛔**

The PLP and carousel unit. **Live:** .card-product · .card-product.same-source · .card-product-small **Blocks:** revamp in progress. Known changes: price moves to --dark-green, image background to --white, variation pills become a select, add-to-cart and favourite replaced by a full-width CTA, new attribute chip (CBD 10% • THC 0.3%). **Flag:** the mockup reads larger than 16px on the corners. Confirmed decision is 16px — tell whoever is building it.

# **Part 3 · Page-level — placeholders**

## **23 · Header ⛔**

V2 (.new-header-menu) is canonical. **Blocks:** z-index decisions — the header currently ties with Intercom at exactly 1000, resolved by DOM order.

## **24 · Mega menu ⚠️**

Three-column dropdown that widens when a submenu opens. Depends on Dropdown (§9).

## **25 · Mobile menu ⚠️**

Slide-in panel with nested levels. Two implementations, one per header. Depends on the header consolidation.

## **27 · Filter panel ⛔**

**Parked** — being reworked. Feeds checkbox, accordion, dropdown and badge.

## **32 · PDP sticky bar ⚠️**

.product-sticky-bar. **Blocks:** duplicated transition (dedup card, item 3). Note it overrides V2 variation cards back to plain pills, so two visual languages coexist on one page.

## **37 · Features bar ⚠️**

.features-bar-section. **Blocks:** marquee on mobile with no reduced-motion guard.

## **39 · Newsletter block ⏸️**

V2 (.newsletter-section-redesign) is canonical. **Parked by decision** — the block's colour differs from the footer deliberately, since it sits directly above it and would otherwise merge into one mass. Revisit if the footer is redesigned. **One finding to fix regardless:** it sets font-weight: 900 with no 900 face loaded, so it renders at 800. Browsers pick the nearest weight, which is why it survived — but if a 900 face is ever added for something else, this heading silently gets heavier.

## **41 · Blog archive ✅**

.blog-archive and .blog-archive--index are different page types, not competing versions. Both documented.

# **Part 4 · Out of scope**

Not library entries. Listed so nobody looks for them.

- **Utilities** — .mb-\*, .text-\*, .d-\*, Bootstrap grid

- **Third-party overrides** — Reviews.io, Trusted Shops, Intercom, Klaviyo, WPLoyalty, WPGMaps. Patches against markup we don't control; worth a separate integrations note.

- **Page-specific layout** — .vision-image, .vision-pillars, .error-404, .loyalty-terms-container

- **Brand page sections A–F** — page layout, not components. A hero, a product grid, a category row, an FAQ accordion, a store list and a related-brands row; every piece inside them is already documented as accordion §9, product tile, category tile or card §25. Belongs in a page-templates document.

- **Blog archive** — same reasoning. Two page types arranging documented components.

- **Hero slider** — removed by the homepage restructure. See the removal card.

- **Switzerland map** — no longer in use. See the removal card.

- **CLS reservations** — the min-height / aspect-ratio block. Performance, not design.

# **Part 5 · Open items register**

Everything that must be resolved for this document to be complete. Grouped by what unblocks it.

## **A · Decisions needed from uWeed**

| **\#** | **Item** | **Blocks** | **Where** |
|----|----|----|----|
| A1 | **Input language** — checkout 46px/12px radius, or site-wide 60–70px pill? | §2, 3, 4, 7 | this doc |
| A2 | **Accordion treatment** — one of seven | §8 | this doc |
| A3 | **Dropdown treatment** — one of seven | §9, 24 | this doc |
| A4 | **Pagination** — one of three | §20 | this doc |
| A5 | **Blog card** — consolidate five to one | §40 | this doc |
| A6 | **Carousel mechanism** — Swiper or the custom track | §22 | this doc |
| A7 | **Quantity selector** — confirm three densities is one component | §10 | this doc |
| A8 | **Tooltip interaction** — hover-only fails touch and keyboard | §18 | this doc |
| A9 | **Product info table** — column widths total 85% | §33 | this doc |
| A10 | **Light-orange in the brand book** — table says \#FFE0C2, live is \#FFF5EB | doc 08 | brand book |

## **B · Blocked on the focus-ring session**

| **\#** | **Item**                                 | **Blocks**      |
|--------|------------------------------------------|-----------------|
| B1     | One ring or two (light and dark surface) | every component |
| B2     | outline or box-shadow                    | every component |
| B3     | :focus vs :focus-visible                 | every component |
| B4     | Ring colour and width                    | every component |

Every focus rule in Part 1 is marked **proposed** until these land.

## **C · Blocked on the z-index session**

| **\#** | **Item**                                  | **Blocks** |
|--------|-------------------------------------------|------------|
| C1     | Adopt Bootstrap's scale or define our own | §9, 14, 23 |
| C2     | Where Intercom sits                       | §23        |
| C3     | Cart drawer above or below modals         | §14, 28    |

## **D · Blocked on the motion session**

| **\#** | **Item** | **Blocks** |
|----|----|----|
| D1 | Duration tokens — proposed three | every transition in this doc |
| D2 | Easing token — proposed one | every transition |
| D3 | Reduced-motion policy | §15, 16, 22, 37 |
| D4 | Top-bar marquee — keep with a pause control, or replace | §37 |

Transitions in Part 1 use literal 150ms ease-out pending D1–D2. They become var(--motion-fast) var(--motion-ease).

## **E · Blocked on work in progress**

| **\#** | **Item**                                    | **Owner**           |
|--------|---------------------------------------------|---------------------|
| E1     | Product tile revamp                         | design, in progress |
| E2     | Variation selector → comparison table       | design, in progress |
| E3     | Filter panel rework                         | parked              |
| E4     | Brand page migration — some brands unmerged | dev                 |
| E5     | Age gate — P0 decisions open                | existing spec       |

## **F · Blocked on the roadmap cards shipping**

| **\#** | **Item** | **Card** |
|----|----|----|
| F1 | Tokens live in :root — --white, --line, shadows, --radius-pill | Design token corrections |
| F2 | Poppins 400/500 removed | Design token corrections |
| F3 | Bestseller badge contrast | Design token corrections |
| F4 | Spinner animation actually animating | Remove duplicated CSS blocks |
| F5 | Off-palette colours in the range slider | Remove duplicated CSS blocks |

Until F1 ships, a component built strictly against this document will not match production.

## **G · Findings with no owner yet**

Surfaced while writing. Each needs someone to take it.

| **\#** | **Finding** |
|----|----|
| G1 | **No radio group uses \<fieldset\> + \<legend\>.** Screen readers announce each shipping and payment option with no idea what is being chosen. |
| G2 | **Tooltips are hover-only** — three implementations, none reachable by touch or keyboard. |
| G3 | **Switzerland map popups are hover-only.** Same problem, on a marketing surface. |
| G4 | **.newsletter-section-redesign uses font-weight: 900** with no 900 face loaded. |
| G5 | **Old brand template renders \#filters-sidebar then hides it** with display: none !important — dead markup shipping to every visitor. |
| G6 | **Base a is display: inline-block** sitewide, which changes wrapping inside prose. Probably legacy; worth reviewing. |
| G7 | **Hero slider height is set at six breakpoints** — 2050/1850/1690/1590/1200/768. Relates to the container-width audit. |
| G8 | **.uw-callout is the best message component** and should replace .woocommerce-message styling rather than sitting beside it. |
| G9 | **Product tile corner radius** in the revamp mockup reads larger than the confirmed 16px. |

# **Counts**

|  |  |
|----|----|
| Documented | 34 |
| Placeholders | 6 |
| Ready to write now | **1** — newsletter block, parked by decision |
| Blocked on a redesign in flight | 4 |
| Parked — header cluster | 3 |
| Retired to Part 4 | 4 |
