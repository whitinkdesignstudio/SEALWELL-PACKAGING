import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Quality Approach | Sealwell Packaging", description: "See the practical quality approach behind Sealwell Packaging flip-off seal manufacturing." };

const steps = [
  ["01", "Requirement review", "Nominal size, colour reference, quantity and delivery details are aligned at the enquiry stage."],
  ["02", "Specification alignment", "The selected product format is matched with the relevant dimensional reference."],
  ["03", "Process attention", "Manufacturing attention remains on repeatability and the agreed product requirement."],
  ["04", "Visual review", "Finish and colour presentation are reviewed for an orderly, consistent appearance."],
  ["05", "Order coordination", "Product and commercial details are reconfirmed before dispatch planning."],
] as const;

export default function QualityPage() {
  return (
    <SiteShell current="Quality">
      <PageHero code="03 / QUALITY" title={<>Consistency is not a claim.<br /><em>It is a process.</em></>} intro="Our quality approach stays practical: understand the requirement, control the essentials and review the result." image="/assets/quality-inspection.png" imageAlt="Precision dimensional inspection of an aluminium flip-off seal" imagePosition="center" />
      <section className="section quality-intro"><div><p className="section-label">Our approach</p><h2>Quality begins with a clearly defined requirement.</h2></div><div><p className="large-copy">A reliable outcome starts before production—with the right nominal size, colour reference and commercial details understood by both sides.</p><p className="quality-note">Our website presents practical product references. Any application-specific or compliance requirement should be discussed and confirmed before ordering.</p></div></section>
      <section className="process-section section-dark"><div className="process-heading"><p className="section-label light">Working sequence</p><h2>Five practical checkpoints.</h2></div><div className="process-rail">{steps.map(([no, title, copy]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className="section quality-pillars"><div><p className="section-label">Product references</p><h2>Four details kept visible.</h2></div><div className="pillar-grid"><article><i>Ø</i><h3>Diameter</h3><p>Overall and inner diameter references for each nominal format.</p></article><article><i>↕</i><h3>Height</h3><p>Outer and inner height references for requirement discussion.</p></article><article><i>◉</i><h3>Finish</h3><p>Visual attention to a consistent overall product presentation.</p></article><article><i>●</i><h3>Colour</h3><p>SW01–SW25 codes for straightforward shade selection.</p></article></div></section>
      <ContactBand title="Bring us your specification. We’ll help clarify the right format." />
    </SiteShell>
  );
}
