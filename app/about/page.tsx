import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About Sealwell Packaging | Flip-Off Seal Manufacturer",
  description: "Learn about Sealwell Packaging, a B2B manufacturer specializing in 13 mm and 20 mm pharmaceutical flip-off seals and aluminium vial closures.",
};

const companyValues = [
  {
    num: "01",
    title: "Multiple Sizes",
    copy: "Available in standard 13 mm and 20 mm Flip-Off Seal formats.",
    tag: "13 mm & 20 mm",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="3" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Wide Colour Selection",
    copy: "25 standard colour options (SW01 to SW25) for immediate product coding.",
    tag: "25 SW Shades",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 10 10c0 2.5-2 4.5-4.5 4.5H16a2 2 0 0 0-2 2v.5c0 1.5-1 2.5-2 2.5a10 10 0 0 1-10-10A10 10 0 0 1 12 2z" />
        <circle cx="7.5" cy="9.5" r="1" fill="currentColor" />
        <circle cx="12" cy="7.5" r="1" fill="currentColor" />
        <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Customized Solutions",
    copy: "Colour and product configurations developed according to customer requirements.",
    tag: "Tailored Specs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Consistent Manufacturing",
    copy: "Focus on dimensional consistency, flawless finish, and reliable sealing performance.",
    tag: "Quality Control",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Bulk Manufacturing",
    copy: "High-capacity production capability to cater to B2B pharmaceutical requirements.",
    tag: "Bulk Supply",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const applications = [
  {
    num: "01",
    category: "Primary Container",
    title: "Pharmaceutical Vials",
    desc: "Precision flip-off seals for liquid, powder, and lyophilized pharmaceutical vials requiring tamper-evident closure integrity.",
    highlights: ["Lyophilized & Liquid Fit", "13mm & 20mm Nominal Sizes"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6v3H9z" />
        <path d="M10 5v4l-4 6v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5l-4-6V5" />
        <line x1="8" y1="15" x2="16" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    category: "Sterile Parenteral",
    title: "Injectable Product Packaging",
    desc: "Aseptic packaging seals designed for sterile parenteral injectables, vaccines, and IV formulation vials.",
    highlights: ["Aseptic Cleanroom Fit", "Smooth Flip-Off Action"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 2 4 4" />
        <path d="m17 7 3-3" />
        <path d="M19 9 8.7 19.3c-.8.8-2 .8-2.8 0l-1.2-1.2c-.8-.8-.8-2 0-2.8L15 5" />
        <path d="m9 11 4 4" />
        <path d="m5 19-3 3" />
        <path d="m14 4 6 6" />
      </svg>
    ),
  },
  {
    num: "03",
    category: "Liquid & Formulations",
    title: "Pharmaceutical Formulations",
    desc: "Controlled aluminium flip-off closures for diverse liquid, syrup, and chemical drug formulation containers.",
    highlights: ["25 SW Code Options", "Color Identification"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20.5 19 12a4.95 4.95 0 1 0-7-7l-8.5 8.5a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
  },
  {
    num: "04",
    category: "Biopharma Reagents",
    title: "Biotech & Healthcare Packaging",
    desc: "High-purity seal protection engineered for sensitive biopharmaceuticals, diagnostic kits, and biological reagents.",
    highlights: ["High-Purity Standard", "Zero Contamination Seal"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m12 8 2.5 2.5L12 13l-2.5-2.5L12 8z" />
        <path d="M12 13v4" />
      </svg>
    ),
  },
  {
    num: "05",
    category: "Custom OEM Lines",
    title: "Other Vial-Closure Applications",
    desc: "Custom-configured flip-off seals engineered to match specialized veterinary, laboratory, and OEM vial lines.",
    highlights: ["Tailored Dimensional Fit", "Custom Shade Matching"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <SiteShell current="About">
      <PageHero
        title="About Sealwell Packaging"
        image="/assets/banner-1920x800.png"
        imageAlt="Sealwell Packaging 1920x800 banner placeholder"
      />

      {/* What We Manufacture & Our Approach */}
      <section className="section editorial-intro">
        <div>
          <h2>What We Manufacture</h2>
        </div>
        <div className="editorial-copy">
          <p>
            With an overall experience of 35+ years in pharmaceutical and marketing, Sealwell Packaging manufactures 13 mm and 20 mm Flip-Off Seals and Aluminium Vial Seals for pharmaceutical packaging applications.
          </p>
        </div>
      </section>



      {/* Founders & Leadership Section */}
      <section className="section">
        <div>
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
              <h3 className="founder-spotlight-name">Snehal Bipinchandra Shah</h3>
              <p className="founder-spotlight-bio">
                Chemical Industry Professional | Marketing & Business Development

                Chemical industry professional with over 30 years of experience in technical sales, marketing, business development, customer relations, and market expansion. Holds a B.Sc. in Chemistry from Gujarat University.

                Brings strong technical knowledge, commercial understanding, and practical industry experience, with a proven focus on customer needs, market opportunities, long-term relationships, and sustainable business growth.
              </p>
              <div className="founder-highlights">
                <span className="founder-badge">Strategic Operations</span>
                <span className="founder-badge">Quality Vision</span>
                <span className="founder-badge">Client Partnerships</span>
              </div>
            </div>
            <div className="founder-spotlight-media">
              <img src="/assets/founder-1.jpg" alt="Sealwell Packaging Founder Snehal Bipinchandra Shah" />
            </div>
          </article>

          {/* Founder 2: Image Left, Content Right */}
          <article className="founder-spotlight-row reverse">
            <div className="founder-spotlight-media">
              <img src="/assets/founder-2.jpg" alt="Sealwell Packaging Founder Shrinil Shripal Shah" />
            </div>
            <div className="founder-spotlight-content">
              <span className="founder-spotlight-role">Co-Founder & Director</span>
              <h3 className="founder-spotlight-name">Shrinil Shripal Shah</h3>
              <p className="founder-spotlight-bio">
                Biomedical Sciences Student | Entrepreneur | Food Brand Professional

                Biomedical Sciences student and entrepreneur currently pursuing a B.Sc. from the Institute of Advanced Research. Founder of UNFOLD, a ready-to-eat dehydrated food brand focused on convenience, quality, and innovation.

                Brings practical experience in business planning, product development, marketing, vendor coordination, administration, and brand development, with a strong interest in building modern consumer-focused businesses.
              </p>
              <div className="founder-highlights">
                <span className="founder-badge">Manufacturing Excellence</span>
                <span className="founder-badge">Technical Innovation</span>
                <span className="founder-badge">B2B Growth</span>
              </div>
            </div>
          </article>

          {/* Founder 3: Content Left, Image Right */}
          <article className="founder-spotlight-row">
            <div className="founder-spotlight-content">
              <span className="founder-spotlight-role">Co-Founder & Director</span>
              <h3 className="founder-spotlight-name">Hardikkumar Dahyabhai Patel</h3>
              <p className="founder-spotlight-bio">
                Mechanical Engineering Professional | B.E., Government Engineering College, Patan (GTU, 2012)

                Mechanical Engineering professional with a Bachelor's degree from Government Engineering College, Patan, under Gujarat Technological University (GTU), graduated in 2012. With over a decade of industry experience, brings strong technical knowledge, practical expertise, and a professional approach to mechanical engineering projects and operations.

                Drives business expansion, supply chain management, and strategic client relations at Sealwell Packaging with a solid engineering foundation.
              </p>
              <div className="founder-highlights">
                <span className="founder-badge">Mechanical Engineering</span>
                <span className="founder-badge">GTU 2012</span>
                <span className="founder-badge">Supply Chain</span>
                <span className="founder-badge">Client Relations</span>
              </div>
            </div>
            <div className="founder-spotlight-media">
              <img src="/assets/founder-3.jpg" alt="Sealwell Packaging Co-Founder Hardikkumar Dahyabhai Patel" />
            </div>
          </article>
        </div>
      </section>

      <ContactBand title="Discuss Your Requirement" />
    </SiteShell>
  );
}


