import { ArrowIcon, ContactBand, SiteShell, WhatsAppIcon } from "./components/SiteChrome";
import { ClientLogosMarquee } from "./components/ClientLogosMarquee";
import { colours, products, whatsappLink } from "./data/site";

const whyPoints = [
  { title: "Multiple Sizes", copy: "13 mm and 20 mm Flip-Off Seals." },
  { title: "Wide Colour Selection", copy: "25 standard colour options for product identification and customer requirements." },
  { title: "Customized Solutions", copy: "Colour and product configurations developed according to customer requirements." },
  { title: "Consistent Manufacturing", copy: "Focus on dimensional consistency, finish, and reliable performance." },
  { title: "Bulk Manufacturing", copy: "Capability to cater to B2B and pharmaceutical packaging requirements." },
] as const;

const applications = [
  "Pharmaceutical vials",
  "Injectable product packaging",
  "Pharmaceutical formulations",
  "Biotech and healthcare packaging",
  "Other suitable vial-closure applications",
] as const;

export default function Home() {
  const prod20 = products.find((p) => p.slug === "20-mm") || products[1];
  const prod13 = products.find((p) => p.slug === "13-mm") || products[0];

  return (
    <SiteShell current="Home">
      {/* 1. Hero */}
      <section className="home-hero">
        <div className="home-copy">
          <p className="section-label">Sealwell Packaging</p>
          <h1>Pharmaceutical Flip-Off Seals</h1>
          <p>
            Sealwell Packaging manufactures 13 mm and 20 mm Flip-Off Seals and Aluminium Vial Seals in 25 standard colours.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/products">View Products <ArrowIcon /></a>
            <a className="button button-outline" href="/contact">Contact Us</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/home-hero.png" alt="Sealwell Packaging flip-off seals" />
        </div>
      </section>

      {/* 2. Micro Info Strip */}
      <div className="info-strip">
        <div className="info-item">
          <strong>13 mm Flip-Off Seals</strong>
          <span>Compact Format</span>
        </div>
        <div className="info-item">
          <strong>20 mm Flip-Off Seals</strong>
          <span>Larger Format</span>
        </div>
        <div className="info-item">
          <strong>25 Standard Colours</strong>
          <span>SW01 to SW25</span>
        </div>
        <div className="info-item">
          <strong>B2B Manufacturing</strong>
          <span>Bulk Supply Capability</span>
        </div>
      </div>

      {/* 2.5 Client Logos Moving Marquee Line */}
      <ClientLogosMarquee />

      {/* 3. About Section */}
      <section className="section editorial-intro">
        <div>
          <p className="section-label">Overview</p>
          <h2>About Sealwell Packaging</h2>
        </div>
        <div className="editorial-copy">
          <p>
            Our Flip-Off Seals are designed for secure and reliable closure of pharmaceutical vials. Manufactured with attention to dimensional accuracy, fit, and finish, these seals provide a clean and professional closure solution for pharmaceutical packaging applications.
          </p>
          <a className="text-link" href="/about">Learn more about Sealwell Packaging <ArrowIcon /></a>
        </div>
      </section>

      {/* 4. Product Overview */}
      <section className="section product-showcase">
        <div>
          <p className="section-label">Main Products</p>
          <h2>Flip-Off Seal Range</h2>
        </div>

        {/* 20 mm Feature */}
        <article className="feature-product-20mm">
          <div className="product-image-box">
            <img src={prod20.image} alt={prod20.imageAlt} />
          </div>
          <div className="product-details-box">
            <p className="section-label">20 mm Nominal Size</p>
            <h3>{prod20.name}</h3>
            <p>
              Our 20 mm Flip-Off Seal is designed for larger pharmaceutical vials and provides a secure, consistent, and visually clean closure solution. Manufactured with controlled dimensions and available in multiple colours, the 20 mm seal can be supplied according to customer-specific packaging requirements.
            </p>
            <table className="specs-table">
              <tbody>
                {prod20.specs.map(([spec, val]) => (
                  <tr key={spec}>
                    <td>{spec}</td>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <a className="button button-primary" href="/products/20-mm-flip-off-seal">Explore 20 mm Seal <ArrowIcon /></a>
            </div>
          </div>
        </article>

        {/* 13 mm Feature */}
        <article className="feature-product-13mm">
          <div className="product-details-box">
            <p className="section-label">13 mm Nominal Size</p>
            <h3>{prod13.name}</h3>
            <p>
              Our 13 mm Flip-Off Seal is designed for pharmaceutical vials requiring a compact and reliable closure solution. The seal combines an aluminium outer component with a flip-off configuration to provide convenient access to the vial while maintaining a secure closure.
            </p>
            <table className="specs-table">
              <tbody>
                {prod13.specs.map(([spec, val]) => (
                  <tr key={spec}>
                    <td>{spec}</td>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <a className="button button-primary" href="/products/13-mm-flip-off-seal">Explore 13 mm Seal <ArrowIcon /></a>
            </div>
          </div>
          <div className="product-image-box">
            <img src={prod13.image} alt={prod13.imageAlt} />
          </div>
        </article>
      </section>

      {/* 5. Why Choose Sealwell Packaging */}
      <section className="section why-sealwell">
        <div>
          <p className="section-label">Core Positioning</p>
          <h2>Why Choose Sealwell Packaging</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '12px' }}>
            Reliable • Consistent • Customizable • B2B Focused
          </p>
        </div>
        <div className="why-list">
          {whyPoints.map((item) => (
            <div className="why-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Applications */}
      <section className="section-dark process-timeline">
        <p className="section-label light">Target Packaging</p>
        <h2>Suitable Applications</h2>
        <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginTop: '40px' }}>
          {applications.map((app, index) => (
            <div className="timeline-step" key={app}>
              <span className="step-num">0{index + 1}</span>
              <h3 style={{ fontSize: '15px', marginTop: '8px' }}>{app}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Colour Range Preview */}
      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p className="section-label">SW Code System</p>
            <h2>Standard Colour Selection</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '8px' }}>
              We offer 25 standard colour options to meet product identification, branding, and customer-specific packaging requirements.
            </p>
          </div>
          <a className="text-link" href="/colours">View Colour Range <ArrowIcon /></a>
        </div>
        <div className="color-catalog-grid">
          {colours.slice(0, 12).map(([code, name, hex]) => (
            <div className="color-tile" key={code}>
              <div className="color-swatch-box" style={{ backgroundColor: hex }} />
              <span className="color-code">{code}</span>
              <span className="color-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="contact-band">
        <div>
          <h2>Discuss Your Packaging Requirement</h2>
        </div>
        <div>
          <p>Contact Sealwell Packaging to discuss your required seal sizes, colour options, or custom configurations.</p>
          <div className="contact-band-actions">
            <a className="button button-white" href="/contact">Send Enquiry <ArrowIcon /></a>
            <a className="button button-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }} href={whatsappLink} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp Sealwell Packaging
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}


