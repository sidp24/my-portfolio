import React, { Suspense } from "react";
import "./styles/Projects.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Parallax from "../components/Parallax/Parallax";
import PageLoader from "../components/LoadingScreen/PageLoader";
// Lazy-load the Features grid if it renders lots of cards/images
const Features = React.lazy(() => import("../components/Features/Features"));

export default function Projects() {
  return (
    <PageLoader>
    <div className="Projects">
      <Navbar />
      <Parallax>
        <header className="projects-hero">
          <div className="projects-hero__inner">
            <h1>Projects</h1>
            <p>
              A curated set of things I’ve built — from AI and data tools to
              full-stack apps and robotics. Clean code, clear impact.
            </p>
          </div>
        </header>
        <Suspense fallback={<div className="page-loader">Loading projects…</div>}>
          <Features />
        </Suspense>
      </Parallax>
      <Footer />
    </div>
    </PageLoader>
  );
}
