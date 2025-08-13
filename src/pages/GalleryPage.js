import React, { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./styles/GalleryPage.css";

// Lazy-load the heavy Gallery component so it doesn't block the route
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"));

export default function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Navbar />
      <Suspense fallback={<div className="page-loader">Loading gallery…</div>}>
        <Gallery />
      </Suspense>
      <Footer />
    </div>
  );
}
