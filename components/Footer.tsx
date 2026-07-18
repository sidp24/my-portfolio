"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — nothing worth breaking over
    }
  };

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium">Siddharth Paul</p>
          <p className="mt-1 text-sm text-muted">
            Open to software engineering roles.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/projects" className="text-sm text-muted transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="/experience" className="text-sm text-muted transition-colors hover:text-foreground">
            Experience
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={site.links.devpost}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Devpost
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="text-sm text-muted transition-colors hover:text-foreground"
            title={site.email}
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </div>
    </footer>
  );
}
