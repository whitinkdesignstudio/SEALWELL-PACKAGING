import type { Metadata } from "next";
import { ArrowIcon, ContactBand, PageHero, SiteShell, WhatsAppIcon } from "../components/SiteChrome";
import { products, whatsappLink } from "../data/site";
import { ProductFeaturesSection } from "../components/ProductFeaturesSection";

export const metadata: Metadata = {
  title: "Pharmaceutical Flip-Off Seals & Aluminium Vial Seals | Sealwell Packaging",
  description: "Explore 13 mm and 20 mm pharmaceutical flip-off seals and aluminium vial seals from Sealwell Packaging. Available in 25 standard colours.",
};

export default function ProductsPage() {
  return (
    <SiteShell current="Products">
      <PageHero
        title="Flip-Off & Aluminium Seals"
        intro="High-precision 13 mm & 20 mm seals for pharmaceutical vials."
        image="/assets/products-banner.png"
        imageAlt="Sealwell Packaging product catalog"
      />

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
                <a className="button button-primary" href={`${whatsappLink}%20Product%3A%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> Request Product Information <ArrowIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Redesigned Product Engineering Features Section */}
      <ProductFeaturesSection />

      <ContactBand title="Discuss Your Packaging Requirement" />
    </SiteShell>
  );
}


