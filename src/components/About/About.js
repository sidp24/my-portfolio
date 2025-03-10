import React, { useState, useCallback, useEffect } from 'react';
import './About.css';
import { Chrono } from 'react-chrono';
import resume from './SiddharthPaulResume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Modal Component with accessibility and keyboard support
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {children}
      </div>
    </div>
  );
};

// Bio modal content
const BioContent = () => (
  <div className="modal-about">
    <h2>Bio</h2>
    <p>
    I am a passionate and innovative software engineer with extensive experience leading impactful projects and developing scalable, user-focused solutions. As Chief Technical Officer at Myndful, I led the development of a machine learning-powered mental health platform, bringing extensive experience in Python and JavaScript to drive robust backend system design and personalized user experience delivery. During my internship at Iconectiv Ericsson, I improved workflow efficiency by more than 50% by automating dependency tracking processes and real-time data analysis integrations.     </p>
    <a href={resume} download="SiddharthPaulResume.pdf" className="resume-download-link">
      Download My Resume
    </a>
  </div>
);

// Experience modal content
const ExperienceContent = ({ items }) => (
  <div className="modal-experience">
    <h2>Experience</h2>
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: '#4f5d75',
        secondary: '#f4f4f4',
        cardBgColor: '#ffffff',
      }}
    />
  </div>
);
// Skills modal content
const SkillsContent = () => (
    <div className="modal-skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C#</li>
            <li>Lua</li>
            <li>HTML &amp; CSS</li>
            <li>C++</li>

          </ul>
        </div>
        {/* Soft Skills */}
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul className="skills-list">
            <li>Communication</li>
            <li>Problem-Solving</li>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Time Management</li>
            <li>Collaboration</li>
          </ul>
        </div>
        {/* Development Frameworks */}
        <div className="skills-category">
          <h3>Development Frameworks</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>AngularJS</li>
            <li>FastAPI</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
            <li>Unity</li>
            <li>MediaPipe</li>
          </ul>
        </div>
        {/* DevOps & Cloud Technologies */}
        <div className="skills-category">
          <h3>DevOps &amp; Cloud Technologies</h3>
          <ul className="skills-list">
            <li>Docker</li>
            <li>AWS</li>
            <li>Google Cloud Platform</li>
            <li>CI/CD Pipelines</li>
            <li>AWS Lambda</li>
            <li>Web Security</li>
          </ul>
        </div>
        {/* Version Control */}
        <div className="skills-category">
          <h3>Version Control</h3>
          <ul className="skills-list">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
  

// Coursework modal content
const CourseworkContent = () => (
  <div className="modal-coursework">
    <h2>Relevant Coursework</h2>
    <div className="coursework-section">
      <h3>Physics Coursework</h3>
      <ul className="coursework-list">
      <li>Thermal Physics</li>
      <li>Modern Instrumentation</li>
        <li>Modern Physics</li>
        <li>Physics 203</li>
        <li>Physics 204</li>
        <li>Analytical Physics II</li>
        <li>Calculus I</li>
        <li>Calculus II</li>
        <li>Multivariable Calculus</li>
        <li>Differential Equations</li>
      </ul>
    </div>
    <div className="divider"></div>
    <div className="coursework-section">
      <h3>Computer Science Coursework</h3>
      <ul className="coursework-list">
        <li>Introduction to Computer Science</li>
        <li>Data Structures and Algorithms</li>
        <li>Introduction to Discrete Structures I</li>
        <li>Introduction to Linear Algebra</li>
      </ul>
    </div>
  </div>
);

// Timeline items for the experience section
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
    cardTitle: "ICode Bridgewater",
    cardDetailedText: "Led dynamic and educational summer camps, inspiring young individuals to create interactive games and refine their programming abilities. Established an inclusive and stimulating educational atmosphere, nurturing creativity and inquisitiveness in students while imparting detailed knowledge of software development.",
  },
  {
    title: "August 2023",
    cardTitle: "Edweb Presentation",
    cardDetailedText: "As one of the keynote speakers at an edWebinar, I discussed how my team and I noticed the inadequacy of their school's mental health resources and took the initiative to develop the world's first machine learning chatbot, Myndful.AI, aimed at providing a comprehensive mental health resource directory for high school students. The focus of my talk was on the user-centric design of Myndful.AI, emphasizing its sleek, intuitive interface that enables free, direct communication with the chatbot and provides easy access to a range of curated mental health resources. The webinar also provided insights into the application of artificial intelligence in educational settings and its role in supporting student mental health.",
  },
  {
    title: "May 2024",
    cardTitle: "Iconectiv Ericcson",
    cardDetailedText: "Worked in the DevOps team to architect and develop a platform for displaying third-party software dependencies across all applications. Engineered a Python-based back-end solution to automate the extraction and parsing of GitHub repositories, capturing library names and metadata. Developed the application's front end utilizing Ruby on Rails, the Smashing dashboard framework, and Node.js.",
  },
  {
    title: "January 2025",
    cardTitle: "Rutgers IEEE-VEXU",
    cardDetailedText: "Joined VEX Robotics as the Build Lead, where I spearheaded the design, assembly, and testing of competitive robotics systems. I led a multidisciplinary team through rigorous build cycles, integrating mechanical, electrical, and software components to optimize our robots for high-stakes competitions. By implementing agile build processes and fostering close collaboration with engineers and mentors, I drove innovations that significantly enhanced our robot's performance, reliability, and competitive edge."
},
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = useCallback((content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const renderModalContent = () => {
    switch (modalContent) {
      case 'about':
        return <BioContent />;
      case 'experience':
        return <ExperienceContent items={items} />;
      case 'skills':
        return <SkillsContent />;
      case 'coursework':
        return <CourseworkContent />;
      default:
        return null;
    }
  };

  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="card-container">
        <div className="card" onClick={() => openModal('about')}>
          <div className="card-front">
            <h3>Bio</h3>
          </div>
        </div>
        <div className="card" onClick={() => openModal('experience')}>
          <div className="card-front">
            <h3>Experience</h3>
          </div>
        </div>
        <div className="card" onClick={() => openModal('skills')}>
          <div className="card-front">
            <h3>Skills</h3>
          </div>
        </div>
        <div className="card" onClick={() => openModal('coursework')}>
          <div className="card-front">
            <h3>Relevant Coursework</h3>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default About;
