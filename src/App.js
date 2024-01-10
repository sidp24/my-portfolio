import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Parallax from './components/Parallax/Parallax'
// import Skills from './components/Skills/Skills';
import ScrollAnimationComponent from './components/AnimatedScroll/ScrollAnimationComponent';

function App() {

  return (
    <div className="App">

      <Navbar />

      <Parallax>
        <Hero />
        <ScrollAnimationComponent>
          <About />
        </ScrollAnimationComponent>

        {/* <Skills /> */}
        <ScrollAnimationComponent>
        <Features />
        </ScrollAnimationComponent>

      </Parallax>
      {/* <Contact /> */}

      <Footer />

    </div>
  );
}

export default App;
