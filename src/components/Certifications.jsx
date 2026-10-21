import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ShieldAlert, ExternalLink, Calendar, PlusCircle, Edit3 } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const { isConfigured, placeholderMessage, templates } = certificationsData;

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={13} aria-hidden="true" />
            <span>06. Certifications</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-description">
            Verified credentials and specializations. Neutral placeholder displayed until details are provided.
          </p>
        </div>

        {/* Content Box */}
        <div className="certifications-container">
          {!isConfigured ? (
            <div className="card certifications-neutral-placeholder">
              <div className="placeholder-icon-frame">
                <Award size={36} className="text-cyan" />
              </div>
              
              <h3 className="placeholder-title">
                {placeholderMessage}
              </h3>
              
              <p className="placeholder-desc">
                In adherence to transparent engineering hiring practices, unverified certifications are not listed. As courses and industry certifications are completed, credentials will be linked here.
              </p>

              <div className="cert-schema-preview">
                <div className="schema-badge">
                  <Edit3 size={12} />
                  <span>Configured via src/data/portfolioData.js</span>
                </div>
                <div className="schema-fields">
                  <span className="field-tag">Name: [Certification Title]</span>
                  <span className="field-tag">Issuer: [e.g. AWS, Meta, DeepLearning.AI]</span>
                  <span className="field-tag">Date: [Issue Date]</span>
                  <span className="field-tag">Link: [Credential URL]</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="certifications-grid">
              {templates.map((cert, idx) => (
                <div key={idx} className="card cert-card">
                  <div className="cert-header">
                    <Award size={24} className="text-cyan" />
                    {cert.credentialLink && cert.credentialLink !== "[Credential Verification URL]" && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                        aria-label={`Verify ${cert.name} credential`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <h3 className="cert-name">{cert.name}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-date">
                    <Calendar size={12} />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
