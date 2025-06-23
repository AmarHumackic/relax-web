import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://relaxstolac.com";
  const locales = ["en", "bs"];

  const pages = ["", "/gallery", "/amenities", "/attractions", "/contact"];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add pages for each locale
  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = `/${locale}${page}`;
      sitemap.push({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            bs: `${baseUrl}/bs${page}`,
          },
        },
      });
    });
  });

  // Add root redirect page
  sitemap.push({
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  });

  return sitemap;
}
