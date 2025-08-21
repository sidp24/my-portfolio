import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./Awards.css";

const defaultAwards = [
  {
    title: "Multiple National Hackathon Wins (2022–2024)",
    org: "HackRU, MontyHack, RidgeHacks",
    date: "2022–2024",
    tags: ["Hackathon", "Full-Stack", "AI/ML"],
    description:
      "Won 1st Place at HackRU Fall 2024 for Holobrain, a gesture-controlled 3D MRI diagnostic tool with CNN-based anomaly detection. Secured Best Use of AI at MontyHack 2022 and 1st Place at RidgeHacks 2022 and HackMCST for innovative full-stack and AI-driven solutions.",
    link: "https://devpost.com/sidp24", 
  },
  {
    title: "VEXU Worlds — Top 25 Globally",
    org: "VEX Robotics World Championship",
    date: "May 2025",
    tags: ["Robotics", "Team Lead"],
    description:
      "Led build efforts for Rutgers IEEE-VEXU; optimized reliability and performance through iterative design and testing.",
    link: "https://www.vexrobotics.com/competition",
  },
  {
    title: "Congressional App Challenge — 1st Place",
    org: "U.S. House of Representatives (Rep. Frank Pallone)",
    date: "Dec 2022",
    tags: ["Impact", "AI/ML"],
    description:
      "Recognized for building an accessible ML-powered mental health resource that helps destigmatize student support.",
    link: "https://www.congressionalappchallenge.us/",
  },
];

export default function AwardsCerts({ awards = defaultAwards }) {
  return (
    <section id="awards" className="ac">
      <div className="ac__header">
        <h2>Awards</h2>
        <p>
          My highlights from my learning journey: wins, credentials, and moments
          I’m proud of.
        </p>
      </div>

      <div className="ac__grid">
        {/* Awards */}
        <GroupCard title="Awards">
          {awards.length ? (
            <div className="ac__cards">
              {awards.map((item) => (
                <ItemCard key={item.title} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState text="No awards yet — add your milestones here." />
          )}
        </GroupCard>
      </div>
    </section>
  );
}

/* ------------ Subcomponents ------------ */

function GroupCard({ title, icon, children }) {
  return (
    <section className="ac__group" aria-label={title}>
      <header className="ac__groupHeader">
        <span className="ac__icon" aria-hidden="true">
          <FontAwesomeIcon icon={faTrophy} className="about__icon" />
        </span>
        <h3>{title}</h3>
      </header>
      {children}
    </section>
  );
}

function ItemCard({ item }) {
  const { title, org, date, tags = [], description, link } = item;
  return (
    <article className="ac__item">
      {date && <span className="ac__date">{date}</span>}
      <h4 className="ac__title">{title}</h4>
      {org && <p className="ac__org">{org}</p>}
      {description && <p className="ac__desc">{description}</p>}
      {!!tags.length && (
        <div className="ac__tags">
          {tags.map((t) => (
            <span key={t} className="ac__chip">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function EmptyState({ text }) {
  return <div className="ac__empty">{text}</div>;
}
