import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faSquareRootVariable,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Coursework.css";

// Container for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

// Card variants: alternate direction for each card
const cardVariants = [
  {
    hidden: { opacity: 0, x: -70, scale: 0.8, rotate: -8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  },
  {
    hidden: { opacity: 0, x: 70, scale: 0.8, rotate: 8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  },
];

// Chip "pop" effect
const chipVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 18 },
  },
};

export default function Coursework() {
  return (
    <motion.section
      id="coursework"
      className="coursework"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ====== HEADER ====== */}
      <motion.div className="coursework__header" variants={chipVariants}>
        <h2>Relevant Coursework</h2>
        <p>
          A curated look at the classes that shape how I build and
          problem-solve.
        </p>
      </motion.div>

      {/* ====== GRID ====== */}
      <motion.div className="coursework__grid" variants={containerVariants}>
        <CourseCard
          title="Computer Science"
          icon={<FontAwesomeIcon icon={faLaptopCode} className="about__icon" />}
          items={[
            "Introduction to Computer Science",
            "Data Structures and Algorithms",
            "Introduction to Discrete Structures I",
          ]}
          variant={cardVariants[0]}
        />
        <CourseCard
          title="Physics"
          icon={<FontAwesomeIcon icon={faFlask} className="about__icon" />}
          items={[
            "Thermal Physics",
            "Modern Instrumentation",
            "Modern Physics",
            "Physics 203",
            "Physics 204",
            "Analytical Physics II",
          ]}
          variant={cardVariants[1]}
        />

        <CourseCard
          title="Mathematics"
          icon={
            <FontAwesomeIcon
              icon={faSquareRootVariable}
              className="about__icon"
            />
          }
          items={[
            "Calculus I",
            "Calculus II",
            "Multivariable Calculus",
            "Differential Equations",
            "Introduction to Linear Algebra",
          ]}
          variant={cardVariants[0]}
        />
      </motion.div>
    </motion.section>
  );
}

/* ---------- Subcomponents ---------- */

function CourseCard({ title, icon, items, variant }) {
  return (
    <motion.article className="coursework__card" variants={variant}>
      <header className="coursework__card-header">
        <span className="coursework__card-emoji" aria-hidden="true">
          {icon}
        </span>
        <h3 className="coursework__card-title">{title}</h3>
      </header>

      <motion.div className="coursework__chips" variants={containerVariants}>
        {items.map((c) => (
          <motion.span
            key={c}
            className="coursework__chip"
            role="listitem"
            title={c}
            variants={chipVariants}
          >
            {c}
          </motion.span>
        ))}
      </motion.div>
    </motion.article>
  );
}
