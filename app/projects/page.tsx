import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research tooling, hackathon builds, and things I made to understand a topic better.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        Research tooling, hackathon builds, and things I made to understand a
        topic better.
      </p>

      <div className="mt-10">
        <ProjectGrid />
      </div>
    </section>
  );
}
