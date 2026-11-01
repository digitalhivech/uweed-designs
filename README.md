The design system for **uweed.ch**, a Swiss CBD and hemp marketplace selling flowers, oils, hash and pollen, hemp tea, cosmetics, vapes and accessories. It covers the WooCommerce shop, the editorial blog, brand pages and city pages, in **German, French and English**.

This system is the single source of truth for uWeed's design. A value is declared in its tokens and nowhere else, and each component's guidelines own its anatomy, states and behaviour. Where the live site differs, the difference is recorded and decided case by case; it is never copied in silently. Never declare a value of your own: use a token, and if no token fits, raise it rather than inventing one. Nothing is rounded to a 4/8px grid or borrowed from a framework default.

The content rules below follow two of uWeed's source documents, **04 Tone of Voice** (v1.1) and **05 Localisation Rules** (v1.2). Those documents remain the full reference for writing; this system carries the parts that shape the interface. Where the sources disagreed, the decisions of October 2026 are recorded under *Punctuation and symbols*. **11 Visual Identity** has not been written, so photography and illustration are still absent here and must not be inferred. The logo kit was supplied separately and is in this system (see Logo).

---

## Content fundamentals

### The voice: a knowledgeable friend

uWeed sounds like a knowledgeable friend. *Knowledgeable*: it knows the catalogue, the producers and the craft, answers properly and does not pad. *Friend*: informal, warm and direct, never stiff, corporate or lecturing. The uWeed team speaks, as *wir / nous / we*, in one voice for every audience. Only the register changes with the place:

| Place | Register |
|---|---|
| Product pages | Enticing and sensory |
| Category and brand pages | Confident, helping the reader choose |
| Guides and blog | Straight to the point, sources named or linked |
| Email, Telegram, campaigns | The most latitude: light and playful |
| Support replies | Warm and direct. Solve the problem |
| Legal pages | Third person, neutral |

- **When rules conflict: compliance first, then SEO, then tone.**
- **Appetite comes from the product, never from an effect:** aroma, origin, cultivation, texture, craft. No health or effect claims anywhere.
- **Facts over enthusiasm.** "Premium quality" and "the best selection" say nothing; a specific fact says something.
- **Urgency by deadline, never by pressure.** *Nur bis Sonntag* is fine. *Verpass es nicht!*, capitals for urgency and stacked exclamation marks are off-brand.
- **One apology, then the fix.** Where uWeed made the mistake, say so once and offer the solution. Where a carrier did, explain plainly and say what happens next.
- **Never** preachy, clinical, stoner, breathless, corporate, grovelling or vague.

The full rules are in *04 Tone of Voice*.

### Write German first

German is the longest of the three languages and breaks layouts first. Write the German string first and size controls to it, never to English. The same button label measures DE 217px, FR 219px, EN 165px. `btn-min-width` is a floor, not a width: let labels grow past it rather than wrap or truncate.

Use Swiss orthography: *Grösse*, never *Größe*. Address the reader with the informal **du**, never *Sie*, and never use *wir* where *du* does the work:

> Bitte gib eine gültige PLZ ein.
> Bist du 18 Jahre oder älter?
> Mit dem Bestätigen erklärst du, dass du das gesetzliche Mindestalter erreicht hast.

### Three languages

Write fresh in each language; never translate word for word. The test for every label and heading: what would a native speaker actually say, or search for? Wordplay that does not carry is replaced, not translated.

| | German | French | English |
|---|---|---|---|
| Address | *du*, never *Sie* | *tu*, never *vous* | you |
| Spelling | Swiss: *ss*, never *ß* | accents required, also on capitals | British |
| Punctuation | | a space before `: ; ! ?` | |
| Decimals and thousands | `10.5` and `1'000` | `10.5` and `1'000` | `10.5` and `1,000` |
| Date | `15. August 2026` | `15 août 2026` | `15 August 2026` |
| Time | `16:00` | `16 h 00` or `16:00` | `16:00` |
| Typical length, English = 100 | 110 to 135 | 115 to 120 | 100 |

- **Swiss number formats apply in all three languages**, French included.
- **Button labels use the native verb:** *entdecken / découvrir / discover*, *kaufen / acheter / buy*.
- **Some terms stay in English everywhere:** Indoor, Outdoor, Greenhouse, Small Buds, Trim, Vape, Moonrock. Others are always localised: *Blüten / fleurs / flowers*, *Öl / huile / oil*, *Laborbericht / rapport d'analyse / lab report*. Brand and strain names never change.
- German and French use the generic masculine; where it reads awkwardly, rephrase.
- Legal pages are the one place that does not use *du* or *tu*: third person, neutral.

The full rules are in *05 Localisation Rules*.

### Sentence case, with two exceptions

Set breadcrumbs, headings, labels, messages and body copy in sentence case, in all three languages. English headings are not set in Title Case. The one exception is the English meta title, which keeps Title Case (see *06 SEO Elements*). Uppercase appears in exactly two places, always with `ls-caps`:

- **CTA labels**: `IN DEN WARENKORB`.
- **The category tab nav**: short labels scanned in a row.

Never uppercase breadcrumbs: it costs about 12% width, and German breadcrumbs are already the longest.

### Say the thing, then stop

| Instead of | Write |
|---|---|
| "0.00 CHF" | **"gratis"**: a word reads as a benefit, a zero as an unfilled field. FR uses *offert*, not *gratuit*, in premium tone |
| "Aktualisiert: August 2026" | **"August 2026"** |
| "Nur noch 47 verfügbar" | Nothing. An exact count above the low-stock threshold warns about nothing |
| "Weiterlesen" nine times on an archive | The **headline** as the link text |
| "Mehr erfahren", "Hier klicken" | Something specific |

### Errors describe the fix

Write *Bitte gib eine gültige PLZ ein.*, not "Ungültig" or "Fehler". Show errors **on blur, never on keystroke**. Where most fields are required, mark the **optional** ones instead: on checkout, one "optional" says more than ten asterisks.

### Facts, not reassurance theatre

State what is measured and where it came from: *Dichte Indoor-Blüten, handverlesen und langsam getrocknet.* *Jede Charge wird in einem Schweizer Labor geprüft.* Each of the four reassurance items under add-to-cart keeps its supporting line visible. Never put anything a reader needs to decide into a tooltip.

### Punctuation and symbols

- Separate product details in the interface with the **middle dot**: `10 ml · 8.42 CHF / ml`, `Seite 1 von 12 · 284 Produkte`.
- In copy lines (titles, the announcement bar, meta descriptions, campaign lines) separate with `:` `;` or the long dash `—`. The bullet `•` is retired everywhere.
- Separate breadcrumbs with **›**, generated in CSS with empty alt text.
- Give every discount an **explicit minus**: `−16.83 CHF`.
- Write prices as amount, space, currency, in all three languages: `84.15 CHF`. Euro amounts take the sign after the amount, also in all three languages: `99.00 €`, never `€99`, `99.00 EUR` or `EUR 99.00`.
- Write percentages **without a space** and with a decimal point, in all three languages: `10%`, `0.7%`.
- Write THC as a legal fact, never as a selling point: *unter 1% THC* / *moins de 1% de THC* / *under 1% THC*. The short form `<1% THC` is allowed where space is tight, written exactly so: the less-than sign directly before the number, no spaces, never `< 1 %` or `<1.0%`. Never use the short form in meta titles or meta descriptions: the sign is exported as `&lt;` there, so write it out.
- Units are metric, with a space: `10 ml`, `3 g`.
- Write **uWeed** with a lowercase u and a capital W, also at the start of a sentence. The domain is lowercase: `uweed.ch`.
- Use **no emoji in the interface**: not in buttons, labels, messages or icons. In content (blog and category text, campaigns, email, Telegram and the announcement bar) they are allowed sparingly, as *04 Tone of Voice* describes, and never in meta titles, meta descriptions, URL slugs or legal pages.

### Accessible names are copy

Name icon-only controls, count badges and remove buttons in full sentences, and localise them: `aria-label="3 Artikel im Warenkorb"`, `"Filter Sweed entfernen"`, `"Bild 2 von 5"`. "×", "−" and "+" are not names. The breadcrumb's own label is *Brotkrumen / Fil d'Ariane / Breadcrumb*.

---

## Visual foundations

### Colour: each family has one job

| Family | Means | Carries |
|---|---|---|
| **Blue** (`dark-blue`, `medium-blue`, `light-blue`) | Brand, structure, navigation | Headings, links, focus rings, tab nav active, filter and sort controls, the footer, overlay surfaces, prices, the count badges on the cart and favourites icons |
| **Green** (`dark-green`, `medium-green`, `light-green`) | Commerce, the purchase path | Add to cart, checkout, in stock, the New badge, the brand line on a product tile |
| **Pink** (`dark-pink`, `medium-pink`, `light-pink`) | uWeed informing or inviting, never selling | Blog category labels, pink icon discs in informing blocks, the small label of an informing block. Never a background |
| **Orange** (`medium-orange`, `light-orange`) | Worth noticing: recognition and heads-up | Rating stars, Bestseller, loyalty, referral, the low-stock dot, the warning note |
| **Red** (`medium-red`, `light-red`) | Attention: what must not be missed | Errors, destructive actions, sale price, discount badge, the favourites heart (filled once something is saved; its count stays dark blue) |
| **Grey** (`dark-gray`, `medium-gray`, `light-gray`, `line`) | Surface, structure, unavailability | Backgrounds, borders, disabled controls, metadata, attribute chips, out of stock |

A colour that means two things means neither. Green never navigates and blue never buys. Pink is never a button. Orange is a heads-up, never an alarm. Out of stock is grey, not red.

Red is the one attention colour. It is not only an alarm: it marks the few things a visitor must not miss, which today are errors, destructive actions, price reductions and saved favourites. It works only while that list stays short, so adding to it is a decision, not a styling choice.

Orange is the softer signal beside red: it marks what is worth noticing, whether earned (rating stars, Bestseller, loyalty, referral) or a heads-up (low stock, the warning note). What must not be missed stays red. Orange always carries dark blue, never white: in the warning note the icon is `dark-blue` on a `medium-orange` disc, the same pairing as the Bestseller badge.

Pink is uWeed speaking about itself or inviting the visitor, on content that informs rather than sells. It is a mark, never a surface, and it is used sparingly:

- **Pink icon discs.** A `dark-pink` icon on a `light-pink` disc, inside an informing block: beside each fact of an icon list (`IconList`) and beside the heading of the newsletter invitation (`NewsletterBlock`). The block itself sits on `white` or `light-gray`.
- **The small label** above the heading of an informing block is `dark-pink`.
- **The blog** keeps its pink category labels.
- **Never a background.** No block, band, page, header or footer takes a pink background. An earlier rule allowed one light-pink block per page; it was withdrawn in October 2026.
- **Where pink never goes.** Not behind products or product tiles, and nowhere in the buying steps: the reassurance icons under the buy button, the cart and the checkout stay free of pink. Never on a button, link, form state, price, product badge or focus ring.
- `medium-pink` has no job in the interface yet.

`IconList` and `NewsletterBlock` are built to this rule: both sit on the page or on a light-grey block and carry pink only as the disc and the small label. The guide teaser is `ArticleRow`, a row of article cards; its pink is the category label on each card.

- **Saturated on controls, tint on labels.** A `dark-*` fill with white text says what will happen; a `light-*` tint with dark text says what kind of thing this is.
- **Inactive is not grey.** Grey means unavailable. An available, idle control stays white with a `line` hairline and dark text.
- **Pair by the table, not by eye.** `font-color` on `white` is 10.86:1 and on `light-gray` 9.96:1. White on `dark-blue` 18.72:1, `dark-green` 6.65:1, `dark-pink` 6.07:1. `dark-blue` on `medium-orange` 9.21:1. A mid-tone never takes white text; give it `dark-blue`. The one exception is `medium-red`. `light-*` tints are backgrounds only. `medium-gray` is the quiet text colour: `#6F6F6F`, 5.02:1 on `white` and 4.61:1 on `light-gray`, so dates, hints, breadcrumb links, unselected tabs and the hint text inside fields all pass. It was darkened from `#767676` in October 2026 for the hint text, which sits on `light-gray`. The brand book grey (`#999999`, 2.85:1) was too faint for text.
- **Message icons sit on a disc.** Each of the five message types carries its icon on a disc in its own colour: white on `medium-gray`, `medium-blue`, `dark-green` and `medium-red`, and `dark-blue` on the `medium-orange` disc of the warning (9.21:1), because white on `medium-orange` is 2.03:1 and `medium-orange` on `light-orange` 1.89:1. The palette keeps two orange tones.
- **The red was darkened in October 2026**, from `#EE2E31` to `#D6252A`, so that small white text on it passes: white on `medium-red` is 5.05:1. It is the one medium tone that takes white text.
- **The selected category tab is dark blue.** Confirmed in October 2026. The green on the live site is an accident in its code and is to be corrected there, not copied here.
- **One thin line.** Every hairline is `line`, `#E7E7E9`. The `#E4E4E4` named in the old search bar and mini cart specs is retired.
- **Write colours as hex**, alpha as 8-digit `#RRGGBBAA`, never `rgba()`.

### Type

Set headings in **Poppins** (`font-heading`) and everything else in **DM Sans** (`font-body`): body, navigation, labels, buttons, prices, metadata. Six faces load from Google Fonts: Poppins 600/700/800 and DM Sans 400/500/700, latin plus latin-ext for German and French accents.

- Never set Poppins below `fw-semibold`. 400 and 500 are not loaded, and `font-synthesis: none` renders a request for them at 600.
- Use the fluid scale `fs-display` to `fs-h6` and `fs-lead`, each with its `lh-*` and `ls-*`. It runs between 375px and 1280px with no breakpoints. The `h1` to `h6`, `display` and `lead` styles show the 1280px bound.
- Set body copy in `fs-body`, never smaller for prose. `fs-meta` (13px) is the floor, for UI metadata only. The one exception is the category label in an article row, at 12px, because it sits directly above a 14px title. Cap running text at `measure`.
- Give every uppercase run `ls-caps`. Tracking relaxes as size drops, to 0 in body.
- Choose the heading **element** for document structure and the **size** by component. A card title stays `<h3>` and takes a component size.

### Spacing, radius and borders

- Space on an 8px base with 4px and 6px steps at the bottom, in rem: `space-2xs` to `space-s` inside a component, `space-m` and `space-l` between components, `space-xl` and `space-2xl` between blocks, `space-3xl` (`space-3xl-mobile` on phones) between sections. Prefer `gap` to margins.
- Match radius to the element: `radius-card` for cards, panels and modals, `radius-pill` for buttons, inputs and tags, `radius-inner` inside a card. There is no 20, 30, 40 or 50px. The boxed accordion is a pill closed and `radius-card` open.
- Use three border widths, in px: `border-hairline`, `border-emphasis`, and `border-heavy` for dark-surface focus rings only. Never change a border's width between states; change its colour, or reserve the width with a transparent colour.
- **Sizes include border and padding.** A component that is specified as 44px high is 44px high with its border. The stylesheet declares this itself, so the components measure the same in this system, on the site and anywhere else.
- **One control height.** Fields, selects, the search field, buttons, filter and sort controls, page numbers and category tabs are all 44px high, the minimum comfortable touch size. Decided in October 2026; fields were 46px before.

### Surfaces and cards

- Use flat colour. The only gradient is the skeleton shimmer. No patterns, textures, grain, blur or `backdrop-filter`.
- Put pages on `white` and grouped blocks on `light-gray`. The footer, tooltips, the lightbox and the dark toast sit on `dark-blue`.
- Show product imagery on `white` on the tile and `light-gray` in the gallery frame, so the product carries the colour.
- Build every card from `Card`: white, a `line` hairline, `radius-card`, `shadow-xs`. Use the four variants and no fifth: default, `link` (lifts), `flat` (inside a container), `tint` (`light-gray`, no border). Never nest cards more than one deep, and drop the inner frame.
- Protect elements over photographs with a drop shadow, never a capsule or gradient: the favourites heart is the worked example.
- Use transparency only for the modal and drawer overlay `#0B102A80`, the lightbox `#0B102AE6`, `.on-dark` dividers, the shadow scale, and `film-oos` over a sold-out tile.

### Elevation

Step up the five `#0B102A`-tinted shadows by role: `shadow-xs` card at rest, `shadow-sm` raised inside a card, `shadow-md` card on hover, `shadow-lg` dropdown and popover, `shadow-xl` modal and drawer. Always pair `lift-hover` with a shadow step; only `link` cards lift. There are no inner shadows.

### Motion

Transition with `motion-fast` (150ms) for a change of state, `motion-base` (250ms) for something that opens, and `motion-slow` (400ms) for full-surface changes, all on `motion-ease`. Every component uses these three and no other duration or curve; since October 2026 none is written by hand. The hover lift of a card counts as a change of state. Use fades and colour changes only: no bounces, springs or overshoot. The search panel opens over `motion-fast` and closes instantly. The accordion animates its chevron and radius, not its height. Reduced motion clamps everything to 0.01ms, except spinners, which keep turning more slowly.

### Hover, focus and press

Gate every hover inside `@media (hover: hover) and (pointer: fine)`. The one exception is the tooltip, which has to react on a touch screen because that is how it opens there. Headless browsers report `pointer: none`, so check hover with a real pointer.

- Filled buttons **invert** to their family's tint: buy goes `light-green` with `dark-green` text, nav goes `light-blue` with `dark-blue` text.
- Outline buttons fill with `light-blue`. Text buttons and links shift to `medium-blue`, and inline links thicken their underline to 2px.
- Panel rows take a `light-blue` fill on hover. Selection shows as a check mark, never a fill.
- Destructive controls go `medium-red`.
- **Never use opacity** for a state.
- **Disabled** (`light-gray` fill, `medium-gray` border and label) means *not right now*. **Unavailable** (transparent fill, `dark-gray` border and label) means *not at all*, as with sold out. Give neither a tooltip.
- **Press** is `translateY(1px)` everywhere.
- **Touch** needs 44px. Controls are 44px high; the few that are drawn smaller (the remove button on a tag, the close button on a toast, the clear button in the search field, plus and minus in the cart, the footer switchers, the tooltip trigger) keep their look and react to a 44px area on a touch screen. Tick rows in filter lists are 32px with a mouse and 44px on a touch screen. A new small control gets the same treatment in `@media (pointer: coarse)`.
- **Focus** uses `:focus-visible`: a 2px `medium-blue` outline at 2px offset on light surfaces, and 3px `white` inside `.on-dark`. Every control uses this ring, the search field included; there are no exceptions. The tooltip alone opens on `:focus`, so it works on tap.

### Layout

Lay out with the Bootstrap 5.3 breakpoints `bs-breakpoint-sm` to `bs-breakpoint-xxl`, for layout only and never for type. Contain pages at `container-xl`, `container-xxl`, `container-wide-lg` and `container-wide`. Detect the input, not the width. Stack fixed elements by token from `z-sticky` through `z-header`, `z-panel`, `z-tooltip`, `z-backdrop`, `z-modal` and `z-drawer` to `z-toast`. Give tap targets 44×44px under `(pointer: coarse)`, usually by making the label the hit area.

---

## Iconography

The uWeed icon set is **[Tabler Icons](https://tabler.io/icons)**, a free open-source family (MIT licence), chosen in October 2026 because it is built the way the logo is: one even line, round ends, simple geometry. The 48 icons in use are in the **Icons** asset group and drawn by `Icon`, so they inherit `currentColor`.

- Render icons through `Icon` in four sizes: 16px in small controls (tags, filters, the quantity stepper, field hints), 20px in buttons, fields and messages, 24px for an icon on its own, 32px for an empty state. No other size; the one exception is the rating star on the product tile, 14px to match the text beside it.
- Use **one line weight**: 2px on the 24px grid, at every size. Do not thin or thicken an icon to make it quieter or louder; change its size or colour.
- Take a further icon from **Tabler only**, under Tabler's own name, and add it to `Icon` and the Icons asset group together. Never mix in another family. Where the site needs an icon Tabler does not have, flag it: it is then drawn once to Tabler's rules (24px grid, 2px line, round ends) and added like any other.
- Use a filled icon (a name ending in `-filled`) only for a state or a score, such as the rating star. Everything else is a line icon.
- Keep icons decorative. An icon-only control takes its name from `aria-label`.
- Colour the order-info-bar icons `dark-blue`, never green: the buy button sits directly above them.
- Use no unicode stand-ins, with two CSS exceptions: the breadcrumb `›`, and the accordion chevron and check marks.
- Never use `+` / `−` as a disclosure icon; on a shop, plus means add. Use a chevron.
- Keep icons in proportion to their container: the 48px carousel arrows hold 24px chevrons.

### Logo

The approved kit (August 2026) is in the **Logos** asset group and shown on the `Logo` foundations page: a horizontal logo, the same with the tagline, and the mark, each supplied ready-coloured, plus favicon PNGs at 32px and 180px.

- **Pick the file, never build the logo.** The default is `uweed_logo_horizontal_dark-blue.svg` on `white` or a light tint, and `uweed_logo_horizontal_white.svg` on dark, coloured or photographic backgrounds. Use dark pink on editorial surfaces and dark green on commerce surfaces where green is already the intended family. The light-blue, light-green and light-pink versions sit on `dark-blue` only. Black is for one-colour production where it is mandatory.
- **Never** recolour a file, add an outline, shadow, gradient or background box, stretch it, or reconstruct the logo with a font. Never stand an icon in for the mark.
- **Minimum widths:** horizontal 100px, with tagline 180px, mark 24px. Below that, switch to the mark or drop the tagline rather than shrinking the logo.
- **Clear space** is 25% of the mark's height on every side. The horizontal file's canvas already includes it; add 3% of the rendered width around the tagline file and 5% around the mark.
- **Favicon:** the supplied PNGs only.
- **Secondary marks** support the logo, they never replace it. The **badge** (the mark in a double ring) and the **stamp** (the mark in a ring with the brand line "Delivering Happiness") are a signature: on explainer graphics and featured images, packaging, stickers, merchandise and social posts. On a page or an image the logo, or nothing, does the naming; the secondary mark adds recognition. Use at most one secondary mark per surface, and never next to the logo at the same size.
- **Same eight colourways and backgrounds as the logo** (`uweed_badge_*.svg`, `uweed_stamp_*.svg`). Never rotate them, fill the inside of a ring, put anything inside the rings, or retype or translate the brand line: it is English in all three languages.
- **Minimum widths:** badge 40px, stamp 96px, where its lettering is still legible. Below that, use the mark. **Clear space:** 10% of the diameter on every side.
- **Not for** the favicon, the age gate, the header or any control.
- **In React** use `Logo`, which inlines the same artwork and accepts only the approved colourways. The age gate shows the dark-blue mark with no disc behind it.

### No imagery yet

⚠️ **No photography or illustration exists in the sources.** Every image in the previews is a flat token-coloured placeholder. Blog imagery is **16:9 everywhere, from one source file**: the featured image at the top of an article, the card on a desktop and the row on a phone all show the same cut. No place gets its own crop or its own shape.

---

## Components

Each component has a live preview, its guidelines and its types:

- **Core**: `Button`, `Link`, `Badge`, `Card`, `Price`, `Icon`, `Logo`
- **Forms**: `Input`, `Select`, `Checkbox`, `Radio` (with `RadioGroup`), `FormField`, `QuantitySelector`, `CouponForm`
- **Navigation**: `TabNav`, `Breadcrumb`, `Pagination`, `Carousel`
- **Disclosure**: `Accordion` (with `AccordionItem`), `Popover` (with `PopoverItem`, `PopoverGroup`, `PopoverSeparator`, `PopoverFooter`), `FilterPill`, `SortButton`, `Tooltip`, `ContentTabs`
- **Feedback**: `Message`, `Toast`, `StockStatus`, `Skeleton`, `Spinner`
- **Overlays**: `Modal`, `AgeGate`, `CartDrawer`, `FilterPanel`
- **Commerce**: `ProductTile`, `PdpGallery`, `OrderInfoBar`, `OrderSummary`, `ProductInfoTable`
- **Content**: `ArticleRow`, `BlogCard`, `ContentTable` (CSS only, no React component), `IconList`, `NewsletterBlock`
- **Chrome**: `SearchBar`, `Footer`

Two more groups show the system in use rather than one component at a time:

- **Foundations** shows the tokens as specimens, and the logo: `Colours`, `ColourPairings`, `Typography`, `SpacingAndShape`, `MotionAndStacking`, `Logo`.
- **Pages** holds whole pages built from the components. `ProductListing` is the category page to copy when you build a listing. `ShopPrototype` is a clickable mock of the shop: age gate, category listing, PDP, cart drawer, cart, checkout and blog. Its sources are in `ui_kits/uweed-shop/`.

- **Intentional additions:** `RadioGroup` exists because no radio group on the live site uses the grouped pattern unless something makes it easier.
- **Not built:** the header, mega menu, mobile menu, PDP sticky bar and variation selector. Each is blocked in the source on a decision or a redesign. Where a page needs one, compose documented components and say so.
- **Articles are teased one way.** Outside the magazine that is `ArticleRow`: cards three across on a desktop and a list of rows on a phone, never a swipe row, never a card with the title laid over the picture. On a phone every `BlogCard` is a row with the category label above the title.
- **Brand and city pages** are page layouts that arrange these components, not components of their own.
- **Filters on a phone.** Below `lg` the filter pills and the sort control give way to one filled blue button, "Filter & Sortierung (3)", that opens `FilterPanel`: full screen, sorting as its own block at the top, each filter opening in place and naming what is chosen in it ("Harlequin, Sweed +2"), reset bottom left and a blue button with the number of matching products bottom right. Decided in October 2026 against published research on leading shops.
- **Counts are grey.** The product count beside a filter option is `medium-gray`. Blue is the colour of links; text that cannot be tapped never takes it.
- **Colour by purpose, not prominence:** `Button` `buy` advances a purchase and `nav` goes somewhere. The sort control is `SortButton`, never a `FilterPill`. Errors on coupons use `Message`, never `Toast`.

---

## Open items

These are uWeed's own unresolved decisions. Do not resolve them by accident.

1. **Navigation is blue only.** The Category Filters Final decision withdrew the earlier green pagination and carousel arrows.

A page built strictly against this system will not match production until the token corrections ship on the site (`white`, `line`, the five shadows, `radius-pill`, the 16px card radius, and the removal of Poppins 400/500). This system describes the **target**.

## Assets

- **Logos**: the approved logo kit, 22 SVGs and 2 favicon PNGs, with the brand's usage guide (see Logo).
- **Icons**: the 48 Tabler icons in use, as SVG files, with the licence (see Iconography).

---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.UWeedDesignSystem_8df554` (51 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs `components/lib/react.production.min.js` (`window.React`), `components/lib/react-dom.production.min.js` (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `components/bundle.css` and `components/bundle.js` onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); load the stylesheet before the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="UWeedDesignSystem_8df554.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens only — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers.

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: palette, type, spacing, radius, shadow, motion, font-weight, other, line-height, letter-spacing. (15.9k)

**Icons and assets**

- `api/assets/Logos.md` — 24 files, by asset id. (6.2k)
- `api/assets/Icons.md` — 44 files, by asset id. (7.0k)

**Components** (`api/components/<Comp>.md`, 58; 7 of them showcase pages)

- **Chrome**: `Footer` — Use Footer at the bottom of every page · `SearchBar` — Use SearchBar in the header and in the homepage banner
- **Commerce**: `OrderInfoBar` — Use OrderInfoBar directly below add-to-cart on a PDP · `OrderSummary` — Use OrderSummary on the cart page and in checkout · `PdpGallery` — Use PdpGallery as the left column of a PDP · `ProductInfoTable` — Use ProductInfoTable inside the PDP's "Eigenschaften" panel · `ProductTile` — Use ProductTile for every product in a listing, a carousel rail, or a related-products block
- **Content**: `BlogCard` — Use BlogCard wherever an article is teased: in the blog archive, in the sidebar, and inside ArticleRow on shop pages · `ArticleRow` — Use ArticleRow to tease articles outside the magazine: on the homepage, on a category page, at the end of an article · `IconList` — Use IconList for a short set of facts about uWeed or a brand: the "why uWeed" band on the homepage or a category page, the facts on a brand page · `NewsletterBlock` — Use NewsletterBlock to invite a visitor to the newsletter: on the homepage, at the end of a blog article, or above the footer · `ContentTable` — A multi-column table for editorial content: comparisons, reference data, specs and figures inside blog articles and category pages
- **Core**: `Badge` — Use Badge for a small label that classifies, counts or flags something · `Button` — Use Button for anything that performs an action or navigates; the variant is chosen by purpose, never by how much attention you want it to have · `Card` — Use Card as the shared surface under tiles, panels and grouped blocks — not usually as a component you place by itself · `Icon` — Use Icon wherever the interface needs an icon: the order info bar, messages, chevrons in navigation, cart and favourites controls · `Link` — Use Link for navigation; pick the variant by whether the link has to announce itself, not by where it sits · `Price` — Use Price for any price, anywhere
- **Foundations**: `Logo` — The approved uWeed logo kit (August 2026): a horizontal logo, the same logo with the tagline, and the mark, each as a ready-coloured SVG, plus two favicon PNGs · `ColourPairings` (showcase page) — Approved text and background pairs, and the ones that fail · `Colours` (showcase page) — The palette by family: each family has one job · `MotionAndStacking` (showcase page) — Three durations and one easing; eleven stacking tokens · `SpacingAndShape` (showcase page) — The spacing scale in use, radius, border widths and elevation · `Typography` (showcase page) — Poppins for headings, DM Sans for everything else, fluid between 375 and 1280px
- **Disclosure**: `Accordion` — Use Accordion + AccordionItem for FAQ blocks, PDP tabs on mobile, category text and footer columns on mobile · `ContentTabs` — Use ContentTabs for the PDP description / lab report / shipping panels on desktop · `FilterPill` — Use FilterPill for every facet trigger — one per facet, always visible · `Popover` — Use Popover for any panel that opens from a trigger and floats above the page · `SortButton` — Use SortButton as the sort control on a listing · `Tooltip` — Use Tooltip only for nuance the reader could do without
- `AccordionItem` — AccordionItem · `PopoverItem` — PopoverItem · `PopoverGroup` — PopoverGroup · `PopoverSeparator` — PopoverSeparator · `PopoverFooter` — PopoverFooter · `RadioGroup` — RadioGroup
- **Feedback**: `Message` — Use Message for feedback the reader must be able to come back to — form errors, compliance notes, coupon results, shipping notices · `Skeleton` — Use Skeleton where the incoming shape is known — a reloading product grid, cart drawer rows, filter results · `Spinner` — Use Spinner when you cannot know the shape of what is coming — a submitting form, an in-flight request · `StockStatus` — Use StockStatus on a PDP below the variation selector · `Toast` — Use Toast to confirm an action that succeeded and needs no decision
- **Forms**: `Checkbox` — Use Checkbox for independent on/off and for filter facets · `CouponForm` — Use CouponForm on the cart page, in the cart drawer and at checkout · `FormField` — Use FormField around every form control · `Input` — Use Input for any text entry · `QuantitySelector` — Use QuantitySelector wherever a quantity is set or shown · `Radio` — Use RadioGroup + Radio for any single-choice set · `Select` — Use Select for one-of-many where the list is known
- **Navigation**: `Breadcrumb` — Use Breadcrumb above the H1 on category and product pages · `Carousel` — Use Carousel for a horizontal rail of products or city tiles · `Pagination` — Use Pagination below a product grid or blog archive · `TabNav` — Use TabNav for one axis of category filtering above a grid or a rail
- **Overlays**: `AgeGate` — Use AgeGate as the first thing a visitor sees · `CartDrawer` — Use CartDrawer for the slide-in cart · `FilterPanel` — Use FilterPanel for filtering and sorting a product listing below lg, where the row of filter pills has no room · `Modal` — Use Modal rarely — a destructive confirmation or a required choice
- **Pages**: `ProductListing` (showcase page) — A category page (PLP) built from this system's components: the page to copy when you build a listing · `ShopPrototype` (showcase page) — A clickable mock of the uweed.ch shop, built only from this design system's components
