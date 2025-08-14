import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faSquareRootVariable,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
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

const courseData = [
  {
    title: "Computer Science",
    icon: <FontAwesomeIcon icon={faLaptopCode} className="about__icon" />,
    items: [
      {
        name: "Introduction to Computer Science",
        desc: "Fundamentals of programming, algorithms, and problem-solving.",
      },
      {
        name: "Data Structures and Algorithms",
        desc: "Covers arrays, linked lists, trees, graphs, and algorithmic analysis.",
      },
      {
        name: "Introduction to Discrete Structures I",
        desc: "Logic, proofs, sets, functions, and combinatorics for CS.",
      },
    ],
    variant: cardVariants[0],
  },
  {
    title: "Physics",
    icon: <FontAwesomeIcon icon={faFlask} className="about__icon" />,
    items: [
      {
        name: "Thermal Physics",
        desc: "Thermodynamics, statistical mechanics, and heat transfer.",
      },
      {
        name: "Modern Instrumentation",
        desc: "Lab techniques and instrumentation in modern physics.",
      },
      {
        name: "Modern Physics",
        desc: "Quantum mechanics, relativity, and atomic structure.",
      },
      {
        name: "Physics 203",
        desc: "Mechanics, waves, and introductory physics concepts.",
      },
      {
        name: "Physics 204",
        desc: "Electricity, magnetism, and optics.",
      },
      {
        name: "Analytical Physics II",
        desc: "Advanced mechanics and mathematical methods in physics.",
      },
    ],
    variant: cardVariants[1],
  },
  {
    title: "Mathematics",
    icon: <FontAwesomeIcon icon={faSquareRootVariable} className="about__icon" />,
    items: [
      {
        name: "Calculus I",
        desc: "Limits, derivatives, and integrals of single-variable functions.",
      },
      {
        name: "Calculus II",
        desc: "Techniques of integration, sequences, and series.",
      },
      {
        name: "Multivariable Calculus",
        desc: "Partial derivatives, multiple integrals, and vector calculus.",
      },
      {
        name: "Differential Equations",
        desc: "Solving ordinary differential equations and applications.",
      },
      {
        name: "Introduction to Linear Algebra",
        desc: "Matrices, vectors, eigenvalues, and linear transformations.",
      },
    ],
    variant: cardVariants[0],
  },
];

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
        {courseData.map((course, idx) => (
          <CourseCard
            key={course.title}
            title={course.title}
            icon={course.icon}
            items={course.items}
            variant={course.variant}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

/* ---------- Subcomponents ---------- */

function CourseCard({ title, icon, items, variant }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.article
      className="coursework__card"
      variants={variant}
    >
      <header className="coursework__card-header">
        <span className="coursework__card-emoji" aria-hidden="true">
          {icon}
        </span>
        <h3 className="coursework__card-title">{title}</h3>
      </header>
      <motion.div className="coursework__chips" variants={containerVariants}>
        {items.map((c, i) => (
          <motion.span
            key={c.name}
            className={`coursework__chip${hovered === i ? " coursework__chip--expanded" : ""}`}
            role="listitem"
            title={c.name}
            variants={chipVariants}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            layout
            animate={
              hovered === i
                ? { scale: [1, 1.08, 1], transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }
                : { scale: 1, transition: { duration: 0.3 } }
            }
            style={{
              cursor: "pointer",
              minWidth: hovered === i ? "220px" : "auto",
              maxWidth: hovered === i ? "340px" : "none",
              whiteSpace: hovered === i ? "normal" : "nowrap",
              overflow: "hidden",
              transition: "min-width 0.7s cubic-bezier(.77,0,.18,1), max-width 0.7s cubic-bezier(.77,0,.18,1), background 0.2s",
            }}
          >
            <span style={{ fontWeight: 500 }}>{c.name}</span>
            <AnimatePresence>
              {hovered === i && (
                <motion.span
                  className="coursework__chip-desc"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    marginLeft: "0.5rem",
                    fontWeight: 400,
                    color: "#a7b2c3",
                    fontSize: "0.93rem",
                  }}
                >
                  {c.desc}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        ))}
      </motion.div>
    </motion.article>
  );
}
