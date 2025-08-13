import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ExperiencePage from './pages/ExperiencePage';
import GalleryPage from './pages/GalleryPage';

// import About from './pages/About';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import Blog from './pages/Blog';
// import NotFound from './pages/NotFound';



function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/gallery" element={<GalleryPage />} />

            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
    </Router>
  );
}

export default App;