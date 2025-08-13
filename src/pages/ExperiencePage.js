import React from "react";
import "./styles/ExperiencePage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Experience from "../components/Experience/Experience";


export default function ExperiencePage() {
  return (
    <div className="ExperiencePage">
      <Navbar />

      <header className="xp-hero">
        <div className="xp-hero__inner">
          <h1>Experience</h1>
          <p>
            From mentoring new coders to building production dashboards and leading robotics,
            here’s the journey so far.
          </p>
        </div>
      </header>

      <main>
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
