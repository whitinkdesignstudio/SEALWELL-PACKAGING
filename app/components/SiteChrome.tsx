import type { ReactNode } from "react";
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
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.5Z" /><path d="M8.2 7.7c.3-.7.6-.7.9-.7h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.3.4-.1.7.7 1.3 1.7 2.3 3 3 .3.2.5.1.7-.1l.9-1.1c.2-.3.5-.3.8-.2l1.8.9c.3.2.5.3.5.5 0 .2-.2 1.2-.7 1.7-.5.6-1.4.9-2.2.9-.6 0-1.4-.2-2.4-.6-1-.5-4.4-1.7-6-5.8-.4-1-.4-1.8-.3-2.3.2-.4.6-.8.9-1.1" /></svg>;
}

export function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.2 3.8 9.7 8l-1.9 1.9a15.2 15.2 0 0 0 6.3 6.3l1.9-1.9 4.2 2.5c.5.3.7.8.6 1.3l-.4 2.1c-.1.6-.7 1-1.3 1C10.1 21.2 2.8 13.9 2.8 4.9c0-.6.4-1.2 1-1.3l2.1-.4c.5-.1 1 .1 1.3.6Z" /></svg>;
}

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="Sealwell Packaging home">
      <span className="brand-mark"><i /></span>
      <span className="brand-copy"><strong>SEALWELL</strong><small>PACKAGING</small></span>
    </a>
  );
}

export function SiteHeader({ current }: { current: string }) {
  return (
    <>
      <div className="utility-bar">
        <span>Flip-off seal manufacturer · Ahmedabad, India</span>
        <div><a href={`tel:+${contact.phoneRaw}`}><PhoneIcon /> {contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      </div>
      <header className="site-header">
        <span className="scroll-progress" aria-hidden="true" />
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a className={current === label ? "active" : ""} href={href} key={label}>{label}</a>)}
        </nav>
        <a className="header-cta" href="/contact">Request a quote <ArrowIcon /></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span>Menu</span><i /></summary>
          <div>{nav.map(([label, href]) => <a className={current === label ? "active" : ""} href={href} key={label}>{label}<ArrowIcon /></a>)}</div>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top">
          <div><Brand /><p>Focused manufacturing of 13 mm and 20 mm flip-off seals, supported by clear specifications and direct communication.</p></div>
          <div><span>Navigate</span>{nav.slice(1).map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
          <div><span>Contact</span><a href={`tel:+${contact.phoneRaw}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.map} target="_blank" rel="noreferrer">Road No. 13, Gopal Charan Industrial Hub</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Sealwell Packaging</span><span>13 mm · 20 mm · SW01–SW25</span><span>Ahmedabad, Gujarat, India</span></div>
      </footer>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with Sealwell Packaging on WhatsApp"><WhatsAppIcon /><span>WhatsApp enquiry</span></a>
    </>
  );
}

export function SiteShell({ current, children }: { current: string; children: ReactNode }) {
  return <><ScrollExperience /><SiteHeader current={current} /><main>{children}</main><SiteFooter /></>;
}

export function PageHero({
  title,
  intro,
  code,
  image,
  imageAlt,
  imagePosition = "center",
}: {
  title: ReactNode;
  intro: string;
  code: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "center" | "right";
}) {
  return (
    <section className="page-hero page-hero-visual">
      <img className={`page-hero-image position-${imagePosition}`} src={image} alt={imageAlt} />
      <span className="page-hero-shade" aria-hidden="true" />
      <div className="page-hero-grid">
        <div><p className="page-brand">Sealwell Packaging</p><h1>{title}</h1></div>
        <div className="page-hero-side"><span className="page-code">{code}</span><p>{intro}</p></div>
      </div>
      <div className="page-hero-lines"><i /><i /><i /></div>
    </section>
  );
}

export function ContactBand({ title = "Let’s build the right seal for your requirement." }: { title?: string }) {
  return (
    <section className="contact-band">
      <div><h2>{title}</h2></div>
      <div><p>Share the size, colour code, quantity and delivery location. We will review the requirement and respond directly.</p><div className="contact-band-actions"><a className="button button-white" href="/contact">Request a quotation <ArrowIcon /></a><a className="contact-band-link" href={whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a></div></div>
    </section>
  );
}
