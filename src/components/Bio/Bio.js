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
        <h2 className="about__title">About</h2>

        {/* 2 columns × 3 rows. Order controls placement:
            [L1, R1, L2, R2, L3, R3] */}
        <div className="about__grid">
          {/* Row 1 — Left: The pattern */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">The pattern</p>
            <h3 className="card__title">Start confused. Ship something real.</h3>
            <div className="card__body measure">
              <p>
                Most of what I build starts with a gap I don’t know how to
                fill. The hBN photoluminescence pipeline started because I had
                raw scans and no real analysis tool — I didn’t understand the
                optics setup going in. I figured it out. That’s roughly how
                everything goes.
              </p>
            </div>
          </motion.article>

          {/* Row 1 — Right: Impact */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Impact</p>
            <h3 className="card__title">Things shipped while figuring it out</h3>
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

          {/* Row 2 — Left: Work */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Work</p>
            <h3 className="card__title">Cross-domain, end to end</h3>
            <div className="card__body measure">
              <p>
                Physics data pipelines. AR systems. Algorithmic trading
                frameworks. ML prototypes. Full-stack apps. The stack varies —
                the goal doesn’t: get the system to a point where it actually
                works, not just looks like it does.
              </p>
            </div>
          </motion.article>

          {/* Row 2 — Right: Beyond Tech */}
          <motion.article className="card" variants={cardVariants}>
            <p className="card__kicker">Outside the editor</p>
            <h3 className="card__title">Guitar, gym, late-night drives</h3>
            <div className="card__body measure">
              <p>
                Pink Floyd and The Beatles. The gym, guitar, robotics when
                there’s no competition reason to. Friends, new food spots,
                drives with no particular destination. That’s most of it.
              </p>
            </div>
          </motion.article>
        </div>

        <div className="about__resume">
          <a
            href={`${process.env.PUBLIC_URL}/SiddharthPaulResume.pdf`}
            download="Siddharth_Paul_Resume.pdf"
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
