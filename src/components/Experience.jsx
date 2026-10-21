import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Edit3, Terminal, Sparkles } from 'lucide-react';
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
            Career history and technical contributions. Structured for straightforward customization.
          </p>
        </div>

        {/* Experience Content */}
        {!isConfigured ? (
          <div className="experience-placeholder-wrapper">
            
            {/* Honest Status Banner */}
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

              <p className="status-description">
                {placeholderNote}
              </p>

              <div className="verified-work-callout">
                <h4 className="callout-heading">Demonstrated Technical Practical Experience:</h4>
                <div className="verified-pills">
                  <span className="v-pill">Full-Stack MERN Architecture (SplitMint)</span>
                  <span className="v-pill">LLM Prompt &amp; Memory Integration (AI Customer Bot)</span>
                  <span className="v-pill">Computer Vision &amp; Classification (Image Classifier)</span>
                </div>
              </div>
            </div>

            {/* Discreet Editable Template */}
            <div className="card experience-template-card">
              <div className="template-top-bar">
                <div className="template-badge">
                  <Edit3 size={13} />
                  <span>Editable Experience Schema (portfolioData.js)</span>
                </div>
                <span className="template-hint">Template ready for Chetan to populate</span>
              </div>

              {templates.map((item, idx) => (
                <div key={idx} className="timeline-item template-timeline-item">
                  <div className="timeline-marker" />
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-role">{item.role}</h4>
                        <div className="timeline-company">{item.company}</div>
                      </div>
                      <div className="timeline-meta">
                        <span className="meta-badge">
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </span>
                        <span className="meta-badge">
                          <MapPin size={12} />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="timeline-body">
                      <h5 className="responsibilities-title">Key Responsibilities:</h5>
                      <ul className="responsibilities-list">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="responsibility-item">
                            <CheckCircle2 size={13} className="text-cyan flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="timeline-achievements">
                        <div className="achievement-title">
                          <Award size={13} className="text-cyan" />
                          <span>Key Achievements:</span>
                        </div>
                        <ul className="achievements-list">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ) : (
          /* When Chetan populates verified employment history */
          <div className="experience-timeline">
            {templates.map((item, idx) => (
              <div key={idx} className="card timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-company">{item.company}</div>
                    </div>
                    <div className="timeline-meta">
                      <span className="meta-badge">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </span>
                      <span className="meta-badge">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                  <ul className="responsibilities-list">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="responsibility-item">
                        <CheckCircle2 size={14} className="text-cyan flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
