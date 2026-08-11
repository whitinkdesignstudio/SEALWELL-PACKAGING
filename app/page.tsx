import { ArrowIcon, ContactBand, SiteShell } from "./components/SiteChrome";
import { products } from "./data/site";

export default function Home() {
  return (
    <SiteShell current="Home">
      <section className="home-hero">
        <div className="home-copy">
          <p className="hero-kicker">Sealwell Packaging · Ahmedabad</p>
          <h1>Flip-off seals,<br />made with <em>focus.</em></h1>
          <p>We manufacture 13 mm and 20 mm flip-off seals with clear dimensional references, consistent presentation and 25 standard colour options.</p>
          <div className="hero-actions"><a className="button button-primary" href="/contact">Request a quotation <ArrowIcon /></a><a className="button button-outline" href="/products">View product range</a></div>
          <div className="metric-row"><div><strong>13 mm</strong><span>Compact format</span></div><div><strong>20 mm</strong><span>Larger format</span></div><div><strong>SW01–25</strong><span>Colour references</span></div></div>
        </div>
        <div className="hero-visual">
          <img src="/assets/home-hero.png" alt="Premium studio arrangement of blue and aluminium flip-off vial seals" />
          <span className="hero-visual-grid" aria-hidden="true" />
          <div className="hero-range-card"><span>Core product range</span><strong>13 mm &amp; 20 mm</strong><small>Flip-off seals</small></div>
        </div>
      </section>

      <section className="capability-strip" aria-label="Sealwell manufacturing highlights">
        <div><span>01</span><strong>Focused range</strong><p>13 mm and 20 mm formats</p></div>
        <div><span>02</span><strong>Clear references</strong><p>Practical dimensional information</p></div>
        <div><span>03</span><strong>Colour choice</strong><p>25 standard SW codes</p></div>
        <div><span>04</span><strong>Direct support</strong><p>Factory-level communication</p></div>
      </section>

      <section className="section intro-grid">
        <div><p className="section-label">Specialised manufacturing</p><h2>One product category.<br /><em>Close attention.</em></h2></div>
        <div className="intro-copy"><p>By concentrating on flip-off seals, we can keep product selection simple and communication precise—from initial size confirmation to colour choice and order coordination.</p><a className="text-link" href="/about">About Sealwell Packaging <ArrowIcon /></a></div>
      </section>

      <section className="product-preview section-dark">
        <div className="section-head"><div><p className="section-label light">Product range</p><h2>Choose the format<br />for your requirement.</h2></div><a className="text-link light" href="/products">View dimensional references <ArrowIcon /></a></div>
        <div className="preview-grid">
          {products.map((product, index) => (
            <article className="preview-card" key={product.slug}>
              <div className="preview-media"><img src={product.image} alt={product.imageAlt} /></div>
              <div className="preview-copy"><span>0{index + 1}</span><h3>{product.name}</h3><p>{product.short}</p><a href={`/products#${product.slug}`}>View product <ArrowIcon /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach-section">
        <div className="approach-title"><p className="section-label">A clear order journey</p><h2>From requirement<br />to <em>response.</em></h2><p className="approach-summary">A straightforward process keeps product, colour and quantity details aligned before order coordination.</p></div>
        <div className="approach-list">
          <article><span>01</span><div><h3>Share the requirement</h3><p>Tell us the vial format, seal size, preferred colour and approximate quantity.</p></div></article>
          <article><span>02</span><div><h3>Confirm the details</h3><p>We align the product reference and commercial requirement before proceeding.</p></div></article>
          <article><span>03</span><div><h3>Coordinate directly</h3><p>Our team remains accessible for quotation, order and delivery communication.</p></div></article>
        </div>
      </section>

      <section className="colour-teaser">
        <div><p className="section-label">Colour system</p><h2>25 standard choices.<br />One simple code system.</h2><p>Review the complete SW01–SW25 range, then confirm the final shade against a physical sample.</p><a className="button button-primary" href="/colours">Explore colour range <ArrowIcon /></a></div>
        <div className="teaser-swatches">{["#f4f1e8", "#c7393d", "#eb4b08", "#efd30c", "#2353ae", "#614095", "#1e9b53", "#0082a0"].map((c, i) => <span style={{ backgroundColor: c }} key={i}><i /></span>)}</div>
      </section>
      <ContactBand />
    </SiteShell>
  );
}
