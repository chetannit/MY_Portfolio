import React from 'react';
import { personalInfo, aboutMe } from '../data/portfolioData';
import { User, Code2, Cpu, Sparkles, Compass, CheckCircle2, MapPin, Mail, Edit3 } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={13} aria-hidden="true" />
            <span>01. About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="text-gradient">Impactful Software</span>
          </h2>
          <p className="section-description">
            A developer combining robust frontend interactions with Python-driven logic and machine learning integrations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Main Story Narrative */}
          <div className="about-narrative-card card">
            <div className="narrative-badge">
              <Sparkles size={14} className="narrative-icon" />
              <span>Developer Journey</span>
            </div>

            <div className="narrative-text">
              {aboutMe.summary.map((paragraph, index) => (
                <p key={index} className="narrative-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Code2 size={20} className="pillar-icon cyan" />
                </div>
                <div>
                  <h3 className="pillar-title">Full-Stack Development</h3>
                  <p className="pillar-desc">
                    Designing responsive user interfaces with React and orchestrating modular RESTful services.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Cpu size={20} className="pillar-icon indigo" />
                </div>
                <div>
                  <h3 className="pillar-title">Python &amp; AI/ML</h3>
                  <p className="pillar-desc">
                    Applying computer vision, wavelet feature extraction, and Google Gemini LLM API solutions.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Compass size={20} className="pillar-icon emerald" />
                </div>
                <div>
                  <h3 className="pillar-title">Continuous Growth</h3>
                  <p className="pillar-desc">
                    Systematic problem-solving, clean code standards, and agile project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Stats & Editable Placeholders */}
          <div className="about-sidebar">
            
            {/* Quick Profile Overview Card */}
            <div className="card about-stat-card">
              <h3 className="stat-card-title">Professional Profile</h3>
              
              <ul className="profile-details-list">
                <li className="profile-detail-item">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">{personalInfo.name}</span>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Target Role</span>
                  <span className="detail-value">{personalInfo.role}</span>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Core Stack</span>
                  <span className="detail-value">React • Python • AI/ML</span>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value flex items-center gap-1">
                    <MapPin size={13} className="text-cyan" />
                    <span>{personalInfo.location}</span>
                  </span>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Work Authorization</span>
                  <span className="detail-value">
                    <span className="editable-indicator">
                      <Edit3 size={10} />
                      <span>[Editable Field]</span>
                    </span>
                  </span>
                </li>
              </ul>

              <div className="stat-divider" />

              {/* Highlights List */}
              <div className="quick-stats-grid">
                {aboutMe.quickStats.map((stat, idx) => (
                  <div key={idx} className="quick-stat-box">
                    <span className="quick-stat-label">{stat.label}</span>
                    <span className="quick-stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Focus Callout Card */}
            <div className="card application-callout-card">
              <div className="callout-header">
                <CheckCircle2 size={18} className="text-cyan" />
                <h4 className="callout-title">Hiring Focus</h4>
              </div>
              <p className="callout-desc">
                Actively applying for entry-level / associate Software Engineering, Full-Stack Developer, and AI/ML Engineering positions.
              </p>
              <div className="callout-actions">
                <a href="#projects" className="btn btn-sm btn-primary w-full">
                  Explore Verified Projects
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
