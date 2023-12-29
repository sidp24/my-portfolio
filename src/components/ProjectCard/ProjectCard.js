import React from 'react';

const ProjectCard = ({ title, description, image, link, buttonStyle }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} className="project-link" target="_blank" rel="noopener noreferrer"><span>Learn More</span></a>

                
            </div>
        </div>
    );
};

export default ProjectCard;
