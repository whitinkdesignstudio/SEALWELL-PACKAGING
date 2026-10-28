import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ContactBand, PageHero, SiteShell, WhatsAppIcon } from "../../components/SiteChrome";
import { products, whatsappLink } from "../../data/site";
import { BreadcrumbSchema, ProductSchema } from "../../components/JsonLd";

export function generateStaticParams() {
  return [
    { slug: "13-mm" },
    { slug: "20-mm" },
    { slug: "13-mm-flip-off-seal" },
    { slug: "20-mm-flip-off-seal" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  const is13 = slug.includes("13");
  const canonicalPath = is13 ? "/products/13-mm" : "/products/20-mm";
  const fullCanonicalUrl = `https://www.sealwellpackaging.com${canonicalPath}`;
  const title = is13
    ? "13 mm Flip-Off Seal | Sealwell Packaging"
    : "20 mm Flip-Off Seal | Sealwell Packaging";
  const description = is13
    ? "13 mm Flip-Off Seals for pharmaceutical vials. Aluminium outer component with flip-off configuration for compact closure needs."
    : "20 mm Flip-Off Seals for larger pharmaceutical vials. Manufactured with controlled dimensions, clean finish, and multiple colours.";
  const image = is13 ? "/assets/13mm-flip-off-seal.png" : "/assets/20mm-flip-off-seal.png";
  const imageAlt = is13 ? "13 mm flip-off seal samples" : "20 mm red flip-off seal samples";

  return {
    title,
    description,
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: fullCanonicalUrl,
      type: "website",
      images: [
        {
          url: image,
          width: 800,
          height: 800,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const applications = [
  "Pharmaceutical vials",
  "Injectable product packaging",
  "Pharmaceutical formulations",
  "Biotech and healthcare packaging",
  "Other suitable vial-closure applications",
] as const;

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";
  const is13 = slug.includes("13");
  const canonicalPath = is13 ? "/products/13-mm" : "/products/20-mm";
  const product = products.find((p) => (is13 ? p.slug === "13-mm" : p.slug === "20-mm")) || products[0];
  const bannerImage = is13 ? "/assets/banner/13mm.png" : "/assets/banner/20m.png";

  return (
    <SiteShell current="Products">
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: is13 ? "13 mm Flip-Off Seal" : "20 mm Flip-Off Seal", path: canonicalPath },
        ]}
      />
      <ProductSchema
        name={product.name}
        description={product.short}
        image={product.image}
        url={`https://www.sealwellpackaging.com${canonicalPath}`}
        specs={product.specs}
      />
      <PageHero
        title={is13 ? "13 mm Flip-Off Seal" : "20 mm Flip-Off Seal"}
        intro={
          is13
            ? "Compact and reliable 13 mm flip-off seals for pharmaceutical vials."
            : "Secure and consistent 20 mm flip-off seals for larger vial closures."
        }
        image={bannerImage}
        imageAlt={is13 ? "13 mm flip-off seal banner" : "20 mm flip-off seal banner"}
      />

      {/* Product Description */}
      <section className="section editorial-intro">
        <div className="editorial-intro-bg">
          <img src={is13 ? "/assets/banner/13mmm.png" : "/assets/banner/20 m.png"} alt={is13 ? "13 mm Flip-Off Seal background" : "20 mm Flip-Off Seal background"} loading="lazy" decoding="async" />
          <div className="editorial-intro-overlay" />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2>{is13 ? "13 mm Flip-Off Seal" : "20 mm Flip-Off Seal"}</h2>
        </div>
        <div className="editorial-copy" style={{ position: "relative", zIndex: 2 }}>
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
          <h2>Key Characteristics</h2>
        </div>
        <div className="feature-product-20mm">
          <div className="product-image-box">
            <img src={product.image} alt={product.imageAlt} loading="lazy" decoding="async" />
          </div>
          <div className="product-details-box">
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
            <h2>Colour & Customization</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", marginTop: "8px" }}>
              Available in 25 standard colours. Custom colour requirements and packaging configurations can be developed according to customer requirements.
            </p>
          </div>
          <Link className="text-link" href="/colours">View Colour Range <ArrowIcon /></Link>
        </div>
      </section>

      <ContactBand title={is13 ? "Enquire About 13 mm Flip-Off Seals" : "Enquire About 20 mm Flip-Off Seals"} />
    </SiteShell>
  );
}
