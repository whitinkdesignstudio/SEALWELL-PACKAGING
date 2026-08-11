import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";
import { colours } from "../data/site";

export const metadata: Metadata = { title: "Colour Range | Sealwell Packaging", description: "Explore Sealwell Packaging SW01 to SW25 flip-off seal colour range." };

export default function ColoursPage() {
  return (
    <SiteShell current="Colours">
      <PageHero code="04 / COLOURS" title={<>A colour for every<br /><em>clear distinction.</em></>} intro="Choose from 25 standard colour references, organised under simple SW codes for fast identification." image="/assets/colours-banner.png" imageAlt="Organised spectrum of colourful flip-off seals viewed from above" imagePosition="center" />
      <section className="section colour-page-intro"><div><p className="section-label">SW01–SW25</p><h2>A clear reference system for colour selection.</h2></div><div><p>Use the SW code when sending your enquiry so the requirement is easy to identify.</p><div className="colour-instructions"><span><b>01</b> Review the range</span><span><b>02</b> Note the SW code</span><span><b>03</b> Confirm a sample</span></div></div></section>
      <section className="colour-catalogue section">
        {colours.map(([code, name, colour], index) => (
          <article className="catalogue-item" key={code}><span className="catalogue-no">{String(index + 1).padStart(2, "0")}</span><div className="catalogue-swatch" style={{ backgroundColor: colour }}><i /></div><div><strong>{code}</strong><p>{name}</p></div></article>
        ))}
      </section>
      <aside className="colour-disclaimer"><strong>Important colour note</strong><p>Digital colours vary by screen, lighting and device settings. Final colour should be confirmed against a physical sample before production.</p></aside>
      <ContactBand title="Already have a colour code in mind? Send it to our team." />
    </SiteShell>
  );
}
