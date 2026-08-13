"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   Lucide-style icons — consistent strokeWidth 1.75
   ───────────────────────────────────────────────────────── */

const IconSyringe = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 2 4 4" /><path d="m17 7 3-3" />
    <path d="M19 9 8.7 19.3c-.8.8-2 .8-2.8 0l-1.2-1.2c-.8-.8-.8-2 0-2.8L15 5" />
    <path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />
  </svg>
);

const IconPill = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="M8.5 8.5 16 16" />
  </svg>
);

const IconShieldCheck = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconPackageCheck = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 2 2 4-4" />
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
    <path d="M16.5 9.4 7.55 4.24" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <line x1="12" y1="22" x2="12" y2="12" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   Application index data (02 – 05; 01 is the primary panel)
   ───────────────────────────────────────────────────────── */
type AppItem = { num: string; title: string; desc: string; icon: React.ReactNode };

const apps: AppItem[] = [
  {
    num: "02",
    title: "Injectable Product Packaging",
    desc: "Secure tamper-evident closure solutions for sterile injectable medications requiring precise vial sealing.",
    icon: <IconSyringe />,
  },
  {
    num: "03",
    title: "Pharmaceutical Formulations",
    desc: "Reliable aluminium seal compatibility across diverse liquid, lyophilised and suspension pharmaceutical preparations.",
    icon: <IconPill />,
  },
  {
    num: "04",
    title: "Biotech & Healthcare",
    desc: "High-integrity closure protection for biopharma, healthcare diagnostics and sensitive biological reagents.",
    icon: <IconShieldCheck />,
  },
  {
    num: "05",
    title: "Custom Vial Closures",
    desc: "Flexible flip-off seal formats designed for specialised laboratory, research and custom packaging requirements.",
    icon: <IconPackageCheck />,
  },
];

/* ─────────────────────────────────────────────────────────
   Subtle technical background — dot grid
   ───────────────────────────────────────────────────────── */
function TechnicalBg() {
  return (
    <svg className="eas-technical-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="eas-dot-p" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="0.8" cy="0.8" r="0.8" fill="rgba(7,25,43,0.04)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#eas-dot-p)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Framer Motion variants
   ───────────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const staggerRows = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const rowItem = {
  hidden: { opacity: 0, x: 18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

/* ─────────────────────────────────────────────────────────
   Primary editorial panel (left column)
   ───────────────────────────────────────────────────────── */
function PrimaryPanel({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="eas-primary"
      variants={fadeLeft}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Product image block */}
      <div className="eas-visual">
        <img
          src="/assets/suitable-applications-hero.png"
          alt="Sealwell 20 mm Flip-Off Seal — pharmaceutical vial closure"
          className="eas-visual-img"
          draggable={false}
        />
      </div>

      {/* Text editorial block */}
      <div className="eas-primary-text">

        <h3 className="eas-primary-title">Pharmaceutical Vials</h3>
        <p className="eas-primary-desc">
          Precision flip-off seal solutions engineered for pharmaceutical vial
          packaging, injectable products and specialised healthcare applications.
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Single application directory row (right column)
   ───────────────────────────────────────────────────────── */
function AppRow({ app }: { app: AppItem }) {
  return (
    <motion.article variants={rowItem} className="eas-row">
      <div className="eas-row-body">
        <span className="eas-row-num">{app.num}</span>
        <div className="eas-row-icon">{app.icon}</div>
        <div className="eas-row-text">
          <h3 className="eas-row-title">{app.title}</h3>
          <p className="eas-row-desc">{app.desc}</p>
        </div>
        <div className="eas-row-arrow"><IconArrowRight /></div>
      </div>
      <div className="eas-row-line" aria-hidden="true" />
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────
   Section export
   ───────────────────────────────────────────────────────── */
export function SuitableApplicationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="eas-section" ref={ref} aria-labelledby="eas-heading">
      <TechnicalBg />

      <div className="eas-wrap">

        {/* ── Editorial Header ── */}
        <motion.header
          className="eas-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="eas-header-l">
            <div className="eas-label-row">


            </div>
            <h2 id="eas-heading" className="eas-heading">
              Engineered for Critical{" "}
              <em className="eas-heading-em">Pharmaceutical Applications</em>
            </h2>
            <p className="eas-header-sub">
              Precision closure solutions designed for pharmaceutical, injectable,
              biotech and specialised vial packaging requirements.
            </p>
          </div>
        </motion.header>


        {/* ── Two-column body ── */}
        <div className="eas-body">

          {/* Left — product editorial */}
          <PrimaryPanel inView={inView} />

          {/* Right — application index */}
          <motion.div
            className="eas-index"
            variants={staggerRows}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="eas-index-rule" aria-hidden="true" />
            {apps.map((a) => <AppRow key={a.num} app={a} />)}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
