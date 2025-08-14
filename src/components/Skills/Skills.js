import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faToolbox, 
  faCloud,
  faCodeBranch,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Skills.css";

// Container for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08
    }
  }
};

// Card variants: alternate direction for each card
const cardVariants = [
  {
    hidden: { opacity: 0, x: -70, scale: 0.8, rotate: -8 },
    visible: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 90, damping: 18 } }
  },
  {
    hidden: { opacity: 0, x: 70, scale: 0.8, rotate: 8 },
    visible: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 90, damping: 18 } }
  }
];

// Chip "pop" effect
const chipVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 18 } }
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ====== HEADER ====== */}
      <motion.div className="skills__header" variants={chipVariants}>
        <h2>Skills</h2>
        <p>
          A snapshot of the stacks and strengths I use to build reliable,
          scalable, and delightful software.
        </p>
      </motion.div>

      {/* ====== GRID ====== */}
      <motion.div className="skills__grid" variants={containerVariants}>
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
          variant={cardVariants[0]}
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
          variant={cardVariants[1]}
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
          variant={cardVariants[0]}
        />

        <SkillCard
          title="Version Control"
          icon={<FontAwesomeIcon icon={faCodeBranch} className="about__icon"/>}
          items={["Git", "GitHub"]}
          variant={cardVariants[1]}
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
          variant={cardVariants[0]}
        />
      </motion.div>
    </motion.section>
  );
}

/* ---------- Subcomponents ---------- */

function SkillCard({ title, icon, items, variant }) {
  const long = items.length >= 8;
  return (
    <motion.article
      className={`skills__card ${long ? "skills__card--long" : ""}`}
      variants={variant}
    >
      <header className="skills__card-header">
        <span className="skills__card-emoji" aria-hidden="true">
          {icon}
        </span>
        <h3 className="skills__card-title">{title}</h3>
      </header>
      <motion.div
        className="skills__chips"
        variants={containerVariants}
      >
        {items.map((s, i) => (
          <motion.span
            key={s}
            className="skills__chip"
            title={s}
            variants={chipVariants}
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </motion.article>
  );
}
