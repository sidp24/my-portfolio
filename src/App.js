import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Parallax from './components/Parallax/Parallax'
function App() {

  return (
    <div className="App">

      <Navbar />
      <Parallax>
        <Hero />

        <About />
        <Features />
      </Parallax>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
