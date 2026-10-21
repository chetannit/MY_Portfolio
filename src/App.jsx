import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience Section (Discreet Editable Template) */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Certifications Section (Neutral Placeholder) */}
        <Certifications />

        {/* Contact Section (Honest Dispatcher Form & Direct Links) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
