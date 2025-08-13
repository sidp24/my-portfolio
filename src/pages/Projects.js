import React from "react";
import "./styles/Projects.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Features from "../components/Features/Features";
import Parallax from "../components/Parallax/Parallax";

export default function Projects() {
  return (
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
        <Features />
      </Parallax>
      <Footer />
    </div>
  );
}
