import type { ReactNode } from "react";
import Link from "next/link";
import { contact, whatsappLink } from "../data/site";
import ScrollExperience from "./ScrollExperience";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Quality", "/quality"],
  ["Colours", "/colours"],
  ["Contact", "/contact"],
] as const;

export function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

export function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.2 3.8 9.7 8l-1.9 1.9a15.2 15.2 0 0 0 6.3 6.3l1.9-1.9 4.2 2.5c.5.3.7.8.6 1.3l-.4 2.1c-.1.6-.7 1-1.3 1C10.1 21.2 2.8 13.9 2.8 4.9c0-.6.4-1.2 1-1.3l2.1-.4c.5-.1 1 .1 1.3.6Z" /></svg>;
}

export function Brand({ logoSrc = "/assets/logo.png" }: { logoSrc?: string }) {
  return (
    <Link className="brand" href="/" aria-label="Sealwell Packaging home">
      <img src={logoSrc} alt="Sealwell Packaging Logo" className="brand-logo" />
    </Link>
  );
}

export function SiteHeader({ current }: { current: string }) {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => (
          <Link className={current === label ? "active" : ""} href={href} key={label}>{label}</Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-call-btn" href={`tel:+${contact.phoneRaw}`}>
          <PhoneIcon /> <span>Call Us</span>
        </a>
        <Link className="header-cta" href="/contact">Request a Quote <ArrowIcon /></Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <div>
          <a className="mobile-call-link" href={`tel:+${contact.phoneRaw}`}>
            <PhoneIcon /> Call: {contact.phone}
          </a>
          {nav.map(([label, href]) => (
            <Link className={current === label ? "active" : ""} href={href} key={label}>
              {label} <ArrowIcon />
            </Link>
          ))}
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <Brand logoSrc="/assets/footer-logo.png" />
            <p>Specialised manufacturer of 13 mm and 20 mm flip-off seals and aluminium vial seals in Ahmedabad, Gujarat.</p>
          </div>
          <div>
            <span>Navigation</span>
            {nav.slice(1).map(([label, href]) => (
              <Link href={href} key={label}>{label}</Link>
            ))}
          </div>
          <div>
            <span>Contact Information</span>
            <a href={`tel:+${contact.phoneRaw}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.map} target="_blank" rel="noreferrer">Road No. 13, Gopal Charan Industrial Hub, Ahmedabad</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sealwell Packaging. All rights reserved.</span>
          <span>13 mm · 20 mm · SW01–SW25</span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with Sealwell Packaging on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}

export function SiteShell({ current, children }: { current: string; children: ReactNode }) {
  return (
    <>
      <ScrollExperience />
      <SiteHeader current={current} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageHero({
  title,
  intro,
  image = "/assets/home-hero.png",
  imageAlt,
}: {
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="page-hero">
      {image ? (
        <div className="page-hero-bg">
          <img src={image} alt={imageAlt || "Sealwell Packaging banner"} />
          <div className="page-hero-overlay" />
        </div>
      ) : null}
      <div className="page-hero-content">
        <h2>{title}</h2>
        {intro ? <p className="page-hero-intro">{intro}</p> : null}
      </div>
    </section>
  );
}

export function ContactBand({ title = "Discuss Your Packaging Requirement", intro = "Contact Sealwell Packaging to discuss your required seal sizes, colour options, or custom configurations." }: { title?: string; intro?: string }) {
  return (
    <section className="contact-band">
      <h2>{title}</h2>
      <p>{intro}</p>
      <div className="contact-band-actions">
        <Link className="button button-white" href="/contact">Send Enquiry <ArrowIcon /></Link>
        <a className="button button-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }} href={whatsappLink} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> WhatsApp Sealwell Packaging
        </a>
      </div>
    </section>
  );
}

