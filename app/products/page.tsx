import type { Metadata } from "next";
import { ArrowIcon, ContactBand, PageHero, SiteShell, WhatsAppIcon } from "../components/SiteChrome";
import { products, whatsappLink } from "../data/site";

export const metadata: Metadata = {
  title: "Pharmaceutical Flip-Off Seals & Aluminium Vial Seals | Sealwell Packaging",
  description: "Explore 13 mm and 20 mm pharmaceutical flip-off seals and aluminium vial seals from Sealwell Packaging. Available in 25 standard colours.",
};

const approvedFeatures = [
  "Available in 13 mm and 20 mm",
  "Consistent dimensions for reliable vial compatibility",
  "Clean and uniform finish",
  "Multiple colour options",
  "Suitable for pharmaceutical vial packaging",
  "Custom colour requirements can be accommodated",
  "Different/custom product configurations according to customer requirements where applicable",
] as const;

export default function ProductsPage() {
  return (
    <SiteShell current="Products">
      <PageHero
        code="PRODUCTS"
        title="Pharmaceutical Flip-Off Seals & Aluminium Vial Seals"
        intro="Our Flip-Off Seals are designed for secure and reliable closure of pharmaceutical vials. Manufactured with attention to dimensional accuracy, fit, and finish, these seals provide a clean and professional closure solution."
        image="/assets/products-banner.png"
        imageAlt="Sealwell Packaging product catalog"
      />

      <section className="section product-showcase">
        <div>
          <p className="section-label">Product Catalog</p>
          <h2>Flip-Off Seal Formats</h2>
        </div>

        {products.map((product, idx) => (
          <article className={idx % 2 === 0 ? "feature-product-20mm" : "feature-product-13mm"} id={product.slug} key={product.slug}>
            <div className="product-image-box">
              <img src={product.image} alt={product.imageAlt} />
            </div>
            <div className="product-details-box">
              <p className="section-label">{product.name}</p>
              <h3>{product.name}</h3>
              <p>{product.short}</p>

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

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a className="button button-primary" href={`${whatsappLink}%20Product%3A%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> Request Product Information <ArrowIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Features List */}
      <section className="section-dark process-timeline">
        <p className="section-label light">Features</p>
        <h2>Key Product Features</h2>
        <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
          {approvedFeatures.map((feat, index) => (
            <div className="timeline-step" key={feat}>
              <span className="step-num">0{index + 1}</span>
              <h3 style={{ fontSize: '14px', marginTop: '8px' }}>{feat}</h3>
            </div>
          ))}
        </div>
      </section>

      <ContactBand title="Discuss Your Packaging Requirement" />
    </SiteShell>
  );
}


