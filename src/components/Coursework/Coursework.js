import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFlask, 
  faSquareRootVariable, 
  faLaptopCode 
} from "@fortawesome/free-solid-svg-icons";
import "./Coursework.css";

export default function Coursework() {
  return (
    <section id="coursework" className="coursework">
      {/* ====== HEADER ====== */}
      <div className="coursework__header">
        <h2>Relevant Coursework</h2>
        <p>
          A curated look at the classes that shape how I build and
          problem-solve.
        </p>
      </div>

      {/* ====== GRID ====== */}
      <div className="coursework__grid">
        <CourseCard
          title="Physics"
          icon={<FontAwesomeIcon icon={faFlask} className="about__icon"/>}
          items={[
            "Thermal Physics",
            "Modern Instrumentation",
            "Modern Physics",
            "Physics 203",
            "Physics 204",
            "Analytical Physics II",
          ]}
        />

        <CourseCard
          title="Mathematics"
          icon={<FontAwesomeIcon icon={faSquareRootVariable} className="about__icon"/>}
          items={[
            "Calculus I",
            "Calculus II",
            "Multivariable Calculus",
            "Differential Equations",
            "Introduction to Linear Algebra",
          ]}
        />

        <CourseCard
          title="Computer Science"
          icon={<FontAwesomeIcon icon={faLaptopCode} className="about__icon"/>}
          items={[
            "Introduction to Computer Science",
            "Data Structures and Algorithms",
            "Introduction to Discrete Structures I",
          ]}
        />
      </div>


    </section>
  );
}

/* ---------- Subcomponents ---------- */

function CourseCard({ title, icon, items }) {
  return (
    <article className="coursework__card">
      <header className="coursework__card-header">
        <span className="coursework__card-emoji" aria-hidden="true">
          {icon}
        </span>
        <h3 className="coursework__card-title">{title}</h3>
      </header>

      <div className="coursework__chips" role="list">
        {items.map((c) => (
          <span key={c} className="coursework__chip" role="listitem" title={c}>
            {c}
          </span>
        ))}
      </div>
    </article>
  );
}
