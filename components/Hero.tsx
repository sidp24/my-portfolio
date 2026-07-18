import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-24 pt-20 sm:pt-28">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            CS + Physics @ Rutgers
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Siddharth Paul
          </h1>
          <p className="mt-5 text-lg leading-relaxed">
            I&rsquo;m studying computer science and physics at Rutgers. Recent
            work: data pipelines for a quantum materials lab, an AR whiteboard,
            and a pairs-trading backtester.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            I like problems where the method isn&rsquo;t obvious at the start.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity duration-150 hover:opacity-85"
            >
              Projects
            </Link>
            <a
              href="#about"
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors duration-150 hover:border-muted-2 hover:text-foreground"
            >
              About
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src={asset("/images/pfp.jpg")}
            alt="Portrait of Siddharth Paul"
            width={224}
            height={224}
            priority
            className="h-40 w-40 rounded-xl border border-border object-cover sm:h-56 sm:w-56"
          />
        </div>
      </div>
    </section>
  );
}
