import Reveal from "@/components/Reveal";
import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <div className="relative ml-1 space-y-12 border-l border-border pl-8">
      {experience.map((entry, i) => (
        <Reveal key={`${entry.org}-${entry.period}`} delay={Math.min(i * 0.04, 0.2)}>
          <article className="relative">
            <span
              className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {entry.period}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
            <h3 className="mt-1.5 font-medium">{entry.role}</h3>
            <p className="text-sm text-muted-2">{entry.org}</p>
            <ul className="mt-3 space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="text-sm leading-relaxed text-muted">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
