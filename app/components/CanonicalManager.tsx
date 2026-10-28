"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PRODUCTION_ORIGIN = "https://www.sealwellpackaging.com";

export function CanonicalManager() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", "canonical");
        document.head.appendChild(tag);
      }

      let canonicalPath = pathname || "/";
      if (canonicalPath.includes("13-mm-flip-off-seal")) canonicalPath = "/products/13-mm";
      if (canonicalPath.includes("20-mm-flip-off-seal")) canonicalPath = "/products/20-mm";

      const isRoot = canonicalPath === "" || canonicalPath === "/";
      const targetCanonical = isRoot
        ? `${PRODUCTION_ORIGIN}/`
        : `${PRODUCTION_ORIGIN}${canonicalPath.replace(/\/$/, "")}`;

      tag.setAttribute("href", targetCanonical);
    } catch {
      // ignore
    }
  }, [pathname]);

  return null;
}
