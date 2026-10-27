import React from 'react';
import { personalInfo, aboutMe } from '../data/portfolioData';
import { User, Code2, Database, BrainCircuit, CheckCircle2, MapPin, Phone, GraduationCap, Sparkles } from 'lucide-react';
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
            Passionate About Crafting <span className="text-gradient">Resilient Software</span>
          </h2>
          <p className="section-description">
            A software developer combining robust frontend design with Python-driven backend logic, transaction-safe database architectures, and production RAG pipelines.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Main Story Narrative */}
          <div className="about-narrative-card card">
            <div className="narrative-badge">
              <Sparkles size={14} className="narrative-icon" />
              <span>Engineering Journey &amp; Philosophy</span>
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
                  <h3 className="pillar-title">Full-Stack &amp; REST APIs</h3>
                  <p className="pillar-desc">
                    Designing modular React &amp; Next.js interfaces paired with high-throughput asynchronous FastAPI and Node.js REST services.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Database size={20} className="pillar-icon indigo" />
                </div>
                <div>
                  <h3 className="pillar-title">Database &amp; Transaction Safety</h3>
                  <p className="pillar-desc">
                    Structuring relational PostgreSQL schemas, enforcing integrity constraints, and implementing Redis caching for sub-millisecond lookups.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <BrainCircuit size={20} className="pillar-icon emerald" />
                </div>
                <div>
                  <h3 className="pillar-title">Multilingual RAG &amp; Applied AI</h3>
                  <p className="pillar-desc">
                    Building bilingual English and Nepali retrieval-augmented pipelines with Qdrant, BM25 hybrid ranking, and LangChain orchestration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Stats */}
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
                  <span className="detail-value">Python • FastAPI • React • Postgres</span>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value flex items-center gap-1">
                    <MapPin size={13} className="text-cyan" />
                    <span>{personalInfo.location}</span>
                  </span>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Phone</span>
                  <a href={`tel:${personalInfo.phoneRaw}`} className="detail-value text-cyan hover:underline flex items-center gap-1">
                    <Phone size={13} />
                    <span>{personalInfo.phone}</span>
                  </a>
                </li>
                <li className="profile-detail-item">
                  <span className="detail-label">Alma Mater</span>
                  <span className="detail-value flex items-center gap-1">
                    <GraduationCap size={13} className="text-cyan" />
                    <span>MNNIT Allahabad</span>
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
                <h4 className="callout-title">Hiring Status</h4>
              </div>
              <p className="callout-desc">
                Actively seeking Software Developer, Full-Stack Engineer, and Backend/AI Developer opportunities where I can solve high-impact engineering problems.
              </p>
              <div className="callout-actions">
                <a href="#contact" className="btn btn-sm btn-primary w-full">
                  Get In Touch Directly
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
