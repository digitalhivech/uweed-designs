# About this repository

This repository is a read-only copy of the **uWeed Design System**, which lives in Claude Design:
https://claude.ai/artifact/JyZjDAewAEusKwmN6LbvVH

The design system there is the master. This copy exists so that other tools and people can read it.
Never edit files here: a change made here is overwritten by the next copy. Change the design system,
and the copy follows.

Copied from version `1793370745-aea7` on 2026-11-01. Last recorded change in the system: 2026-10-30T14:40:00Z (Loic). 30 Oct 2026: news added to the icon set for the Magazin link in the header menu (48 icons). Icon and Icons READMEs updated.

## What is where

Every file maps one to one to the design system, at the same path.

| Path | What it is |
| --- | --- |
| `README.md` | The design system's own guide: brand, colour, type, layout and component rules. Start here. |
| `tokens.css`, `tokens.json` | Every design token, as CSS custom properties and as data. |
| `components/bundle.css`, `components/bundle.js` | The built component library (React, global `UWeedDesignSystem_8df554`). `components/lib/` holds the React build it runs on. |
| `components/<Name>/` | Per component: `README.md` (when and how to use it), `<Name>.d.ts` (its props), `preview.html` (the live preview page). |
| `components/src/` | The component source (JSX). |
| `api/` | Generated reference: every token, every component's API, the asset lists. |
| `assets/Icons/`, `assets/Logos/` | The icon set (Tabler, MIT) and the approved logo kit, as files. |
| `ui_kits/uweed-shop/` | The shop prototype screens built from the components. |
| `design-system.json`, `manifest.json` | The design system's own index and build manifest. |
| `previews/` | A picture of every preview page, rendered for this copy so the components can be seen on GitHub. Not part of the design system. |
| `.mirror/` | The scripts the nightly copy runs (rebuild, render the pictures, write this file). Not part of the design system. |

The preview pages run inside Claude Design, which supplies the tokens, the bundle and React. Opened
straight from this repository they render blank; the pictures in `previews/` show what they look like.

## All components at a glance

### Foundations

**[ColourPairings](components/ColourPairings/)** · Approved text and background pairs, and the ones that fail

![ColourPairings](previews/ColourPairings.png)

**[Colours](components/Colours/)** · The palette by family: each family has one job

![Colours](previews/Colours.png)

**[Logo](components/Logo/)** · The approved logo kit and the two secondary marks: lockups, colourways, sizes and clear space

![Logo](previews/Logo.png)

**[MotionAndStacking](components/MotionAndStacking/)** · Three durations and one easing; eleven stacking tokens

![MotionAndStacking](previews/MotionAndStacking.png)

**[SpacingAndShape](components/SpacingAndShape/)** · The spacing scale in use, radius, border widths and elevation

![SpacingAndShape](previews/SpacingAndShape.png)

**[Typography](components/Typography/)** · Poppins for headings, DM Sans for everything else, fluid between 375 and 1280px

![Typography](previews/Typography.png)


### Core

**[Badge](components/Badge/)** · Label, count or flag. Mid-tone fills take dark-blue text; never more than two on one item

![Badge](previews/Badge.png)

**[Button](components/Button/)** · Colour by purpose: buy advances a purchase, nav goes somewhere. Pills, caps, 44px

![Button](previews/Button.png)

**[Card](components/Card/)** · The shared surface: default, link (lifts), flat inside a container, tint

![Card](previews/Card.png)

**[Icon](components/Icon/)** · Tabler Icons: 24px grid, one 2px line, round ends, currentColor

![Icon](previews/Icon.png)

**[Link](components/Link/)** · Inline in prose, action that announces itself, nav where context implies linkness

![Link](previews/Link.png)

**[Price](components/Price/)** · Four roles. Dark-blue, tabular; reductions red with the original struck in s

![Price](previews/Price.png)


### Navigation

**[Breadcrumb](components/Breadcrumb/)** · Sentence case, › separators not announced, the last item a span

![Breadcrumb](previews/Breadcrumb.png)

**[Carousel](components/Carousel/)** · Native scroll-snap rail; arrows are desktop-only enhancement

![Carousel](previews/Carousel.png)

**[Pagination](components/Pagination/)** · Always in a labelled nav, with the result count that helps on a phone

![Pagination](previews/Pagination.png)

**[TabNav](components/TabNav/)** · Category row over a listing. Caps, only the active item underlined in dark blue

![TabNav](previews/TabNav.png)


### Forms

**[Checkbox](components/Checkbox/)** · Wrapped in its label so the text toggles it. Facet counts in medium blue

![Checkbox](previews/Checkbox.png)

**[CouponForm](components/CouponForm/)** · Collapsed by default; the applied code becomes a removable green chip

![CouponForm](previews/CouponForm.png)

**[FormField](components/FormField/)** · Label, control, hint, required or optional marker, and the on-blur error

![FormField](previews/FormField.png)

**[Input](components/Input/)** · 44px pill field on light-gray; textarea takes the card radius

![Input](previews/Input.png)

**[QuantitySelector](components/QuantitySelector/)** · Three densities: lg 56 PDP, md 40 cart with bin at one, sm 32 read-only

![QuantitySelector](previews/QuantitySelector.png)

**[Radio](components/Radio/)** · Always inside a RadioGroup with a real legend. Card radios for shipping and payment

![Radio](previews/Radio.png)

**[Select](components/Select/)** · Native select in the input shell. The OS draws the panel

![Select](previews/Select.png)


### Disclosure

**[Accordion](components/Accordion/)** · Flush inside a page, boxed standing apart. Several panels may be open

![Accordion](previews/Accordion.png)

**[ContentTabs](components/ContentTabs/)** · The PDP's desktop tab rail with the panel to its right; Accordion below lg

![ContentTabs](previews/ContentTabs.png)

**[FilterPill](components/FilterPill/)** · One blue pill per facet. White at rest, dark-blue when applied, grey only when empty

![FilterPill](previews/FilterPill.png)

**[Popover](components/Popover/)** · One floating surface: menu, listbox and panel behaviours. Hover is the only fill

![Popover](previews/Popover.png)

**[SortButton](components/SortButton/)** · The sort control: an action-link button showing its value, not a pill

![SortButton](previews/SortButton.png)

**[Tooltip](components/Tooltip/)** · Short nuance on an already-labelled control. Dark-blue bubble on a real button

![Tooltip](previews/Tooltip.png)


### Feedback

**[Message](components/Message/)** · Inline feedback that persists. Errors are alerts; everything else is status

![Message](previews/Message.png)

**[Skeleton](components/Skeleton/)** · Shape-preserving placeholder when the layout is known; shimmer respects reduced motion

![Skeleton](previews/Skeleton.png)

**[Spinner](components/Spinner/)** · Indeterminate loading when the shape is unknown. Keeps turning, slower, under reduced motion

![Spinner](previews/Spinner.png)

**[StockStatus](components/StockStatus/)** · One line of availability; the text carries it. Out of stock is grey, not red

![StockStatus](previews/StockStatus.png)

**[Toast](components/Toast/)** · Transient confirmation, never for an error. Light by default, dark over imagery

![Toast](previews/Toast.png)


### Overlays

**[AgeGate](components/AgeGate/)** · The blocking modal: no dismiss, no pre-focused answer, an icon mark not the wordmark

![AgeGate](previews/AgeGate.png)

**[CartDrawer](components/CartDrawer/)** · Slide-in cart: header and footer fixed, only the list scrolls; size-only meta

![CartDrawer](previews/CartDrawer.png)

**[FilterPanel](components/FilterPanel/)** · Filters and sorting on a phone: one blue button opens a full-screen panel. The first phone works

![FilterPanel](previews/FilterPanel.png)

**[Modal](components/Modal/)** · For a decision that must be made first. Focus lands on the safe action

![Modal](previews/Modal.png)


### Commerce

**[OrderInfoBar](components/OrderInfoBar/)** · The four reassurance items below add-to-cart. Icons dark blue, never green

![OrderInfoBar](previews/OrderInfoBar.png)

**[OrderSummary](components/OrderSummary/)** · Cart and checkout breakdown as a dl. gratis, not 0.00; discounts red with a minus

![OrderSummary](previews/OrderSummary.png)

**[PdpGallery](components/PdpGallery/)** · Square main image on light gray, tag stack, favourites heart, 76px thumbnail strip

![PdpGallery](previews/PdpGallery.png)

**[ProductInfoTable](components/ProductInfoTable/)** · PDP attributes at 34% / 66%, hairline rows, no zebra

![ProductInfoTable](previews/ProductInfoTable.png)

**[ProductTile](components/ProductTile/)** · Signed off. Stacked card from md up, horizontal row below. Four data-driven states

![ProductTile](previews/ProductTile.png)


### Content

**[ArticleRow](components/ArticleRow/)** · Article cards three across with one button to the magazine. On a phone a list of rows; nothing swipes

![ArticleRow](previews/ArticleRow.png)

**[BlogCard](components/BlogCard/)** · Standard, featured and compact. One link per card, one 16:9 picture shape. On a phone every card is the compact row

![BlogCard](previews/BlogCard.png)

**[ContentTable](components/ContentTable/)** · Editorial table. Dark-gray header, pinned first column, optional tinted spine

![ContentTable](previews/ContentTable.png)

**[IconList](components/IconList/)** · Up to four facts with an icon on a pink disc. On the page or on light grey, never on pink and never in the buying steps

![IconList](previews/IconList.png)

**[NewsletterBlock](components/NewsletterBlock/)** · The newsletter invitation: a light-grey block with one pink disc. Never in the buying steps

![NewsletterBlock](previews/NewsletterBlock.png)


### Chrome

**[Footer](components/Footer/)** · Dark-blue footer: four link columns, copyright and aria-pressed switchers

![Footer](previews/Footer.png)

**[SearchBar](components/SearchBar/)** · Header search with its grouped suggestion panel; standard blue focus ring

![SearchBar](previews/SearchBar.png)


### Other

**[Cover](components/Cover/)**

![Cover](previews/Cover.png)


### Pages

**[ProductListing](components/ProductListing/)** · Category page per Category Filters Final: grey header band, tab nav, one pill per facet with checkbox panels, sort as action link, applied chips, tile grid

![ProductListing](previews/ProductListing.png)

**[ShopPrototype](components/ShopPrototype/)** · A clickable mock of uweed.ch built only from this system: age gate, category listing with live filters, PDP, cart drawer, cart and checkout, blog archive

![ShopPrototype](previews/ShopPrototype.png)

