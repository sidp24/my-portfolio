import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="navbar-brand">Siddharth Paul</Link>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/experience" onClick={closeMenu}>My Experience</Link>
                <Link to="/projects" onClick={closeMenu}>My Projects</Link>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link>

                {/* <Link to="/contact" onClick={closeMenu}>Contact</Link> */}

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
