import type { MetadataRoute } from "next";

import { brand, pages } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${brand.url}/${page.slug}`,
    changeFrequency: "monthly",
    priority: page.slug ? 0.8 : 1,
  }));
}
