// The site is served from two hosts: GitHub Pages (under /my-portfolio) and a
// Vercel mirror (at the root). Both build from `master`, so the only thing that
// differs is the URL each one answers on.

// The URL printed on the résumé. Every page declares this canonical, on both
// hosts, so search engines rank Pages and treat the mirror as a duplicate.
const CANONICAL_BASE = "https://sidp24.github.io/my-portfolio";

// The origin *this* build is served from. Vercel injects the production domain
// (host only, no scheme) at build time; Pages builds fall back to canonical.
// Metadata resolves relative URLs against this, so the file-convention OG image
// points at the host actually serving it rather than 404ing across origins.
export const siteOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://sidp24.github.io";

// Paths keep their trailing slash to match `trailingSlash: true` — otherwise
// the canonical points at a URL that redirects.
export function canonical(path: string) {
  return `${CANONICAL_BASE}${path}`;
}

export const ROUTES = ["/", "/projects/", "/experience/"];
