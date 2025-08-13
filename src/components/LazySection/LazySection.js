import React, { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  rootMargin = "600px 0px",
  minHeight = 600,
  className = "",
}) {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isNear) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsNear(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isNear, rootMargin]);

  return (
    <section
      ref={ref}
      className={`section ${className}`}
      style={!isNear ? { minHeight } : undefined}
    >
      {isNear ? children : null}
    </section>
  );
}
