import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Consistent Manufacturing & Quality | Sealwell Packaging",
  description: "Learn about Sealwell Packaging's focus on consistent quality, dimensional accuracy, fit, finish, and dependable supply.",
};

const qualityPoints = [
  { symbol: "01", title: "Dimensional Accuracy", copy: "Manufactured with attention to controlled dimensions for reliable vial fitment." },
  { symbol: "02", title: "Fit & Finish", copy: "Focus on clean and uniform cap finish for a professional overall presentation." },
  { symbol: "03", title: "Consistent Quality", copy: "Attention to manufacturing repeatability and agreed product requirement details." },
  { symbol: "04", title: "Dependable Supply", copy: "Structure for bulk B2B manufacturing and pharmaceutical packaging supply." },
] as const;

export default function QualityPage() {
  return (
    <SiteShell current="Quality">
      <PageHero
        code="QUALITY & CONSISTENCY"
        title="Consistent Manufacturing & Quality"
        intro="At Sealwell Packaging, we manufacture Flip-Off Seals and Aluminium Vial Seals with a focus on consistent quality, dimensional accuracy, and dependable supply."
        image="/assets/quality-inspection.png"
        imageAlt="Sealwell Packaging quality focus"
      />

      <section className="section editorial-intro">
        <div>
          <p className="section-label">Manufacturing Focus</p>
          <h2>Precision-Engineered Closure Solutions</h2>
        </div>
        <div className="editorial-copy">
          <p>
            Our Flip-Off Seals are designed for secure and reliable closure of pharmaceutical vials.
          </p>
          <p>
            Manufactured with attention to dimensional accuracy, fit, and finish, these seals provide a clean and professional closure solution for pharmaceutical packaging applications.
          </p>
        </div>
      </section>

      <section className="section-dark process-timeline">
        <p className="section-label light">Pillars</p>
        <h2>Key Manufacturing Priorities</h2>
        <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '40px' }}>
          {qualityPoints.map((p) => (
            <div className="timeline-step" key={p.title}>
              <span className="step-num">{p.symbol}</span>
              <h3 style={{ fontSize: '16px', marginTop: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', marginTop: '6px' }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand title="Discuss Your Packaging Requirement" />
    </SiteShell>
  );
}


