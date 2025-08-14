import React from "react";
import "./styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Bio from "../components/Bio/Bio";
import Skills from "../components/Skills/Skills";
import Coursework from "../components/Coursework/Coursework";
import Footer from "../components/Footer/Footer";
import Parallax from "../components/Parallax/Parallax";
import PageLoader from "../components/LoadingScreen/PageLoader";
import HeroImage from "../components/images/sid.jpg";

function Home() {
  return (
    <PageLoader preloadImages={[HeroImage]} text="Warming up the page…">
      <div className="Home">
        <Navbar />
        <Parallax>
          <Hero />
          <br /><br /><br /><br />
          <Bio />
          <br /><br /><br /><br />
          <Skills />
          <br /><br /><br /><br />
          <Coursework />
          <br /><br /><br /><br />
        </Parallax>
        <Footer />
      </div>
    </PageLoader>
  );
}

export default Home;
