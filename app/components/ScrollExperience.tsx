"use client";

import { useEffect } from "react";

const revealSelector = [
  ".home-copy > *",
  ".hero-visual",
  ".capability-strip > div",
  ".page-hero-grid > *",
  ".intro-grid > *",
  ".section-head > *",
  ".preview-card",
  ".approach-title",
  ".approach-list article",
  ".colour-teaser > *",
  ".story-grid > *",
  ".company-facts > div",
  ".value-grid article",
  ".facility-grid > *",
  ".product-detail",
  ".product-overview > *",
  ".size-selector > a",
  ".fit-note > *",
  ".quality-intro > *",
  ".process-rail article",
  ".quality-pillars > div",
  ".pillar-grid article",
  ".colour-page-intro > *",
  ".colour-instructions > span",
  ".catalogue-item",
  ".colour-disclaimer",
  ".contact-intro > *",
  ".contact-form-wrap",
  ".contact-details article",
  ".map-embed",
  ".contact-band > *",
  ".footer-top > *",
].join(",");

export default function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    root.classList.add("motion-ready");

    targets.forEach((target, index) => {
      target.classList.add("reveal-target");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );
    targets.forEach((target) => observer.observe(target));

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll-progress", String(Math.min(1, window.scrollY / max)));
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
      document.body.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
