import './Navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <a href="#hero" className="navbar-brand">Siddharth Paul</a>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                {/* <a href="#contact" onClick={closeMenu}>Contact</a> */}

            </div>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
