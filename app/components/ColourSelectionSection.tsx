"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { colours } from "../data/site";
import { ArrowIcon } from "./SiteChrome";

/* ─────────────────────────────────────────────────────────
   Sealwell Hexagon Logo Icon Mark
   ───────────────────────────────────────────────────────── */
const LogoHexMark = () => (
  <svg width="22" height="24" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 5 L93 30 V80 L50 105 L7 80 V30 Z"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinejoin="round"
    />
    <path
      d="M50 35 L72 48 V74 L50 87 L28 74 V48 Z"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinejoin="round"
      opacity="0.4"
    />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   Framer Motion Variants
   ───────────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
};

/* ─────────────────────────────────────────────────────────
   Single Logo-Inspired Colour Card Component
   ───────────────────────────────────────────────────────── */
function LogoColourCard({ code, name, hex }: { code: string; name: string; hex: string }) {
  // Check if hex is a light color to adjust inner stroke contrast
  const isLight = hex === "#f4f1e8" || hex === "#e9dfb4" || hex === "#efd30c";

  return (
    <motion.article variants={itemVariants} className="scs-card">
      {/* Top right subtle logo hexagon geometry mark */}
      <div className="scs-card-bg-mark" aria-hidden="true">
        <LogoHexMark />
      </div>

      {/* Hexagonal Swatch Emblem */}
      <div className="scs-swatch-box">
        <svg viewBox="0 0 100 105" className="scs-swatch-svg" aria-hidden="true">
          <defs>
            <linearGradient id={`shine-${code}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Hexagon Outer Shadow/Border Path */}
          <polygon
            points="50 4, 93 28, 93 76, 50 100, 7 76, 7 28"
            fill="#E2E8F0"
            className="scs-hex-bg"
          />

          {/* Main Swatch Color Fill */}
          <polygon
            points="50 6, 91 29, 91 74, 50 97, 9 74, 9 29"
            fill={hex}
            className="scs-hex-fill"
          />

          {/* Gloss/Depth Overlay */}
          <polygon
            points="50 6, 91 29, 91 74, 50 97, 9 74, 9 29"
            fill={`url(#shine-${code})`}
          />

          {/* Precision inner contour line */}
          <polygon
            points="50 12, 85 32, 85 71, 50 91, 15 71, 15 32"
            fill="none"
            stroke={isLight ? "rgba(7, 25, 43, 0.12)" : "rgba(255, 255, 255, 0.28)"}
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
        </svg>

        {/* Center Code Badge inside Swatch */}
        <span className={`scs-swatch-tag ${isLight ? "scs-swatch-tag--dark" : "scs-swatch-tag--light"}`}>
          {code}
        </span>
      </div>

      {/* Info Block */}
      <div className="scs-info">
        <div className="scs-code-group">
          <span className="scs-dot" aria-hidden="true" />
          <span className="scs-code">{code}</span>
        </div>
        <span className="scs-name">{name}</span>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Exported Section Component
   ───────────────────────────────────────────────────────── */
interface ColourSelectionSectionProps {
  limit?: number;
  showLink?: boolean;
  title?: string;
  subtitle?: string;
}

export function ColourSelectionSection({
  limit,
  showLink = false,
  title = "Standard Colour Selection",
  subtitle = "25 standard colour options for product identification and branding.",
}: ColourSelectionSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  const displayedColours = limit ? colours.slice(0, limit) : colours;

  return (
    <section className="scs-section" ref={ref} aria-labelledby="scs-heading">
      <div className="scs-wrap">

        {/* Section Header */}
        <div className="scs-header">
          <div className="scs-header-text">
            <h2 id="scs-heading" className="scs-title">{title}</h2>
            <p className="scs-subtitle">{subtitle}</p>
          </div>

          {showLink && (
            <a className="scs-link" href="/colours">
              View Full Colour Range <ArrowIcon />
            </a>
          )}
        </div>

        {/* Logo-Inspired Colour Cards Grid */}
        <motion.div
          className="scs-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {displayedColours.map(([code, name, hex]) => (
            <LogoColourCard key={code} code={code} name={name} hex={hex} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
