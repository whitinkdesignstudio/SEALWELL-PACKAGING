import type { Metadata } from "next";
import { ArrowIcon, ContactBand, PageHero, SiteShell, WhatsAppIcon } from "../../components/SiteChrome";
import { products, whatsappLink } from "../../data/site";

export function generateStaticParams() {
  return [
    { slug: "13-mm" },
    { slug: "20-mm" },
    { slug: "13-mm-flip-off-seal" },
    { slug: "20-mm-flip-off-seal" },
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const is13 = params.slug.includes("13");
  if (is13) {
    return {
      title: "13 mm Flip-Off Seal | Sealwell Packaging",
      description: "13 mm Flip-Off Seals for pharmaceutical vials. Aluminium outer component with flip-off configuration for compact closure needs.",
    };
  }
  return {
    title: "20 mm Flip-Off Seal | Sealwell Packaging",
    description: "20 mm Flip-Off Seals for larger pharmaceutical vials. Manufactured with controlled dimensions, clean finish, and multiple colours.",
  };
}

const applications = [
  "Pharmaceutical vials",
  "Injectable product packaging",
  "Pharmaceutical formulations",
  "Biotech and healthcare packaging",
  "Other suitable vial-closure applications",
] as const;

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const is13 = params.slug.includes("13");
  const product = products.find((p) => (is13 ? p.slug === "13-mm" : p.slug === "20-mm")) || products[0];

  return (
    <SiteShell current="Products">
      <PageHero
        code={is13 ? "NOMINAL SIZE: 13 MM" : "NOMINAL SIZE: 20 MM"}
        title={is13 ? "13 mm Flip-Off Seal" : "20 mm Flip-Off Seal"}
        intro={
          is13
            ? "Our 13 mm Flip-Off Seal is designed for pharmaceutical vials requiring a compact and reliable closure solution."
            : "Our 20 mm Flip-Off Seal is designed for larger pharmaceutical vials and provides a secure, consistent and visually clean closure solution."
        }
        image={product.image}
        imageAlt={product.imageAlt}
      />

      {/* Product Description */}
      <section className="section editorial-intro">
        <div>
          <p className="section-label">Product Overview</p>
          <h2>{is13 ? "13 mm Flip-Off Seal" : "20 mm Flip-Off Seal"}</h2>
        </div>
        <div className="editorial-copy">
          <p>
            {is13
              ? "Our 13 mm Flip-Off Seal is designed for pharmaceutical vials requiring a compact and reliable closure solution. The seal combines an aluminium outer component with a flip-off configuration to provide convenient access to the vial while maintaining a secure closure."
              : "Our 20 mm Flip-Off Seal is designed for larger pharmaceutical vials and provides a secure, consistent and visually clean closure solution. Manufactured with controlled dimensions and available in multiple colours, the 20 mm seal can be supplied according to customer-specific packaging requirements."}
          </p>
        </div>
      </section>

      {/* Product Specifications & Features */}
      <section className="section product-showcase">
        <div>
          <p className="section-label">Product Features</p>
          <h2>Key Characteristics</h2>
        </div>
        <div className="feature-product-20mm">
          <div className="product-image-box">
            <img src={product.image} alt={product.imageAlt} />
          </div>
          <div className="product-details-box">
            <p className="section-label">{product.name}</p>
            <h3>Dimensional Specifications</h3>
            <table className="specs-table">
              <tbody>
                {product.specs.map(([key, val]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{val}</td>
                  </tr>
                ))}
                <tr>
                  <td>Colours Available</td>
                  <td>25 Standard Colours (SW01 to SW25)</td>
                </tr>
              </tbody>
            </table>
            <div>
              <a className="button button-primary" href={`${whatsappLink}%20Product%3A%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Enquire About {is13 ? "13 mm" : "20 mm"} Seals <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-dark process-timeline">
        <p className="section-label light">Suitable Applications</p>
        <h2>Applications</h2>
        <div className="timeline-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", marginTop: "40px" }}>
          {applications.map((app, idx) => (
            <div className="timeline-step" key={app}>
              <span className="step-num">0{idx + 1}</span>
              <h3 style={{ fontSize: "14px", marginTop: "8px" }}>{app}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Colour & Customization */}
      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p className="section-label">Shade Options</p>
            <h2>Colour & Customization</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", marginTop: "8px" }}>
              Available in 25 standard colours. Custom colour requirements and packaging configurations can be developed according to customer requirements.
            </p>
          </div>
          <a className="text-link" href="/colours">View Colour Range <ArrowIcon /></a>
        </div>
      </section>

      <ContactBand title={is13 ? "Enquire About 13 mm Flip-Off Seals" : "Enquire About 20 mm Flip-Off Seals"} />
    </SiteShell>
  );
}
