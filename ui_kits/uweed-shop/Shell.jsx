const { SearchBar, Badge, Icon, Link, Footer, Breadcrumb, Logo } = window.UWeedDesignSystem_8df554;

/* NOT DESIGNED YET. The header, mega menu and mobile menu have no design in
   this system; on the live site V2 (.new-header-menu) is canonical but
   undocumented. This header is therefore assembled ONLY from existing
   components (Logo, SearchBar, Badge, Link, Icon) and is a stand-in, not a
   recreation. Do not copy it as the real header. */
function Header({ cartCount = 0, favCount = 0, onCart, onNav, active }) {
  const nav = [
    ["CBD Blüten", "category"],
    ["CBD Öl", "category"],
    ["Hanftee", "category"],
    ["Kosmetik", "category"],
    ["Blog", "blog"],
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: "var(--z-header)", background: "var(--white)", borderBottom: "var(--border-hairline) solid var(--line)" }}>
      <div style={{ background: "var(--dark-blue)", color: "var(--white)", fontSize: "var(--fs-meta)", textAlign: "center", padding: "6px var(--space-m)", letterSpacing: "var(--ls-caps)" }}>
        Gratis Versand ab 50 CHF · Laborgeprüft · Diskreter Versand aus der Schweiz
      </div>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-s) var(--space-l)", display: "flex", alignItems: "center", gap: "var(--space-l)" }}>
        <a href="#" aria-label="uWeed, zur Startseite" onClick={(e) => { e.preventDefault(); onNav("category"); }}
           style={{ display: "block", flex: "0 0 auto" }}>
          <Logo variant="horizontal" color="dark-blue" width={120} decorative />
        </a>
        <div style={{ flex: "1 1 auto", maxWidth: 420 }}><SearchBar placeholder="Suchen nach Produkten, Marken" /></div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-s)", flex: "0 0 auto" }}>
          <button type="button" aria-label="Konto" style={btn}><Icon name="user" size={22} /></button>
          <button type="button" aria-label={favCount + " Favoriten"} style={{ ...btn, position: "relative" }}>
            <Icon name="heart" size={22} />
            {favCount ? <span style={dot}><Badge variant="count-fav" aria-label={favCount + " Favoriten"}>{favCount}</Badge></span> : null}
          </button>
          <button type="button" aria-label={"Warenkorb, " + cartCount + " Artikel"} onClick={onCart} style={{ ...btn, position: "relative" }}>
            <Icon name="shopping-cart" size={22} />
            {cartCount ? <span style={dot}><Badge variant="count" aria-label={cartCount + " Artikel im Warenkorb"}>{cartCount}</Badge></span> : null}
          </button>
        </div>
      </div>
      <nav aria-label="Hauptnavigation" style={{ borderTop: "var(--border-hairline) solid var(--line)" }}>
        <ul style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 var(--space-l)", display: "flex", gap: "var(--space-l)", listStyle: "none" }}>
          {nav.map(([label, screen]) => (
            <li key={label} style={{ padding: "10px 0" }}>
              <Link variant="nav" href="#" current={screen === active}
                onClick={(e) => { e.preventDefault(); onNav(screen); }}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const btn = { width: 44, height: 44, display: "grid", placeItems: "center", border: 0, background: "none", color: "var(--dark-blue)", cursor: "pointer", borderRadius: "50%" };
const dot = { position: "absolute", top: 4, right: 2 };

const FOOTER_COLS = [
  { heading: "Shop", links: [{ label: "CBD Blüten", href: "#" }, { label: "CBD Öl", href: "#" }, { label: "Hanftee", href: "#" }, { label: "Kosmetik", href: "#" }, { label: "Hash & Pollen", href: "#" }] },
  { heading: "Marken", links: [{ label: "Sweed", href: "#" }, { label: "B-Chill", href: "#" }, { label: "Slow Weed", href: "#" }, { label: "Qualicann", href: "#" }] },
  { heading: "Hilfe", links: [{ label: "Versand & Lieferung", href: "#" }, { label: "Rückgabe", href: "#" }, { label: "Häufige Fragen", href: "#" }, { label: "Kontakt", href: "#" }] },
  { heading: "Über uWeed", links: [{ label: "Laborberichte", href: "#" }, { label: "Blog", href: "#" }, { label: "AGB", href: "#" }, { label: "Datenschutz", href: "#" }] },
];

function ShopFooter() {
  return <Footer columns={FOOTER_COLS} copyright="© 2026 uWeed · Zürich, Schweiz"
    switches={[{ label: "Währung", options: ["CHF", "EUR"], value: "CHF" }, { label: "Sprache", options: ["DE", "FR", "EN"], value: "DE" }]} />;
}

function Page({ crumbs, children }) {
  return (
    <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-m) var(--space-l) var(--space-3xl)" }}>
      {crumbs ? <Breadcrumb items={crumbs} /> : null}
      {children}
    </div>
  );
}

Object.assign(window, { Header, ShopFooter, Page });
