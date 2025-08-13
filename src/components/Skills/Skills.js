import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faToolbox, 
  faCloud,
  faCodeBranch,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      {/* ====== HEADER ====== */}
      <div className="skills__header">
        <h2>Skills</h2>
        <p>
          A snapshot of the stacks and strengths I use to build reliable,
          scalable, and delightful software.
        </p>
      </div>

      {/* ====== GRID ====== */}
      <div className="skills__grid">
        <SkillCard
          title="Programming Languages"
          icon={<FontAwesomeIcon icon={faCode} className="about__icon"/>}
          items={[
            "JavaScript",
            "Python",
            "Java",
            "C#",
            "Lua",
            "HTML & CSS",
            "C++",
          ]}
        />

        <SkillCard
          title="Development Frameworks"
          icon={<FontAwesomeIcon icon={faToolbox} className="about__icon"/>}
          items={[
            "React",
            "Node.js",
            "Ruby on Rails",
            "AngularJS",
            "FastAPI",
            "TensorFlow",
            "PyTorch",
            "OpenCV",
            "Unity",
            "MediaPipe",
          ]}
        />

        <SkillCard
          title="DevOps & Cloud"
          icon={<FontAwesomeIcon icon={faCloud} className="about__icon"/>}
          items={[
            "Docker",
            "AWS",
            "Google Cloud Platform",
            "CI/CD Pipelines",
            "AWS Lambda",
            "Web Security",
          ]}
        />

        <SkillCard
          title="Version Control"
          icon={<FontAwesomeIcon icon={faCodeBranch} className="about__icon"/>}
          items={["Git", "GitHub"]}
        />

        <SkillCard
          title="Soft Skills"
          icon={<FontAwesomeIcon icon={faUsers} className="about__icon"/>}
          items={[
            "Communication",
            "Problem-Solving",
            "Teamwork",
            "Leadership",
            "Time Management",
            "Collaboration",
          ]}
        />
      </div>


    </section>
  );
}

/* ---------- Subcomponents ---------- */

function SkillCard({ title, icon, items }) {
  const long = items.length >= 8;
  return (
    <article className={`skills__card ${long ? "skills__card--long" : ""}`}>
      <header className="skills__card-header">
        <span className="skills__card-emoji" aria-hidden="true">
          {icon}
        </span>
        <h3 className="skills__card-title">{title}</h3>
      </header>
      <div className="skills__chips">
        {items.map((s) => (
          <span key={s} className="skills__chip" title={s}>
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
