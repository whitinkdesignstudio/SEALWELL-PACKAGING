import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";
import { colours } from "../data/site";

export const metadata: Metadata = {
  title: "Standard Colour Selection | Sealwell Packaging",
  description: "Explore 25 standard colour options for 13 mm and 20 mm flip-off seals offered by Sealwell Packaging for product identification and branding.",
};

export default function ColoursPage() {
  return (
    <SiteShell current="Colours">
      <PageHero
        code="COLOUR SELECTION"
        title="Standard Colour Selection"
        intro="Sealwell Packaging offers a wide range of colours to meet product identification, branding, and customer-specific packaging requirements."
        image="/assets/colours-banner.png"
        imageAlt="Sealwell Packaging standard colour selection"
      />

      <section className="section editorial-intro">
        <div>
          <p className="section-label">Colour Options</p>
          <h2>Product Identification & Branding</h2>
        </div>
        <div className="editorial-copy">
          <p>
            Sealwell Packaging offers 25 standard colour options to support:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-body)', lineHeight: '1.8' }}>
            <li>Product identification</li>
            <li>Branding</li>
            <li>Customer-specific packaging requirements</li>
          </ul>
          <p style={{ marginTop: '16px' }}>
            Custom colour requirements can also be accommodated according to customer preferences.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-surface)' }}>
        <p className="section-label">Standard SW Colour Catalog</p>
        <h2>25 Standard Colour Options</h2>
        <div className="color-catalog-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', marginTop: '24px' }}>
          {colours.map(([code, name, hex]) => (
            <div className="color-tile" key={code}>
              <div className="color-swatch-box" style={{ backgroundColor: hex }} />
              <span className="color-code">{code}</span>
              <span className="color-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <ContactBand title="Discuss Your Colour Requirement" />
    </SiteShell>
  );
}


