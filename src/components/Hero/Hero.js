import React from 'react';
import './Hero.css'; // Make sure this CSS file is linked
import HeroImage from '../images/sid.jpg'; // Replace with the path to your hero image

const Hero = () => {
    return (
        <div id="hero">
        <section className="hero">
            <div className="hero-text">
                <h1>Developing the Future</h1>
                <p className="subheadline">Crafting innovative software solutions with cutting-edge technologies.</p>
                <div className="cta-buttons">
                <a href="#projects"><button className="cta-primary">View My Work</button></a>
                 <a href="#about"><button className="cta-secondary">About Me</button></a>
                </div>
            </div>
            <div className="hero-media">
                {/* Image or illustration relevant to software development */}
                <img src={HeroImage} alt="Software Development Illustration" />
            </div>
        </section>
        </div>
    );
};

export default Hero;
