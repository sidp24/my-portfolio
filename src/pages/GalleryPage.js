// src/pages/GalleryPage.jsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import "./styles/GalleryPage.css";

export default function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
