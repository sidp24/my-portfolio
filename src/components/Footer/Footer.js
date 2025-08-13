import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const email = "siddharth.paul@rutgers.edu"; 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback: create a temporary input
      const el = document.createElement("input");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Brand / Copyright */}
        <div className="footer__brand">
          <h3 className="footer__name">Siddharth Paul</h3>
          <p className="footer__copy">© {year} All rights reserved.</p>
        </div>

        {/* Quick Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <a className="footer__navLink" href="#hero">Home</a>
          <a className="footer__navLink" href="#about">About</a>
          <a className="footer__navLink" href="/projects">Projects</a>
          <a className="footer__navLink" href="/experience">Experience</a>
        </nav>

        {/* Social + Actions */}
        <div className="footer__actions">
          <div className="footer__icons" aria-label="Social links">
            {/* “Favicon-style” buttons */}
            <a
              className="icon icon--linkedin"
              href="https://www.linkedin.com/in/siddharth-paul24/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <span>in</span>
            </a>

            <a
              className="icon icon--github"
              href="https://github.com/sidp24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <span>GH</span>
            </a>

            <a
              className="icon icon--devpost"
              href="https://devpost.com/sidp24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Devpost"
              title="Devpost"
            >
              <span>D</span>
            </a>

            <button
              className={`icon icon--email ${copied ? "is-copied" : ""}`}
              onClick={copyEmail}
              aria-label={`Copy email: ${email}`}
              title={copied ? "Copied!" : "Copy email"}
              type="button"
            >
              <span>@</span>
            </button>
          </div>

          <button
            className="backToTop"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>

      {/* Subline */}
      <div className="footer__subline">
        <span className="dot" aria-hidden="true" /> Open to software roles •
        Building AI, full-stack, and robotics.
      </div>
    </footer>
  );
}
