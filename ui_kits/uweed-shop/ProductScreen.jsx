const {
  PdpGallery, Price, Badge, StockStatus, QuantitySelector, Button, OrderInfoBar,
  ContentTabs, ProductInfoTable, Accordion, AccordionItem, Tooltip, RadioGroup, Radio, Message, Carousel,
} = window.UWeedDesignSystem_8df554;

function ProductScreen({ p, onAdd, onOpen }) {
  const [saved, setSaved] = React.useState(false);
  const [qty, setQty] = React.useState(1);
  const oos = p.stock === "out";
  const images = [p.tile, "#CED4F3", "#F4E2ED", "#FFF5EB"].map((c, i) => ({ src: window.ph(600, 600, c, "Bild " + (i + 1)) }));

  return (
    <Page crumbs={[{ label: "Startseite", href: "#" }, { label: "CBD Shop", href: "#" }, { label: p.cat, href: "#" }, { label: p.name }]}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,440px) minmax(0,1fr)", gap: "var(--space-2xl)", margin: "var(--space-l) 0 var(--space-2xl)" }}>
        <PdpGallery images={images} saved={saved} onToggleSave={() => setSaved((s) => !s)} tags={p.tags} />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-m)" }}>
          <p style={{ margin: 0, fontSize: "var(--fs-meta)", color: "var(--dark-gray)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase" }}>{p.brand}</p>
          <h1 style={{ margin: 0, fontSize: "var(--fs-h1)" }}>{p.name}</h1>

          <div style={{ display: "flex", gap: "var(--space-2xs)", flexWrap: "wrap" }}>
            <Badge variant="attribute">{p.cbd}</Badge>
            <Badge variant="attribute">{p.thc}</Badge>
            <Badge variant="attribute">Indoor, Schweiz</Badge>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-xs)", flexWrap: "wrap" }}>
            <Price role="hero" value={p.price} was={p.was} sale={p.sale} unit={p.unit} />
            <Tooltip placement="start" text="Vergleichspreis, nicht der Rechnungsbetrag. Öle rechnen pro mg CBD, Blüten pro Gramm."
              label="Mehr Informationen zum Vergleichspreis" />
          </div>

          <RadioGroup legend="Grösse" style={{ display: "grid", gap: "var(--space-xs)", maxWidth: 420 }}>
            <Radio card name="size" label={p.size} sub={p.price + " · " + p.unit} defaultChecked />
            <Radio card name="size" label={"2 × " + p.size} sub="Mengenrabatt · 8% Ersparnis" />
          </RadioGroup>

          <StockStatus state={p.stock} pdp={oos}>{p.stockLabel}</StockStatus>

          <div style={{ display: "flex", gap: "var(--space-s)", alignItems: "center", flexWrap: "wrap" }}>
            <QuantitySelector size="lg" value={qty} max={12} onChange={setQty} />
            <Button variant="buy" disabled={oos} onClick={() => onAdd(p, qty)} style={{ flex: "1 1 220px" }}>
              {oos ? "Ausverkauft" : "In den Warenkorb"}
            </Button>
          </div>

          {oos ? <Message variant="neutral"><p>Wir informieren dich, sobald die nächste Charge geprüft und eingetroffen ist.</p></Message> : null}

          <OrderInfoBar />
        </div>
      </div>

      <div style={{ borderTop: "var(--border-hairline) solid var(--line)", paddingTop: "var(--space-xl)" }}>
        <div className="uw-pdp-tabs-desktop">
          <ContentTabs tabs={[
            { label: "Beschreibung", content: <Copy p={p} /> },
            { label: "Eigenschaften", content: <ProductInfoTable caption="Produkteigenschaften" rows={ROWS(p)} /> },
            { label: "Laborbericht", content: <p style={pStyle}>Jede Charge wird in einem Schweizer Labor auf Cannabinoide, Pestizide und Schwermetalle geprüft. Der Bericht liegt der Lieferung bei und ist über die Chargennummer abrufbar.</p> },
            { label: "Versand", content: <p style={pStyle}>Bestellungen vor 16:00 gehen am selben Tag raus. Ab 50 CHF versenden wir gratis innerhalb der Schweiz.</p> },
          ]} />
        </div>
        <div className="uw-pdp-tabs-mobile">
          <Accordion>
            <AccordionItem heading="Beschreibung" open><Copy p={p} /></AccordionItem>
            <AccordionItem heading="Eigenschaften"><ProductInfoTable rows={ROWS(p)} /></AccordionItem>
            <AccordionItem heading="Laborbericht"><p style={pStyle}>Jede Charge wird in einem Schweizer Labor geprüft.</p></AccordionItem>
            <AccordionItem heading="Versand"><p style={pStyle}>Ab 50 CHF gratis innerhalb der Schweiz.</p></AccordionItem>
          </Accordion>
        </div>
      </div>

      <h2 style={{ margin: "var(--space-3xl) 0 var(--space-m)" }}>Passt dazu</h2>
      <Carousel label="Passende Produkte" itemWidth="344px">
        {window.PRODUCTS.filter((x) => x.slug !== p.slug).map((x) => (
          <KitTile key={x.slug} p={x} onOpen={onOpen} onAdd={onAdd} />
        ))}
      </Carousel>
    </Page>
  );
}

const pStyle = { margin: "0 0 var(--space-s)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--dark-gray)", maxWidth: "var(--measure)" };

function Copy({ p }) {
  return (
    <div>
      <p style={pStyle}>{p.name} kommt aus Schweizer Indoor-Anbau, wird handverlesen und langsam getrocknet. Der Gehalt ist deklariert, nicht geschätzt.</p>
      <p style={pStyle}>Kühl, trocken und lichtgeschützt lagern. Nicht zum Verbrennen bestimmt.</p>
    </div>
  );
}

const ROWS = (p) => [
  { label: "CBD-Gehalt", value: p.cbd.replace("CBD ", "") },
  { label: "THC-Gehalt", value: p.thc.replace("THC ", "") },
  { label: "Inhalt", value: p.size },
  { label: "Anbau", value: "Indoor, Schweiz" },
  { label: "Marke", value: p.brand },
  { label: "Kategorie", value: p.cat },
];

Object.assign(window, { ProductScreen });
