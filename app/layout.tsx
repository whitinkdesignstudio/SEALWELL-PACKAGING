import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sealwell-packaging.dhruvitra-vanol-333.chatgpt.site"),
  title: "Sealwell Packaging | Flip-Off Seal Manufacturer",
  description: "Ahmedabad manufacturer of 13 mm and 20 mm flip-off seals and aluminium vial seals in 25 standard colours.",
  applicationName: "Sealwell Packaging",
  keywords: ["flip-off seals", "13 mm flip-off seal", "20 mm flip-off seal", "aluminium vial seals", "Ahmedabad manufacturer"],
  openGraph: {
    title: "Sealwell Packaging | Flip-Off Seal Manufacturer",
    description: "13 mm and 20 mm flip-off seals with 25 standard colour references, manufactured in Ahmedabad.",
    type: "website",
    images: [{ url: "/assets/home-hero.png", width: 1672, height: 941, alt: "Sealwell Packaging flip-off seal range" }],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
