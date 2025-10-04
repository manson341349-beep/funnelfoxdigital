import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://funnelfoxdigital.com";
  const staticPaths = [
    "/",
    "/services",
    "/cases",
    "/blueprint",
    "/contact",
    "/blog",
    "/about",
    "/process",
    "/pricing",
    "/faq",
    "/privacy",
    "/terms",
    "/resources",
    "/services/web-design",
    "/services/seo",
    "/services/wordpress",
    "/services/app-design",
    "/services/branding-copy",
    "/services/business-strategy",
    "/cases/project-1",
    "/cases/project-2",
    "/cases/project-3",
    "/blog/cwv-checklist-2025",
    "/blog/local-seo-kl"
  ];

  return staticPaths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7
  }));
}