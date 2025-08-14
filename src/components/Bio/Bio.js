import React from "react";
import "./Bio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faBrain,
  faCloud,
  faDumbbell,
  faGuitar,
  faHeadphones,
  faRobot,
  faHandHoldingHeart,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function Bio() {
  return (
    <motion.section
      className="about"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="about__inner">
        <h2 className="about__title">About Me</h2>

        {/* 2 columns × 3 rows. Order controls placement:
            [L1, R1, L2, R2, L3, R3] */}
        <div className="about__grid">
          {/* Row 1 — Left: Foundation */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Foundation</p>
            <h3 className="card__title">Physics mindset, builder’s toolkit</h3>
            <div className="card__body measure">
              <p>
                I’m <strong>Siddharth Paul</strong>, a problem solver at the
                intersection of <strong>Computer Science</strong> and{" "}
                <strong>Physics</strong>. Physics trains me to reduce complexity
                to core principles, then reason upward. Mathematics formalizes
                those abstractions, and computer science turns them into{" "}
                <em>systems that run</em>.
              </p>
            </div>
          </motion.article>

          {/* Row 1 — Right: Impact (with more achievements) */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Impact</p>
            <h3 className="card__title">From idea to shipped outcomes</h3>
            <div className="card__body measure">
              <div className="stats">
                <span className="stat">
                  <FontAwesomeIcon icon={faTrophy} className="icon" />
                  National Hackathon Wins
                </span>

                <span className="stat">
                  <FontAwesomeIcon icon={faRocket} className="icon" />
                  VEXU Worlds — Top 25
                </span>
                <span className="stat">
                  <FontAwesomeIcon icon={faUsers} className="icon" />
                  Tools used by thousands
                </span>
                <span className="stat">
                  <FontAwesomeIcon icon={faTrophy} className="icon" />
                  1st Place — HackRU (Holobrain)
                </span>
              </div>
            </div>
          </motion.article>

          {/* Row 2 — Left: What I Build */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Work</p>
            <h3 className="card__title">What I build</h3>
            <div className="card__body measure">
              <p>
                My projects span <em>algorithmic trading simulations</em>,{" "}
                <em>AI-driven mental health platforms</em>,{" "}
                <em>interactive web apps</em>, and{" "}
                <em>machine-learning prototypes</em>, covering the stack from UI
                and APIs to infrastructure.
              </p>
            </div>
          </motion.article>

          {/* Row 2 — Right: Beyond Tech */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Beyond Tech</p>
            <h3 className="card__title">Outside the editor</h3>
            <div className="card__body measure">
              <p>
                You’ll find me in the gym, on guitar, or grooving to{" "}
                <strong>Pink Floyd</strong> and <strong>The Beatles</strong>. I
                tinker with <strong>robotics</strong> and make time for friends,
                 late-night drives and new food spots included.
              </p>
            </div>
          </motion.article>
        </div>

        <div className="about__resume">
          <a
            href="/SiddharthPaulResume.pdf"
            download
            className="about__resumeBtn"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}
