import React from "react";
import "./styles/ExperiencePage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Experience from "../components/Experience/Experience";
import PageLoader from "../components/LoadingScreen/PageLoader";

export default function ExperiencePage() {
  return (
    <PageLoader>
      <div className="ExperiencePage">
        <Navbar />

        <header className="xp-hero">
          <div className="xp-hero__inner">
            <h1>Experience</h1>
            <p>
              From mentoring new coders to building production dashboards and
              leading robotics, here’s the journey so far.
            </p>
          </div>
        </header>

        <main>
          <Experience />
        </main>

        <Footer />
      </div>
    </PageLoader>
  );
}
