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
  faCode,
  faRobot,
  faMusic,
  faHeart,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";
/**
 * Modern About Me section (self-contained: styles included).
 * Drop this in place of your current Bio component.
 */
export default function Bio() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Left: Intro */}
        <div className="about__main">
          <h2 className="about__title">About Me</h2>

          <p className="about__para">
            I’m <strong>Siddharth Paul</strong>, a builder at the intersection
            of <strong>Computer Science</strong> and <strong>Physics</strong>. I
            love taking ideas from <em>“what if?”</em> to <em>“it works.”</em>{" "}
            I’ve shipped <em>algorithmic trading simulations</em>,{" "}
            <em>interactive web apps</em>, and
            <em> ML prototypes</em> across the stack—front end, back end, and
            cloud. Along the way I’ve won hackathons, presented at events, and
            deployed tools that real people use.
          </p>

          <p className="about__para">
            Outside of work, you’ll catch me in the gym, jamming
            on my guitar, and listening to {" "}
            <strong>Pink Floyd</strong> and <strong>The Beatles</strong>. I
            mess around with <strong>robotics</strong> whenever I can and make time
            for friends, exploring on a late night drive or finding new spots for food.
          </p>

          {/* Highlight stats */}
          <div className="about__stats" aria-label="Highlights">
            <span className="about__stat">
              <FontAwesomeIcon icon={faTrophy} className="about__icon" /> Hackathon Winner
            </span>
            <span className="about__stat">
              <FontAwesomeIcon icon={faBrain} className="about__icon" /> AI & Full-Stack
            </span>
            <span className="about__stat">
              <FontAwesomeIcon icon={faCloud} className="about__icon" /> Cloud & DevOps
            </span>
          </div>
        </div>

        {/* Right: Quick facts + (optional) music/embed */}
        <aside className="about__side" aria-label="Quick facts">
          <div className="about__card">
            <h3 className="about__cardTitle">Quick Facts</h3>
            <ul className="about__facts">
              <li className="about__chip">
                <FontAwesomeIcon icon={faDumbbell} className="about__icon" /> Gym + Discipline
              </li>
              <li className="about__chip">
                <FontAwesomeIcon icon={faGuitar} className="about__icon" /> Guitar on weekends
              </li>
              <li className="about__chip">
                <FontAwesomeIcon icon={faHeadphones} className="about__icon" /> Pink Floyd & Beatles
              </li>
              <li className="about__chip">
                <FontAwesomeIcon icon={faRobot} className="about__icon" /> Robotics tinkerer
              </li>
              <li className="about__chip">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="about__icon" /> Time with friends
              </li>
            </ul>
          </div>

          {/* Optional: swap the src with your Spotify embed URL */}
          <div className="about__card">
            <h3 className="about__cardTitle">Now Playing</h3>
            <div className="about__player">
              <iframe
                title="Spotify Player"
                src="https://open.spotify.com/embed/track/0wJoRiX5K5BxlqZTolB2LD?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </aside>
      </div>

    </section>
  );
}
