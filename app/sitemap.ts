import type { MetadataRoute } from "next";

// Required for `output: "export"` — the sitemap must be statically generated.
export const dynamic = "force-static";

// Public URLs as actually served on GitHub Pages (basePath included).
const base = "https://sidp24.github.io/my-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/projects", "/experience"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
