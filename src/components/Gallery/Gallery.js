// AutoGalleryWebpack.jsx
import React, { useMemo, useState, useEffect } from "react";

export default function Gallery() {
  const imageUrls = useMemo(() => {
    const ctx = require.context(
      "../../../public/photos",
      true,
      /\.(png|jpe?g|webp|gif)$/i
    );
    const urls = ctx.keys().map(ctx);
    return urls.sort().reverse();
  }, []);

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => Math.min(i + 1, imageUrls.length - 1));
      if (e.key === "ArrowLeft") setActive((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, imageUrls.length]);

  return (
    <section className="ag">
      <div className="ag__header">
        <h1 className="ag__title">Photo Gallery</h1>
        <p className="ag__subtitle">A collection of moments captured through my lens</p>
      </div>
      
      <div className="ag__grid" role="list">
        {imageUrls.map((src, i) => (
          <button
            key={src}
            className="ag__item"
            onClick={() => setActive(i)}
            aria-label="Open image"
          >
            <img src={src} alt="" className="ag__img" loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="ag__overlay" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <div className="ag__card" onClick={(e) => e.stopPropagation()}>
            <button className="ag__close" onClick={() => setActive(null)} aria-label="Close">
              &times;
            </button>
            <button
              className="ag__nav ag__prev"
              onClick={() => setActive((i) => Math.max(i - 1, 0))}
              aria-label="Previous"
              disabled={active === 0}
            >
              ‹
            </button>
            <img src={imageUrls[active]} alt="" className="ag__imgModal" loading="eager" />
            <button
              className="ag__nav ag__next"
              onClick={() => setActive((i) => Math.min(i + 1, imageUrls.length - 1))}
              aria-label="Next"
              disabled={active === imageUrls.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      )}

      <style>{`
        :root {
          --bg:#0f0a1f; 
          --text:#e8eef7; 
          --border:rgba(255,255,255,.14);
          --panel:rgba(255,255,255,.06); 
          --panel2:rgba(255,255,255,.10);
        }
        
        .ag { 
          background:
            radial-gradient(1200px 600px at 10% -10%, rgba(138,43,226,.22), transparent 60%),
            radial-gradient(900px 500px at 100% 0%, rgba(156,163,175,.14), transparent 60%),
            var(--bg);
          color: var(--text); 
          min-height: 100vh; 
          padding: 6rem 1rem 2rem; /* Increased top padding for navbar */
        }

        .ag__header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          padding: 0 1rem;
        }

        .ag__title {
          font-size: clamp(2rem, 5vw, 3rem);
          margin: 0 0 0.5rem;
          background: linear-gradient(90deg, #7cf2c6, #7cb8ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ag__subtitle {
          color: var(--text);
          opacity: 0.8;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .ag__grid {
          columns: 16rem;
          column-gap: 1.5rem; /* Increased gap */
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .ag__item{
          display:block; width:100%; border:none; background:transparent; padding:0;
          margin:0 0 1.25rem; break-inside: avoid; cursor: pointer; border-radius:12px; overflow:hidden;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .ag__item:hover{ transform: translateY(-2px); box-shadow: 0 12px 24px rgba(0,0,0,.25); }
        .ag__img{ width:100%; height:auto; display:block; object-fit:cover; }

        .ag__overlay{
          position: fixed; inset: 0; background: rgba(0,0,0,.92);
          display:flex; align-items:center; justify-content:center; z-index:2000; padding:1rem;
        }
        .ag__card{ position: relative; width: min(1100px, 96vw); display:grid; place-items:center; }
        .ag__close{
          position:absolute; top:.5rem; right:.6rem; font-size:2.2rem; background:transparent; color:#fff; border:none; cursor:pointer;
        }
        .ag__close:hover{ color:#ff5252; }

        .ag__nav{
          position:absolute; top:50%; transform:translateY(-50%); width:44px; height:44px; border-radius:50%;
          border:1px solid var(--border); background: var(--panel2); color:#fff; font-size:1.4rem; cursor:pointer;
        }
        .ag__nav:hover{ background: var(--panel); }
        .ag__prev{ left:.6rem; }
        .ag__next{ right:.6rem; }

        .ag__imgModal{
          display:block; max-width:min(90vw, 1000px); max-height: 70vh; width:auto; height:auto; object-fit:contain;
          border:1px solid var(--border); border-radius:12px; box-shadow: 0 16px 40px rgba(0,0,0,.35);
          background:#000;
        }

        @media (max-width: 640px){
          .ag {
            padding-top: 5rem; /* Slightly less padding on mobile */
          }
          
          .ag__header {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
