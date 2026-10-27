import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sealwell-packaging.dhruvitra-vanol-333.chatgpt.site";

  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/products/13-mm", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/products/20-mm", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/colours", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/quality", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
