"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectFilters } from "@/content/projects";

export default function ProjectGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    const list =
      active === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(active));
    // featured first, original order otherwise
    return [...list].sort(
      (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
    );
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Project filters"
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`rounded-lg border px-3 py-1.5 text-sm transition-colors duration-150 ${
              active === f
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted hover:border-muted-2 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-2 text-sm text-muted-2" aria-live="polite">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
