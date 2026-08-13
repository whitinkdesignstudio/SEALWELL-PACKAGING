"use client";

import React from "react";
import { clientLogos } from "../data/clientLogos";

interface ClientLogosMarqueeProps {
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

export function ClientLogosMarquee({
  title = "Trusted by Leading Pharmaceutical Brands",
  subtitle,
  showHeader = true,
}: ClientLogosMarqueeProps = {}) {
  // Duplicate logos array to guarantee seamless infinite scroll across all screen resolutions
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="client-logos-section" aria-label="Our Trusted Clients">
      {showHeader && (
        <div className="client-logos-header">
          {title && <h2>{title}</h2>}
          {subtitle && <p className="client-logos-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="client-marquee-container">
        {/* Soft edge gradient masks */}
        <div className="marquee-fade marquee-fade-left" aria-hidden="true" />
        <div className="marquee-fade marquee-fade-right" aria-hidden="true" />

        <div className="client-marquee-track">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="client-logo-card"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                className="client-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

