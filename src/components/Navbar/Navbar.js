import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#hero" className="navbar-brand">Siddharth Paul</a>
            <div className="navbar-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                {/* <a href="#contact">Contact</a>  */}
            </div>
        </nav>
    );
};

// ... existing code ...


export default Navbar;
