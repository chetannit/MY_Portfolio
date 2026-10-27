import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Edit3, CheckCircle2 } from 'lucide-react';
import './Education.css';

export default function Education() {
  const { isConfigured, templates } = educationData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={13} aria-hidden="true" />
            <span>05. Education</span>
          </div>
          <h2 className="section-title">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="section-description">
            {isConfigured
              ? "Educational foundation, engineering principles, and core computer science coursework."
              : "Educational foundation and computer science coursework. Configured with editable placeholders."}
          </p>
        </div>

        {/* Education Content Container */}
        <div className="education-container">
          {templates.map((edu, idx) => (
            <div key={idx} className="card education-card">
              
              <div className="education-top">
                <div className="education-icon-box">
                  <GraduationCap size={24} className="text-cyan" />
                </div>
                
                <div className="education-header-info">
                  <div className="edu-title-row">
                    <h3 className="education-degree">{edu.degree}</h3>
                    {!isConfigured && (
                      <span className="editable-indicator">
                        <Edit3 size={11} />
                        <span>Editable in portfolioData.js</span>
                      </span>
                    )}
                  </div>
                  
                  <div className="education-institution">{edu.institution}</div>
                  
                  <div className="education-meta">
                    <span className="meta-badge">
                      <Calendar size={13} />
                      <span>{edu.graduationYear}</span>
                    </span>
                    <span className="meta-badge">
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursework Block */}
              <div className="education-coursework">
                <div className="coursework-header">
                  <BookOpen size={15} className="text-cyan" />
                  <h4 className="coursework-title">Relevant Core Coursework:</h4>
                </div>
                
                <div className="coursework-tags">
                  {edu.coursework.map((course, cIdx) => (
                    <span key={cIdx} className="tag tag-accent">
                      <CheckCircle2 size={12} className="text-cyan" />
                      <span>{course}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Editable Help Tip */}
              {!isConfigured && (
                <div className="education-note">
                  <p>
                    <strong>Customization Note:</strong> To display your actual university, degree, and graduation year, open <code>src/data/portfolioData.js</code> and update the <code>educationData</code> configuration.
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
