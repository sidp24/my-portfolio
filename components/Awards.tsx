import Reveal from "@/components/Reveal";
import { awards } from "@/content/awards";

export default function Awards() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Awards</h2>
      </Reveal>

      <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {awards.map((award, i) => (
          <Reveal key={award.title} delay={i * 0.05}>
            <article className="flex flex-col gap-1 p-6 sm:flex-row sm:gap-8">
              <span className="shrink-0 font-mono text-sm text-muted sm:w-14">
                {award.year}
              </span>
              <div>
                <h3 className="font-medium">
                  {award.link ? (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-150 hover:text-accent"
                    >
                      {award.title}
                    </a>
                  ) : (
                    award.title
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-2">{award.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {award.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
