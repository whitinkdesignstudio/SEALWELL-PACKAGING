"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Icons: Lucide-style outline, consistent strokeWidth 1.75 ─── */
const IconCrosshair = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconPalette = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    <circle cx="7.5" cy="9.5" r="1" fill="currentColor" />
    <circle cx="12" cy="7.5" r="1" fill="currentColor" />
    <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
  </svg>
);

const IconSettings = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconShieldCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconFactory = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);

/* ─── Feature data ─── */
const features = [
  {
    num: "01",
    title: "Precision Formats",
    sub: "13 mm & 20 mm",
    copy: "Engineered with strict dimensional control for reliable and consistent pharmaceutical vial sealing.",
    highlight: "±0.05 mm Precision",
    icon: <IconCrosshair />,
    isHighlight: false,
  },
  {
    num: "02",
    title: "25 Master SW Colour Shades",
    sub: null as string | null,
    copy: "25 standardized SW colour options for batch identification, brand differentiation and packaging consistency.",
    highlight: "25 Standard SW Colours",
    icon: <IconPalette />,
    isHighlight: false,
  },
  {
    num: "04",
    title: "Multi-Stage Quality Inspection",
    sub: null as string | null,
    copy: "Precision inspection and quality verification throughout production to maintain consistent dimensions, finish and sealing performance.",
    highlight: "Quality Controlled Production",
    icon: <IconShieldCheck />,
    isHighlight: true,
  },
  {
    num: "03",
    title: "Custom Embossing & Tooling",
    sub: null as string | null,
    copy: "Custom flip-off button embossing, colour requirements and tooling solutions designed for specialized pharmaceutical applications.",
    highlight: "Custom Tooling Available",
    icon: <IconSettings />,
    isHighlight: false,
  },
  {
    num: "05",
    title: "High-Volume B2B Production",
    sub: null as string | null,
    copy: "Production capabilities designed to support consistent bulk requirements for pharmaceutical manufacturers and packaging partners.",
    highlight: "Reliable Bulk Supply",
    icon: <IconFactory />,
    isHighlight: false,
  },
];

/* ─── Framer Motion variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─── Decorative inspection SVG for highlight card ─── */
function QualityGrid() {
  return (
    <svg
      className="wcs-quality-grid"
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
    >
      {[0, 35, 70, 105, 140].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="140" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      ))}
      {[0, 35, 70, 105, 140].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="140" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      ))}
      <path d="M10 10 L10 24 M10 10 L24 10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 10 L130 24 M130 10 L116 10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 130 L10 116 M10 130 L24 130" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 130 L130 116 M130 130 L116 130" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="70" cy="70" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="70" cy="70" r="4" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <line x1="70" y1="46" x2="70" y2="56" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeLinecap="round" />
      <line x1="70" y1="84" x2="70" y2="94" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeLinecap="round" />
      <line x1="46" y1="70" x2="56" y2="70" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeLinecap="round" />
      <line x1="84" y1="70" x2="94" y2="70" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Individual card ─── */
function FeatureCard({ feature }: { feature: typeof features[0] }) {
  if (feature.isHighlight) {
    return (
      <motion.article variants={itemVariants} className="wcs-card wcs-card--highlight">
        <QualityGrid />
        <div className="wcs-card-inner">
          <div className="wcs-card-top">
            <span className="wcs-num wcs-num--light">{feature.num}</span>
            <div className="wcs-icon-wrap wcs-icon-wrap--light">{feature.icon}</div>
          </div>
          <h3 className="wcs-title wcs-title--light">{feature.title}</h3>
          <p className="wcs-copy wcs-copy--light">{feature.copy}</p>
          <div className="wcs-tag wcs-tag--light">
            <span className="wcs-tag-dot wcs-tag-dot--light" />
            {feature.highlight}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article variants={itemVariants} className="wcs-card wcs-card--standard">
      <div className="wcs-card-inner">
        <div className="wcs-card-top">
          <span className="wcs-num">{feature.num}</span>
          <div className="wcs-icon-wrap">{feature.icon}</div>
        </div>
        {feature.sub && <span className="wcs-sub">{feature.sub}</span>}
        <h3 className="wcs-title">{feature.title}</h3>
        <p className="wcs-copy">{feature.copy}</p>
        <div className="wcs-tag">
          <span className="wcs-tag-dot" />
          {feature.highlight}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section separator ─── */
const Sep = () => (
  <span className="wcs-sep" aria-hidden="true">|</span>
);

/* ─── Main export ─── */
export function WhyChooseSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const row1 = [features[0], features[1], features[2]]; // 01 02 04(highlight)
  const row2 = [features[3], features[4]];               // 03 05

  return (
    <section className="wcs-section" ref={ref} aria-labelledby="wcs-heading">

      {/* ── Section Header ── */}
      <motion.div
        className="wcs-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="wcs-heading" className="wcs-heading">
          Why Choose Sealwell Packaging
        </h2>
        <p className="wcs-subtitle">
          Precision manufacturing, rigorous quality control and dependable supply
          for pharmaceutical packaging.
        </p>

        {/* Trust indicators */}
        <div className="wcs-trust-bar" role="list">
          <span className="wcs-trust-item" role="listitem">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            ISO-Grade Manufacturing
          </span>
          <Sep />
          <span className="wcs-trust-item" role="listitem">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Optical QC Inspected
          </span>
          <Sep />
          <span className="wcs-trust-item" role="listitem">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
            </svg>
            Custom Tooling Available
          </span>
          <Sep />
          <span className="wcs-trust-item" role="listitem">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            B2B Pharma Focused
          </span>
        </div>
      </motion.div>

      {/* ── Feature Grid ── */}
      <motion.div
        className="wcs-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Row 1: three cards, highlight card is wider */}
        <div className="wcs-row wcs-row--one">
          {row1.map((f) => (
            <FeatureCard key={f.num} feature={f} />
          ))}
        </div>

        {/* Row 2: two wide cards */}
        <div className="wcs-row wcs-row--two">
          {row2.map((f) => (
            <FeatureCard key={f.num} feature={f} />
          ))}
        </div>
      </motion.div>

    </section>
  );
}
