import React, { useMemo, useState } from "react";
import "./Features.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import Image1 from "../images/myndful.png";
import Image2 from "../images/DVD.png";
import Image3 from "../images/dummyboard.jpg";
import portfolio from "../images/portfolio.png";
import stat from "../images/stat.png";
import batt from "../images/batt.jpg";
import board from "../images/board.JPG";
import vex from "../images/vex.JPG";
import holo from "../images/holo.jpg";
import elevator from "../images/elevator.jpeg";

const projects = [
  {
    id: 1,
    title: "Myndful",
    description:
      "An ML-powered mental health chatbot for adolescents. Built a TensorFlow Sequential model (3-layer dense net) trained via gradient descent, plus a React frontend for a smooth conversational UX.",
    image: Image1,
    link: "https://myndful.ai/",
    repo: null,
    tags: ["AI/ML", "Web", "NLP"],
    tech: ["TensorFlow", "Python", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Statistical Arbitrage Simulator",
    description:
      "Modular Python framework for backtesting cointegration-based stat‑arb (pairs trading): finds cointegrated pairs, generates z‑score signals, simulates trades, and outputs PnL & performance stats. Streamlit app for interactive runs.",
    image: stat,
    link: "https://github.com/sidp24/Statistical-Arbitrage-Simulator",
    repo: "https://github.com/sidp24/Statistical-Arbitrage-Simulator",
    tags: ["Quant", "Backtesting", "Finance", "Data"],
    tech: ["Python", "pandas", "statsmodels", "yfinance", "Streamlit"],
  },

  {
    id: 3,
    title: "Data Visualization Dashboard",
    description:
      "Upload CSVs and explore data via interactive scatter & bar charts with real‑time updates and customization (titles/labels/styles).",
    image: Image2,
    link: "https://github.com/sidp24/Data-Visualization-Dashboard",
    repo: "https://github.com/sidp24/Data-Visualization-Dashboard",
    tags: ["Data", "Web"],
    tech: ["Python", "Pandas", "Plotly", "Dash", "HTML/CSS"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Personal portfolio site hosted on GitHub Pages. Focus on fast loads, clean sections, and mobile-friendly CSS.",
    image: portfolio,
    link: "https://sidp24.github.io/my-portfolio/",
    repo: "https://github.com/sidp24/my-portfolio",
    tags: ["Web"],
    tech: ["HTML", "CSS", "GitHub Pages"],
  },
  {
    id: 5,
    title: "VEX25‑SCAR‑24in (fork)",
    description:
      "Fork of a VEX U SCARA arm project for study/adaptation. Useful for motion planning and manipulator control references.",
    image: vex,
    link: "https://github.com/sidp24/VEX25-SCAR-24in",
    repo: "https://github.com/sidp24/VEX25-SCAR-24in",
    tags: ["Robotics"],
    tech: ["C++"],
  },
  {
    id: 6,
    title: "Holobrain",
    description:
      "Hackathon repo (Python). Codebase for a HackRU build; scripts and app skeleton included.",
    image: holo,
    link: "https://github.com/sidp24/HackRU",
    repo: "https://github.com/sidp24/HackRU",
    tags: ["Hackathon"],
    tech: ["Python"],
  },
  {
    id: 7,
    title: "ElevatorCode (FRC 7587)",
    description:
      "WPILib/Java control software for a competitive robotics elevator subsystem (Team 7587). Includes Gradle build, vendor deps, and structured subsystem code.",
    image: elevator,
    link: "https://github.com/sidp24/ElevatorCode",
    repo: "https://github.com/sidp24/ElevatorCode",
    tags: ["Robotics"],
    tech: ["Java", "WPILib", "Gradle"],
  },
  {
    id: 8,
    title: "Dummyboard",
    description:
      "WPILib test harness for motors/controllers to onboard teammates and validate hardware quickly (FRC).",
    image: Image3,
    link: "https://github.com/sidp24/dummyboard2022",
    repo: "https://github.com/sidp24/dummyboard2022",
    tags: ["Robotics", "Tooling"],
    tech: ["Java", "WPILib", "Gradle"],
  },
  {
    id: 9,
    title: "PIDTest",
    description:
      "Minimal WPILib project to experiment with PID control loops on robot hardware (FRC).",
    image: board,
    link: "https://github.com/sidp24/PIDTest",
    repo: "https://github.com/sidp24/PIDTest",
    tags: ["Robotics", "Controls"],
    tech: ["Java", "WPILib"],
  },

  {
    id: 10,
    title: "BomBot2022",
    description:
      "FRC robot code (Java/WPILib) for the 2022 season. Standard Gradle/WPILib structure.",
    image: batt,
    link: "https://github.com/sidp24/BomBot2022",
    repo: "https://github.com/sidp24/BomBot2022",
    tags: ["Robotics"],
    tech: ["Java", "WPILib", "Gradle"],
  }, 
];

// Visible filters on the page
const FILTERS = [
  "All",
  "AI/ML",
  "Web",
  "Data",
  "Robotics",
  "Finance",
  "Hackathon",
  "Tooling",
  "Controls",
  "Backtesting",
  "Quant"
];

export default function Features() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section className="features" id="projects">
      <div className="features__inner">
        {/* FILTER BAR */}
        <div
          className="features__filters"
          role="tablist"
          aria-label="Project filters"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`features__filter ${active === f ? "is-active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
          <span className="features__count" aria-live="polite">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* GRID */}
        <div className="features__grid">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
              tags={project.tags}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
