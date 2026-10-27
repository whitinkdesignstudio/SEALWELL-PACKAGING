"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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

      const url = new URL(window.location.href);
      let canonicalPath = url.pathname;
      if (canonicalPath.includes("13-mm-flip-off-seal")) canonicalPath = "/products/13-mm";
      if (canonicalPath.includes("20-mm-flip-off-seal")) canonicalPath = "/products/20-mm";

      const isRoot = canonicalPath === "" || canonicalPath === "/";
      const targetCanonical = isRoot
        ? `${url.origin}/`
        : `${url.origin}${canonicalPath.replace(/\/$/, "")}`;

      tag.setAttribute("href", targetCanonical);
    } catch {
      // ignore
    }
  }, [pathname]);

  return null;
}
