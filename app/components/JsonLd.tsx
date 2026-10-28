import React from "react";

const BASE_URL = "https://www.sealwellpackaging.com";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "Sealwell Packaging",
    url: `${BASE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/assets/logo.png`,
    },
    image: `${BASE_URL}/assets/home-hero.png`,
    description:
      "Ahmedabad manufacturer of 13 mm and 20 mm flip-off seals and aluminium vial seals in 25 standard colours.",
    telephone: "+91-98988-66610",
    email: "sealwellpack@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Road No. 13, Shed No. 390, Gopal Charan Industrial Hub, Kunjad–Bakrol Road",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.9917082,
      longitude: 72.7410283,
    },
    hasMap: "https://www.google.com/maps?q=22.9917082,72.7410283",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-98988-66610",
        contactType: "sales",
        email: "sealwellpack@gmail.com",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: `${BASE_URL}/`,
    name: "Sealwell Packaging",
    description:
      "Ahmedabad manufacturer of 13 mm and 20 mm flip-off seals and aluminium vial seals in 25 standard colours.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${BASE_URL}${item.path.startsWith("/") ? "" : "/"}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  specs: readonly (readonly [string, string])[];
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  specs,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image.startsWith("http") ? image : `${BASE_URL}${image}`,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    category: "Pharmaceutical Packaging",
    brand: {
      "@type": "Brand",
      name: "Sealwell Packaging",
    },
    manufacturer: {
      "@id": `${BASE_URL}/#organization`,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    },
    additionalProperty: specs.map(([propName, propValue]) => ({
      "@type": "PropertyValue",
      name: propName,
      value: propValue,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
