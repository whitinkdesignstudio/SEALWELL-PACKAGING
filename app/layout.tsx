import type { Metadata, Viewport } from "next";
import { CanonicalManager } from "./components/CanonicalManager";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sealwell-packaging.dhruvitra-vanol-333.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sealwell Packaging | Flip-Off Seal Manufacturer",
  description: "Ahmedabad manufacturer of 13 mm and 20 mm flip-off seals and aluminium vial seals in 25 standard colours.",
  applicationName: "Sealwell Packaging",
  keywords: ["flip-off seals", "13 mm flip-off seal", "20 mm flip-off seal", "aluminium vial seals", "Ahmedabad manufacturer"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sealwell Packaging | Flip-Off Seal Manufacturer",
    description: "13 mm and 20 mm flip-off seals with 25 standard colour references, manufactured in Ahmedabad.",
    type: "website",
    images: [{ url: "/assets/home-hero.png", width: 1672, height: 941, alt: "Sealwell Packaging flip-off seal range" }],
  },
  icons: {
    icon: "/assets/ChatGPT Image Aug 14, 2026, 10_14_11 AM.png",
    shortcut: "/assets/ChatGPT Image Aug 14, 2026, 10_14_11 AM.png",
    apple: "/assets/ChatGPT Image Aug 14, 2026, 10_14_11 AM.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=document.querySelector('link[rel="canonical"]');if(!t){t=document.createElement('link');t.rel='canonical';document.head.appendChild(t);}var p=window.location.pathname;if(p.indexOf('13-mm-flip-off-seal')!==-1)p='/products/13-mm';if(p.indexOf('20-mm-flip-off-seal')!==-1)p='/products/20-mm';var h=(p===''||p==='/')?(window.location.origin+'/'):(window.location.origin+p.replace(/\\/$/,''));t.setAttribute('href',h);}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <CanonicalManager />
        {children}
      </body>
    </html>
  );
}
