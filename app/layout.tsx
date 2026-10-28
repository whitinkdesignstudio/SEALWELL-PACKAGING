import type { Metadata, Viewport } from "next";
import { CanonicalManager } from "./components/CanonicalManager";
import { OrganizationSchema, WebSiteSchema } from "./components/JsonLd";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sealwellpackaging.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sealwell Packaging | Flip-Off Seal Manufacturer",
  description: "Ahmedabad manufacturer of 13 mm and 20 mm flip-off seals and aluminium vial seals in 25 standard colours.",
  applicationName: "Sealwell Packaging",
  keywords: [
    "flip-off seals",
    "13 mm flip-off seal",
    "20 mm flip-off seal",
    "aluminium vial seals",
    "pharmaceutical rubber stoppers",
    "Ahmedabad manufacturer",
  ],
  authors: [{ name: "Sealwell Packaging" }],
  creator: "Sealwell Packaging",
  publisher: "Sealwell Packaging",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
    url: "https://www.sealwellpackaging.com/",
    siteName: "Sealwell Packaging",
    locale: "en_US",
    type: "website",
    images: [{ url: "/assets/home-hero.png", width: 1672, height: 941, alt: "Sealwell Packaging flip-off seal range" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sealwell Packaging | Flip-Off Seal Manufacturer",
    description: "13 mm and 20 mm flip-off seals with 25 standard colour references, manufactured in Ahmedabad.",
    images: ["/assets/home-hero.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=document.querySelector('link[rel="canonical"]');if(!t){t=document.createElement('link');t.rel='canonical';document.head.appendChild(t);}var p=window.location.pathname;if(p.indexOf('13-mm-flip-off-seal')!==-1)p='/products/13-mm';if(p.indexOf('20-mm-flip-off-seal')!==-1)p='/products/20-mm';var h=(p===''||p==='/')?('https://www.sealwellpackaging.com/'):('https://www.sealwellpackaging.com'+p.replace(/\\/$/,''));t.setAttribute('href',h);}catch(e){}})();`,
          }}
        />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body suppressHydrationWarning>
        <CanonicalManager />
        {children}
      </body>
    </html>
  );
}
