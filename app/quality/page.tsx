import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Consistent Manufacturing & Quality | Sealwell Packaging",
  description: "Learn about Sealwell Packaging's focus on consistent quality, dimensional accuracy, fit, finish, and dependable supply.",
};

const qualityPoints = [
  {
    num: "01",
    title: "Dimensional Accuracy",
    copy: "Manufactured with controlled tolerances for reliable vial fitment.",
    tag: "Precision Fit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Fit & Finish",
    copy: "Clean and uniform cap finish for a professional presentation.",
    tag: "Flawless Finish",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Consistent Quality",
    copy: "Attention to manufacturing repeatability and strict quality control.",
    tag: "High Repeatability",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Dependable Supply",
    copy: "High-capacity production structured for bulk B2B pharmaceutical supply.",
    tag: "B2B Partner",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
] as const;

export default function QualityPage() {
  return (
    <SiteShell current="Quality">
      <PageHero
        title="Quality & Standards"
        intro="High-precision flip-off seals with dependable B2B supply."
        image="/assets/quality-inspection.png"
        imageAlt="Sealwell Packaging quality focus"
      />

      <section className="section editorial-intro">
        <div>
          <h2>Manufacturing Quality</h2>
        </div>
        <div className="editorial-copy">
          <p>
            Our Flip-Off Seals are manufactured with strict dimensional accuracy, clean finish, and reliable vial closure fit.
          </p>
        </div>
      </section>

      <section className="why-grid-section">
        <div className="why-grid-header">
          <h2>Key Manufacturing Priorities</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '8px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: '640px' }}>
            Built around strict dimensional controls, uniform finish, and reliable B2B delivery.
          </p>
        </div>

        <div className="why-cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {qualityPoints.map((p) => (
            <div className="why-card" key={p.title}>
              <div className="why-card-top">
                <div className="why-card-icon">{p.icon}</div>
                <span className="why-card-num">{p.num}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
              <div className="why-card-tag">{p.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <ContactBand title="Discuss Your Packaging Requirement" />
    </SiteShell>
  );
}


