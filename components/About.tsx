import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

const cards = [
  {
    kicker: "How I work",
    title: "Learn the domain, then build the tool.",
    body: "Most of my projects begin outside what I already know. The hBN analysis pipeline started because the lab had raw photoluminescence scans and no software to interpret them; I hadn't worked with optics data before. Getting far enough into a field to build the right thing is the part of the job I like most.",
  },
  {
    kicker: "Highlights",
    title: "A few results",
    stats: [
      "National hackathon wins",
      "VEXU Worlds — Top 20 (2026)",
      "Tools used by thousands",
      "1st place — HackRU (Holobrain)",
    ],
  },
  {
    kicker: "Range",
    title: "Research code and product code",
    body: "I've shipped physics data pipelines, AR systems, a trading framework, and full-stack applications. The common thread is carrying a system from rough idea to something other people can rely on.",
  },
  {
    kicker: "Off hours",
    title: "Guitar, gym, long drives",
    body: "I play guitar (Pink Floyd, The Beatles), lift, and spend more time on robotics than any competition strictly requires. The rest goes to friends, new restaurants, and long drives.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.kicker} delay={i * 0.05}>
            <article className="h-full rounded-xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {card.kicker}
              </p>
              <h3 className="mt-2 font-medium">{card.title}</h3>
              {card.body && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              )}
              {card.stats && (
                <ul className="mt-3 space-y-2">
                  {card.stats.map((stat) => (
                    <li key={stat} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                      {stat}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <a
            href={site.resume}
            download="Siddharth_Paul_Resume.pdf"
            className="inline-block rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors duration-150 hover:border-muted-2 hover:text-foreground"
          >
            Download résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
