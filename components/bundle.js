/* @ds-bundle: {"format":4,"namespace":"UWeedDesignSystem_8df554","components":[{"name":"Footer","sourcePath":"components/chrome/Footer.jsx"},{"name":"SearchBar","sourcePath":"components/chrome/SearchBar.jsx"},{"name":"OrderInfoBar","sourcePath":"components/commerce/OrderInfoBar.jsx"},{"name":"OrderSummary","sourcePath":"components/commerce/OrderSummary.jsx"},{"name":"PdpGallery","sourcePath":"components/commerce/PdpGallery.jsx"},{"name":"ProductInfoTable","sourcePath":"components/commerce/ProductInfoTable.jsx"},{"name":"ProductTile","sourcePath":"components/commerce/ProductTile.jsx"},{"name":"BlogCard","sourcePath":"components/content/BlogCard.jsx"},{"name":"ArticleRow","sourcePath":"components/content/ArticleRow.jsx"},{"name":"IconList","sourcePath":"components/content/IconList.jsx"},{"name":"NewsletterBlock","sourcePath":"components/content/NewsletterBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"Price","sourcePath":"components/core/Price.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"AccordionItem","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"ContentTabs","sourcePath":"components/disclosure/ContentTabs.jsx"},{"name":"FilterPill","sourcePath":"components/disclosure/FilterPill.jsx"},{"name":"Popover","sourcePath":"components/disclosure/Popover.jsx"},{"name":"PopoverItem","sourcePath":"components/disclosure/Popover.jsx"},{"name":"PopoverGroup","sourcePath":"components/disclosure/Popover.jsx"},{"name":"PopoverSeparator","sourcePath":"components/disclosure/Popover.jsx"},{"name":"PopoverFooter","sourcePath":"components/disclosure/Popover.jsx"},{"name":"SortButton","sourcePath":"components/disclosure/SortButton.jsx"},{"name":"Tooltip","sourcePath":"components/disclosure/Tooltip.jsx"},{"name":"Message","sourcePath":"components/feedback/Message.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StockStatus","sourcePath":"components/feedback/StockStatus.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"CouponForm","sourcePath":"components/forms/CouponForm.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantitySelector","sourcePath":"components/forms/QuantitySelector.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Carousel","sourcePath":"components/navigation/Carousel.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"TabNav","sourcePath":"components/navigation/TabNav.jsx"},{"name":"AgeGate","sourcePath":"components/overlays/AgeGate.jsx"},{"name":"CartDrawer","sourcePath":"components/overlays/CartDrawer.jsx"},{"name":"FilterPanel","sourcePath":"components/overlays/FilterPanel.jsx"},{"name":"Modal","sourcePath":"components/overlays/Modal.jsx"}],"sourceHashes":{"components/chrome/Footer.jsx":"03c01a5e9c7a","components/chrome/SearchBar.jsx":"5644ae541ca3","components/commerce/OrderInfoBar.jsx":"094db4c8301f","components/commerce/OrderSummary.jsx":"960d2094a0eb","components/commerce/PdpGallery.jsx":"ae726d622a60","components/commerce/ProductInfoTable.jsx":"609bc679ec48","components/commerce/ProductTile.jsx":"fffee574c39f","components/content/ArticleRow.jsx":"2187ecce0c8a","components/content/BlogCard.jsx":"0cd0bd2cae57","components/content/IconList.jsx":"3ca72de9c21c","components/content/NewsletterBlock.jsx":"a2790e5f5a2d","components/core/Badge.jsx":"29a058f249e0","components/core/Button.jsx":"e19e1792f78b","components/core/Card.jsx":"9a53df0e9c8f","components/core/Icon.jsx":"b05eb61ed6bc","components/core/Link.jsx":"137e8ba3044d","components/core/Logo.jsx":"451419f02806","components/core/Price.jsx":"bc0b333dcb06","components/disclosure/Accordion.jsx":"c550c32816da","components/disclosure/ContentTabs.jsx":"0f4beb51a1f6","components/disclosure/FilterPill.jsx":"60017ccf4ece","components/disclosure/Popover.jsx":"c38cd051aa26","components/disclosure/SortButton.jsx":"30ef5bc04f29","components/disclosure/Tooltip.jsx":"dbd30e6a971b","components/feedback/Message.jsx":"f43d39947239","components/feedback/Skeleton.jsx":"3b758be083d2","components/feedback/Spinner.jsx":"ba7da9572c9b","components/feedback/StockStatus.jsx":"5c680a671d9d","components/feedback/Toast.jsx":"df5c4047e01e","components/forms/Checkbox.jsx":"bfb6d81cd3cc","components/forms/CouponForm.jsx":"c759df709943","components/forms/FormField.jsx":"00e0245da845","components/forms/Input.jsx":"837469360eb4","components/forms/QuantitySelector.jsx":"b5bda6512112","components/forms/Radio.jsx":"c9b51314c609","components/forms/Select.jsx":"e1f779e0f077","components/navigation/Breadcrumb.jsx":"e481c0dd69f1","components/navigation/Carousel.jsx":"ba5ad858febe","components/navigation/Pagination.jsx":"708c5101f42d","components/navigation/TabNav.jsx":"3cb70869be16","components/overlays/AgeGate.jsx":"f460c98e3450","components/overlays/CartDrawer.jsx":"0b54419ba52b","components/overlays/FilterPanel.jsx":"0d41a2a4881d","components/overlays/Modal.jsx":"4588e7f57b28"},"inlinedExternals":[],"unexposedExports":[{"name":"formatFrom","sourcePath":"components/core/Price.jsx"}]} */

(() => {

const __ds_ns = (window.UWeedDesignSystem_8df554 = window.UWeedDesignSystem_8df554 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/OrderSummary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 15 · Order summary. A <dl>: each label is a <dt> paired with its <dd>, so a
   screen reader pairs them rather than reading twelve loose numbers.
   Numbers are right-aligned and tabular, so a total that changes does not
   shift the layout beside it.
   Discounts are red with an EXPLICIT minus — a red number without one reads
   as a surcharge. Never green: green is the purchase path, a saving is a
   reduction. */
function OrderSummary({
  rows = [],
  total,
  tax = "inkl. MwSt.",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    className: ["uw-sum", className].filter(Boolean).join(" ")
  }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.label + i
  }, /*#__PURE__*/React.createElement("dt", {
    className: r.discount ? "uw-sum__discount" : undefined
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    className: r.discount ? "uw-sum__discount" : undefined
  }, r.value))), total ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "uw-sum__rule"
  }), /*#__PURE__*/React.createElement("dt", {
    className: "uw-sum__total"
  }, "Gesamt"), /*#__PURE__*/React.createElement("dd", {
    className: "uw-sum__total",
    style: {
      fontSize: "var(--fs-h5)",
      fontWeight: "var(--fw-bold)"
    },
    "aria-live": "polite"
  }, total), tax ? /*#__PURE__*/React.createElement("p", {
    className: "uw-sum__tax"
  }, tax) : null) : null);
}
Object.assign(__ds_scope, { OrderSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderSummary.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductInfoTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 24 · Product attributes on a PDP. <th scope="row">, not two <td>s: the
   label is a header for its row, and that is what pairs it with its value
   for a screen reader — same reasoning as the order summary being a <dl>. */
function ProductInfoTable({
  rows = [],
  caption,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({
    className: ["uw-pit", className].filter(Boolean).join(" ")
  }, rest), caption ? /*#__PURE__*/React.createElement("caption", {
    className: "visually-hidden"
  }, caption) : null, /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.label
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, r.label), /*#__PURE__*/React.createElement("td", null, r.value)))));
}
Object.assign(__ds_scope, { ProductInfoTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductInfoTable.jsx", error: String((e && e.message) || e) }); }

// components/content/BlogCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 11 · Blog card. ONE link per card, on the title, stretched over the whole
   card. The image is not a link and there is no "Weiterlesen": a nine-card
   archive went from 27 links to 9, each named by its headline.
   The image is decorative — alt="" with explicit width and height. The
   headline beside it carries the meaning.
   Date is month and year. Day-level precision implies news, and nothing on
   this blog is news. Reading time is deliberately dropped.
   The category label is the first thing in the body. On the desktop card it
   is laid over the top-left corner of the picture; in the row (the compact
   variant, and every card on a phone) it sits above the title, because on a
   small picture it would cover most of it.
   The picture is 16:9 in every variant and at every width. */
function BlogCard({
  variant = "standard",
  title,
  href = "#",
  excerpt,
  image,
  category,
  date,
  dateTime,
  headingLevel = 3,
  className = "",
  ...rest
}) {
  const H = "h" + headingLevel;
  const cls = ["uw-post", variant !== "standard" && "uw-post--" + variant, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("article", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uw-post__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    width: "1600",
    height: "900",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "uw-post__body"
  }, category ? /*#__PURE__*/React.createElement("span", {
    className: "uw-post__badge"
  }, category) : null, /*#__PURE__*/React.createElement(H, {
    className: "uw-post__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, title)), excerpt ? /*#__PURE__*/React.createElement("p", {
    className: "uw-post__excerpt"
  }, excerpt) : null, date ? /*#__PURE__*/React.createElement("p", {
    className: "uw-post__meta"
  }, /*#__PURE__*/React.createElement("time", {
    dateTime: dateTime
  }, date)) : null));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 37 · Article row. The one way articles are teased outside the magazine:
   a heading, article cards three across, and one blue button to the
   magazine. It replaces the three formats the site used (a grid with wide
   pictures, a large picture with a list, a swipe row with grey cards).
   Nothing here swipes. Below `md` each card becomes a row, picture left and
   label and title right, so all articles are visible without a gesture and
   nothing is cut off. The cards are plain BlogCards; this component only
   places them. */
function ArticleRow({
  title,
  articles = [],
  moreLabel,
  moreHref,
  headingLevel = 2,
  className = "",
  ...rest
}) {
  const H = "h" + headingLevel;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ["uw-arow", className].filter(Boolean).join(" ")
  }, rest), title ? /*#__PURE__*/React.createElement(H, {
    className: "uw-arow__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "uw-arow__list"
  }, articles.map(a => /*#__PURE__*/React.createElement(__ds_scope.BlogCard, _extends({
    key: a.href || a.title,
    headingLevel: Math.min(headingLevel + 1, 6)
  }, a)))), moreLabel && moreHref ? /*#__PURE__*/React.createElement("p", {
    className: "uw-arow__more"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    href: moreHref
  }, moreLabel)) : null);
}
Object.assign(__ds_scope, { ArticleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleRow.jsx", error: String((e && e.message) || e) }); }

// components/content/IconList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 36 · Icon list. An informing block: a short heading and up to four facts,
   each with an icon on a pink disc. This is where pink appears as a mark:
   dark-pink icon on a light-pink disc (4.90:1), on a white or light-gray
   block, never on a pink one. The "why uWeed" band is its first use.
   The discs never go into the buying steps: the reassurance strip under the
   buy button is OrderInfoBar, with plain dark-blue icons.
   Four across from `lg`, two from `sm`, and below that a list with the disc
   on the left. */
function IconList({
  eyebrow,
  title,
  items = [],
  surface = "plain",
  headingLevel = 2,
  className = "",
  style,
  ...rest
}) {
  const H = "h" + headingLevel;
  const cls = ["uw-inform", surface === "tint" && "uw-inform--tint", "uw-icl", className].filter(Boolean).join(" ");
  const cols = Math.min(Math.max(items.length, 1), 4);
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls,
    style: {
      "--uw-icl-cols": cols,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "uw-inform__eyebrow"
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement(H, {
    className: "uw-inform__title"
  }, title) : null, /*#__PURE__*/React.createElement("ul", {
    className: "uw-icl__list"
  }, items.slice(0, 4).map(it => /*#__PURE__*/React.createElement("li", {
    className: "uw-icl__item",
    key: it.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "uw-inform__disc",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "uw-icl__label"
  }, it.label), it.text ? /*#__PURE__*/React.createElement("p", {
    className: "uw-icl__text"
  }, it.text) : null)))));
}
Object.assign(__ds_scope, { IconList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IconList.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsletterBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 35 · Newsletter block. An informing block: uWeed inviting, not selling.
   It is a light-gray block. Pink appears as a mark only: the disc with the
   envelope and the small label above the heading. Heading and text are dark
   blue and dark gray, and the button is the blue nav button: subscribing is
   not buying. The field is white because the block already carries the
   field's usual light-gray.
   Invitation left, action right; where the block is narrow they stack and
   the button takes the full width.
   The block never promises anything by default. Incentives, frequency and
   the double opt-in wording belong to the copy that is passed in. */
function NewsletterBlock({
  eyebrow = "Newsletter",
  title,
  text,
  icon = "mail",
  fieldLabel = "E-Mail-Adresse",
  placeholder = "name@beispiel.ch",
  buttonLabel = "Abonnieren",
  legal,
  status = "idle",
  message,
  onSubmit,
  headingLevel = 2,
  className = "",
  ...rest
}) {
  const H = "h" + headingLevel;
  const [email, setEmail] = React.useState("");
  const id = React.useId();
  const error = status === "error";
  const cls = ["uw-inform", "uw-inform--tint", "uw-news", error && "is-error", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uw-news__intro"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "uw-inform__disc",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })) : null, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "uw-inform__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    className: "uw-inform__title"
  }, title), text ? /*#__PURE__*/React.createElement("p", {
    className: "uw-inform__text"
  }, text) : null)), /*#__PURE__*/React.createElement("div", {
    className: "uw-news__action"
  }, status === "success" ? /*#__PURE__*/React.createElement("p", {
    className: "uw-news__done",
    role: "status"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, message)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "uw-news__form",
    noValidate: true,
    onSubmit: e => {
      e.preventDefault();
      onSubmit?.(email);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    autoComplete: "email",
    "aria-label": fieldLabel,
    "aria-describedby": error && message ? id : undefined,
    placeholder: placeholder,
    invalid: error,
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    type: "submit",
    loading: status === "sending"
  }, buttonLabel)), error && message ? /*#__PURE__*/React.createElement("p", {
    className: "uw-news__error",
    id: id,
    role: "alert"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, message)) : null, legal ? /*#__PURE__*/React.createElement("p", {
    className: "uw-news__legal"
  }, legal) : null)));
}
Object.assign(__ds_scope, { NewsletterBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsletterBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 25 · Card. The base that tiles and panels inherit — rarely placed on its
   own. Its value is that independently written surfaces land on the same
   border, radius and elevation instead of four near-misses.
   Only --link lifts: a card that moves but goes nowhere is a false
   affordance, and a lift without a shadow change reads as a glitch. */
function Card({
  variant = "default",
  as = "div",
  children,
  className = "",
  style,
  ...rest
}) {
  const Tag = as;
  const cls = ["uw-card", variant !== "default" && "uw-card--" + variant, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tabler Icons (tabler.io/icons), MIT licence. The licence text is in
   assets/Icons/README.md. 24×24 grid, 2px line, round ends and round joins:
   the same construction as the uWeed logo.
   Names are Tabler's own, so a further icon is added from the same family
   under its published name. A name ending in "-filled" is Tabler's solid
   version and is drawn as a fill, not a line.
   The same artwork is in the Icons asset group as SVG files. */
const PATHS = {
  "adjustments-horizontal": "<path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M4 6l8 0\"></path><path d=\"M16 6l4 0\"></path><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M4 12l2 0\"></path><path d=\"M10 12l10 0\"></path><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M4 18l11 0\"></path><path d=\"M19 18l1 0\"></path>",
  "alert-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 8v4\"></path><path d=\"M12 16h.01\"></path>",
  "alert-triangle": "<path d=\"M12 9v4\"></path><path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\"></path><path d=\"M12 16h.01\"></path>",
  "arrow-back-up": "<path d=\"M9 14l-4 -4l4 -4\"></path><path d=\"M5 10h11a4 4 0 1 1 0 8h-1\"></path>",
  "arrows-sort": "<path d=\"M3 9l4 -4l4 4m-4 -4v14\"></path><path d=\"M21 15l-4 4l-4 -4m4 4v-14\"></path>",
  "cannabis": "<path d=\"M7 20s0 -2 1 -3.5c-1.5 0 -2 -.5 -4 -1.5c0 0 1.839 -1.38 5 -1c-1.789 -.97 -3.279 -2.03 -5 -6c0 0 3.98 -.3 6.5 3.5c-2.284 -4.9 1.5 -9.5 1.5 -9.5c2.734 5.47 2.389 7.5 1.5 9.5c2.531 -3.77 6.5 -3.5 6.5 -3.5c-1.721 3.97 -3.211 5.03 -5 6c3.161 -.38 5 1 5 1c-2 1 -2.5 1.5 -4 1.5c1 1.5 1 3.5 1 3.5c-2 0 -4.438 -2.22 -5 -3c-.563 .78 -3 3 -5 3\"></path><path d=\"M12 22v-5\"></path>",
  "check": "<path d=\"M5 12l5 5l10 -10\"></path>",
  "chevron-down": "<path d=\"M6 9l6 6l6 -6\"></path>",
  "chevron-left": "<path d=\"M15 6l-6 6l6 6\"></path>",
  "chevron-right": "<path d=\"M9 6l6 6l-6 6\"></path>",
  "chevron-up": "<path d=\"M6 15l6 -6l6 6\"></path>",
  "circle-check": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"></path><path d=\"M9 12l2 2l4 -4\"></path>",
  "circle-x": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\"></path><path d=\"M10 10l4 4m0 -4l-4 4\"></path>",
  "clock": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 7v5l3 3\"></path>",
  "credit-card": "<path d=\"M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8\"></path><path d=\"M3 10l18 0\"></path><path d=\"M7 15l.01 0\"></path><path d=\"M11 15l2 0\"></path>",
  "external-link": "<path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\"></path><path d=\"M11 13l9 -9\"></path><path d=\"M15 4h5v5\"></path>",
  "filter": "<path d=\"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227\"></path>",
  "flask": "<path d=\"M9 3l6 0\"></path><path d=\"M10 9l4 0\"></path><path d=\"M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6\"></path>",
  "heart": "<path d=\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\"></path>",
  "heart-filled": "<path d=\"M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z\"></path>",
  "help-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 16v.01\"></path><path d=\"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483\"></path>",
  "info-circle": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M12 9h.01\"></path><path d=\"M11 12h1v4h1\"></path>",
  "leaf": "<path d=\"M5 21c.5 -4.5 2.5 -8 7 -10\"></path><path d=\"M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0\"></path>",
  "lock": "<path d=\"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6\"></path><path d=\"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\"></path><path d=\"M8 11v-4a4 4 0 1 1 8 0v4\"></path>",
  "mail": "<path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\"></path><path d=\"M3 7l9 6l9 -6\"></path>",
  "map-pin": "<path d=\"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\"></path><path d=\"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0\"></path>",
  "menu-2": "<path d=\"M4 6l16 0\"></path><path d=\"M4 12l16 0\"></path><path d=\"M4 18l16 0\"></path>",
  "minus": "<path d=\"M5 12l14 0\"></path>",
  "news": "<path d=\"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11\"></path><path d=\"M8 8l4 0\"></path><path d=\"M8 12l4 0\"></path><path d=\"M8 16l4 0\"></path>",
  "package": "<path d=\"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5\"></path><path d=\"M12 12l8 -4.5\"></path><path d=\"M12 12l0 9\"></path><path d=\"M12 12l-8 -4.5\"></path><path d=\"M16 5.25l-8 4.5\"></path>",
  "phone": "<path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\"></path>",
  "plus": "<path d=\"M12 5l0 14\"></path><path d=\"M5 12l14 0\"></path>",
  "rosette-discount": "<path d=\"M9 15l6 -6\"></path><path d=\"M9 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\"></path><path d=\"M14 14.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0\" fill=\"currentColor\"></path><path d=\"M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1\"></path>",
  "search": "<path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path><path d=\"M21 21l-6 -6\"></path>",
  "selector": "<path d=\"M8 9l4 -4l4 4\"></path><path d=\"M16 15l-4 4l-4 -4\"></path>",
  "shield-check": "<path d=\"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06\"></path><path d=\"M15 19l2 2l4 -4\"></path>",
  "shopping-bag": "<path d=\"M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304\"></path><path d=\"M9 11v-5a3 3 0 0 1 6 0v5\"></path>",
  "shopping-cart": "<path d=\"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M17 17h-11v-14h-2\"></path><path d=\"M6 5l14 1l-1 7h-13\"></path>",
  "star": "<path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245\"></path>",
  "star-filled": "<path d=\"M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z\"></path>",
  "tag": "<path d=\"M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path><path d=\"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3\"></path>",
  "trash": "<path d=\"M4 7l16 0\"></path><path d=\"M10 11l0 6\"></path><path d=\"M14 11l0 6\"></path><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\"></path><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\"></path>",
  "truck": "<path d=\"M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5\"></path>",
  "user": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\"></path><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>",
  "user-check": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\"></path><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\"></path><path d=\"M15 19l2 2l4 -4\"></path>",
  "world": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path><path d=\"M3.6 9h16.8\"></path><path d=\"M3.6 15h16.8\"></path><path d=\"M11.5 3a17 17 0 0 0 0 18\"></path><path d=\"M12.5 3a17 17 0 0 1 0 18\"></path>",
  "x": "<path d=\"M18 6l-12 12\"></path><path d=\"M6 6l12 12\"></path>",
  "zoom-in": "<path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\"></path><path d=\"M7 10l6 0\"></path><path d=\"M10 7l0 6\"></path><path d=\"M21 21l-6 -6\"></path>"
};
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  style,
  title,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  const filled = /-filled$/.test(name);
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : "none",
    stroke: filled ? "none" : color,
    strokeWidth: filled ? undefined : strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : undefined,
    "aria-label": title || undefined,
    "aria-hidden": title ? undefined : "true",
    focusable: "false",
    style: {
      flex: "0 0 auto",
      display: "block",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? "<title>" + title + "</title>" : "") + d
    }
  }, rest));
}
const ICON_NAMES = ["adjustments-horizontal", "alert-circle", "alert-triangle", "arrow-back-up", "arrows-sort", "cannabis", "check", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "circle-check", "circle-x", "clock", "credit-card", "external-link", "filter", "flask", "heart", "heart-filled", "help-circle", "info-circle", "leaf", "lock", "mail", "map-pin", "menu-2", "minus", "news", "package", "phone", "plus", "rosette-discount", "search", "selector", "shield-check", "shopping-bag", "shopping-cart", "star", "star-filled", "tag", "trash", "truck", "user", "user-check", "world", "x", "zoom-in"];
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/* Logo. The approved artwork from the brand's logo kit (August 2026), inlined
   so the logo needs no request and cannot be restyled from outside. The path
   data is copied from the kit's SVGs and must never be edited by hand.
   Colour is one of the eight approved colourways and nothing else — the
   kit forbids recolouring, so there is no free colour prop and the fill
   does not follow currentColor. The mark exists in six of the eight: asked
   for a dark-green or dark-pink mark, it renders dark-blue.
   Width never goes below the kit's minimum: 100px horizontal, 180px with
   tagline, 24px mark. The viewBox is the file's own canvas; the horizontal
   canvas already holds the clear space, so do not crop it. */
const LOGO_ART = {
  horizontal: { viewBox: "0 0 190 80", paths: ["M118.3,44.8c-1.9-6.4-8-11.1-15.1-10.9-8.2.2-14.8,6.9-14.9,15.1-.1,8.6,6.8,15.6,15.3,15.6s9.2-2.3,12-5.8c1.6-2.1.1-5.1-2.5-5.1s-1.9.5-2.5,1.2c-1.6,2.1-4.2,3.4-7,3.4s-6.3-1.9-7.8-4.6c-.4-.8-.7-1.6-.9-2.4h20.6c2,0,3.6-1.7,3.4-3.7,0-.9-.2-1.8-.5-2.6ZM95.8,44.8c1.5-2.7,4.5-4.6,7.8-4.6s6.3,1.9,7.8,4.6h-15.6ZM86.8,37v13.7c0,7.6-6.2,13.8-13.8,13.8h0c-4.3,0-8.1-1.9-10.6-5-2.5,3-6.3,5-10.6,5-7.6,0-13.8-6.2-13.8-13.8v-13.7c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2v13.7c0,4.2,3.5,7.6,7.7,7.4,4-.1,7.2-3.5,7.2-7.6v-13.5c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2v13.7c0,4.2,3.5,7.6,7.7,7.4,4-.1,7.2-3.5,7.2-7.6v-13.5c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2ZM149.9,44.8c-1.9-6.4-8-11.1-15.1-10.9-8.2.2-14.8,6.9-14.9,15.1-.1,8.6,6.8,15.6,15.3,15.6s9.2-2.3,12-5.8c1.6-2.1.1-5.1-2.5-5.1s-1.9.5-2.5,1.2c-1.6,2.1-4.2,3.4-7,3.4s-6.3-1.9-7.8-4.6c-.4-.8-.7-1.6-.9-2.4h20.6c2,0,3.6-1.7,3.4-3.7,0-.9-.2-1.8-.5-2.6ZM127.4,44.8c1.5-2.7,4.5-4.6,7.8-4.6s6.3,1.9,7.8,4.6h-15.6ZM7.7,40.5v-3.5c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2v3.5c0,1.8-1.4,3.2-3.2,3.2h0c-1.8,0-3.2-1.4-3.2-3.2ZM35.3,37v3.5c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2v-3.5c0-1.8,1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2ZM35.3,50.4v.3c0,7.6-6.2,13.8-13.8,13.8s-13.8-6.2-13.8-13.8v-.3c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2v.3c0,4.3,3.6,7.7,8,7.4,3.9-.3,6.9-3.7,6.9-7.6h0c0-1.9,1.4-3.3,3.2-3.3s3.2,1.4,3.2,3.2ZM179.1,15.5c-1.8,0-3.2,1.4-3.2,3.2v18.1c-2.5-1.8-5.6-2.9-9-2.9-8.5,0-15.3,6.9-15.3,15.3s6.9,15.3,15.3,15.3,15.3-6.9,15.3-15.3v-30.5c0-1.8-1.4-3.2-3.2-3.2ZM166.9,58.1c-5,0-9-4-9-9s4-9,9-9,9,4,9,9-4,9-9,9Z"] },
  tagline: { viewBox: "0 0 190 80", paths: ["M119,33c-2-6.6-8.2-11.4-15.5-11.2-8.4.2-15.2,7.1-15.3,15.5-.1,8.8,7,16,15.7,16s9.5-2.3,12.4-6c1.7-2.1.1-5.3-2.6-5.3s-1.9.5-2.6,1.3c-1.7,2.1-4.3,3.5-7.2,3.5s-6.5-1.9-8-4.7c-.4-.8-.8-1.6-1-2.5h21.1c2.1,0,3.7-1.8,3.5-3.8,0-.9-.2-1.8-.5-2.7ZM95.8,33c1.6-2.8,4.6-4.7,8-4.7s6.5,1.9,8,4.7h-16.1ZM86.5,25v14.1c0,7.8-6.3,14.2-14.2,14.2h0c-4.4,0-8.3-2-10.9-5.1-2.6,3.1-6.5,5.1-10.9,5.1-7.8,0-14.2-6.3-14.2-14.2v-14.1c0-1.8,1.5-3.3,3.3-3.3h0c1.8,0,3.3,1.5,3.3,3.3v14.1c0,4.3,3.6,7.8,7.9,7.6,4.2-.1,7.4-3.6,7.4-7.8v-13.9c0-1.8,1.5-3.3,3.3-3.3h0c1.8,0,3.3,1.5,3.3,3.3v14.1c0,4.3,3.6,7.8,7.9,7.6,4.2-.1,7.4-3.6,7.4-7.8v-13.9c0-1.8,1.5-3.3,3.3-3.3h0c1.8,0,3.3,1.5,3.3,3.3ZM151.5,33c-2-6.6-8.2-11.4-15.5-11.2-8.4.2-15.2,7.1-15.3,15.5-.1,8.8,7,16,15.7,16s9.5-2.3,12.4-6c1.7-2.1.1-5.3-2.6-5.3s-1.9.5-2.6,1.3c-1.7,2.1-4.3,3.5-7.2,3.5s-6.5-1.9-8-4.7c-.4-.8-.8-1.6-1-2.5h21.1c2.1,0,3.7-1.8,3.5-3.8,0-.9-.2-1.8-.5-2.7ZM128.3,33c1.6-2.8,4.6-4.7,8-4.7s6.5,1.9,8,4.7h-16.1ZM5.3,28.6v-3.6c0-1.8,1.5-3.3,3.3-3.3h0c1.8,0,3.3,1.5,3.3,3.3v3.6c0,1.8-1.5,3.3-3.3,3.3h0c-1.8,0-3.3-1.5-3.3-3.3ZM33.6,25v3.6c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3v-3.6c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3ZM33.6,38.8v.3c0,7.8-6.3,14.2-14.2,14.2s-14.2-6.3-14.2-14.2v-.3c0-1.8,1.5-3.3,3.3-3.3h0c1.8,0,3.3,1.5,3.3,3.3v.3c0,4.4,3.7,8,8.2,7.6,4-.3,7.1-3.8,7.1-7.8h0c0-1.9,1.5-3.4,3.3-3.4s3.3,1.5,3.3,3.3ZM181.4,2.9c-1.8,0-3.3,1.5-3.3,3.3v18.6c-2.6-1.9-5.8-3-9.2-3-8.7,0-15.8,7.1-15.8,15.8s7.1,15.8,15.8,15.8,15.8-7.1,15.8-15.8V6.2c0-1.8-1.5-3.3-3.3-3.3ZM169,46.7c-5.1,0-9.2-4.1-9.2-9.2s4.1-9.2,9.2-9.2,9.2,4.1,9.2,9.2-4.1,9.2-9.2,9.2Z", "M19.4,73.2v-11.7h3.5c1.4,0,2.5.2,3.4.7s1.6,1.2,2,2c.4.9.6,1.9.6,3.2s-.2,2.2-.6,3.1c-.4.9-1.1,1.5-2,2-.9.5-2,.7-3.4.7h-3.5ZM20.8,72h2c1.1,0,2-.2,2.7-.6.7-.4,1.2-.9,1.5-1.6s.4-1.5.4-2.5-.1-1.8-.4-2.5c-.3-.7-.8-1.2-1.5-1.6-.7-.4-1.6-.6-2.7-.6h-2v9.4Z", "M34.1,73.4c-.8,0-1.5-.2-2.1-.6-.6-.4-1.1-.9-1.4-1.6s-.5-1.4-.5-2.3.2-1.7.5-2.3.8-1.2,1.4-1.5c.6-.4,1.3-.6,2.1-.6s1.5.2,2.1.6c.6.4,1,.9,1.3,1.5.3.6.5,1.3.5,2v.4c0,.1,0,.3,0,.4h-6.9v-1.1h5.6c0-.8-.3-1.4-.8-1.8-.5-.4-1.1-.7-1.8-.7s-.9.1-1.3.3c-.4.2-.7.5-1,1-.2.4-.4.9-.4,1.6v.5c0,.7.1,1.3.4,1.7.3.5.6.8,1,1.1.4.2.8.4,1.3.4s1.1-.1,1.5-.4c.4-.3.7-.6.8-1.1h1.4c-.1.5-.4,1-.7,1.4-.3.4-.8.7-1.3.9-.5.2-1.1.4-1.7.4Z", "M39.5,73.2v-12.1h1.4v12.1h-1.4Z", "M43.7,62.9c-.3,0-.5,0-.7-.3-.2-.2-.3-.4-.3-.7s0-.5.3-.7c.2-.2.4-.3.7-.3s.5,0,.7.3.3.4.3.7,0,.5-.3.7-.4.3-.7.3ZM43,73.2v-8.5h1.4v8.5h-1.4Z", "M48.9,73.2l-3.2-8.5h1.5l2.6,7.1,2.6-7.1h1.4l-3.2,8.5h-1.6Z", "M58.2,73.4c-.8,0-1.5-.2-2.1-.6-.6-.4-1.1-.9-1.4-1.6s-.5-1.4-.5-2.3.2-1.7.5-2.3.8-1.2,1.4-1.5c.6-.4,1.3-.6,2.1-.6s1.5.2,2.1.6c.6.4,1,.9,1.3,1.5.3.6.5,1.3.5,2v.4c0,.1,0,.3,0,.4h-6.9v-1.1h5.6c0-.8-.3-1.4-.8-1.8-.5-.4-1.1-.7-1.8-.7s-.9.1-1.3.3c-.4.2-.7.5-1,1-.2.4-.4.9-.4,1.6v.5c0,.7.1,1.3.4,1.7.3.5.6.8,1,1.1.4.2.8.4,1.3.4s1.1-.1,1.5-.4c.4-.3.7-.6.8-1.1h1.4c-.1.5-.4,1-.7,1.4-.3.4-.8.7-1.3.9-.5.2-1.1.4-1.7.4Z", "M63.6,73.2v-8.5h1.3v1.6c.3-.4.5-.7.8-1,.3-.3.7-.5,1.1-.6s.9-.2,1.4-.2v1.5h-.5c-.4,0-.7,0-1,.1-.3,0-.6.2-.9.5-.3.2-.4.5-.6.9-.1.4-.2.8-.2,1.4v4.4h-1.4Z", "M70.2,62.9c-.3,0-.5,0-.7-.3-.2-.2-.3-.4-.3-.7s0-.5.3-.7c.2-.2.4-.3.7-.3s.5,0,.7.3.3.4.3.7,0,.5-.3.7-.4.3-.7.3ZM69.5,73.2v-8.5h1.4v8.5h-1.4Z", "M73,73.2v-8.5h1.3v1.5c.3-.5.7-.9,1.2-1.2s1.1-.4,1.7-.4,1.2.1,1.7.4c.5.3.9.7,1.1,1.2.3.5.4,1.2.4,2v5.1h-1.4v-4.9c0-.9-.2-1.5-.6-1.9-.4-.4-.9-.6-1.6-.6s-.9.1-1.3.3c-.4.2-.7.6-.9,1-.2.4-.3,1-.3,1.6v4.5h-1.4Z", "M85.5,77.1c-.8,0-1.4,0-2-.3s-1-.5-1.4-.9c-.3-.4-.5-.9-.5-1.5s0-.5.2-.8c.1-.3.3-.6.6-.9s.6-.5,1.1-.8l1,.6c-.6.2-1,.5-1.2.8s-.3.6-.3.9.1.7.3.9c.2.2.5.4.9.6.4.1.8.2,1.3.2s.9,0,1.2-.2.6-.3.8-.6c.2-.2.3-.5.3-.9s-.1-.7-.4-1c-.3-.3-.8-.4-1.7-.5-.7,0-1.2-.1-1.7-.2-.4,0-.8-.2-1.1-.3-.3-.1-.5-.2-.7-.4s-.4-.3-.5-.4v-.4l1.6-1.6,1.2.4-1.7,1.5.2-.6c.1,0,.2.2.4.3.1,0,.3.1.5.2.2,0,.5.1.8.2.3,0,.8,0,1.4.1.8,0,1.4.2,1.9.4.5.2.8.5,1,.9.2.4.3.8.3,1.3s-.1.9-.4,1.4c-.3.4-.7.8-1.2,1.1-.5.3-1.3.4-2.1.4ZM85.5,70.5c-.7,0-1.3-.1-1.8-.4-.5-.3-.9-.6-1.1-1.1-.3-.5-.4-1-.4-1.5s.1-1.1.4-1.5c.3-.4.6-.8,1.1-1.1.5-.3,1.1-.4,1.8-.4s1.3.1,1.8.4c.5.3.9.6,1.1,1.1.3.4.4.9.4,1.5s-.1,1.1-.4,1.5c-.3.5-.6.8-1.1,1.1-.5.3-1.1.4-1.8.4ZM85.5,69.4c.6,0,1.1-.2,1.4-.5s.5-.8.5-1.4-.2-1-.5-1.4-.8-.5-1.4-.5-1.1.2-1.4.5c-.4.3-.5.8-.5,1.4s.2,1.1.5,1.4c.4.3.8.5,1.4.5ZM86.9,65.9l-.4-1.2h3.5v1.1h-3Z", "M95.3,73.2v-11.7h1.4v11.7h-1.4ZM96.4,67.8v-1.2h6.7v1.2h-6.7ZM102.8,73.2v-11.7h1.4v11.7h-1.4Z", "M108.9,73.4c-.7,0-1.3-.1-1.7-.4-.5-.2-.8-.6-1-1-.2-.4-.3-.8-.3-1.3s.1-1.1.4-1.5c.3-.4.7-.7,1.3-.9.5-.2,1.2-.3,1.9-.3h2.2c0-.5,0-1-.2-1.3-.2-.4-.4-.6-.7-.8s-.7-.3-1.1-.3-1,.1-1.4.4c-.4.3-.6.7-.7,1.2h-1.4c0-.6.3-1.1.6-1.5.3-.4.8-.7,1.3-.9.5-.2,1.1-.3,1.6-.3s1.4.1,2,.4.9.7,1.2,1.2.4,1.1.4,1.8v5.2h-1.3v-1.5c-.2.2-.3.5-.5.7-.2.2-.4.4-.6.5-.2.2-.5.3-.8.4-.3,0-.6.1-1,.1ZM109.2,72.2c.4,0,.7,0,1.1-.2.3-.2.6-.4.8-.7s.4-.6.5-.9c.1-.3.2-.7.2-1.1h0s-2.1,0-2.1,0c-.5,0-1,0-1.3.2-.3.1-.6.3-.7.5-.1.2-.2.5-.2.8s0,.6.2.8c.1.2.3.4.6.5s.6.2,1,.2Z", "M114.9,76.9v-12.1h1.3v1.4c.3-.3.5-.5.8-.8.3-.2.6-.4,1-.6s.8-.2,1.4-.2c.8,0,1.5.2,2.1.6.6.4,1.1.9,1.4,1.6s.5,1.4.5,2.3-.2,1.6-.5,2.3-.8,1.2-1.4,1.6c-.6.4-1.3.6-2.1.6s-1.3-.1-1.8-.4c-.5-.3-.9-.7-1.2-1.2v5.1h-1.4ZM119.2,72.2c.5,0,1-.1,1.5-.4.4-.3.8-.6,1-1.1s.4-1,.4-1.7-.1-1.2-.4-1.7-.6-.9-1-1.1c-.4-.3-.9-.4-1.5-.4s-1.1.1-1.5.4c-.4.3-.8.6-1,1.1-.2.5-.4,1-.4,1.7s.1,1.2.4,1.7c.2.5.6.8,1,1.1.4.3.9.4,1.5.4Z", "M125,76.9v-12.1h1.3v1.4c.3-.3.5-.5.8-.8.3-.2.6-.4,1-.6s.8-.2,1.4-.2c.8,0,1.5.2,2.1.6.6.4,1.1.9,1.4,1.6s.5,1.4.5,2.3-.2,1.6-.5,2.3-.8,1.2-1.4,1.6c-.6.4-1.3.6-2.1.6s-1.3-.1-1.8-.4c-.5-.3-.9-.7-1.2-1.2v5.1h-1.4ZM129.3,72.2c.5,0,1-.1,1.5-.4.4-.3.8-.6,1-1.1s.4-1,.4-1.7-.1-1.2-.4-1.7-.6-.9-1-1.1c-.4-.3-.9-.4-1.5-.4s-1.1.1-1.5.4c-.4.3-.8.6-1,1.1-.2.5-.4,1-.4,1.7s.1,1.2.4,1.7c.2.5.6.8,1,1.1.4.3.9.4,1.5.4Z", "M135.9,62.9c-.3,0-.5,0-.7-.3s-.3-.4-.3-.7,0-.5.3-.7.4-.3.7-.3.5,0,.7.3c.2.2.3.4.3.7s0,.5-.3.7c-.2.2-.4.3-.7.3ZM135.2,73.2v-8.5h1.4v8.5h-1.4Z", "M138.7,73.2v-8.5h1.3v1.5c.3-.5.7-.9,1.2-1.2s1.1-.4,1.7-.4,1.2.1,1.7.4c.5.3.9.7,1.1,1.2.3.5.4,1.2.4,2v5.1h-1.4v-4.9c0-.9-.2-1.5-.6-1.9-.4-.4-.9-.6-1.6-.6s-.9.1-1.3.3c-.4.2-.7.6-.9,1-.2.4-.3,1-.3,1.6v4.5h-1.4Z", "M151.6,73.4c-.8,0-1.5-.2-2.1-.6-.6-.4-1.1-.9-1.4-1.6s-.5-1.4-.5-2.3.2-1.7.5-2.3.8-1.2,1.4-1.5c.6-.4,1.3-.6,2.1-.6s1.5.2,2.1.6,1,.9,1.3,1.5c.3.6.5,1.3.5,2v.4c0,.1,0,.3,0,.4h-6.9v-1.1h5.6c0-.8-.3-1.4-.8-1.8-.5-.4-1.1-.7-1.8-.7s-.9.1-1.3.3c-.4.2-.7.5-1,1-.2.4-.4.9-.4,1.6v.5c0,.7.1,1.3.4,1.7.3.5.6.8,1,1.1.4.2.8.4,1.3.4s1.1-.1,1.5-.4c.4-.3.7-.6.8-1.1h1.4c-.1.5-.4,1-.7,1.4-.3.4-.8.7-1.3.9-.5.2-1.1.4-1.7.4Z", "M160.2,73.4c-.7,0-1.3-.1-1.8-.4-.5-.2-.9-.6-1.3-1-.3-.4-.5-.9-.6-1.5h1.4c0,.3.2.6.4.8.2.2.4.4.7.6s.7.2,1.1.2.7,0,1-.2c.3-.1.5-.3.6-.5.1-.2.2-.4.2-.7,0-.3,0-.6-.2-.8-.2-.2-.4-.3-.7-.4-.3-.1-.7-.2-1.1-.3-.4,0-.7-.2-1.1-.3-.4-.1-.7-.3-1-.4-.3-.2-.5-.4-.7-.7-.2-.3-.2-.6-.2-1s.1-.9.4-1.3c.3-.4.6-.7,1.1-.9.5-.2,1-.3,1.6-.3.9,0,1.6.2,2.2.7.6.4.9,1.1,1,1.9h-1.4c0-.4-.2-.8-.5-1-.3-.2-.7-.4-1.3-.4s-.9.1-1.2.3c-.3.2-.4.5-.4.8s0,.4.2.6.4.3.7.4.7.2,1.1.3c.6.1,1.1.2,1.5.4.5.2.8.4,1.1.7.3.3.4.8.4,1.4s-.1,1-.4,1.4c-.3.4-.6.7-1.1.9-.5.2-1,.3-1.7.3Z", "M168.2,73.4c-.7,0-1.3-.1-1.8-.4-.5-.2-.9-.6-1.3-1-.3-.4-.5-.9-.6-1.5h1.4c0,.3.2.6.4.8.2.2.4.4.7.6s.7.2,1.1.2.7,0,1-.2c.3-.1.5-.3.6-.5.1-.2.2-.4.2-.7,0-.3,0-.6-.2-.8-.2-.2-.4-.3-.7-.4-.3-.1-.7-.2-1.1-.3-.4,0-.7-.2-1.1-.3-.4-.1-.7-.3-1-.4-.3-.2-.5-.4-.7-.7-.2-.3-.2-.6-.2-1s.1-.9.4-1.3c.3-.4.6-.7,1.1-.9.5-.2,1-.3,1.6-.3.9,0,1.6.2,2.2.7.6.4.9,1.1,1,1.9h-1.4c0-.4-.2-.8-.5-1-.3-.2-.7-.4-1.3-.4s-.9.1-1.2.3c-.3.2-.4.5-.4.8s0,.4.2.6.4.3.7.4.7.2,1.1.3c.6.1,1.1.2,1.5.4.5.2.8.4,1.1.7.3.3.4.8.4,1.4s-.1,1-.4,1.4c-.3.4-.6.7-1.1.9-.5.2-1,.3-1.7.3Z"] },
  mark: { viewBox: "0 28 43 43", paths: ["M7.7,40.5v-3.5c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2v3.5c0,1.8-1.4,3.2-3.2,3.2h0c-1.8,0-3.2-1.4-3.2-3.2ZM35.3,37v3.5c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2v-3.5c0-1.8,1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2ZM35.3,50.4v.3c0,7.6-6.2,13.8-13.8,13.8s-13.8-6.2-13.8-13.8v-.3c0-1.8,1.4-3.2,3.2-3.2h0c1.8,0,3.2,1.4,3.2,3.2v.3c0,4.3,3.6,7.7,8,7.4,3.9-.3,6.9-3.7,6.9-7.6h0c0-1.9,1.4-3.3,3.2-3.3s3.2,1.4,3.2,3.2Z"] }
};
const LOGO_COLORS = ["dark-blue", "white", "dark-green", "dark-pink", "light-blue", "light-green", "light-pink", "black"];
const LOGO_MARK_COLORS = ["dark-blue", "white", "light-blue", "light-green", "light-pink", "black"];
const LOGO_MIN_WIDTH = { horizontal: 100, tagline: 180, mark: 24 };
const LOGO_DEFAULT_WIDTH = { horizontal: 120, tagline: 190, mark: 32 };
function Logo({
  variant = "horizontal",
  color = "dark-blue",
  width,
  label = "uWeed",
  decorative = false,
  className = ""
}) {
  const kind = LOGO_ART[variant] ? variant : "horizontal";
  const allowed = kind === "mark" ? LOGO_MARK_COLORS : LOGO_COLORS;
  const fill = allowed.indexOf(color) === -1 ? "dark-blue" : color;
  const art = LOGO_ART[kind];
  const box = art.viewBox.split(" ").map(Number);
  const w = Math.max(LOGO_MIN_WIDTH[kind], Number(width) || LOGO_DEFAULT_WIDTH[kind]);
  const h = Math.round(w * box[3] / box[2] * 100) / 100;
  const a11y = decorative ? { "aria-hidden": "true" } : { role: "img", "aria-label": label };
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    className: ("uw-logo uw-logo--" + kind + " " + className).trim(),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: art.viewBox,
    width: w,
    height: h,
    focusable: "false",
    style: {
      fill: "var(--" + fill + ")"
    }
  }, a11y), art.paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/commerce/OrderInfoBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 14 · Order info bar. The four reassurance items below add-to-cart.
   The supporting line is where a tooltip would be tempting — it is essential
   reassurance, so it stays visible.
   Icons come from the Icon component at 24px. Never emoji. */
const DEFAULTS = [{
  icon: "truck",
  label: "Gratis Versand",
  sub: "Ab 50 CHF innerhalb der Schweiz"
}, {
  icon: "arrow-back-up",
  label: "14 Tage Rückgabe",
  sub: "Ungeöffnete Artikel"
}, {
  icon: "credit-card",
  label: "Sicher bezahlen",
  sub: "TWINT, Karte, Rechnung"
}, {
  icon: "flask",
  label: "Laborgeprüft",
  sub: "Jede Charge, Schweizer Labor"
}];
function OrderInfoBar({
  items = DEFAULTS,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: ["uw-oib", className].filter(Boolean).join(" ")
  }, rest), items.slice(0, 4).map(it => /*#__PURE__*/React.createElement("li", {
    className: "uw-oib__item",
    key: it.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "uw-oib__ic",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", {
    className: "uw-oib__label"
  }, it.label), /*#__PURE__*/React.createElement("p", {
    className: "uw-oib__sub"
  }, it.sub)))));
}
Object.assign(__ds_scope, { OrderInfoBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderInfoBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 5 · Badge and tag. Small labels that classify, count or flag.
   Non-interactive unless removable. Category (pink) says "this is a kind of
   thing"; attribute (grey) says "this is a fact about the thing". */
function Badge({
  variant = "attribute",
  onRemove,
  removeLabel = "Entfernen",
  children,
  className = "",
  ...rest
}) {
  const cls = ["uw-badge", "uw-badge--" + variant, onRemove && "uw-badge--removable", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-badge__remove",
    "aria-label": removeLabel,
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PdpGallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 33 · PDP gallery. The WHOLE image is the control — a <button> wrapping the
   <img>, cursor:zoom-in, opening the lightbox on click or tap. One target the
   size of the image rather than a 40px button, and one behaviour instead of
   two. The zoom glyph stays as a hint with pointer-events:none; without it
   nothing signals the image is interactive.
   The hover lens is removed: two zoom behaviours on one image, one of which
   has no touch equivalent, means most visitors never learn it exists.
   Full-resolution images load ON OPEN, never on page load. */
function PdpGallery({
  images = [],
  tags = [],
  saved = false,
  onToggleSave,
  onZoom,
  className = "",
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const main = images[i] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-gal", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-gal__main",
    "aria-label": "Bild vergr\xF6ssern",
    onClick: onZoom
  }, /*#__PURE__*/React.createElement("img", {
    src: main.src,
    alt: "",
    width: "600",
    height: "600"
  }), /*#__PURE__*/React.createElement("span", {
    className: "uw-gal__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t.label,
    variant: t.variant
  }, t.label))), /*#__PURE__*/React.createElement("span", {
    className: "uw-gal__hint",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "zoom-in",
    size: 24
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-gal__fav",
    "aria-pressed": saved ? "true" : "false",
    "aria-label": saved ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen",
    onClick: onToggleSave
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 24
  })), /*#__PURE__*/React.createElement("ul", {
    className: "uw-gal__strip",
    "aria-label": "Produktbilder"
  }, images.map((img, idx) => /*#__PURE__*/React.createElement("li", {
    key: img.src || idx,
    style: {
      display: "contents"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-gal__t",
    "aria-current": idx === i ? "true" : undefined,
    "aria-label": "Bild " + (idx + 1) + " von " + images.length,
    onClick: () => setI(idx)
  }, /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: "",
    width: "76",
    height: "76",
    loading: "lazy"
  }))))));
}
Object.assign(__ds_scope, { PdpGallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PdpGallery.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/* 1 · Button. The rule is purpose, not prominence: colour tells the user
   what kind of thing will happen. Green never navigates; blue never buys.
   One height (44px) — the product tile's CTA included. Width grows from a
   160px floor — never fixed, never sized to the English string.
   `unavailable` is a variant, not a state: it is rendered with disabled AND
   aria-disabled (tabIndex -1 on an anchor), and it is never the same thing
   as `disabled`. Ruling: it gets neither a tooltip nor an explanation line —
   the label is the statement. */
function Button({
  variant = "buy",
  as,
  href,
  icon,
  iconOnly = false,
  block = false,
  loading = false,
  disabled = false,
  children,
  className = "",
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const cls = ["uw-btn", "uw-btn--" + variant, iconOnly && "uw-btn--icon", block && "uw-btn--block", loading && "is-loading", className].filter(Boolean).join(" ");
  const unavailable = variant === "unavailable";
  const props = {
    className: cls,
    ...rest
  };
  if (Tag === "button") {
    props.type = rest.type || "button";
    props.disabled = disabled || unavailable || undefined;
  } else {
    props.href = href;
    if (disabled) props["aria-disabled"] = "true";
  }
  if (unavailable) {
    props["aria-disabled"] = "true";
    if (Tag !== "button") props.tabIndex = -1;
  }
  if (loading) props["aria-busy"] = "true";
  return /*#__PURE__*/React.createElement(Tag, props, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }) : null, iconOnly ? null : children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 6 · Link. Three variants, sorted by whether the linkness has to announce
   itself — not by where the link sits. `inline` is underlined at rest
   because colour alone is ~2.5:1 against body copy. */
function Link({
  variant = "inline",
  href,
  current = false,
  children,
  className = "",
  ...rest
}) {
  const cls = ["uw-link", variant !== "inline" && "uw-link--" + variant, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    "aria-current": current ? "page" : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/core/Price.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 18 · Price. All prices are --dark-blue except when reduced. A price is not
   an action — nothing happens when you look at it — so it is never green.
   The base class carries colour and tabular numerals; roles set size and
   weight only, so neither invariant can be forgotten by a fifth role.
   The "from" prefix is a FORMAT STRING with a placeholder, never a
   concatenation — DE and FR both prefix today; a later language may not. */
const FROM_FORMATS = {
  de: "ab {x}",
  fr: "dès {x}",
  en: "from {x}"
};

/* Accepts "{x}" (canonical) or "%s" as the placeholder. */
function formatFrom(template, value) {
  const t = template || "{x}";
  const ph = t.includes("{x}") ? "{x}" : "%s";
  const i = t.indexOf(ph);
  if (i < 0) return [t, value, ""];
  return [t.slice(0, i), value, t.slice(i + ph.length)];
}
function Price({
  role = "tile",
  value,
  was,
  unit,
  sale = false,
  from = false,
  fromTemplate = FROM_FORMATS.de,
  as = "p",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["uw-price", "uw-price--" + role, sale && "is-sale", className].filter(Boolean).join(" ");
  const wrap = v => {
    if (!from) return v;
    const [pre, val, post] = formatFrom(fromTemplate, v);
    return /*#__PURE__*/React.createElement(React.Fragment, null, pre ? /*#__PURE__*/React.createElement("span", {
      className: "uw-price__from"
    }, pre) : null, val, post ? /*#__PURE__*/React.createElement("span", {
      className: "uw-price__from"
    }, post) : null);
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), wrap(value ?? children), was ? /*#__PURE__*/React.createElement("s", {
    className: "uw-price__was"
  }, was) : null, unit ? /*#__PURE__*/React.createElement("span", {
    className: "uw-price__unit"
  }, wrap(unit)) : null);
}
Object.assign(__ds_scope, { FROM_FORMATS, formatFrom, Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Product tile — signed off. Built on Card --link. ONE link per tile, the
   whole card navigates, the accessible name is the product name; the focus
   ring is drawn on the card boundary, not on the stretched anchor.
   One component at two breakpoints: below md it becomes a horizontal row.
   Exactly two things change between them — the chip drops THC, the review
   count drops its noun. Content order, states, badge priority, tokens and
   DOM order are identical.
   All four states are driven by product data; none is a template variant.
   Sold out: the unavailable label IS the statement — no tooltip, no
   explanation line (ruling amended). */

const STRINGS = {
  de: {
    add: "In den Warenkorb",
    chooseSize: "Grösse wählen",
    chooseSizeA11y: "Grösse wählen und in den Warenkorb",
    soldOut: "Ausverkauft",
    from: __ds_scope.FROM_FORMATS.de,
    reviews: "(%d Bewertungen)",
    reviewsCompact: "(%d)",
    badgeNew: "Neu",
    badgeBestseller: "Bestseller"
  },
  fr: {
    add: "Ajouter au panier",
    chooseSize: "Choisir la taille",
    chooseSizeA11y: "Choisir la taille et ajouter au panier",
    soldOut: "Épuisé",
    from: __ds_scope.FROM_FORMATS.fr,
    reviews: "(%d avis)",
    reviewsCompact: "(%d)",
    badgeNew: "Nouveau",
    badgeBestseller: "Bestseller"
  },
  en: {
    add: "Add to cart",
    chooseSize: "Choose size",
    chooseSizeA11y: "Choose size and add to cart",
    soldOut: "Sold out",
    from: __ds_scope.FROM_FORMATS.en,
    reviews: "(%d reviews)",
    reviewsCompact: "(%d)",
    badgeNew: "New",
    badgeBestseller: "Bestseller"
  }
};
const PRODUCT_TILE_STRINGS = STRINGS;
const BADGE_PRIORITY = ["sale", "bestseller", "new"];
function Star({
  size
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star-filled",
    size: size,
    className: "uw-tile__star"
  });
}
function ProductTile({
  href = "#",
  image,
  brand,
  name,
  size,
  sizes = false,
  cbd,
  thc,
  rating,
  reviewCount,
  price,
  was,
  unitPrice,
  soldOut = false,
  sale = false,
  bestseller = false,
  isNew = false,
  lang = "de",
  layout,
  saleLabel,
  onAdd,
  onChooseSize,
  onNavigate,
  className = "",
  ...rest
}) {
  const t = STRINGS[lang] || STRINGS.de;
  const flags = soldOut ? [] : BADGE_PRIORITY.filter(k => k === "sale" ? sale : k === "bestseller" ? bestseller : isNew);
  const badgeFor = k => k === "sale" ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: "sale",
    variant: "sale"
  }, saleLabel || "−15%") : k === "bestseller" ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: "best",
    variant: "bestseller"
  }, t.badgeBestseller) : /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: "new",
    variant: "new"
  }, t.badgeNew);
  const [fromPre, sizeVal, fromPost] = __ds_scope.formatFrom(t.from, size);
  const sizeText = sizes ? /*#__PURE__*/React.createElement(React.Fragment, null, fromPre, sizeVal, fromPost) : size;
  const reviews = tpl => tpl.replace("%d", String(reviewCount));
  const unitText = compact => {
    const [pre, v, post] = sizes ? __ds_scope.formatFrom(t.from, unitPrice) : ["", unitPrice, ""];
    return /*#__PURE__*/React.createElement(React.Fragment, null, "(", pre, v, post, ")");
  };
  const cta = soldOut ? "unavailable" : sizes ? "apply" : "buy";
  const ctaLabel = soldOut ? t.soldOut : sizes ? t.chooseSize : t.add;
  const ctaA11y = soldOut ? t.soldOut : sizes ? t.chooseSizeA11y : t.add;
  const ctaProps = {
    "aria-haspopup": sizes && !soldOut ? "dialog" : undefined,
    onClick: soldOut ? undefined : e => {
      e.preventDefault();
      (sizes ? onChooseSize : onAdd)?.();
    }
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    as: "article",
    variant: "link",
    className: ["uw-tile", layout === "compact" && "uw-tile--compact", soldOut && "is-oos", className].filter(Boolean).join(" "),
    "data-layout": layout
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    width: "344",
    height: "330",
    loading: "lazy"
  }), flags.length ? /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__badges"
  }, flags.map(badgeFor)) : null, /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__chips uw-tile__chips--media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "attribute"
  }, "CBD ", cbd))), /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uw-tile__brand"
  }, brand), /*#__PURE__*/React.createElement("h3", {
    className: "uw-tile__name"
  }, /*#__PURE__*/React.createElement("a", {
    className: "uw-tile__link",
    href: href,
    onClick: onNavigate
  }, name, " \u2014 ", sizeText)), /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__chips uw-tile__chips--body"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "attribute"
  }, "CBD ", cbd, " \xB7 THC ", thc)), rating != null ? /*#__PURE__*/React.createElement("p", {
    className: "uw-tile__rating"
  }, /*#__PURE__*/React.createElement(Star, {
    size: 14
  }), /*#__PURE__*/React.createElement("strong", null, rating), /*#__PURE__*/React.createElement("span", {
    className: "uw-tile__count uw-tile__count--full"
  }, reviews(t.reviews)), /*#__PURE__*/React.createElement("span", {
    className: "uw-tile__count uw-tile__count--compact"
  }, reviews(t.reviewsCompact))) : null, /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__price-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__price-stack"
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    role: "tile",
    value: price,
    was: was,
    sale: sale && !soldOut,
    from: sizes,
    fromTemplate: t.from,
    style: {
      whiteSpace: "nowrap"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "uw-tile__unit"
  }, unitText())), /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__cta uw-tile__cta--icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: cta,
    iconOnly: true,
    icon: soldOut ? "x" : "shopping-cart",
    "aria-label": ctaA11y,
    title: soldOut ? ctaA11y : undefined
  }, ctaProps)))), /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__cta uw-tile__cta--full"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: cta,
    block: true
  }, ctaProps), ctaLabel))))), soldOut ? /*#__PURE__*/React.createElement("div", {
    className: "uw-tile__film",
    "aria-hidden": "true"
  }) : null);
}
Object.assign(__ds_scope, { PRODUCT_TILE_STRINGS, ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 9 · Accordion. <details>/<summary> — no JavaScript, and it brings four
   things with it: aria-expanded announced by the browser, the panel correctly
   exposed and hidden, find-in-page reaching closed panels and opening them,
   and working before JS loads.
   The heading goes INSIDE the summary. <h3><summary> is invalid: the browser
   cannot find a summary as the first child of <details>, generates its own
   marker, and the intended trigger becomes panel content. */
function Accordion({
  variant = "flush",
  children,
  className = "",
  ...rest
}) {
  const cls = ["uw-acc", variant === "boxed" && "uw-acc--boxed", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
function AccordionItem({
  heading,
  headingLevel = 3,
  open = false,
  children,
  className = "",
  ...rest
}) {
  const H = headingLevel === 0 ? "span" : "h" + headingLevel;
  return /*#__PURE__*/React.createElement("details", _extends({
    className: ["uw-acc__item", className].filter(Boolean).join(" "),
    open: open
  }, rest), /*#__PURE__*/React.createElement("summary", {
    className: "uw-acc__trigger"
  }, /*#__PURE__*/React.createElement(H, {
    className: "uw-acc__heading"
  }, heading)), /*#__PURE__*/React.createElement("div", {
    className: "uw-acc__panel"
  }, children));
}
Object.assign(__ds_scope, { Accordion, AccordionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 23 · Footer. Four link columns, then a bottom row with copyright and the
   currency and language switchers.
   Below --bs-breakpoint-lg the columns become the accordion INSIDE
   .on-dark — not a separate footer accordion, which is what exists today.
   The switchers use aria-pressed, not aria-current: they change a setting
   rather than marking a location. */
function Footer({
  columns = [],
  copyright = "© 2026 uWeed",
  switches = [],
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ["uw-footer", "on-dark", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uw-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-footer__cols"
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.heading
  }, /*#__PURE__*/React.createElement("h2", {
    className: "uw-footer__h"
  }, c.heading), /*#__PURE__*/React.createElement("ul", {
    className: "uw-footer__list"
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "uw-footer__acc"
  }, /*#__PURE__*/React.createElement(__ds_scope.Accordion, null, columns.map(c => /*#__PURE__*/React.createElement(__ds_scope.AccordionItem, {
    key: c.heading,
    heading: c.heading,
    headingLevel: 0
  }, /*#__PURE__*/React.createElement("ul", {
    className: "uw-footer__list"
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label)))))))), /*#__PURE__*/React.createElement("div", {
    className: "uw-footer__bottom"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uw-footer__copy"
  }, copyright), /*#__PURE__*/React.createElement("div", {
    className: "uw-footer__switches"
  }, switches.map(s => /*#__PURE__*/React.createElement("div", {
    className: "uw-sw",
    key: s.label,
    role: "group",
    "aria-label": s.label
  }, s.options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    type: "button",
    "aria-pressed": o === s.value
  }, o))))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Footer.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/ContentTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 22 · Content tabs. PDP desktop tabs — vertical rail, panel to the right.
   Below --bs-breakpoint-lg it becomes the accordion, which is a separate
   component and not a responsive variant: arrow keys move between tabs and
   Tab moves into the panel, and the accordion has neither model.
   Active is --dark-blue: switching a panel does not advance a purchase.
   The marker is a rounded 3px bar spanning only the active label, on a track
   of the same shape in --line. */
function ContentTabs({
  tabs = [],
  defaultIndex = 0,
  className = "",
  ...rest
}) {
  const [i, setI] = React.useState(defaultIndex);
  const refs = React.useRef([]);
  const onKeyDown = e => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowDown" ? 1 : -1) + tabs.length) % tabs.length;
    setI(next);
    refs.current[next]?.focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-tabs", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uw-tabs__rail",
    role: "tablist",
    "aria-orientation": "vertical",
    onKeyDown: onKeyDown
  }, tabs.map((t, idx) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    ref: el => refs.current[idx] = el,
    className: "uw-tabs__t",
    role: "tab",
    type: "button",
    "aria-selected": idx === i,
    tabIndex: idx === i ? 0 : -1,
    onClick: () => setI(idx)
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "uw-tabs__p",
    role: "tabpanel"
  }, tabs[i]?.content));
}
Object.assign(__ds_scope, { ContentTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/ContentTabs.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FilterPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 10 · Filter and sort pill. Filters and sort are BLUE: a filter changes
   which products are listed, which is the same job as the tab nav and not a
   purchase. The live green fill spends the buy signal on a view control, and
   on a category page sits directly above a grid of green add-to-cart buttons.
   Rest is white — grey means unavailable.
   Category Filters Final: the applied count sits IN the label — "Brand (2)"
   — not in a separate badge. One pill per facet, always visible; there is
   no "Show filters" toggle. The sort control is NOT a pill (see SortButton). */
function FilterPill({
  count,
  open = false,
  active = false,
  disabled = false,
  icon = "chevron-down",
  children,
  className = "",
  ...rest
}) {
  const cls = ["uw-fp", active && "is-active", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-expanded": open ? "true" : "false",
    disabled: disabled
  }, rest), children, count != null ? " (" + count + ")" : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null);
}
Object.assign(__ds_scope, { FilterPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FilterPill.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Popover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 10 · Dropdown. One surface, three behaviours — menu (navigates, plain
   links, no role="menu"), panel (changes the view, disclosure keyboard), and
   listbox (picks a value, full combobox). Forcing one pattern onto all three
   would break at least two.
   Width 260–360px: one product-grid column at every desktop container, so it
   reads as aligned to the grid without being coupled to it. */
function Popover({
  behaviour = "menu",
  label,
  children,
  className = "",
  style,
  ...rest
}) {
  const role = behaviour === "listbox" ? "listbox" : behaviour === "menu" ? "none" : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-pop", className].filter(Boolean).join(" "),
    role: role,
    "aria-label": label,
    style: style
  }, rest), children);
}
function PopoverItem({
  as,
  href,
  selected,
  current = false,
  active = false,
  meta,
  sub,
  thumb,
  children,
  className = "",
  ...rest
}) {
  const Tag = as || (href ? "a" : "div");
  const cls = ["uw-pop__item", active && "is-active", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    role: selected != null ? "option" : undefined,
    "aria-selected": selected != null ? String(selected) : undefined,
    "aria-current": current ? "page" : undefined
  }, rest), thumb ? /*#__PURE__*/React.createElement("img", {
    className: "uw-pop__thumb",
    src: thumb,
    alt: "",
    width: "36",
    height: "36"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, children, sub ? /*#__PURE__*/React.createElement("span", {
    className: "uw-pop__sub"
  }, sub) : null), meta != null ? /*#__PURE__*/React.createElement("span", {
    className: "uw-pop__meta"
  }, meta) : null);
}
function PopoverGroup({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uw-pop__group"
  }, children);
}
function PopoverSeparator() {
  return /*#__PURE__*/React.createElement("div", {
    className: "uw-pop__sep"
  });
}
function PopoverFooter({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "uw-pop__foot"
  }, children);
}
Object.assign(__ds_scope, { Popover, PopoverItem, PopoverGroup, PopoverSeparator, PopoverFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Popover.jsx", error: String((e && e.message) || e) }); }

// components/chrome/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 34 · Search bar. Header search and its suggestion panel.
   The panel uses the dropdown surface and its rules: hover is the only
   fill, matched terms are dark-blue at bold weight in otherwise dark-gray
   rows. Panel close is deliberately INSTANT — an exit animation on something
   you dismissed makes the interface feel slower than it is.
   Input is 16px so iOS does not zoom; enterkeyhint="search". */
function SearchBar({
  placeholder = "Suchen nach Produkten, Marken, Kategorien",
  value,
  onChange,
  onClear,
  groups = [],
  seeAll,
  open = false,
  label = "Website durchsuchen",
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState("");
  const q = value ?? internal;
  const set = v => {
    if (value == null) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-search", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "uw-search__ic",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    className: "uw-search__field",
    type: "search",
    role: "combobox",
    "aria-expanded": open ? "true" : "false",
    "aria-label": label,
    enterKeyHint: "search",
    placeholder: placeholder,
    value: q,
    onChange: e => set(e.target.value)
  }), q ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-search__x",
    "aria-label": "Suche leeren",
    onClick: () => {
      set("");
      onClear?.();
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null, open && groups.length ? /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    behaviour: "listbox",
    label: "Suchvorschl\xE4ge",
    className: "uw-search__panel"
  }, groups.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.label
  }, /*#__PURE__*/React.createElement(__ds_scope.PopoverGroup, null, g.label), g.items.map(it => /*#__PURE__*/React.createElement(__ds_scope.PopoverItem, {
    key: it.label,
    thumb: it.thumb,
    sub: it.sub,
    meta: it.meta,
    href: it.href
  }, it.label)))), seeAll ? /*#__PURE__*/React.createElement(__ds_scope.PopoverItem, {
    href: seeAll.href
  }, seeAll.label) : null) : null);
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/SortButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sort control (Category Filters Final). Not a pill and not a select: a
   <button> styled as the action link — --medium-blue 14px/500, arrows-sort
   16px before the label, underline on hover, 44px hit height. It opens a
   Popover listbox aligned right. Sorting is a view change, so it is blue. */
function SortButton({
  label = "Sortieren",
  value,
  open = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ["uw-sort", className].filter(Boolean).join(" "),
    "aria-haspopup": "listbox",
    "aria-expanded": open ? "true" : "false"
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrows-sort",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, children ?? label + ": " + value));
}
Object.assign(__ds_scope, { SortButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/SortButton.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 12 · Tooltip. The trigger is a real <button>, and that is what makes mouse,
   keyboard AND touch all work — a <span> is not focusable, so keyboard and
   touch have nothing to act on. Shown on :focus rather than :focus-visible,
   deliberately: focus-visible does not fire on tap.
   The bubble is dark-blue because a tooltip is a SURFACE. Colour families
   mean things; containers do not. */
let uid = 0;
function Tooltip({
  text,
  label = "Mehr Informationen",
  placement = "top",
  glyph = "i",
  children,
  className = "",
  ...rest
}) {
  const id = React.useMemo(() => "uw-tip-" + ++uid, []);
  const mod = {
    start: "uw-tip--start",
    end: "uw-tip--end",
    bottom: "uw-tip--below"
  }[placement];
  React.useEffect(() => {
    const onKey = e => {
      if (e.key !== "Escape") return;
      const el = document.activeElement;
      if (el && el.classList.contains("uw-tip__trigger")) el.blur();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["uw-tip", mod, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("button", {
    className: "uw-tip__trigger" + (children ? " uw-tip__trigger--text" : ""),
    type: "button",
    "aria-describedby": id
  }, children || glyph, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, label)), /*#__PURE__*/React.createElement("span", {
    className: "uw-tip__bubble",
    role: "tooltip",
    id: id
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Message.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 20 · Message. Inline feedback at page or section level. A message
   PERSISTS; a toast confirms and leaves.
   Warning is orange: a heads-up, not an alarm. Red would be worse — in a
   message it means something failed, and "not suitable during pregnancy"
   is a restriction. Every type carries its icon on a 32px disc in its own
   colour (stylesheet): white on the disc, dark blue on the orange one. */
const ICONS = {
  neutral: "info-circle",
  info: "info-circle",
  success: "circle-check",
  warning: "alert-triangle",
  error: "alert-circle"
};
function Message({
  variant = "info",
  title,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-msg", "uw-msg--" + variant, className].filter(Boolean).join(" "),
    role: variant === "error" ? "alert" : "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "uw-msg__ic",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[variant],
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "uw-msg__b"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "uw-msg__t"
  }, title) : null, children));
}
Object.assign(__ds_scope, { Message });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Message.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 30 · Skeleton. Used when the SHAPE is known — a product grid reloading
   after a filter knows it will be nine cards, so a skeleton reserves the
   space and prevents the shift.
   Never collapse a container while it loads: one that shrinks and re-expands
   reads as broken even when it is faster. */
function Skeleton({
  width = "100%",
  height = 16,
  radius,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["uw-sk", className].filter(Boolean).join(" "),
    "aria-hidden": "true",
    style: {
      display: "block",
      width,
      height,
      borderRadius: radius,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 30 · Spinner. Used when the incoming shape is NOT known — a form
   submitting does not know what comes next.
   A silent spinner is invisible to a screen reader, so it carries
   role="status" and an accessible label. */
function Spinner({
  label = "Wird geladen",
  size = 20,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["uw-spin", className].filter(Boolean).join(" "),
    role: "status",
    style: {
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StockStatus.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 13 · Stock status. One line of availability on a PDP.
   Low stock is the one place orange is not "earned recognition" — it is
   closer to urgency. Red would be worse: an alarm colour on a normal
   shopping state devalues real errors. */
function StockStatus({
  state = "in",
  children,
  pdp = false,
  className = "",
  ...rest
}) {
  const cls = ["uw-stock", "uw-stock--" + state, pdp && "uw-stock--pdp", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("p", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "uw-stock__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { StockStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StockStatus.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 21 · Toast. Transient confirmation. Never an error — it disappears.
   Five seconds, paused on hover and focus, never auto-dismissed if it
   contains a link: a control that vanishes while being reached for is worse
   than no control. One at a time; a second replaces the first. */
function Toast({
  variant = "light",
  title,
  action,
  actionHref = "#",
  onClose,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-toast", variant === "dark" && "uw-toast--dark", className].filter(Boolean).join(" "),
    role: "status",
    "aria-live": "polite"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "uw-toast__ic",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "uw-toast__b"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "uw-toast__t"
  }, title) : null, children, action ? /*#__PURE__*/React.createElement("a", {
    className: "uw-toast__a",
    href: actionHref
  }, action) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-toast__x",
    "aria-label": "Schliessen",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 4 · Checkbox. appearance:none on the real input, so the control and its box
   stay one node and it never leaves the focus order. The whole LABEL is the
   44px hit area — a 20px box is far below the minimum.
   The tick is a clip-path glyph, so no icon font or SVG is needed. */
function Checkbox({
  label,
  count,
  indeterminate = false,
  className = "",
  labelProps,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const cls = ["uw-check", count != null && "uw-check--count", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, labelProps), /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: "uw-check__input",
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uw-check__label"
  }, label), count != null ? /*#__PURE__*/React.createElement("span", {
    className: "uw-check__count"
  }, count) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 27 · Form field. The arrangement input, select and checkbox sit inside.
   Help text and error share ONE slot, so the error replaces the hint rather
   than pushing everything below it down mid-tap.
   The label stays dark-gray in the error state: the border, fill, icon and
   message already carry the error four times. */
function FormField({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  optional = false,
  children,
  className = "",
  ...rest
}) {
  const invalid = Boolean(error);
  const messageId = htmlFor ? htmlFor + "-msg" : undefined;
  const cls = ["uw-field", invalid && "is-invalid", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "uw-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "uw-field__req",
    "aria-hidden": "true"
  }, " *") : null, optional ? /*#__PURE__*/React.createElement("span", null, " (optional)") : null) : null, children, invalid ? /*#__PURE__*/React.createElement("p", {
    className: "uw-field__hint uw-field__err",
    id: messageId
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert-circle",
    size: 16
  }), error) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "uw-field__hint",
    id: messageId
  }, hint) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 2 · Input. 44px like every control, pill radius, never below 16px font — iOS Safari zooms the
   viewport on focus for anything smaller and leaves the user stuck zoomed.
   Label above, always: a placeholder as label disappears on focus. */
function Input({
  as = "input",
  type = "text",
  leadingIcon,
  invalid = false,
  className = "",
  ...rest
}) {
  const cls = ["uw-input", as === "textarea" && "uw-input--area", leadingIcon && "uw-input--search", className].filter(Boolean).join(" ");
  const props = {
    className: cls,
    "aria-invalid": invalid ? "true" : undefined,
    ...rest
  };
  const field = as === "textarea" ? /*#__PURE__*/React.createElement("textarea", props) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, props));
  if (!leadingIcon) return field;
  return /*#__PURE__*/React.createElement("span", {
    className: "uw-inputwrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uw-inputwrap__lead"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 20
  })), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/CouponForm.jsx
try { (() => {
/* 28 · Coupon form. Collapsed by default, everywhere — an open coupon field
   is an invitation to leave and go hunting for a code.
   The apply button is green family but OUTLINE: one filled green per step,
   and that green is already spoken for by "Zur Kasse". */
function CouponForm({
  triggerLabel = "Gutscheincode eingeben",
  placeholder = "Code",
  applyLabel = "Anwenden",
  applied,
  onApply,
  onRemove,
  defaultOpen = false,
  className = ""
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [code, setCode] = React.useState("");
  if (applied) {
    return /*#__PURE__*/React.createElement("div", {
      className: className
    }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      variant: "attribute",
      onRemove: onRemove,
      removeLabel: "Gutschein " + applied.code + " entfernen",
      style: {
        background: "var(--light-green)",
        color: "var(--dark-green)"
      }
    }, applied.code, " \xB7 ", applied.amount));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, open ? /*#__PURE__*/React.createElement("div", {
    className: "uw-coupon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    "aria-label": "Gutscheincode",
    placeholder: placeholder,
    value: code,
    onChange: e => setCode(e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "apply",
    onClick: () => onApply?.(code)
  }, applyLabel)) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    "aria-expanded": "false",
    onClick: () => setOpen(true)
  }, triggerLabel));
}
Object.assign(__ds_scope, { CouponForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CouponForm.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantitySelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 19 · Quantity selector. A stepper, not a dropdown: one tap from 1 to 2,
   no maximum to maintain, and the value stays a real input so someone
   buying twelve can type it.
   sm is 32px and therefore READ-ONLY — it is below the tap minimum, so it
   displays a quantity in the order review rather than editing one. */
function QuantitySelector({
  size = "md",
  value,
  min = 1,
  max,
  removeAtOne = false,
  onChange,
  onRemove,
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState(value ?? min);
  const qty = value ?? internal;
  const set = n => {
    const next = Math.max(min, max ? Math.min(max, n) : n);
    if (value == null) setInternal(next);
    onChange?.(next);
  };
  const isRemove = removeAtOne && qty <= min;
  const readOnly = size === "sm";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-qty", "uw-qty--" + size, className].filter(Boolean).join(" ")
  }, rest), readOnly ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-qty__down" + (isRemove ? " is-remove" : ""),
    "aria-label": isRemove ? "Artikel entfernen" : "Menge verringern",
    disabled: !isRemove && qty <= min,
    onClick: () => isRemove ? onRemove?.() : set(qty - 1)
  }, isRemove ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "trash",
    size: 16
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    className: "uw-qty__value",
    type: "text",
    inputMode: "numeric",
    "aria-label": "Menge",
    value: qty,
    readOnly: readOnly,
    onChange: e => {
      const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
      if (!Number.isNaN(n)) set(n);
    }
  }), readOnly ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-qty__up",
    "aria-label": "Menge erh\xF6hen",
    disabled: max != null && qty >= max,
    onClick: () => set(qty + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 16
  })));
}
Object.assign(__ds_scope, { QuantitySelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantitySelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 4 · Radio. One from a set — and a set needs a <fieldset> with a <legend>,
   which is the one requirement in this library currently failing on the live
   site. RadioGroup exists so using it is easier than not. */
function Radio({
  label,
  sub,
  card = false,
  disabled = false,
  className = "",
  labelProps,
  ...rest
}) {
  const cls = ["uw-check", "uw-check--radio", card && "uw-check--card", card && disabled && "is-disabled", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, labelProps), /*#__PURE__*/React.createElement("input", _extends({
    className: "uw-check__input",
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uw-check__label"
  }, label, sub ? /*#__PURE__*/React.createElement("span", {
    className: "uw-check__sub"
  }, sub) : null));
}
function RadioGroup({
  legend,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: ["uw-check-group", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("legend", {
    className: "uw-check-group__legend"
  }, legend), children);
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 3 · Select. Native by default — the OS picker beats anything we can build
   on touch, is keyboard accessible for free, and does not break under
   assistive tech. Matches Input exactly except for the chevron.
   The chevron is decorative and must not receive pointer events. */
function Select({
  options = [],
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["uw-select", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "uw-select__control"
  }, rest), children ?? options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    className: "uw-select__chevron"
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 8 · Breadcrumb. Deliberately quiet — orientation, not navigation people
   came for. Sentence case, never uppercase: uppercase costs ~12% width and
   German breadcrumbs are already the longest of the three languages.
   The current page is --dark-blue, matching the H1 below it. Not green. */
function Breadcrumb({
  items = [],
  label = "Brotkrumen",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["uw-crumbs", className].filter(Boolean).join(" "),
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("ol", {
    className: "uw-crumbs__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    className: "uw-crumbs__item",
    key: it.label
  }, i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "uw-crumbs__current",
    "aria-current": "page"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    className: "uw-crumbs__link",
    href: it.href
  }, it.label)))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Carousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 31 · Carousel. Native CSS scroll-snap — no library. Native momentum, native
   keyboard, works before JS loads, and 156KB out of the bundle.
   The trade-off is loop and autoplay, which nothing here needs.
   The progress bar is measured from SCROLL POSITION, not slide index: a card
   wider than the per-view fraction never centres, so an index tops out early
   and the fill stops short of the track end.
   6px, not 3px — at 3px it reads as a hairline; at 6px it reads as a control. */
function Carousel({
  children,
  label,
  itemWidth,
  className = "",
  ...rest
}) {
  const trackRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const measure = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const span = el.scrollWidth - el.clientWidth;
    const p = span > 0 ? el.scrollLeft / span : 1;
    setProgress(p);
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(span <= 1 || el.scrollLeft >= span - 1);
  }, []);
  React.useEffect(() => {
    measure();
  }, [measure, children]);
  const nudge = dir => {
    const el = trackRef.current;
    if (el) el.scrollBy({
      left: dir * Math.max(240, el.clientWidth * 0.6),
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uw-car", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("ul", {
    className: "uw-car__track",
    ref: trackRef,
    onScroll: measure,
    "aria-label": label,
    tabIndex: 0
  }, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement("li", {
    className: "uw-car__item",
    key: i,
    style: itemWidth ? {
      width: itemWidth
    } : undefined
  }, child))), /*#__PURE__*/React.createElement("div", {
    className: "uw-car__foot"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-car__b",
    "aria-label": "Zur\xFCck",
    "aria-disabled": atStart ? "true" : undefined,
    onClick: () => nudge(-1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "uw-car__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-car__thumb",
    style: {
      width: Math.max(12, progress * 100) + "%"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-car__b",
    "aria-label": "Weiter",
    "aria-disabled": atEnd ? "true" : undefined,
    onClick: () => nudge(1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 24
  }))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 29 · Pagination. Every target 44×44 — the densest cluster of small targets
   on the site. The current page is a <span>: not hovered, not focusable, not
   in the tab order. The ellipsis is not clickable.
   The disabled arrow stays visible; removing it shifts the row and moves the
   other arrow under the finger that just tapped. */
function Pagination({
  current = 1,
  total = 1,
  count,
  hrefFor = () => "#",
  label = "Seitennummerierung",
  className = "",
  ...rest
}) {
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - current) <= 1) pages.push(i);else if (pages[pages.length - 1] !== "gap") pages.push("gap");
  }
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: className,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "uw-pg"
  }, /*#__PURE__*/React.createElement("a", {
    className: "uw-pg__arrow",
    href: current > 1 ? hrefFor(current - 1) : undefined,
    "aria-label": "Vorherige Seite",
    "aria-disabled": current <= 1 ? "true" : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 20
  })), pages.map((p, i) => p === "gap" ? /*#__PURE__*/React.createElement("span", {
    className: "uw-pg__gap",
    key: "gap" + i,
    "aria-hidden": "true"
  }, "\u2026") : p === current ? /*#__PURE__*/React.createElement("span", {
    className: "uw-pg__cur",
    key: p,
    "aria-current": "page"
  }, p) : /*#__PURE__*/React.createElement("a", {
    key: p,
    href: hrefFor(p)
  }, p)), /*#__PURE__*/React.createElement("a", {
    className: "uw-pg__arrow",
    href: current < total ? hrefFor(current + 1) : undefined,
    "aria-label": "N\xE4chste Seite",
    "aria-disabled": current >= total ? "true" : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  }))), count ? /*#__PURE__*/React.createElement("p", {
    className: "uw-pg__count",
    style: {
      margin: "var(--space-xs) 0 0"
    }
  }, "Seite ", current, " von ", total, " \xB7 ", count) : null);
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 7 · Category tab nav. One axis, a handful of options, always visible.
   Active is --dark-blue: a category tab changes which products are listed,
   which is navigation — green is reserved for advancing a purchase.
   Uppercase is kept here, one of the few places it works: short labels, a
   row that is scanned rather than read, and --ls-caps applied. */
function TabNav({
  items = [],
  label = "Kategorien",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["uw-tabnav", className].filter(Boolean).join(" "),
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("ul", {
    className: "uw-tabnav__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.label
  }, /*#__PURE__*/React.createElement("a", {
    className: "uw-tabnav__item" + (it.active ? " is-active" : ""),
    href: it.href || "#",
    "aria-current": it.active ? "page" : undefined,
    onClick: it.onClick
  }, it.label)))));
}
Object.assign(__ds_scope, { TabNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabNav.jsx", error: String((e && e.message) || e) }); }

// components/overlays/CartDrawer.jsx
try { (() => {
/* 16 · Cart drawer. The most internally consistent component on the site.
   Header and footer fixed, only the list scrolls — the checkout button is
   the point, so it never scrolls away.
   Item meta is the SIZE ONLY. Price per unit is a comparison aid and belongs
   where a choice is being made; in the cart the choice is made. */
function CartDrawer({
  open = true,
  items = [],
  subtotal,
  onClose,
  onQuantityChange,
  onRemove,
  footerNote = "Versandkostenfrei ab 50 CHF · Rechnung, TWINT, Karte",
  checkoutLabel = "Zur Kasse",
  emptyCopy = "Noch nichts im Warenkorb.",
  children,
  className = ""
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const titleId = "uw-drawer-title";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer-backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: ["uw-drawer", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": titleId
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "uw-drawer__title",
    id: titleId
  }, "Warenkorb (", items.length, ")"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-drawer__x",
    "aria-label": "Warenkorb schliessen",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer__empty"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-bag",
    size: 32,
    style: {
      color: "var(--medium-gray)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-small)"
    }
  }, emptyCopy), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    href: "/cbd-shop/"
  }, "Zum Shop")) : /*#__PURE__*/React.createElement("ul", {
    className: "uw-drawer__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    className: "uw-drawer__item",
    key: it.id
  }, /*#__PURE__*/React.createElement("img", {
    className: "uw-drawer__thumb",
    src: it.image,
    alt: "",
    width: "64",
    height: "64"
  }), /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uw-drawer__name"
  }, it.name), /*#__PURE__*/React.createElement("p", {
    className: "uw-drawer__meta"
  }, it.size), /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer__row"
  }, /*#__PURE__*/React.createElement(__ds_scope.QuantitySelector, {
    size: "md",
    value: it.qty,
    removeAtOne: true,
    onChange: n => onQuantityChange?.(it.id, n),
    onRemove: () => onRemove?.(it.id)
  }), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    role: "list",
    value: it.price,
    sale: it.sale,
    was: it.was
  })))))), items.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer__foot"
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "uw-drawer__sub"
  }, /*#__PURE__*/React.createElement("p", {
    className: "uw-drawer__sub-label"
  }, "Zwischensumme"), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    role: "total",
    value: subtotal,
    "aria-live": "polite"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "buy",
    block: true,
    href: "/kasse/"
  }, checkoutLabel), /*#__PURE__*/React.createElement("p", {
    className: "uw-drawer__note"
  }, footerNote)) : null));
}
Object.assign(__ds_scope, { CartDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// components/overlays/FilterPanel.jsx
try { (() => {
/* 38 · Filter panel. Below `lg` there is no room for the row of filter pills,
   so sorting and every filter move into this panel. It is opened by one
   filled blue Button with the filter icon and the number of filters in use.
   On a phone it covers the screen; from 480px it is a panel on the right
   with the page dimmed behind it, like the cart drawer.
   Sorting is its own block at the top, set apart by a grey band, because it
   reorders and does not narrow. Its list is the system's own rounded list,
   not the phone's built-in one.
   Each filter is a section that opens in place; several can be open at once.
   A closed section says what is chosen in it: the first two options by name,
   then "+3". Head and foot stay put and only the middle scrolls, so the
   button with the result is always in reach.
   The button is blue, never green: showing results is not buying. */
function chosenText(labels) {
  return labels.length > 2 ? labels.slice(0, 2).join(", ") + " +" + (labels.length - 2) : labels.join(", ");
}
/* An option is a string or { label, value?, count? }; the label doubles as the value. */
const asOption = o => typeof o === "string" ? {
  value: o,
  label: o
} : {
  ...o,
  value: o.value ?? o.label
};
function FilterPanel({
  open = true,
  title = "Filter & Sortierung",
  sortLabel = "Sortieren nach",
  sorts = [],
  sort,
  onSortChange,
  filterLabel = "Filtern nach",
  facets = [],
  applied = {},
  onToggle,
  defaultOpen,
  resultLabel,
  resetLabel = "Zurücksetzen",
  onReset,
  closeLabel = "Schliessen",
  onClose,
  className = ""
}) {
  const [sortOpen, setSortOpen] = React.useState(false);
  const uid = React.useId();
  const sortRef = React.useRef(null);
  const sortBtnRef = React.useRef(null);
  const listRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key !== "Escape") return;
      if (sortOpen) {
        setSortOpen(false);
        sortBtnRef.current?.focus();
      } else onClose?.();
    };
    const onDown = e => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, sortOpen, onClose]);
  React.useEffect(() => {
    if (sortOpen) listRef.current?.querySelector('[aria-selected="true"]')?.focus();
  }, [sortOpen]);
  if (!open) return null;
  const sortOptions = sorts.map(asOption);
  const current = sortOptions.find(o => o.value === sort) || sortOptions[0];
  const openIds = [].concat(defaultOpen || []);
  const pick = value => {
    onSortChange?.(value);
    setSortOpen(false);
    sortBtnRef.current?.focus();
  };
  const onListKey = e => {
    const items = Array.from(listRef.current?.querySelectorAll('[role="option"]') || []);
    const i = items.indexOf(document.activeElement);
    const to = {
      ArrowDown: i + 1,
      ArrowUp: i - 1,
      Home: 0,
      End: items.length - 1
    }[e.key];
    if (to == null) return;
    e.preventDefault();
    items[Math.max(0, Math.min(items.length - 1, to))]?.focus();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "uw-fpanel-backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: ["uw-fpanel", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": uid + "t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-fpanel__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "uw-fpanel__title",
    id: uid + "t"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-fpanel__x",
    "aria-label": closeLabel,
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    className: "uw-fpanel__body"
  }, sortOptions.length ? /*#__PURE__*/React.createElement("div", {
    className: "uw-fpanel__sort" + (sortOpen ? " is-open" : ""),
    ref: sortRef
  }, /*#__PURE__*/React.createElement("span", {
    className: "uw-fpanel__label",
    id: uid + "s"
  }, sortLabel), /*#__PURE__*/React.createElement("div", {
    className: "uw-select"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    ref: sortBtnRef,
    className: "uw-select__control",
    "aria-haspopup": "listbox",
    "aria-expanded": sortOpen ? "true" : "false",
    "aria-labelledby": uid + "s " + uid + "v",
    onClick: () => setSortOpen(!sortOpen)
  }, /*#__PURE__*/React.createElement("span", {
    id: uid + "v"
  }, current?.label)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    className: "uw-select__chevron"
  })), sortOpen ? /*#__PURE__*/React.createElement("div", {
    className: "uw-select__panel",
    role: "listbox",
    "aria-labelledby": uid + "s",
    ref: listRef,
    onKeyDown: onListKey
  }, sortOptions.map(o => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: o.value,
    className: "uw-select__option",
    role: "option",
    "aria-selected": o.value === current?.value ? "true" : "false",
    onClick: () => pick(o.value)
  }, o.label))) : null) : null, sortOptions.length && facets.length ? /*#__PURE__*/React.createElement("div", {
    className: "uw-fpanel__band"
  }) : null, facets.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "uw-fpanel__label"
  }, filterLabel), /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    className: "uw-acc--filter"
  }, facets.map(f => {
    const options = f.options.map(asOption);
    const chosen = applied[f.id] || [];
    const names = options.filter(o => chosen.includes(o.value)).map(o => o.label);
    return /*#__PURE__*/React.createElement(__ds_scope.AccordionItem, {
      key: f.id,
      headingLevel: 3,
      open: openIds.includes(f.id),
      heading: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "uw-fpanel__name"
      }, f.label), names.length ? /*#__PURE__*/React.createElement("span", {
        className: "uw-fpanel__chosen"
      }, chosenText(names)) : null)
    }, options.map(o => {
      const checked = chosen.includes(o.value);
      return /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
        key: o.value,
        label: o.label,
        count: o.count,
        checked: checked,
        disabled: o.count === 0 && !checked,
        onChange: () => onToggle?.(f.id, o.value)
      });
    }));
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: "uw-fpanel__foot"
  }, onReset ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-link uw-link--action uw-fpanel__reset",
    onClick: onReset
  }, resetLabel) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    onClick: onClose
  }, resultLabel))));
}
Object.assign(__ds_scope, { FilterPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/FilterPanel.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 26 · Modal. Rarely — a modal interrupts, and most things that reach for one
   are better as a page, a panel or an inline message. It is right for a
   destructive confirmation, a required choice, and little else.
   The destructive action is red and is NOT the default focus: on open, focus
   lands on cancel — the safe one. */
function Modal({
  title,
  open = true,
  blocking = false,
  onClose,
  footer,
  children,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open || blocking) return;
    const onKey = e => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, blocking, onClose]);
  React.useEffect(() => {
    if (open) ref.current?.querySelector("[data-autofocus]")?.focus();
  }, [open]);
  if (!open) return null;
  const titleId = "uw-modal-title";
  return /*#__PURE__*/React.createElement("div", {
    className: "uw-modal-backdrop",
    onClick: blocking ? undefined : e => {
      if (e.target === e.currentTarget) onClose?.();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ["uw-modal", blocking && "uw-modal--blocking", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined
  }, rest), title && !blocking ? /*#__PURE__*/React.createElement("div", {
    className: "uw-modal__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "uw-modal__title",
    id: titleId
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uw-modal__x",
    "aria-label": "Schliessen",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "uw-modal__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "uw-modal__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlays/AgeGate.jsx
try { (() => {
/* 32 · Age gate. Not its own component — the modal with a --blocking variant.
   No close, Escape does nothing, and there is nothing to return focus to:
   there was no trigger, and the page behind has not been seen.
   The brand MARK from the logo kit, not the full logo and never an icon
   standing in for it; no disc behind it, the kit forbids a background box.
   Neither answer is pre-focused — a legally
   meaningful confirmation should not be one stray Enter away. */
function AgeGate({
  question = "Bist du 18 Jahre oder älter?",
  body,
  legal = "Mit dem Bestätigen erklärst du, dass du das gesetzliche Mindestalter erreicht hast.",
  yesLabel = "Ja, ich bin 18+",
  noLabel = "Nein",
  onYes,
  onNo,
  open = true
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Modal, {
    open: open,
    blocking: true,
    className: "uw-gate",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "buy",
      onClick: onYes
    }, yesLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "outline",
      onClick: onNo
    }, noLabel))
  }, /*#__PURE__*/React.createElement("div", {
    className: "uw-gate__mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    color: "dark-blue",
    width: 56,
    decorative: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "uw-gate__q"
  }, question), body ? /*#__PURE__*/React.createElement("p", null, body) : null, /*#__PURE__*/React.createElement("p", {
    className: "uw-gate__legal"
  }, legal));
}
Object.assign(__ds_scope, { AgeGate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/AgeGate.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.OrderInfoBar = __ds_scope.OrderInfoBar;

__ds_ns.OrderSummary = __ds_scope.OrderSummary;

__ds_ns.PdpGallery = __ds_scope.PdpGallery;

__ds_ns.ProductInfoTable = __ds_scope.ProductInfoTable;

__ds_ns.PRODUCT_TILE_STRINGS = __ds_scope.PRODUCT_TILE_STRINGS;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.ArticleRow = __ds_scope.ArticleRow;

__ds_ns.IconList = __ds_scope.IconList;

__ds_ns.NewsletterBlock = __ds_scope.NewsletterBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.FROM_FORMATS = __ds_scope.FROM_FORMATS;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.ContentTabs = __ds_scope.ContentTabs;

__ds_ns.FilterPill = __ds_scope.FilterPill;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.PopoverItem = __ds_scope.PopoverItem;

__ds_ns.PopoverGroup = __ds_scope.PopoverGroup;

__ds_ns.PopoverSeparator = __ds_scope.PopoverSeparator;

__ds_ns.PopoverFooter = __ds_scope.PopoverFooter;

__ds_ns.SortButton = __ds_scope.SortButton;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Message = __ds_scope.Message;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.StockStatus = __ds_scope.StockStatus;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CouponForm = __ds_scope.CouponForm;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantitySelector = __ds_scope.QuantitySelector;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.TabNav = __ds_scope.TabNav;

__ds_ns.AgeGate = __ds_scope.AgeGate;

__ds_ns.CartDrawer = __ds_scope.CartDrawer;

__ds_ns.FilterPanel = __ds_scope.FilterPanel;

__ds_ns.Modal = __ds_scope.Modal;

})();
