import type { Metadata } from "next";
import { ArrowIcon, ContactBand, PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About Sealwell Packaging | Flip-Off Seal Manufacturer",
  description: "Learn about Sealwell Packaging, a B2B manufacturer specializing in 13 mm and 20 mm pharmaceutical flip-off seals and aluminium vial closures.",
};

const companyValues = [
  { num: "01", title: "Multiple Sizes", copy: "13 mm and 20 mm Flip-Off Seals." },
  { num: "02", title: "Wide Colour Selection", copy: "25 standard colour options for product identification and customer requirements." },
  { num: "03", title: "Customized Solutions", copy: "Colour and product configurations developed according to customer requirements." },
  { num: "04", title: "Consistent Manufacturing", copy: "Focus on dimensional consistency, finish, and reliable performance." },
  { num: "05", title: "Bulk Manufacturing", copy: "Capability to cater to B2B and pharmaceutical packaging requirements." },
] as const;

const applications = [
  "Pharmaceutical vials",
  "Injectable product packaging",
  "Pharmaceutical formulations",
  "Biotech and healthcare packaging",
  "Other suitable vial-closure applications",
] as const;

export default function AboutPage() {
  return (
    <SiteShell current="About">
      <PageHero
        code="ABOUT SEALWELL PACKAGING"
        title="About Sealwell Packaging"
        intro="Sealwell Packaging manufactures Flip-Off Seals and Aluminium Vial Seals for pharmaceutical and healthcare packaging requirements."
        image="/assets/about-manufacturing.png"
        imageAlt="Sealwell Packaging manufacturing"
      />

      {/* What We Manufacture & Our Approach */}
      <section className="section editorial-intro">
        <div>
          <p className="section-label">Manufacturing Focus</p>
          <h2>What We Manufacture</h2>
        </div>
        <div className="editorial-copy">
          <p>
            Sealwell Packaging specializes in the manufacturing of 13 mm Flip-Off Seals, 20 mm Flip-Off Seals, and Aluminium Vial Seals for pharmaceutical vial packaging.
          </p>
          <p>
            At Sealwell Packaging, we manufacture Flip-Off Seals and Aluminium Vial Seals with a focus on consistent quality, dimensional accuracy, and dependable supply. Our products provide a clean and professional closure solution for pharmaceutical packaging applications.
          </p>
        </div>
      </section>

      {/* Customer-Focused B2B Manufacturing */}
      <section className="section-dark process-timeline">
        <p className="section-label light">Capabilities</p>
        <h2>Customer-Focused Manufacturing</h2>
        <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginTop: '40px' }}>
          {companyValues.map((v) => (
            <div className="timeline-step" key={v.num}>
              <span className="step-num">{v.num}</span>
              <h3 style={{ fontSize: '15px' }}>{v.title}</h3>
              <p style={{ fontSize: '13px' }}>{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="section why-sealwell">
        <div>
          <p className="section-label">Target Applications</p>
          <h2>Suitable Applications</h2>
        </div>
        <div className="why-list">
          {applications.map((app) => (
            <div className="why-item" key={app}>
              <h3>{app}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Founders & Leadership Section */}
      <section className="section">
        <div>
          <p className="section-label">Leadership & Direction</p>
          <h2>Our Founders</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginTop: '8px' }}>
            Guiding Sealwell Packaging with vision, manufacturing expertise, and commitment to pharmaceutical quality.
          </p>
        </div>

        <div className="founders-spotlight">
          {/* Founder 1: Content Left, Image Right */}
          <article className="founder-spotlight-row">
            <div className="founder-spotlight-content">
              <span className="founder-spotlight-role">Founder & Director</span>
              <h3 className="founder-spotlight-name">[ Founder 1 Name ]</h3>
              <p className="founder-spotlight-bio">
                [ Awaiting founder 1 bio & leadership details ]
              </p>
              <div className="founder-highlights">
                <span className="founder-badge">Strategic Operations</span>
                <span className="founder-badge">Quality Vision</span>
                <span className="founder-badge">Client Partnerships</span>
              </div>
            </div>
            <div className="founder-spotlight-media">
              <img src="/assets/founder-1.jpg" alt="Sealwell Packaging Founder 1" />
            </div>
          </article>

          {/* Founder 2: Image Left, Content Right */}
          <article className="founder-spotlight-row reverse">
            <div className="founder-spotlight-media">
              <img src="/assets/founder-2.jpg" alt="Sealwell Packaging Founder 2" />
            </div>
            <div className="founder-spotlight-content">
              <span className="founder-spotlight-role">Co-Founder & Director</span>
              <h3 className="founder-spotlight-name">[ Founder 2 Name ]</h3>
              <p className="founder-spotlight-bio">
                [ Awaiting founder 2 bio & leadership details ]
              </p>
              <div className="founder-highlights">
                <span className="founder-badge">Manufacturing Excellence</span>
                <span className="founder-badge">Technical Innovation</span>
                <span className="founder-badge">B2B Growth</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <ContactBand title="Discuss Your Requirement" />
    </SiteShell>
  );
}


