import React from 'react';
import './Hero.css'; // Make sure this CSS file is linked
import HeroImage from '../images/sid.jpg';
import { useEffect } from 'react';
import NET from 'vanta/src/vanta.fog';

const Hero = () => {
    useEffect(() => {
        NET({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x6e2279,
            midtoneColor: 0x1d137c,
            lowlightColor: 0x8628a1,
            baseColor: 0x574597,
            blurFactor: 0.65,
            speed: 4.40,
            zoom: 1.20
        })
    }, [])
    return (

        <div id="hero">
            <div className="bg" id="vanta">
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
                        <img src={HeroImage} alt="Software Development Illustration" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Hero;
