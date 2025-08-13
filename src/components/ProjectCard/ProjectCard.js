import React from "react";
import "./ProjectCard.css";

export default function ProjectCard({ title, description, image, link, repo, tags = [], tech = [] }) {
  const isLiveLink = link && !link.includes("github.com");

  return (
    <article className="pc-card" data-animate="fade-up">
      <div className="pc-media">
        <img src={image} alt={title} loading="lazy" />
        <div className="pc-media__overlay" />
        <div className="pc-media__tags">
          {tags.map((t) => (
            <span key={t} className="pc-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pc-body">
        <h3 className="pc-title">{title}</h3>
        <p className="pc-desc">{description}</p>

        {!!tech.length && (
          <div className="pc-tech">
            {tech.map((t) => (
              <span key={t} className="pc-chip" title={t}>{t}</span>
            ))}
          </div>
        )}

        <div className="pc-actions">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn pc-btn--primary"
              aria-label={isLiveLink ? "Open live project" : "Open project link"}
            >
              {isLiveLink ? "Live" : "Open"}
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="pc-btn pc-btn--ghost"
              aria-label="View source code on GitHub"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
