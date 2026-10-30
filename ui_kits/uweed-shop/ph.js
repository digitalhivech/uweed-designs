/* Placeholder imagery. The provided sources contain no photography or
   illustration assets (doc 11 Visual Identity was not supplied), so every
   image in this kit is a flat token-coloured placeholder. Replace with real
   product photography before using any of this outside a mock. */
window.ph = function (w, h, fill, label) {
  const safe = String(label || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">' +
    '<rect width="' + w + '" height="' + h + '" fill="' + fill + '"/>' +
    '<text x="' + w / 2 + '" y="' + (h / 2 + h * 0.03) + '" font-family="DM Sans, sans-serif" ' +
    'font-size="' + Math.round(Math.min(w, h) * 0.09) + '" fill="#0B102A" opacity=".55" text-anchor="middle">' +
    safe + '</text></svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};
window.PRODUCTS = [
  { slug: "fedtnight", name: "Slow Weed · Fedtnight", brand: "Slow Weed", cat: "CBD Blüten", price: "26.80 CHF", unit: "8.93 CHF / g", tile: "#D1EFE5", cbd: "CBD 18%", thc: "THC < 1%", size: "3 g", tags: [{ label: "Bestseller", variant: "bestseller" }], stock: "in", stockLabel: "Auf Lager · heute versandfertig", rating: "4.8", reviews: 212 },
  { slug: "oel-20", name: "CBD Öl 20% Vollspektrum", brand: "Sweed", cat: "CBD Öl", price: "44.10 CHF", was: "49.00 CHF", sale: true, unit: "0.022 CHF / mg CBD", tile: "#CED4F3", cbd: "CBD 20%", thc: "THC < 1%", size: "10 ml", tags: [{ label: "−15%", variant: "sale" }, { label: "Bestseller", variant: "bestseller" }, { label: "Neu", variant: "new" }], stock: "last", stockLabel: "Nur noch 3 verfügbar", rating: "4.6", reviews: 89 },
  { slug: "oel-10", name: "CBD Öl 10% Vollspektrum", brand: "Sweed", cat: "CBD Öl", price: "29.90 CHF", unit: "0.030 CHF / mg CBD", tile: "#F4E2ED", cbd: "CBD 10%", thc: "THC < 1%", size: "10 ml", tags: [{ label: "Neu", variant: "new" }], stock: "in", stockLabel: "Auf Lager", rating: "4.9", reviews: 341, sizes: true },
  { slug: "hanftee", name: "Hanftee Bio · Zitronenmelisse", brand: "B-Chill", cat: "Hanftee", price: "12.50 CHF", unit: "0.42 CHF / g", tile: "#FFF5EB", cbd: "CBD 2%", thc: "THC < 1%", size: "30 g", tags: [], stock: "in", stockLabel: "Auf Lager", rating: "4.4", reviews: 27 },
  { slug: "pollen", name: "Pollen · Swiss Indoor", brand: "Qualicann", cat: "Hash & Pollen", price: "38.00 CHF", unit: "19.00 CHF / g", tile: "#D1EFE5", cbd: "CBD 24%", thc: "THC < 1%", size: "2 g", tags: [{ label: "Bestseller", variant: "bestseller" }], stock: "low", stockLabel: "Wenige verfügbar", rating: "4.7", reviews: 58 },
  { slug: "balsam", name: "CBD Balsam · Arnika", brand: "Herba di Berna", cat: "Kosmetik", price: "34.90 CHF", unit: "0.70 CHF / ml", tile: "#CED4F3", cbd: "CBD 5%", thc: "THC 0%", size: "50 ml", tags: [], stock: "out", stockLabel: "Ausverkauft", rating: "4.5", reviews: 133 },
];
