import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Menu, X, ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor scroll for navbar elevation & active link tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const currentScroll = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (currentScroll >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" aria-label="Chetan Thakur - Home">
          <div className="brand-logo-icon">
            <span className="brand-code-brackets">&lt;</span>
            <span className="brand-initials">CT</span>
            <span className="brand-code-slash">/&gt;</span>
          </div>
          <span className="brand-name">
            {personalInfo.name}
            <span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={() => setActiveSection(sectionId)}
                  >
                    {link.name}
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Actions */}
        <div className="navbar-actions">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-github"
            aria-label="View Chetan Thakur's GitHub Profile (opens in new tab)"
            title="View chetannit on GitHub"
          >
            <GithubIcon size={16} aria-hidden="true" />
            <span className="github-text">View GitHub</span>
            <ExternalLink size={12} className="github-ext" aria-hidden="true" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'backdrop-visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <div className="brand-logo-icon">
            <span className="brand-initials">CT</span>
          </div>
          <span className="brand-name">{personalInfo.name}</span>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile Menu">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mobile-github-btn"
            onClick={closeMobileMenu}
          >
            <GithubIcon size={18} aria-hidden="true" />
            <span>View GitHub (@{personalInfo.githubUsername})</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
