import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Home = () => {
    // Dummy data for the project cards
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description of project 1', imageUrl: 'path/to/image1.jpg' },
        // ... more projects
    ];

    return (
        <div>
            <Header />
            <div className="project-container">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
