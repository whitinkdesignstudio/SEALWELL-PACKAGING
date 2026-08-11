import type { Metadata } from "next";
import InquiryForm from "../components/InquiryForm";
import { ArrowIcon, PageHero, SiteShell, WhatsAppIcon } from "../components/SiteChrome";
import { contact, whatsappLink } from "../data/site";

export const metadata: Metadata = {
  title: "Contact Sealwell Packaging | Flip-Off Seal Manufacturer",
  description: "Contact Sealwell Packaging for 13 mm and 20 mm pharmaceutical flip-off seal enquiries. Reach us on WhatsApp at 9898866610.",
};

export default function ContactPage() {
  return (
    <SiteShell current="Contact">
      <PageHero
        code="CONTACT SEALWELL PACKAGING"
        title="Contact Sealwell Packaging"
        intro="Submit your packaging requirements or message us directly on WhatsApp."
        image="/assets/contact-banner.png"
        imageAlt="Sealwell Packaging contact and enquiry"
      />

      <section className="section">
        <div className="contact-page-layout">
          {/* Form */}
          <InquiryForm />

          {/* Direct Info */}
          <div className="contact-info-panel">
            <div className="info-card-item" style={{ background: 'var(--navy)', color: '#ffffff' }}>
              <p className="section-label light">Direct Messaging</p>
              <h3 style={{ color: '#ffffff', fontSize: '24px', margin: '8px 0 12px' }}>WhatsApp Enquiry</h3>
              <p style={{ color: '#A6B7C7', marginBottom: '20px' }}>Message Sealwell Packaging on WhatsApp for direct communication.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a className="button button-white" href={whatsappLink} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> WhatsApp Sealwell Packaging (9898866610)
                </a>
              </div>
            </div>

            <div className="info-card-item">
              <p className="section-label">Address & Location</p>
              <h3>Factory Address</h3>
              <p>{contact.address}</p>
              <a className="text-link" href={contact.map} target="_blank" rel="noreferrer" style={{ marginTop: '12px' }}>
                Open in Google Maps <ArrowIcon />
              </a>
            </div>

            <div className="info-card-item">
              <p className="section-label">Email Enquiries</p>
              <h3>Written Requirements</h3>
              <a href={`mailto:${contact.email}`} style={{ fontWeight: '700', color: 'var(--navy)', fontSize: '16px' }}>{contact.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="section" style={{ background: 'var(--paper-surface)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ marginBottom: '32px' }}>
          <p className="section-label">Location Map</p>
          <h2>Visit our facility in Ahmedabad.</h2>
        </div>
        <div style={{ width: '100%', height: '400px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
          <iframe
            title="Sealwell Packaging factory location"
            src="https://www.google.com/maps?q=22.9917082,72.7410283&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteShell>
  );
}


