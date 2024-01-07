import './Navbar.css';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleSwipe = (e) => {
            if (!isOpen && Math.abs(e.touches[0].clientX - e.touches[1].clientX) > 10) {
                e.preventDefault(); // Prevent horizontal scrolling only when the menu is closed
            }
        };

        document.addEventListener('touchmove', handleSwipe, { passive: false });

        return () => {
            document.removeEventListener('touchmove', handleSwipe);
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            <a href="#hero" className="navbar-brand">Siddharth Paul</a>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                {/* Add closeMenu to each link's onClick */}
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                {/* <a href="#contact" onClick={closeMenu}>Contact</a> */}
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
