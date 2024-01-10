import React from 'react';
import './About.css';
// import Timeline from './Timeline/Timeline';
import { Chrono } from "react-chrono";
// import Skill from './Skills/Skills'; 

import resume from './FullResume.pdf';


const items = [
    {
        title: "August 2021",
        cardTitle: "CodeNinjas",
        cardDetailedText: "Taught a variety of programming languages such as JavaScript, Python, Lua, Java, and C# to students from different backgrounds, improving their technical skills. Successfully oversaw and expanded our social media presence on Instagram and Facebook, drawing in numerous views for videos showcasing our educational center and the accomplishments of our students.",
    },
    {
        title: "August 2022",
        cardTitle: "Myndful",
        cardDetailedText: "Created Myndful, the world's inaugural chatbot powered by machine learning, designed as an extensive mental health resource for high school students. Focused on enhancing its interactivity and responsiveness to user inputs, I led the deployment of Myndful in multiple schools. I developed Myndful's frontend, carefully crafting and improving the chatbot's user interaction and responsiveness. I also managed the smooth integration of Myndful into different schools, adeptly creating bespoke websites that align with each institution's distinct identity.",
    },
    {
        title: "December 2022",
        cardTitle: "Congressional App Challenge",
        cardDetailedText: "I had the honor of receiving the first-place prize for the Congressional App Challenge, an accolade presented by our representative, Frank Pallone. This prestigious award was in recognition of our app's significant contribution to destigmatizing mental health. Representative Pallone commended the app for its innovative approach and its impactful work in changing perceptions and conversations around mental health issues. This achievement not only underscores our commitment to social betterment through technology but also highlights the app's effectiveness in addressing crucial mental health needs in our community.",
    },
    {
        title: "May 2023",
        cardTitle: "ICode Birdgewater",
        cardDetailedText: "Led dynamic and educational summer camps, inspiring young individuals to create interactive games and refine their programming abilities. Established an inclusive and stimulating educational atmosphere, nurturing creativity and inquisitiveness in students while imparting detailed knowledge of software development.",
    },
    {
        title: "August 2023",
        cardTitle: "Edweb Presentation",
        cardDetailedText: "As one of the keynote speakers at an edWebinar, I discussed how my team and I noticed the inadequacy of their school's mental health resources and took the initiative to develop the world's first machine learning chatbot, Myndful.AI, aimed at providing a comprehensive mental health resource directory for high school students. The focus of my talk was on the user-centric design of Myndful.AI, emphasizing its sleek, intuitive interface that enables free, direct communication with the chatbot and provides easy access to a range of curated mental health resources. The webinar also provided insights into the application of artificial intelligence in educational settings and its role in supporting student mental health.",
    },
    // {
    //     title: "March 2022",
    //     cardTitle: "Event 3",
    //     cardSubtitle: "Event 3 Subtitle",
    //     cardDetailedText: "This is the third event on the timeline.",
    // }
];

const About = () => {
    return (
        <div className="about"  id="about">
            <div className="about-inner">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    I'm a passionate software developer with a knack for creating seamless user experiences and robust backend systems. With a love for both design and functionality, I craft software that not only looks good but performs exceptionally.
                </p>
                <div className="about-stats">
                    <div className="stat" tabIndex="0">
                        <h3>Experience</h3>
                        <p className="stat-value">3+ Years</p>
                    </div>
                    <div className="stat" tabIndex="0">
                        <h3>Projects</h3>
                        <p className="stat-value">10+ Completed</p>
                    </div>
                    <div className="stat" tabIndex="0">
                        <h3>Languages</h3>
                        <p className="stat-value">Java, JavaScript, Python, C#, HTML + CSS</p>
                    </div>
                    <div className="stat" tabIndex="0">
                        <h3>Relevant Coursework</h3>
                        <p className="stat-value">Introduction to CS, Physics 203 + 204</p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                theme={{
                    primary: "#4f5d75",
                    secondary: "#f4f4f4",
                    cardBgColor: "#ffffff",
                    cardSubtitleColor: "#4f5d75",
                    titleColor: "#FAF9F6",
                    titleColorActive: "#4f5d75",
                    cardTitleColor: "#333333",
                    cardDetailsColor: "#4f5d75",
                    iconBackgroundColor: "#bfc0c0",
                }}
                fontSizes={{
                    cardSubtitle: "0.9rem",
                    cardText: "1rem",
                    cardTitle: "1.2rem",
                    title: "3vw"
                }}

                cardHeight={10}
                mediaHeight={1}
                contentDetailsHeight={100}
            />

            <a href={resume} download="SiddharthPaulResume.pdf" className="resume-download-link">
                Download My Resume
            </a>
        </div>

    );
};

export default About;
