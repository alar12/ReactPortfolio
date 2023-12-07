import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectSection from './components/ProjectSection';
import NotFound from './components/NotFound';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';

const AnimatedRoutes = () => {
  const location = useLocation();

  // Function to determine the transition class based on the route
  const getTransitionClass = (pathname) => {
    switch (pathname) {
      case '/about':
        return 'slide';
      case '/contact':
        return 'slide';
      // Add more cases as needed
      default:
        return 'fade';
    }
  };

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames={getTransitionClass(location.pathname)}
      >
        <Routes location={location}>
        <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/project" element={<ProjectSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
