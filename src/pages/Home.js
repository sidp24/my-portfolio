import React, { Suspense, lazy } from "react";
import "./styles/Home.css";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Parallax from "../components/Parallax/Parallax";
import LazySection from "../components/LazySection/LazySection";
import SectionSkeleton from "../components/LazySection/SkeletonSection";
// Code-split heavier sections
const Bio = lazy(() => import("../components/Bio/Bio"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Coursework = lazy(() => import("../components/Coursework/Coursework"));
const Awards = lazy(() => import("../components/Awards/Awards"));



function Home() {
  return (
    <div className="Home">
      <Navbar />

      <Parallax>
          <Hero />

        {/* BIO */}
        <LazySection minHeight={700} rootMargin="800px 0px">
          <Suspense fallback={<SectionSkeleton title="Bio" />}>
            <section className="section section-spacing">
              <Bio />
            </section>
          </Suspense>
        </LazySection>

        {/* SKILLS */}
        <LazySection minHeight={700} rootMargin="800px 0px">
          <Suspense fallback={<SectionSkeleton title="Skills" />}>
            <section className="section section-spacing">
              <Skills />
            </section>
          </Suspense>
        </LazySection>

        {/* COURSEWORK */}
        <LazySection minHeight={700} rootMargin="800px 0px">
          <Suspense fallback={<SectionSkeleton title="Coursework" />}>
            <section className="section section-spacing">
              <Coursework />
            </section>
          </Suspense>
        </LazySection>

        {/* AWARDS */}
        <LazySection minHeight={700} rootMargin="800px 0px">
          <Suspense fallback={<SectionSkeleton title="Awards & Certifications" />}>
            <section className="section section-spacing">
              <Awards />
            </section>
          </Suspense>
        </LazySection>
      </Parallax>

      <Footer />
    </div>
  );
}

export default Home;
