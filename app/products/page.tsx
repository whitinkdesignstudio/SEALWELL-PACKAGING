import type { Metadata } from "next";
import { ArrowIcon, ContactBand, PageHero, SiteShell } from "../components/SiteChrome";
import { products, whatsappLink } from "../data/site";

export const metadata: Metadata = { title: "Products | Sealwell Packaging", description: "Explore Sealwell Packaging 13 mm and 20 mm flip-off seals with dimensional specifications." };

export default function ProductsPage() {
  return (
    <SiteShell current="Products">
      <PageHero code="02 / PRODUCTS" title={<>Two precise formats.<br /><em>Built for vial closure.</em></>} intro="Explore our core 13 mm and 20 mm flip-off seal range, available across 25 standard colours." image="/assets/products-banner.png" imageAlt="Blue 13 mm and red 20 mm flip-off seals in a premium studio setting" imagePosition="center" />
      <section className="product-overview section">
        <div><p className="section-label">Core range</p><h2>Start with the nominal size.</h2></div>
        <div className="size-selector">
          {products.map((product, index) => <a href={`#${product.slug}`} key={product.slug}><span>0{index + 1}</span><strong>{product.name}</strong><small>{product.short}</small><ArrowIcon /></a>)}
        </div>
      </section>
      <section className="products-page section">
        {products.map((product, index) => (
          <article className="product-detail" id={product.slug} key={product.slug}>
            <div className={`detail-media detail-media-${product.slug}`}><img src={product.image} alt={product.imageAlt} /><span>0{index + 1}</span><div className="detail-media-label"><small>Nominal format</small><strong>{product.name.replace(" Flip-Off Seal", "")}</strong></div></div>
            <div className="detail-copy"><p className="section-label">Flip-off seal</p><h2>{product.name}</h2><p>{product.short} Use the dimensional values below as an initial reference when discussing your requirement.</p><dl>{product.specs.map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl><p className="spec-disclaimer">Final suitability, tolerances and order specification should be confirmed with our team before production.</p><a className="button button-primary" href={`${whatsappLink}%20Product%3A%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">Enquire about {product.name} <ArrowIcon /></a></div>
          </article>
        ))}
      </section>
      <section className="fit-note"><div><span>What to share</span><h2>Four details help us respond faster.</h2></div><div className="requirement-list"><span>Nominal seal size</span><span>Preferred SW colour code</span><span>Required quantity</span><span>Delivery location</span></div></section>
      <ContactBand />
    </SiteShell>
  );
}
