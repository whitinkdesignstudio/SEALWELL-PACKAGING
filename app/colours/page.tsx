import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";
import { ColourSelectionSection } from "../components/ColourSelectionSection";

export const metadata: Metadata = {
  title: "Standard Colour Selection | Sealwell Packaging",
  description: "Explore 25 standard colour options for 13 mm and 20 mm flip-off seals offered by Sealwell Packaging for product identification and branding.",
};

export default function ColoursPage() {
  return (
    <SiteShell current="Colours">
      <PageHero
        title="Standard Colour Selection"
        intro="Sealwell Packaging offers a wide range of colours to meet product identification, branding, and customer-specific packaging requirements."
        image="/assets/colours-banner.png"
        imageAlt="Sealwell Packaging standard colour selection"
      />

      <section className="section editorial-intro">
        <div className="editorial-intro-bg">
          <img src="/assets/banner/colour.png" alt="Sealwell Packaging colour selection" />
          <div className="editorial-intro-overlay" />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2>Product Identification & Branding</h2>
        </div>
        <div className="editorial-copy" style={{ position: "relative", zIndex: 2 }}>
          <p>
            Sealwell Packaging offers 25 standard colour options to support:
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "rgba(255,255,255,0.9)", lineHeight: "1.8" }}>
            <li>Product identification</li>
            <li>Branding</li>
            <li>Customer-specific packaging requirements</li>
          </ul>
          <p style={{ marginTop: "16px" }}>
            Custom colour requirements can also be accommodated according to customer preferences.
          </p>
        </div>
      </section>

      {/* Logo-Inspired Colour Grid */}
      <ColourSelectionSection title="25 Standard Colour Options" />

      <ContactBand title="Discuss Your Colour Requirement" />
    </SiteShell>
  );
}


