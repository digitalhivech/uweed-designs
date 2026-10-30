const {
  Card, Price, QuantitySelector, Button, OrderSummary, CouponForm, FormField, Input,
  Select, Checkbox, RadioGroup, Radio, Message, Link,
} = window.UWeedDesignSystem_8df554;

function CartScreen({ lines, onQty, onRemove, onNav }) {
  const [step, setStep] = React.useState("cart");
  const subtotal = lines.reduce((s, l) => s + l.amount * l.qty, 0);
  const discount = subtotal > 0 ? subtotal * 0.1 : 0;
  const chf = (n) => n.toFixed(2) + " CHF";

  if (!lines.length) {
    return (
      <Page crumbs={[{ label: "Startseite", href: "#" }, { label: "Warenkorb" }]}>
        <h1 style={{ margin: "var(--space-m) 0 var(--space-m)" }}>Warenkorb</h1>
        <Card variant="tint" style={{ padding: "var(--space-2xl)", textAlign: "center", display: "grid", gap: "var(--space-m)", justifyItems: "center" }}>
          <p style={{ margin: 0, fontSize: "var(--fs-small)" }}>Noch nichts im Warenkorb.</p>
          <Button variant="nav" onClick={() => onNav("category")}>Zum Shop</Button>
        </Card>
      </Page>
    );
  }

  return (
    <Page crumbs={[{ label: "Startseite", href: "#" }, { label: step === "cart" ? "Warenkorb" : "Kasse" }]}>
      <h1 style={{ margin: "var(--space-m) 0 var(--space-l)" }}>{step === "cart" ? "Warenkorb" : "Kasse"}</h1>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,360px)", gap: "var(--space-2xl)", alignItems: "start" }}>
        <div style={{ display: "grid", gap: "var(--space-l)" }}>
          {step === "cart" ? (
            <Card style={{ padding: "var(--space-m) var(--space-l)" }}>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {lines.map((l) => (
                  <li key={l.slug} style={{ display: "flex", gap: "var(--space-m)", padding: "var(--space-m) 0", borderTop: "var(--border-hairline) solid var(--line)" }}>
                    <img src={window.ph(160, 160, l.tile, "")} alt="" width="80" height="80"
                      style={{ width: 80, height: 80, borderRadius: "var(--radius-inner)", objectFit: "cover", flex: "0 0 auto" }} />
                    <div style={{ flex: 1, minWidth: 0, display: "grid", gap: "var(--space-2xs)" }}>
                      <p style={{ margin: 0, fontSize: "var(--fs-small)", fontWeight: "var(--fw-medium)", color: "var(--dark-blue)" }}>{l.name}</p>
                      <p style={{ margin: 0, fontSize: "var(--fs-meta)", color: "var(--dark-gray)" }}>{l.size}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-s)", marginTop: "var(--space-2xs)" }}>
                        <QuantitySelector size="md" value={l.qty} removeAtOne onChange={(n) => onQty(l.slug, n)} onRemove={() => onRemove(l.slug)} />
                        <Price role="list" value={chf(l.amount * l.qty)} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          ) : (
            <div style={{ display: "grid", gap: "var(--space-xl)" }}>
              <section>
                <h2 style={{ fontSize: "var(--fs-h4)", margin: "0 0 var(--space-s)" }}>Kontakt</h2>
                <p style={{ margin: "0 0 var(--space-m)", fontSize: "var(--fs-small)", color: "var(--dark-gray)" }}>
                  Bereits Kunde? <Link href="#">Anmelden</Link>
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-m)" }}>
                  <FormField label="E-Mail" htmlFor="ck-mail" required><Input id="ck-mail" type="email" autoComplete="email" required /></FormField>
                  <FormField label="Telefon" htmlFor="ck-tel" optional><Input id="ck-tel" type="tel" autoComplete="tel" /></FormField>
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: "var(--fs-h4)", margin: "0 0 var(--space-m)" }}>Lieferung</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-m)" }}>
                  <FormField label="Vorname" htmlFor="ck-fn" required><Input id="ck-fn" autoComplete="given-name" required /></FormField>
                  <FormField label="Nachname" htmlFor="ck-ln" required><Input id="ck-ln" autoComplete="family-name" required /></FormField>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <FormField label="Strasse und Nummer" htmlFor="ck-st" required><Input id="ck-st" autoComplete="address-line1" required /></FormField>
                  </div>
                  <FormField label="Postleitzahl" htmlFor="ck-plz" required error="Bitte gib eine gültige PLZ ein.">
                    <Input id="ck-plz" inputMode="numeric" autoComplete="postal-code" defaultValue="80" invalid aria-describedby="ck-plz-msg" required />
                  </FormField>
                  <FormField label="Ort" htmlFor="ck-city" required><Input id="ck-city" autoComplete="address-level2" required /></FormField>
                  <div style={{ gridColumn: "1 / -1" }}>
                    <FormField label="Land" htmlFor="ck-country"><Select id="ck-country" autoComplete="country" options={["Schweiz", "Liechtenstein"]} /></FormField>
                  </div>
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: "var(--fs-h4)", margin: "0 0 var(--space-m)" }}>Versandart</h2>
                <RadioGroup legend="Versandart" style={{ display: "grid", gap: "var(--space-xs)" }}>
                  <Radio card name="ship" label="Swiss Post — Priority" sub="1–2 Werktage · gratis" defaultChecked />
                  <Radio card name="ship" label="Swiss Post — Economy" sub="2–4 Werktage · gratis" />
                  <Radio card name="ship" label="Abholung Zürich" sub="Nicht verfügbar für diese Adresse" disabled />
                </RadioGroup>
              </section>

              <section>
                <h2 style={{ fontSize: "var(--fs-h4)", margin: "0 0 var(--space-m)" }}>Zahlung</h2>
                <RadioGroup legend="Zahlungsart" style={{ display: "grid", gap: "var(--space-xs)" }}>
                  <Radio card name="pay" label="TWINT" sub="Bestätigung in der App" defaultChecked />
                  <Radio card name="pay" label="Karte" sub="Visa, Mastercard" />
                  <Radio card name="pay" label="Rechnung" sub="30 Tage · nur Schweiz" />
                </RadioGroup>
              </section>

              <Checkbox label="Ich bin 18 Jahre oder älter und akzeptiere die AGB" required />
            </div>
          )}
        </div>

        <Card variant="tint" style={{ padding: "var(--space-l)", display: "grid", gap: "var(--space-m)", position: "sticky", top: 140 }}>
          <h2 style={{ fontSize: "var(--fs-h5)", margin: 0 }}>Übersicht</h2>
          <OrderSummary
            rows={[
              { label: "Zwischensumme", value: chf(subtotal) },
              { label: "Versand", value: "gratis" },
              { label: "Rabatt ANGEBOT10", value: "−" + chf(discount), discount: true },
            ]}
            total={chf(subtotal - discount)}
          />
          <CouponForm applied={{ code: "ANGEBOT10", amount: "−" + chf(discount) }} onRemove={() => {}} />
          {step === "cart" ? (
            <Button variant="buy" block onClick={() => setStep("checkout")}>Zur Kasse</Button>
          ) : (
            <>
              <Button variant="buy" block>Jetzt bestellen</Button>
              <Message variant="info"><p>Diese Kasse ist ein Mock — es wird nichts abgeschickt.</p></Message>
            </>
          )}
          <p style={{ margin: 0, fontSize: "var(--fs-meta)", color: "var(--dark-gray)", textAlign: "center" }}>
            Gratis Versand ab 50 CHF · 14 Tage Rückgabe
          </p>
        </Card>
      </div>
    </Page>
  );
}

Object.assign(window, { CartScreen });
