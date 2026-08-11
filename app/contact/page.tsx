import type { Metadata } from "next";
import InquiryForm from "../components/InquiryForm";
import { ArrowIcon, PageHero, SiteShell, WhatsAppIcon } from "../components/SiteChrome";
import { contact, whatsappLink } from "../data/site";

export const metadata: Metadata = { title: "Contact | Sealwell Packaging", description: "Contact Sealwell Packaging for flip-off seal enquiries in Ahmedabad." };

export default function ContactPage() {
  return (
    <SiteShell current="Contact">
      <PageHero code="05 / CONTACT" title={<>Start with the details.<br /><em>We’ll take it forward.</em></>} intro="Tell us the size, colour code and quantity you need. We will respond through your preferred channel." image="/assets/contact-banner.png" imageAlt="Prepared flip-off seal samples ready for a customer specification discussion" imagePosition="center" />
      <section className="contact-intro">
        <span>Before you enquire</span>
        <p>For a faster response, share the nominal seal size, SW colour code, approximate quantity and delivery location.</p>
        <a href="/products">Review product sizes <ArrowIcon /></a>
      </section>
      <section className="contact-page section">
        <InquiryForm />
        <div className="contact-side">
          <div className="contact-primary"><p className="section-label">DIRECT SUPPORT</p><h2>Prefer a quick conversation?</h2><p>Connect with our team on WhatsApp or call using the number below.</p><a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> Start WhatsApp enquiry</a><a className="phone-link" href={`tel:+${contact.phoneRaw}`}>{contact.phone}</a></div>
          <div className="contact-details"><article><span>01</span><div><h3>Manufacturing unit</h3><p>{contact.address}</p><a href={contact.map} target="_blank" rel="noreferrer">Open in Google Maps <ArrowIcon /></a></div></article><article><span>02</span><div><h3>Email</h3><a className="contact-value" href={`mailto:${contact.email}`}>{contact.email}</a><p>Send product specifications or a written requirement.</p></div></article><article><span>03</span><div><h3>Product range</h3><p>13 mm and 20 mm flip-off seals<br />Aluminium vial seals<br />SW01–SW25 colour range</p></div></article></div>
        </div>
      </section>
      <section className="map-panel">
        <div className="map-embed"><iframe title="Sealwell Packaging factory location" src="https://www.google.com/maps?q=22.9917082,72.7410283&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-card"><span>FACTORY LOCATION</span><strong>Sealwell Packaging<br />Ahmedabad</strong><p>{contact.address}</p><div className="map-coordinates">22.9917082, 72.7410283</div><a className="button button-white" href={contact.map} target="_blank" rel="noreferrer">Open directions <ArrowIcon /></a></div></div>
      </section>
    </SiteShell>
  );
}
