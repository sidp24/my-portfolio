export default function Loading() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-40 skeleton-pulse rounded-md" aria-hidden="true" />
        <div className="space-y-2 max-w-2xl">
          <div className="h-4 w-full skeleton-pulse rounded" aria-hidden="true" />
          <div className="h-4 w-4/5 skeleton-pulse rounded" aria-hidden="true" />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 skeleton-pulse rounded-lg"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Project grid skeleton */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-xl border border-border bg-card/40 p-4"
            aria-hidden="true"
          >
            <div className="h-40 skeleton-pulse rounded-lg" />
            <div className="space-y-2">
              <div className="h-5 w-2/3 skeleton-pulse rounded" />
              <div className="h-3 w-full skeleton-pulse rounded" />
              <div className="h-3 w-4/5 skeleton-pulse rounded" />
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-16 skeleton-pulse rounded" />
              <div className="h-6 w-14 skeleton-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
