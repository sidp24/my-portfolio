import type { MetadataRoute } from "next";
import { ROUTES, canonical } from "@/lib/site";

// Required for `output: "export"` — the sitemap must be statically generated.
export const dynamic = "force-static";

// Always the canonical (Pages) URLs, even in the Vercel build — a sitemap lists
// the URLs that should be indexed, which is never the mirror's.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: canonical(path),
    lastModified: now,
  }));
}
