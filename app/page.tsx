import Link from "next/link";
import { ArrowIcon, SiteShell, WhatsAppIcon } from "./components/SiteChrome";
import { ClientLogosMarquee } from "./components/ClientLogosMarquee";
import { products, whatsappLink } from "./data/site";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ColourSelectionSection } from "./components/ColourSelectionSection";

export default function Home() {
  const prod20 = products.find((p) => p.slug === "20-mm") || products[1];
  const prod13 = products.find((p) => p.slug === "13-mm") || products[0];

  return (
    <SiteShell current="Home">
      {/* 1. Hero */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src="/assets/home-hero.png" alt="Sealwell Packaging flip-off seals" />
          <div className="home-hero-overlay" />
        </div>
        <div className="home-copy">
          <h2>Pharmaceutical Flip-Off Seals</h2>
          <p>
            Sealwell Packaging manufactures 13 mm and 20 mm Flip-Off Seals and Aluminium Vial Seals in 25 standard colours.
          </p>
          <div className="hero-actions">
            <Link className="hero-btn-primary" href="/products">View Products <ArrowIcon /></Link>
            <Link className="hero-btn-secondary" href="/contact">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* 2. Micro Info Strip - Redesigned Premium Banner */}
      <div className="info-strip">
        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4l3 3" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <div className="info-text">
            <strong>35+ Years Experience</strong>
            <span>Pharma & Marketing</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12M6 12h12" />
            </svg>
          </div>
          <div className="info-text">
            <strong>20 mm Flip-Off Seals</strong>
            <span>Larger Format</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a10 10 0 0 1 10 10c0 2.5-2 4.5-4.5 4.5H16a2 2 0 0 0-2 2v.5c0 1.5-1 2.5-2 2.5a10 10 0 0 1-10-10A10 10 0 0 1 12 2z" />
            </svg>
          </div>
          <div className="info-text">
            <strong>25 Standard Colours</strong>
            <span>SW01 to SW25</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div className="info-text">
            <strong>B2B Manufacturing</strong>
            <span>Bulk Supply Capability</span>
          </div>
        </div>
      </div>

      {/* 2.5 Client Logos Moving Marquee Line */}
      <ClientLogosMarquee />

      {/* 3. About Section */}
      <section className="section editorial-intro">
        <div className="editorial-intro-bg">
          <img src="/assets/about-manufacturing-bg.png" alt="Sealwell Packaging cleanroom facility" />
          <div className="editorial-intro-overlay" />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2>About Sealwell Packaging</h2>
        </div>
        <div className="editorial-copy" style={{ position: 'relative', zIndex: 2 }}>
          <p>
            Sealwell Packaging brings an overall experience of 35+ years in pharmaceutical and marketing. Our Flip-Off Seals are designed for secure and reliable closure of pharmaceutical vials, manufactured with strict attention to dimensional accuracy, fit, and finish.
          </p>
          <Link className="text-link" href="/about">Learn more about Sealwell Packaging <ArrowIcon /></Link>
        </div>
      </section>

      {/* 4. Product Overview */}
      <section className="section product-showcase">
        <div>
          <h2>Flip-Off Seal Range</h2>
        </div>

        {/* 20 mm Feature */}
        <article className="feature-product-20mm">
          <div className="product-image-box">
            <img src={prod20.image} alt={prod20.imageAlt} />
          </div>
          <div className="product-details-box">
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
              <Link className="button button-primary" href="/products/20-mm-flip-off-seal">Explore 20 mm Seal <ArrowIcon /></Link>
            </div>
          </div>
        </article>

        {/* 13 mm Feature */}
        <article className="feature-product-13mm">
          <div className="product-details-box">
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
              <Link className="button button-primary" href="/products/13-mm-flip-off-seal">Explore 13 mm Seal <ArrowIcon /></Link>
            </div>
          </div>
          <div className="product-image-box">
            <img src={prod13.image} alt={prod13.imageAlt} />
          </div>
        </article>
      </section>

      {/* 5. Why Choose Sealwell Packaging - Premium Redesign */}
      <WhyChooseSection />

      {/* 7. Colour Range Preview — Logo-Inspired Redesign */}
      <ColourSelectionSection limit={12} showLink />

      {/* 8. Final CTA */}
      <section className="contact-band">
        <h2>Discuss Your Packaging Requirement</h2>
        <p>Contact Sealwell Packaging to discuss your required seal sizes, colour options, or custom configurations.</p>
        <div className="contact-band-actions">
          <Link className="button button-white" href="/contact">Send Enquiry <ArrowIcon /></Link>
          <a className="button button-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }} href={whatsappLink} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp Sealwell Packaging
          </a>
        </div>
      </section>
    </SiteShell>
  );
}


