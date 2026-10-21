import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Server, 
  BrainCircuit, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Terminal,
  Cpu,
  Layers,
  GitBranch,
  Info
} from 'lucide-react';
import './Skills.css';

// Map icon strings to Lucide components
const iconMap = {
  Layout: Layout,
  Server: Server,
  BrainCircuit: BrainCircuit,
  Wrench: Wrench
};

// Skill-specific SVG/Lucide badge icons (no emojis!)
const skillIconMap = {
  React: Layers,
  JavaScript: Code2,
  HTML5: Layout,
  CSS3: Layout,
  Python: Terminal,
  "REST API Development": Server,
  "Node.js & Express": Server,
  "Machine Learning": Cpu,
  "Image Classification": BrainCircuit,
  "AI Application Development": Sparkles,
  Git: GitBranch,
  GitHub: GitBranch,
  Vite: ZapIcon
};

function ZapIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={13} aria-hidden="true" />
            <span>02. Technical Skills</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="section-description">
            Technologies and frameworks utilized in building verified full-stack applications and machine learning pipelines.
          </p>
        </div>

        {/* Confirmed Claims Note (Honest, Recruiter-Friendly) */}
        <div className="skills-confirmation-bar">
          <div className="confirmation-content">
            <ShieldCheck size={18} className="text-cyan flex-shrink-0" />
            <p className="confirmation-text">
              <strong>Verified Technical Scope:</strong> The skills below represent technologies applied directly in real projects (SplitMint, AI Customer Support Bot, and Image Classifier). All entries can be edited or refined in <code>src/data/portfolioData.js</code>.
            </p>
          </div>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const CategoryIcon = iconMap[cat.icon] || Code2;

            return (
              <div key={idx} className="card skill-category-card">
                
                {/* Category Header */}
                <div className="category-header">
                  <div className="category-icon-frame">
                    <CategoryIcon size={22} className="category-icon" />
                  </div>
                  <div>
                    <h3 className="category-title">{cat.category}</h3>
                    <p className="category-desc">{cat.description}</p>
                  </div>
                </div>

                {/* Skills List in Category */}
                <div className="skills-list">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skillIconMap[skill.name] || Code2;
                    return (
                      <div key={sIdx} className="skill-item">
                        <div className="skill-item-header">
                          <div className="skill-item-name-group">
                            <SkillIcon size={15} className="skill-badge-icon" aria-hidden="true" />
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <span className="skill-status-tag">
                            <CheckCircle2 size={11} className="text-cyan" />
                            <span>{skill.level}</span>
                          </span>
                        </div>
                        {skill.note && (
                          <p className="skill-note">{skill.note}</p>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
