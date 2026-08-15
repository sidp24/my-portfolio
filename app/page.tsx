import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import { canonical } from "@/lib/site";

// Title and description inherit from the root layout; this only pins the
// canonical, which can't live in the layout without children inheriting it.
export const metadata: Metadata = {
  alternates: { canonical: canonical("/") },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Awards />
    </>
  );
}
