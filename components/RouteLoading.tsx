export default function RouteLoading() {
  return (
    <section className="mx-auto min-h-[60vh] max-w-5xl px-5 py-20" aria-label="Loading page">
      <div className="flex items-center gap-3">
        <div className="loading-orb" aria-hidden="true" />
        <p className="text-sm text-muted">Loading…</p>
      </div>

      {/* Title skeleton */}
      <div className="mt-10 h-9 w-44 skeleton-pulse rounded-md" aria-hidden="true" />

      {/* Content skeleton */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full max-w-xl skeleton-pulse rounded" aria-hidden="true" />
        <div className="h-4 w-4/5 max-w-lg skeleton-pulse rounded" aria-hidden="true" />
        <div className="h-4 w-3/4 max-w-md skeleton-pulse rounded" aria-hidden="true" />
      </div>

      {/* Card skeleton grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="space-y-3 rounded-xl border border-border bg-card/40 p-4" aria-hidden="true">
          <div className="h-20 skeleton-pulse rounded-lg" />
          <div className="space-y-2">
            <div className="h-4 w-3/4 skeleton-pulse rounded" />
            <div className="h-3 w-1/2 skeleton-pulse rounded" />
          </div>
        </div>
        <div className="space-y-3 rounded-xl border border-border bg-card/40 p-4" aria-hidden="true">
          <div className="h-20 skeleton-pulse rounded-lg" />
          <div className="space-y-2">
            <div className="h-4 w-3/4 skeleton-pulse rounded" />
            <div className="h-3 w-1/2 skeleton-pulse rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
