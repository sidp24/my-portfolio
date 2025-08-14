import React, { useEffect, useMemo, useRef, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function PageLoader({
  children,
  preloadImages = [],
  minDelay = 600,
  text = "Loading…",
}) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const progressRef = useRef(0);

  // Simulated progress while real tasks complete 
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      // ease toward 85% max until real completion
      const target = 85;
      progressRef.current = Math.min(target, progressRef.current + Math.random() * 8);
      setProgress(Math.round(progressRef.current));
    }, 180);
    return () => clearInterval(id);
  }, [visible]);

  const preloadPromises = useMemo(() => {
    const list = Array.isArray(preloadImages) ? preloadImages : [];
    return list.map((src) => {
      if (!src) return Promise.resolve();
      return new Promise((res) => {
        const img = new Image();
        img.onload = () => res();
        img.onerror = () => res(); // don't block on error
        img.src = typeof src === "string" ? src : String(src);
      });
    });
  }, [preloadImages]);

  useEffect(() => {
    let cancelled = false;

    const domReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));

    const fontsReady =
      document.fonts && document.fonts.ready
        ? document.fonts.ready.catch(() => {})
        : Promise.resolve();

    const delay = new Promise((res) => setTimeout(res, minDelay));

    Promise.all([domReady, fontsReady, ...preloadPromises, delay]).then(() => {
      if (cancelled) return;
      // Finish progress smoothly to 100, then fade out
      const to100 = () =>
        new Promise((res) => {
          const id = setInterval(() => {
            progressRef.current = Math.min(100, progressRef.current + 4);
            setProgress(Math.round(progressRef.current));
            if (progressRef.current >= 100) {
              clearInterval(id);
              res();
            }
          }, 16);
        });

      to100().then(() => {
        // small timeout to let the bar reach 100 visually
        setTimeout(() => setVisible(false), 180);
      });
    });

    return () => {
      cancelled = true;
    };
  }, [minDelay, preloadPromises]);

  return (
    <>
      <LoadingScreen progress={progress} text={text} visible={visible} />
      {/* keep page hidden until loader hides to prevent layout flash */}
      <div style={{ opacity: visible ? 0 : 1, transition: "opacity .25s ease" }}>{children}</div>
    </>
  );
}
