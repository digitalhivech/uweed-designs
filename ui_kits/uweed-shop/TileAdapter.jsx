const { ProductTile } = window.UWeedDesignSystem_8df554;

/* Adapter from the kit's sample catalogue to the signed-off system tile.
   The tile itself lives in components/commerce/ProductTile.jsx. */
function KitTile({ p, onOpen, onAdd }) {
  const tags = p.tags.map((t) => t.variant);
  return (
    <ProductTile
      image={window.ph(688, 660, p.tile, p.cat)}
      href="#"
      brand={p.brand}
      name={p.name}
      size={p.size}
      sizes={Boolean(p.sizes)}
      cbd={p.cbd.replace("CBD ", "")}
      thc={p.thc.replace("THC ", "")}
      rating={p.rating}
      reviewCount={p.reviews}
      price={p.price}
      was={p.was}
      unitPrice={p.unit}
      sale={Boolean(p.sale)}
      bestseller={tags.includes("bestseller")}
      isNew={tags.includes("new")}
      soldOut={p.stock === "out"}
      onNavigate={(e) => { e.preventDefault(); onOpen(p); }}
      onAdd={() => onAdd(p)}
      onChooseSize={() => onOpen(p)}
    />
  );
}

Object.assign(window, { KitTile });
