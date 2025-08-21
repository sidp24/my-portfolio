import React, { Suspense } from "react";
import "./styles/Projects.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Parallax from "../components/Parallax/Parallax";
import PageLoader from "../components/LoadingScreen/PageLoader";
// Lazy-load the Features grid if it renders lots of cards/images
// import batts from "../components/images/batt.jpg";
// import board from "../components/images/board.JPG";
// import dummyboard from "../components/images/dummyboard.jpg";
// import DVD from "../components/images/DVD.png";
// import elevator from "../components/images/elevator.jpeg";
// import holo from "../components/images/holo.jpg";
// import myndful from "../components/images/myndful.png";
// import portfolio from "../components/images/portfolio.png";
// import stat from "../components/images/stat.png";
// import vex from "../components/images/vex.JPG";

const Features = React.lazy(() => import("../components/Features/Features"));

export default function Projects() {
  return (
    // <PageLoader
    //   preloadImages={[
    //     batts,
    //     board,
    //     dummyboard,
    //     DVD,
    //     elevator,
    //     holo,
    //     myndful,
    //     portfolio,
    //     stat,
    //     vex,
    //   ]}
    //   text="Open Sesame!"
    // >
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
          <Suspense
            fallback={<div className="page-loader">Loading projects…</div>}
          >
            <Features />
          </Suspense>
        </Parallax>
        <Footer />
      </div>
    // </PageLoader>
  );
}
