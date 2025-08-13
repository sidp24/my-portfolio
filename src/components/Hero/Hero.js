import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroImage from "../images/pfp.jpg";
import NET from "vanta/src/vanta.fog";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Init Vanta Fog with a purple palette to match the screenshot
    vantaRef.current = NET({
      el: "#vanta",
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

    return () => {
      if (vantaRef.current && vantaRef.current.destroy) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="hero">
      <div className="bg" id="vanta">
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
                <a href="/projects" className="cta-primary">View My Work</a>
                <a href="#about" className="cta-secondary">About Me</a>
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
