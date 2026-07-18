// Prefixes public-asset paths with the basePath (set for GitHub Pages builds).
// next/link handles this automatically; plain hrefs and image srcs do not.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
