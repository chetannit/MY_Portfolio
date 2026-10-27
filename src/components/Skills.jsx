import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Server, 
  BrainCircuit, 
  Wrench, 
  Sparkles, 
  Terminal,
  Cpu,
  Layers,
  GitBranch,
  Database,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  Flame,
  Globe
} from 'lucide-react';
import './Skills.css';

// Map icon strings to Lucide components
const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  CheckCircle2: CheckCircle2,
  Wrench: Wrench,
  BrainCircuit: BrainCircuit
};

// Skill-specific badge icons
const skillIconMap = {
  Python: Terminal,
  Java: Cpu,
  "C++": Code2,
  SQL: Database,
  JavaScript: Code2,
  TypeScript: Code2,
  FastAPI: Zap,
  "REST APIs": Server,
  SQLAlchemy: Database,
  "Node.js": Server,
  "Express.js": Server,
  "API Integration": Globe,
  "React.js": Layers,
  "Next.js": Zap,
  "Tailwind CSS": Layout,
  "HTML5 & CSS3": Layout,
  PostgreSQL: Database,
  Redis: Flame,
  Qdrant: BrainCircuit,
  MongoDB: Database,
  MySQL: Database,
  "Unit Testing (Pytest)": CheckCircle2,
  Selenium: Activity,
  "Load Testing": Activity,
  "End-to-End Validation": CheckCircle2,
  "Docker & Compose": Wrench,
  "Git & GitHub": GitBranch,
  Linux: Terminal,
  Nginx: Server,
  "CI/CD": Activity,
  "RAG & LangChain": Sparkles,
  "Hybrid BM25 & Semantic Search": BrainCircuit,
  "API Authentication & OAuth": ShieldCheck,
  "JWT & bcrypt": ShieldCheck,
  "Input Validation": ShieldCheck
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

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
            Comprehensive technical stack verified from production codebases and resume milestones. Spans systems, database architecture, testing, and applied AI.
          </p>

          {/* Category Filter Pills */}
          <div className="skills-filter-row" role="tablist" aria-label="Filter skill categories">
            {categories.map((catName) => (
              <button
                key={catName}
                type="button"
                role="tab"
                aria-selected={selectedCategory === catName}
                className={`skill-filter-pill ${selectedCategory === catName ? 'active-pill' : ''}`}
                onClick={() => setSelectedCategory(catName)}
              >
                {catName}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {displayedCategories.map((cat, idx) => {
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
                            <SkillIcon size={16} className="skill-badge-icon" aria-hidden="true" />
                            <span className="skill-name">{skill.name}</span>
                          </div>
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
