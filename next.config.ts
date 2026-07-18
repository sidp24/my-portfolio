import type { NextConfig } from "next";

// GitHub Pages serves the site under /my-portfolio. The CI workflow sets
// GITHUB_PAGES=true; local dev and builds stay at the root path.
const basePath = process.env.GITHUB_PAGES ? "/my-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // Static export has no image-optimization server; sources are pre-compressed.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
