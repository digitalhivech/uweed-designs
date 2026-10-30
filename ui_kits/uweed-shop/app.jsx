const { CartDrawer, CouponForm, Toast, AgeGate } = window.UWeedDesignSystem_8df554;

function App() {
  const [screen, setScreen] = React.useState("category");
  const [product, setProduct] = React.useState(window.PRODUCTS[1]);
  const [lines, setLines] = React.useState([]);
  const [drawer, setDrawer] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [gate, setGate] = React.useState(true);

  const add = (p, qty = 1) => {
    setLines((ls) => {
      const found = ls.find((l) => l.slug === p.slug);
      if (found) return ls.map((l) => (l.slug === p.slug ? { ...l, qty: l.qty + qty } : l));
      return [...ls, { slug: p.slug, name: p.name, size: p.size, tile: p.tile, qty, amount: parseFloat(p.price) }];
    });
    setToast({ title: "Zum Warenkorb hinzugefügt", body: p.name + " · " + p.size });
    setDrawer(true);
  };
  const setQty = (slug, n) => setLines((ls) => ls.map((l) => (l.slug === slug ? { ...l, qty: n } : l)));
  const remove = (slug) => setLines((ls) => ls.filter((l) => l.slug !== slug));
  const open = (p) => { setProduct(p); setScreen("product"); window.scrollTo(0, 0); };
  const nav = (s) => { setScreen(s); window.scrollTo(0, 0); };

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.amount * l.qty, 0);

  return (
    <>
      <Header cartCount={count} favCount={2} active={screen} onCart={() => setDrawer(true)} onNav={nav} />
      {screen === "category" ? <CategoryScreen onOpen={open} onAdd={add} /> : null}
      {screen === "product" ? <ProductScreen p={product} onAdd={add} onOpen={open} /> : null}
      {screen === "cart" ? <CartScreen lines={lines} onQty={setQty} onRemove={remove} onNav={nav} /> : null}
      {screen === "blog" ? <BlogScreen /> : null}
      <ShopFooter />

      <CartDrawer
        open={drawer}
        items={lines.map((l) => ({ id: l.slug, name: l.name, size: l.size, qty: l.qty, price: l.amount.toFixed(2) + " CHF", image: window.ph(160, 160, l.tile, "") }))}
        subtotal={subtotal.toFixed(2) + " CHF"}
        onClose={() => setDrawer(false)}
        onQuantityChange={setQty}
        onRemove={remove}
      >
        <CouponForm />
      </CartDrawer>

      {drawer ? (
        <div style={{ position: "fixed", inset: 0, zIndex: "calc(var(--z-drawer) + 1)", pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: 16, right: "min(436px, 100vw)", pointerEvents: "auto" }}>
            <button type="button" onClick={() => { setDrawer(false); nav("cart"); }}
              className="uw-btn uw-btn--outline" style={{ background: "var(--white)" }}>Warenkorb-Seite</button>
          </div>
        </div>
      ) : null}

      {toast ? (
        <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: "var(--z-toast)" }}>
          <Toast title={toast.title} action="Warenkorb ansehen" onClose={() => setToast(null)}
            actionHref="#" >
            <p>{toast.body}</p>
          </Toast>
        </div>
      ) : null}

      {gate ? <AgeGate onYes={() => setGate(false)} onNo={() => setGate(false)} /> : null}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
