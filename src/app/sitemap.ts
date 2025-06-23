import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://relaxstolac.com";
  const locales = ["en", "bs"];

  const pages = ["", "/gallery", "/amenities", "/attractions", "/contact"];

  const sitemap: MetadataRoute.Sitemap = [];

  // ENGLISH pages (root)
  pages.forEach((page) => {
    const url = `${baseUrl}${page}`;
    sitemap.push({
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${page}`,
          bs: `${baseUrl}/bs${page}`,
        },
      },
    });
  });

  // BOSNIAN pages
  pages.forEach((page) => {
    const url = `${baseUrl}/bs${page}`;
    sitemap.push({
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${page}`,
          bs: `${baseUrl}/bs${page}`,
        },
      },
    });
  });

  // Add root redirect page (optional, can be omitted if root is now main EN)
  // sitemap.push({
  //   url: `${baseUrl}/`,
  //   lastModified: new Date(),
  //   changeFrequency: "monthly",
  //   priority: 0.5,
  // });

  return sitemap;
}
