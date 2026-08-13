"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   Lucide Icons — strokeWidth 1.75
   ───────────────────────────────────────────────────────── */

/** Ruler icon (01) */
const IconRuler = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0l12.6 12.6z" />
    <path d="m14.5 12.5 2-2" />
    <path d="m11.5 9.5 2-2" />
    <path d="m8.5 6.5 2-2" />
    <path d="m17.5 15.5 2-2" />
  </svg>
);

/** ScanLine icon (02) */
const IconScanLine = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <line x1="7" y1="12" x2="17" y2="12" />
  </svg>
);

/** Sparkles icon (03) */
const IconSparkles = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

/** Palette icon (04) */
const IconPalette = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

/** FlaskConical icon (05) */
const IconFlaskConical = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.5L4.5 18A2 2 0 0 0 6 21h12a2 2 0 0 0 1.5-3L14 9.5V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </svg>
);

/** SwatchBook icon (06) */
const IconSwatchBook = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12z" />
    <path d="M16.7 13H19a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7" />
    <path d="M7 17v.01" />
    <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4L16 13" />
  </svg>
);

/** Settings2 icon (07) */
const IconSettings2 = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   Feature items data
   ───────────────────────────────────────────────────────── */
type FeatureItem = {
  num: string;
  category: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  highlight?: boolean;
  tag?: string;
};

const features: FeatureItem[] = [
  {
    num: "01",
    category: "SIZE OPTIONS",
    title: "Available in 13 mm and 20 mm",
    desc: "Standard flip-off seal formats engineered for pharmaceutical vial packaging applications.",
    icon: <IconRuler />,
  },
  {
    num: "02",
    category: "DIMENSIONAL CONSISTENCY",
    title: "Reliable vial compatibility",
    desc: "Controlled dimensions help maintain consistent fit and sealing performance across production batches.",
    icon: <IconScanLine />,
    highlight: true,
    tag: "CORE ENGINEERING STANDARD",
  },
  {
    num: "03",
    category: "CLEAN FINISH",
    title: "Clean and uniform appearance",
    desc: "Consistent finishing provides a professional closure presentation for pharmaceutical packaging.",
    icon: <IconSparkles />,
  },
  {
    num: "04",
    category: "COLOUR RANGE",
    title: "Multiple colour options",
    desc: "A broad range of standard colours supports identification, product differentiation and branding.",
    icon: <IconPalette />,
  },
  {
    num: "05",
    category: "PHARMA APPLICATION",
    title: "Designed for pharmaceutical vial packaging",
    desc: "Suitable for multiple vial-based pharmaceutical packaging requirements.",
    icon: <IconFlaskConical />,
  },
  {
    num: "06",
    category: "CUSTOM COLOURS",
    title: "Custom colour requirements available",
    desc: "Custom colour specifications can be accommodated based on production requirements.",
    icon: <IconSwatchBook />,
  },
  {
    num: "07",
    category: "CUSTOM CONFIGURATIONS",
    title: "Flexible product configurations",
    desc: "Different product configurations can be developed according to customer requirements where technically applicable.",
    icon: <IconSettings2 />,
  },
];

/* ─────────────────────────────────────────────────────────
   Framer Motion Variants
   ───────────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

/* ─────────────────────────────────────────────────────────
   Technical Background SVG
   ───────────────────────────────────────────────────────── */
function DarkTechnicalBg() {
  return (
    <svg className="pfs-bg-pattern" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pfs-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.04)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pfs-grid)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Product Engineering Visual Panel (Left)
   ───────────────────────────────────────────────────────── */
function ProductVisualPanel({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="pfs-visual-panel"
      variants={fadeLeft}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Product Image Frame */}
      <div className="pfs-image-frame">
        {/* Technical Corner Brackets */}
        <span className="pfs-corner pfs-corner--tl" aria-hidden="true" />
        <span className="pfs-corner pfs-corner--tr" aria-hidden="true" />
        <span className="pfs-corner pfs-corner--bl" aria-hidden="true" />
        <span className="pfs-corner pfs-corner--br" aria-hidden="true" />

        <img
          src="/assets/quality-inspection.png"
          alt="Sealwell Flip-off Seals Precision Inspection"
          className="pfs-image"
          draggable={false}
        />

        {/* Technical Annotation Badges */}
        <div className="pfs-badge pfs-badge--top">
          <span className="pfs-badge-dot" />
          <span>ALUMINIUM + PLASTIC</span>
        </div>

        <div className="pfs-badge pfs-badge--bottom">
          <span>13 MM & 20 MM CLOSURES</span>
        </div>
      </div>

      {/* Engineering Specs Bar below image */}
      <div className="pfs-specs-bar">
        <div className="pfs-spec-item">
          <span className="pfs-spec-val">13 mm</span>
          <span className="pfs-spec-lbl">Compact Format</span>
        </div>
        <div className="pfs-spec-sep" aria-hidden="true" />
        <div className="pfs-spec-item">
          <span className="pfs-spec-val">20 mm</span>
          <span className="pfs-spec-lbl">Standard Format</span>
        </div>
        <div className="pfs-spec-sep" aria-hidden="true" />
        <div className="pfs-spec-item">
          <span className="pfs-spec-val">25 SW</span>
          <span className="pfs-spec-lbl">Colours</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Single Feature Row Component
   ───────────────────────────────────────────────────────── */
function FeatureRow({ feat }: { feat: FeatureItem }) {
  return (
    <motion.article
      variants={rowVariants}
      className={`pfs-row ${feat.highlight ? "pfs-row--highlight" : ""}`}
    >
      <div className="pfs-row-inner">
        {/* Number */}
        <span className="pfs-row-num">{feat.num}</span>

        {/* Content Group */}
        <div className="pfs-row-content">
          <div className="pfs-row-meta">
            <span className="pfs-row-cat">{feat.category}</span>
            {feat.tag && <span className="pfs-row-tag">{feat.tag}</span>}
          </div>
          <h3 className="pfs-row-title">{feat.title}</h3>
          <p className="pfs-row-desc">{feat.desc}</p>
        </div>

        {/* Icon */}
        <div className="pfs-row-icon">{feat.icon}</div>
      </div>

      {/* Bottom Separator Line */}
      <div className="pfs-row-divider" aria-hidden="true" />
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Export Component
   ───────────────────────────────────────────────────────── */
export function ProductFeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pfs-section" ref={ref} aria-labelledby="pfs-heading">
      <DarkTechnicalBg />

      <div className="pfs-wrap">
        {/* ── Section Header ── */}
        <motion.header
          className="pfs-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="pfs-header-left">
            <h2 id="pfs-heading" className="pfs-heading">
              Engineered for Precision. <br />
              <em className="pfs-heading-em">Built for Reliable Pharmaceutical Packaging.</em>
            </h2>
            <p className="pfs-sub">
              Every Sealwell flip-off seal is developed with dimensional consistency, clean finishing and flexible configuration options for pharmaceutical vial packaging.
            </p>
          </div>
        </motion.header>

        {/* ── Two-Column Layout ── */}
        <div className="pfs-body">
          {/* Left: Product Visual Panel */}
          <ProductVisualPanel inView={inView} />

          {/* Right: Technical Feature Matrix */}
          <motion.div
            className="pfs-feature-list"
            variants={staggerList}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="pfs-top-divider" aria-hidden="true" />
            {features.map((f) => (
              <FeatureRow key={f.num} feat={f} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
