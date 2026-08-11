import type { Metadata } from "next";
import { ContactBand, PageHero, SiteShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "About | Sealwell Packaging", description: "Learn about Sealwell Packaging and our focused approach to flip-off seal manufacturing in Ahmedabad." };

export default function AboutPage() {
  return (
    <SiteShell current="About">
      <PageHero code="01 / COMPANY" title={<>Focused manufacturing.<br /><em>Dependable outcomes.</em></>} intro="We are an Ahmedabad-based manufacturer dedicated to flip-off seals and aluminium vial seals." image="/assets/about-manufacturing.png" imageAlt="Illustrative precision manufacturing line with aluminium flip-off seals" imagePosition="center" />
      <section className="section story-grid">
        <div className="story-marker"><span>SW</span><strong>Ahmedabad<br />Gujarat, India</strong><i /></div>
        <div><p className="section-label">Company overview</p><h2>A specialised manufacturer with a practical purpose.</h2><p className="large-copy">Sealwell Packaging focuses on a defined product range: 13 mm and 20 mm flip-off seals for vial closure requirements.</p><p className="body-copy">That focus helps us keep conversations clear. Customers can review the nominal format, dimensional references and colour options in one place, then connect directly with our team for quotation and order coordination.</p><div className="company-facts"><div><span>Product focus</span><strong>Flip-off &amp; aluminium vial seals</strong></div><div><span>Standard range</span><strong>13 mm and 20 mm</strong></div><div><span>Colour references</span><strong>SW01 to SW25</strong></div></div></div>
      </section>
      <section className="values-section section-dark">
        <div className="section-head"><div><p className="section-label light">How we work</p><h2>Professional service,<br />kept straightforward.</h2></div></div>
        <div className="value-grid"><article><span>01</span><h3>Product focus</h3><p>Attention stays on the defined 13 mm and 20 mm flip-off seal range.</p></article><article><span>02</span><h3>Clear information</h3><p>Sizes, colour references and requirement details are communicated directly.</p></article><article><span>03</span><h3>Responsive support</h3><p>Accessible communication from first enquiry through order coordination.</p></article></div>
      </section>
      <section className="section facility-grid"><div><p className="section-label">Manufacturing location</p><h2>Based in Ahmedabad.<br />Easy to reach.</h2></div><div><p>Our unit is located at Gopal Charan Industrial Hub on Kunjad–Bakrol Road, with direct contact available by WhatsApp, phone and email.</p><dl><div><dt>Address</dt><dd>Road No. 13, Shed No. 390</dd></div><div><dt>Core range</dt><dd>13 mm &amp; 20 mm flip-off seals</dd></div><div><dt>Enquiries</dt><dd>WhatsApp, phone or email</dd></div></dl><a className="location-link" href="/contact">View contact details and map →</a></div></section>
      <ContactBand title="A focused manufacturing partner for every seal requirement." />
    </SiteShell>
  );
}
