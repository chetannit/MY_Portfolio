import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Main Footer Row */}
        <div className="footer-top-row">
          
          {/* Brand & Summary */}
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand" aria-label="Chetan Thakur - Home">
              <div className="brand-logo-icon">
                <span className="brand-code-brackets">&lt;</span>
                <span className="brand-initials">CT</span>
                <span className="brand-code-slash">/&gt;</span>
              </div>
              <span className="brand-name">{personalInfo.name}</span>
            </a>
            
            <p className="footer-tagline">
              Building modern, performant web applications and intelligent AI/ML solutions using React and Python.
            </p>

            <div className="footer-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile (opens in new tab)"
                title="View GitHub @chetannit"
              >
                <GithubIcon size={18} />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Shortcuts */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Works Shortcuts */}
          <div className="footer-projects-col">
            <h4 className="footer-col-title">Featured Projects</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="https://github.com/chetannit/AI-customer-Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  AI Customer Support Bot
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chetannit/Image-Classifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Image Classifier
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chetannit/Splitmint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  SplitMint Expense Platform
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Credits Row */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="footer-tech-note">
            <span>Built with React &amp; Vite • Responsive &amp; Accessible Design</span>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
