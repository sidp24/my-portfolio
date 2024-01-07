import React from 'react';
import './Parallax.css';

const Parallax = ({ children }) => {
  return (
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
