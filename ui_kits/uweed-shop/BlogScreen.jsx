const { BlogCard, TabNav, Pagination, Card, Link } = window.UWeedDesignSystem_8df554;

const POSTS = [
  { title: "CBD am Steuer: was in der Schweiz gilt", excerpt: "Grenzwerte, Kontrollen und was bei einem Test passiert.", category: "Law & Safety", date: "August 2026", dt: "2026-08", c: "#CED4F3" },
  { title: "Vollspektrum oder Isolat?", excerpt: "Was der Unterschied für die Wirkung bedeutet.", category: "Wissen", date: "Juli 2026", dt: "2026-07", c: "#D1EFE5" },
  { title: "Indoor, Outdoor, Greenhouse", excerpt: "Wie der Anbau Terpene und Preis verändert.", category: "Anbau", date: "Juli 2026", dt: "2026-07", c: "#F4E2ED" },
  { title: "Hanftee richtig zubereiten", excerpt: "Warum Fett im Wasser den Unterschied macht.", category: "Wellness", date: "Juni 2026", dt: "2026-06", c: "#FFF5EB" },
  { title: "Was steht im Laborbericht?", excerpt: "Cannabinoide, Pestizide, Schwermetalle — Zeile für Zeile.", category: "Wissen", date: "Juni 2026", dt: "2026-06", c: "#CED4F3" },
  { title: "CBD und Schlaf: die Studienlage", excerpt: "Was belegt ist und was noch offen bleibt.", category: "Wellness", date: "Mai 2026", dt: "2026-05", c: "#D1EFE5" },
];

function BlogScreen() {
  const [featured, ...rest] = POSTS;
  return (
    <Page crumbs={[{ label: "Startseite", href: "#" }, { label: "Blog" }]}>
      <h1 style={{ margin: "var(--space-m) 0 var(--space-xs)" }}>Blog</h1>
      <p style={{ maxWidth: "var(--measure)", fontSize: "var(--fs-lead)", lineHeight: "var(--lh-lead)", margin: "0 0 var(--space-l)" }}>
        Recht, Anbau, Laborwerte und Anwendung — geschrieben für Leute, die wissen wollen, was sie kaufen.
      </p>

      <TabNav label="Blogkategorien" items={[
        { label: "Alle Artikel", active: true }, { label: "Wissen" }, { label: "Anbau" }, { label: "Wellness" }, { label: "Law & Safety" },
      ]} />

      <div style={{ margin: "var(--space-l) 0" }}>
        <BlogCard variant="featured" title={featured.title} excerpt={featured.excerpt}
          image={window.ph(1600, 900, featured.c, "16:9")} category={featured.category}
          date={featured.date} dateTime={featured.dt} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,300px)", gap: "var(--space-2xl)", alignItems: "start" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(262px,1fr))", gap: "var(--space-l)" }}>
          {rest.map((p) => (
            <BlogCard key={p.title} title={p.title} excerpt={p.excerpt}
              image={window.ph(1600, 900, p.c, "16:9")} category={p.category} date={p.date} dateTime={p.dt} />
          ))}
        </div>
        <Card variant="tint" style={{ padding: "var(--space-l)" }}>
          <h2 style={{ fontSize: "var(--fs-h5)", margin: "0 0 var(--space-xs)" }}>Weitere Artikel</h2>
          {POSTS.slice(2, 5).map((p) => (
            <BlogCard key={p.title} variant="compact" title={p.title}
              image={window.ph(1600, 900, p.c, "")} date={p.date} dateTime={p.dt} />
          ))}
          <p style={{ margin: "var(--space-m) 0 0" }}><Link variant="action" href="#">Alle Artikel anzeigen</Link></p>
        </Card>
      </div>

      <div style={{ margin: "var(--space-2xl) 0 0" }}>
        <Pagination current={1} total={7} count="52 Artikel" />
      </div>
    </Page>
  );
}

Object.assign(window, { BlogScreen });
