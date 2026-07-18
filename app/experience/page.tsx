import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships at Iconectiv, research in the Q-Sim lab, and the teams I've led along the way.",
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      <p className="mt-3 leading-relaxed text-muted">
        Internships at Iconectiv, research in the Q-Sim lab, and the teams
        I&rsquo;ve led along the way.
      </p>

      <div className="mt-12">
        <Experience />
      </div>
    </section>
  );
}
