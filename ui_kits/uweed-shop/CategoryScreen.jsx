const { TabNav, FilterPill, SortButton, Badge, Link, Pagination, Checkbox, Popover, PopoverItem, Message } = window.UWeedDesignSystem_8df554;

function CategoryScreen({ onOpen, onAdd }) {
  const [openPanel, setOpenPanel] = React.useState(null);
  const [applied, setApplied] = React.useState(["Sweed"]);
  const toggle = (name) =>
    setApplied((a) => (a.includes(name) ? a.filter((x) => x !== name) : [...a, name]));

  return (
    <Page crumbs={[{ label: "Startseite", href: "#" }, { label: "CBD Shop", href: "#" }, { label: "Alle Produkte" }]}>
      <h1 style={{ margin: "var(--space-m) 0 var(--space-xs)" }}>CBD Shop</h1>
      <p style={{ maxWidth: "var(--measure)", fontSize: "var(--fs-lead)", lineHeight: "var(--lh-lead)", margin: "0 0 var(--space-l)" }}>
        Blüten, Öle, Tee und Kosmetik aus Schweizer Anbau. Jede Charge wird im Labor geprüft und der Bericht liegt offen.
      </p>

      <TabNav label="Produktkategorien" items={[
        { label: "Alle Produkte", active: true }, { label: "CBD Blüten" }, { label: "CBD Öl" },
        { label: "Hanftee" }, { label: "Hash & Pollen" }, { label: "Kosmetik" },
      ]} />

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: "var(--space-l)", margin: "var(--space-l) 0 var(--space-s)" }}>
        <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
          <div style={{ position: "relative" }}>
            <FilterPill count={applied.length || undefined} active={applied.length > 0} open={openPanel === "brand"}
              onClick={() => setOpenPanel(openPanel === "brand" ? null : "brand")}>Marke</FilterPill>
            {openPanel === "brand" ? (
              <div style={{ position: "absolute", top: "calc(100% + var(--space-xs))", left: 0, zIndex: "var(--z-panel)" }}>
                <Popover behaviour="panel" className="uw-pop--check">
                  {[["Sweed", 24], ["B-Chill", 18], ["Slow Weed", 9], ["Qualicann", 12], ["Herba di Berna", 7]].map(([n, c]) => (
                    <Checkbox key={n} label={n + " (" + c + ")"} checked={applied.includes(n)} onChange={() => toggle(n)} />
                  ))}
                </Popover>
              </div>
            ) : null}
          </div>
          <FilterPill>CBD-Gehalt</FilterPill>
          <FilterPill>Preis</FilterPill>
          <FilterPill>Anbau</FilterPill>
          <FilterPill disabled>Herkunft</FilterPill>
        </div>
        <span aria-live="polite" style={{ justifySelf: "center", fontSize: "var(--fs-small)", color: "var(--dark-gray)", whiteSpace: "nowrap" }}>284 Produkte</span>
        <div style={{ display: "flex", justifyContent: "flex-end", minWidth: 210, position: "relative" }}>
          <SortButton label="Sortieren" value="Beliebtheit" open={openPanel === "sort"}
            onClick={() => setOpenPanel(openPanel === "sort" ? null : "sort")} />
          {openPanel === "sort" ? (
            <div style={{ position: "absolute", top: "calc(100% + var(--space-xs))", right: 0, zIndex: "var(--z-panel)" }}>
              <Popover behaviour="listbox" label="Sortierung">
                <PopoverItem selected>Beliebtheit</PopoverItem>
                <PopoverItem selected={false}>Preis aufsteigend</PopoverItem>
                <PopoverItem selected={false}>Preis absteigend</PopoverItem>
                <PopoverItem selected={false}>Neuheiten</PopoverItem>
              </Popover>
            </div>
          ) : null}
        </div>
      </div>

      {applied.length ? (
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", flexWrap: "wrap", marginBottom: "var(--space-l)" }}>
          {applied.map((n) => <Badge key={n} onRemove={() => toggle(n)} removeLabel={"Filter " + n + " entfernen"}>{n}</Badge>)}
          <Link variant="action" href="#" onClick={(e) => { e.preventDefault(); setApplied([]); }}>Alle zurücksetzen</Link>
        </div>
      ) : null}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-l)" }}>
        {window.PRODUCTS.map((p) => <KitTile key={p.slug} p={p} onOpen={onOpen} onAdd={onAdd} />)}
      </div>

      <div style={{ margin: "var(--space-2xl) 0 var(--space-xl)" }}>
        <Pagination current={1} total={12} count="284 Produkte" />
      </div>

      <Message variant="info" title="Nur drei Reihen gezeigt">
        <p>Diese Ansicht kürzt 284 Produkte auf sechs Kacheln ab. Alles andere — Filter, Sortierung, Chips, Pagination — ist vollständig.</p>
      </Message>
    </Page>
  );
}

Object.assign(window, { CategoryScreen });
