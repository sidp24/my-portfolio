export default function Loading() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-8 w-40 skeleton-pulse rounded-md" aria-hidden="true" />
        <div className="space-y-2">
          <div className="h-4 w-full skeleton-pulse rounded" aria-hidden="true" />
          <div className="h-4 w-3/4 skeleton-pulse rounded" aria-hidden="true" />
        </div>
      </div>

      {/* Timeline skeleton */}
      <div className="relative ml-1 mt-12 space-y-12 border-l border-border pl-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="relative" aria-hidden="true">
            {/* Timeline dot */}
            <span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-accent" />

            {/* Period */}
            <div className="h-3 w-32 skeleton-pulse rounded" />

            {/* Role */}
            <div className="mt-2 h-5 w-48 skeleton-pulse rounded" />

            {/* Org */}
            <div className="mt-1 h-3 w-40 skeleton-pulse rounded" />

            {/* Bullets */}
            <div className="mt-3 space-y-2">
              <div className="h-4 w-full skeleton-pulse rounded" />
              <div className="h-4 w-5/6 skeleton-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
