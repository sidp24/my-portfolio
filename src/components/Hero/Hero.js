// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Add this import
import "./Hero.css";
import HeroImage from "../images/pfp.jpg";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const containerRef = useRef(null);   // DOM node for Vanta
  const vantaEffectRef = useRef(null); // Vanta instance

  useEffect(() => {
    // Guard against double-mount in React StrictMode (dev)
    if (!vantaEffectRef.current && containerRef.current) {
      vantaEffectRef.current = FOG({
        el: containerRef.current,
        THREE, // pass THREE so Vanta doesn't look for window.THREE
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x8a2be2, // blueviolet
        midtoneColor: 0x1a146a,   // deep indigo
        lowlightColor: 0x2e0b44,  // purple
        baseColor: 0x0d0930,      // near-black purple
        blurFactor: 0.65,
        speed: 3.8,
        zoom: 1.15,
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <div id="hero">
      <div className="bg" ref={containerRef}>
        {/* subtle gradient overlay to deepen colors like the screenshot */}
        <div className="hero-overlay" />
        <section className="hero">
          <div className="hero__inner">
            {/* Left: Text */}
            <div className="hero-text">
              <h1 className="hero-title">Siddharth Paul</h1>

              <div className="subheadline">
                <TypeAnimation
                  sequence={[
                    "Physicist & Software Engineer", 2000,
                    "Hackathon Winner", 2000,
                    "Full-Stack Developer", 2000,
                    "AI & Data Enthusiast", 2000,
                    "Robotics Builder", 2000,
                    "Cloud & API Engineer", 2000,
                    "Creative Problem Solver", 2000,
                    "Tech + Music Lover", 2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  style={{ fontSize: "1.6rem", lineHeight: 1.2 }}
                />
              </div>

              <div className="cta-buttons">
                <Link to="/projects" className="cta-primary">View My Work</Link>
                <a 
                  href="#about" 
                  className="cta-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about').scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  About Me
                </a>
              </div>
            </div>

            {/* Right: Framed Photo */}
            <div className="hero-media">
              <figure className="hero-photo-frame">
                <img
                  src={HeroImage}
                  alt="Portrait of Siddharth Paul"
                  className="hero-photo"
                />
              </figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
