import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? featuredProjects 
    : filter === 'ai'
    ? featuredProjects.filter(p => p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('vector'))
    : filter === 'fullstack'
    ? featuredProjects.filter(p => p.category.toLowerCase().includes('full-stack') || p.category.toLowerCase().includes('algorithms'))
    : featuredProjects.filter(p => p.category.toLowerCase().includes('vision') || p.category.toLowerCase().includes('ml'));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={13} aria-hidden="true" />
            <span>03. Featured Projects</span>
          </div>
          <h2 className="section-title">
            Featured Works &amp; <span className="text-gradient">Production Codebases</span>
          </h2>
          <p className="section-description">
            Production codebases demonstrating high-throughput API design, algorithmic debt minimization, and enterprise RAG search engines.
          </p>

          {/* Filter Pills */}
          <div className="project-filters" role="group" aria-label="Filter projects">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'filter-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({featuredProjects.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'fullstack' ? 'filter-active' : ''}`}
              onClick={() => setFilter('fullstack')}
            >
              Full-Stack &amp; Algorithms
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'ai' ? 'filter-active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI &amp; Vector Search
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'cv' ? 'filter-active' : ''}`}
              onClick={() => setFilter('cv')}
            >
              Machine Learning &amp; CV
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="card project-card">
              
              {/* Card Media / Custom CSS Graphic Visual */}
              <div className="project-visual-wrapper">
                {project.id === 'splitmint' && (
                  <div className="project-graphic graphic-splitmint">
                    <div className="ledger-ui-mock">
                      <div className="ledger-header-row">
                        <span className="ledger-pill">SplitMint Debt Engine</span>
                        <span className="ledger-amount">2-Pointer Minimization</span>
                      </div>
                      <div className="ledger-participants">
                        <span className="participant-chip">Balance Accuracy: 100%</span>
                        <span className="participant-chip chip-green">Tx Reduction: -65%</span>
                      </div>
                      <div className="settlement-suggest">
                        <span className="settle-label">Directed SVG Graph:</span>
                        <span className="settle-text">Circular group debts resolved in O(N log N)</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'nifn-rag' && (
                  <div className="project-graphic graphic-rag">
                    <div className="rag-ui-mock">
                      <div className="rag-query-row">
                        <span className="rag-query-badge">Bilingual Query</span>
                        <span className="rag-lang-tag">EN / NE</span>
                      </div>
                      <div className="rag-search-bars">
                        <div className="rag-bar-item">
                          <span className="rag-bar-label">Qdrant Dense Cosine: 0.94</span>
                          <div className="rag-progress"><span style={{ width: '94%' }} /></div>
                        </div>
                        <div className="rag-bar-item">
                          <span className="rag-bar-label">BM25 Lexical Keyword: 0.88</span>
                          <div className="rag-progress"><span style={{ width: '88%' }} /></div>
                        </div>
                      </div>
                      <div className="rag-cache-chip">
                        <span>⚡ Redis Sub-Millisecond Cache HIT</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'ai-customer-bot' && (
                  <div className="project-graphic graphic-bot">
                    <div className="bot-ui-mock">
                      <div className="bot-msg-user">
                        <span className="msg-bubble user-bubble">How do I verify transaction settlements?</span>
                      </div>
                      <div className="bot-msg-assistant">
                        <div className="bot-avatar-tag">Gemini Pro</div>
                        <span className="msg-bubble assistant-bubble">
                          Transactions can be reconciled through the settlement ledger endpoint with 10-turn contextual history.
                        </span>
                      </div>
                      <div className="bot-ui-stats">
                        <span className="bot-stat-chip">FAQ Match: 96%</span>
                        <span className="bot-stat-chip chip-green">Memory: 10 Turns</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'image-classifier' && (
                  <div className="project-graphic graphic-classifier">
                    <div className="cv-ui-mock">
                      <div className="cv-detection-box">
                        <div className="cv-target-crosshair" />
                        <span className="cv-detect-label">Haar Cascade (Face + Eyes)</span>
                      </div>
                      <div className="cv-wavelet-strip">
                        <span className="wavelet-label">2D Wavelet (pywt.wavedec2)</span>
                        <div className="wavelet-bars">
                          <span style={{ width: '85%' }} />
                          <span style={{ width: '65%' }} />
                          <span style={{ width: '92%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Badge */}
                <span className="project-badge">{project.badge}</span>
              </div>

              {/* Card Body */}
              <div className="project-body">
                
                {/* Title and Repo Link */}
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-icon-link"
                    title={`View ${project.title} on GitHub`}
                    aria-label={`Open ${project.title} repository on GitHub in a new tab`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {/* Metrics Row */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="project-metrics-row">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="metric-pill">
                        <span className="metric-label">{m.label}:</span>
                        <span className="metric-value">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="project-highlights">
                  <h4 className="highlights-heading">Key Implementation Details:</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <CheckCircle2 size={14} className="highlight-icon text-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="project-tech-tags">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tag tag-accent">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="project-actions">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github project-btn w-full"
                    aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                  >
                    <GithubIcon size={16} aria-hidden="true" />
                    <span>View Repository</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
