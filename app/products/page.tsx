import type { Metadata } from "next";
import { ArrowIcon, ContactBand, PageHero, SiteShell, WhatsAppIcon } from "../components/SiteChrome";
import { products, whatsappLink } from "../data/site";
import { ProductFeaturesSection } from "../components/ProductFeaturesSection";
import { RubberStoppersSection } from "../components/RubberStoppersSection";

export const metadata: Metadata = {
  title: "Pharmaceutical Rubber Stoppers & Flip-Off Seals | Sealwell Packaging",
  description: "Explore high-quality pharmaceutical rubber stoppers, lyophilization closures, industrial bottle stoppers, and aluminium flip-off seals from Sealwell Packaging since 1995.",
};

export default function ProductsPage() {
  return (
    <SiteShell current="Products">
      <PageHero
        title="Pharmaceutical & Industrial Closures"
        intro="High-precision rubber stoppers, lyophilization seals, and aluminium flip-off closures."
        image="/assets/products-banner.png"
        imageAlt="Sealwell Packaging product catalog"
      />

      {/* Flip-Off Seal Formats Section (First) */}
      <section className="section product-showcase">
        <div>
          <h2>Flip-Off Seal Formats</h2>
        </div>

        {products.map((product, idx) => (
          <article className={idx % 2 === 0 ? "feature-product-20mm" : "feature-product-13mm"} id={product.slug} key={product.slug}>
            <div className="product-image-box">
              <img src={product.image} alt={product.imageAlt} />
            </div>
            <div className="product-details-box">
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
                <a className="button button-primary" style={{ color: '#ffffff' }} href={`${whatsappLink}%20Product%3A%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> Request Product Information <ArrowIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Premium Human-Designed Rubber Stoppers Showcase Section */}
      <RubberStoppersSection />

      {/* Redesigned Product Engineering Features Section */}
      <ProductFeaturesSection />

      <ContactBand title="Discuss Your Packaging Requirement" />
    </SiteShell>
  );
}



