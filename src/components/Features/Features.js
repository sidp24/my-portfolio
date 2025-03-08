import React from 'react';
import './Features.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import Image1 from '../images/myndful.png'; // Adjust paths as needed
import Image2 from '../images/DVD.png';
import Image3 from '../images/dummyboard.jpg';

const Features = () => {
    const projects = [
        {
            id: 1,
            title: 'Myndful',
            description: 'The the world\'s first mental health chatbot specifically designed for adolescents. Using TensorFlow’s Sequential model, which we programmed to utilize a three-layer dense neural network, this neural network uses Gradient Descent to transform words into a numeric value to be analyzed by our neural layers. From there, we built the rest of the application with ReactJS to display the information through the medium of a chatbot',
            image: Image1,
            link: 'https://myndful.ai/'
        },{
            id: 2,
            title: 'Data Visualization Dashboard',
            description: 'The Data Visualization Dashboard is a user-friendly web application created using Python, Pandas, Plotly, Dash, HTML, and CSS. It empowers users to upload CSV files and explore their data through interactive scatter plots and bar charts. This versatile tool is great for data analysts, allowing them to extract insights swiftly from their datasets. With real-time updates and customization options, it offers a seamless and visually appealing experience for data exploration and visualization.',
            image: Image2,
            link: 'https://github.com/sidp24/Data-Visualization-Dashboard'
        },{
            id: 3,
            title: 'Dummyboard',
            description: 'This Java-based project, utilizing WPILIB, serves a dual purpose: it tests various motors and motor controllers for functionality in robotics, while also providing an educational platform for new team members. Focused on practical application, it offers a hands-on experience in robotics programming, emphasizing the use of WPILIB in Java and introducing newcomers to the fundamentals of robotics control systems.',
            image:Image3,
            link: 'https://github.com/sidp24/dummyboard2022'
        },
        // {
        //     id: 4,
        //     title: 'Myndful',
        //     description: 'The the world\'s first mental health chatbot specifically designed for adolescents. Using TensorFlow’s Sequential model, which we programmed to utilize a three-layer dense neural network, this neural network uses Gradient Descent to transform words into a numeric value to be analyzed by our neural layers. From there, we built the rest of the application with ReactJS to display the information through the medium of a chatbot',
        //     image: Image1,
        //     link: 'https://myndful.ai/'
        // },{
        //     id: 5,
        //     title: 'Data Visualization Dashboard',
        //     description: 'The Data Visualization Dashboard is a user-friendly web application created using Python, Pandas, Plotly, Dash, HTML, and CSS. It empowers users to upload CSV files and explore their data through interactive scatter plots and bar charts. This versatile tool is great for data analysts, allowing them to extract insights swiftly from their datasets. With real-time updates and customization options, it offers a seamless and visually appealing experience for data exploration and visualization.',
        //     image: Image2,
        //     link: 'https://github.com/sidp24/Data-Visualization-Dashboard'
        // },
        // Add more projects as needed
    ];
    return (
        <div className="features" id="projects">
            <h2>My Projects</h2>
            <div className="project-container">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;