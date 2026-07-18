import Reveal from "@/components/Reveal";
import { skills, coursework } from "@/content/skills";

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.05}>
            <article className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="font-medium">{category.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.25}>
          <article className="h-full rounded-xl border border-border bg-card p-6">
            <h3 className="font-medium">Relevant Coursework</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {coursework.join(" · ")}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
