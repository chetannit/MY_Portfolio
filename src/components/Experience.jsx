import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const { isConfigured, placeholderNote, templates } = experienceData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={13} aria-hidden="true" />
            <span>04. Experience</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-description">
            Production engineering experience building interoperable fintech platforms, transaction-safe database architectures, and multilingual AI retrieval pipelines.
          </p>
        </div>

        {/* Experience Content */}
        {!isConfigured ? (
          <div className="experience-placeholder-wrapper">
            <div className="card experience-status-card">
              <div className="status-header">
                <div className="status-icon-box">
                  <Sparkles size={20} className="text-cyan" />
                </div>
                <div>
                  <h3 className="status-title">Active Job Candidate</h3>
                  <p className="status-subtitle">
                    Seeking Software Engineering, Full-Stack Development, and AI/ML Engineering positions.
                  </p>
                </div>
              </div>
              <p className="status-description">{placeholderNote}</p>
            </div>
          </div>
        ) : (
          <div className="experience-timeline-container">
            {templates.map((item, idx) => (
              <div key={idx} className="card experience-card">
                
                {/* Timeline Header Row */}
                <div className="exp-card-header">
                  <div className="exp-role-group">
                    <div className="exp-icon-box">
                      <Briefcase size={22} className="text-cyan" />
                    </div>
                    <div>
                      <div className="exp-role-title-row">
                        <h3 className="exp-role-title">{item.role}</h3>
                        <span className="exp-badge">
                          <ShieldCheck size={12} />
                          <span>Verified Production Role</span>
                        </span>
                      </div>
                      <div className="exp-company-name">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="exp-meta-group">
                    <span className="exp-meta-pill">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>
                    <span className="exp-meta-pill">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </span>
                    {item.employmentType && (
                      <span className="exp-meta-pill exp-type-pill">
                        {item.employmentType}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role Summary */}
                {item.summary && (
                  <p className="exp-summary-text">
                    {item.summary}
                  </p>
                )}

                {/* Key Contributions List */}
                <div className="exp-body">
                  <h4 className="exp-section-subtitle">
                    Core Technical Contributions &amp; Engineering Scope:
                  </h4>
                  <ul className="exp-responsibilities-list">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="exp-resp-item">
                        <CheckCircle2 size={16} className="exp-check-icon text-cyan" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements Callout */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="exp-achievements-box">
                      <div className="exp-achievement-header">
                        <Award size={16} className="text-cyan" />
                        <span>Key Production Outcomes &amp; System Achievements:</span>
                      </div>
                      <ul className="exp-achievements-list">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used Pills */}
                  {item.techStack && item.techStack.length > 0 && (
                    <div className="exp-tech-row">
                      <span className="exp-tech-label">Stack:</span>
                      <div className="exp-tech-tags">
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tag tag-accent">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
