import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Phone, 
  MapPin, 
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Hero.css';

const codeSnippets = {
  splitmint: {
    filename: 'debtSettlementEngine.js',
    language: 'JavaScript',
    title: 'SplitMint Two-Pointer Simplification',
    lines: [
      { text: '// Greedy Two-Pointer Debt Simplification Algorithm (reduces tx by ~65%)', color: 'comment' },
      { text: 'export function simplifyDebts(netBalancesInCents) {', color: 'keyword' },
      { text: '  const debtors = [], creditors = [];', color: 'standard' },
      { text: '  // Deterministic integer-cent arithmetic (0 IEEE 754 float drift)', color: 'comment' },
      { text: '  for (const [id, balance] of netBalancesInCents.entries()) {', color: 'keyword' },
      { text: '    if (balance < 0) debtors.push({ id, owes: -balance });', color: 'standard' },
      { text: '    else if (balance > 0) creditors.push({ id, receives: balance });', color: 'standard' },
      { text: '  }', color: 'standard' },
      { text: '  const settlements = [];', color: 'standard' },
      { text: '  let i = 0, j = 0;', color: 'standard' },
      { text: '  while (i < debtors.length && j < creditors.length) {', color: 'keyword' },
      { text: '    const settleAmount = Math.min(debtors[i].owes, creditors[j].receives);', color: 'standard' },
      { text: '    settlements.push({ from: debtors[i].id, to: creditors[j].id, cents: settleAmount });', color: 'standard' },
      { text: '    debtors[i].owes -= settleAmount; creditors[j].receives -= settleAmount;', color: 'standard' },
      { text: '    if (debtors[i].owes === 0) i++;', color: 'standard' },
      { text: '    if (creditors[j].receives === 0) j++;', color: 'standard' },
      { text: '  }', color: 'keyword' },
      { text: '  return settlements; // Minimized peer-to-peer settlement graph', color: 'return' },
      { text: '}', color: 'keyword' }
    ]
  },
  rag: {
    filename: 'multilingual_rag.py',
    language: 'Python (FastAPI)',
    title: 'NIFN Multilingual RAG Pipeline',
    lines: [
      { text: '# Multilingual RAG Hybrid Retrieval (BM25 + Dense Qdrant Vector)', color: 'comment' },
      { text: 'from fastapi import FastAPI, Depends', color: 'import' },
      { text: 'from qdrant_client import AsyncQdrantClient', color: 'import' },
      { text: '', color: 'standard' },
      { text: '@app.post("/api/v1/docs/rag-query")', color: 'keyword' },
      { text: 'async def query_technical_docs(req: DocQuery, cache: Redis = Depends(get_cache)):', color: 'keyword' },
      { text: '    cache_key = f"nifn:rag:{req.language}:{req.query_hash}"', color: 'standard' },
      { text: '    if cached := await cache.get(cache_key): return json.loads(cached)', color: 'standard' },
      { text: '    ', color: 'standard' },
      { text: '    # Hybrid Fusion: Dense vector search + BM25 sparse keyword matching', color: 'comment' },
      { text: '    dense_hits = await qdrant.search(collection="nifn_docs", vector=req.embedding)', color: 'standard' },
      { text: '    bm25_hits = bm25_engine.search(req.query, k=10, lang=req.language)', color: 'standard' },
      { text: '    fused = reciprocal_rank_fusion(dense_hits, bm25_hits, top_k=5)', color: 'standard' },
      { text: '    return await generate_reranked_answer(req.query, fused)', color: 'return' }
    ]
  },
  gemini: {
    filename: 'aiSupportBot.js',
    language: 'JavaScript',
    title: 'AI Customer Bot & Escalation',
    lines: [
      { text: '// Google Gemini AI integration with multi-turn context & FAQ scoring', color: 'comment' },
      { text: 'import { GoogleGenerativeAI } from "@google/generative-ai";', color: 'import' },
      { text: 'const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);', color: 'standard' },
      { text: '', color: 'standard' },
      { text: 'export async function handleSupportChat(session, userMessage) {', color: 'keyword' },
      { text: '  const faqMatch = await findMatchingFAQ(userMessage);', color: 'standard' },
      { text: '  if (faqMatch.confidence > 0.85) return faqMatch.answer;', color: 'keyword' },
      { text: '  ', color: 'standard' },
      { text: '  const model = genAI.getGenerativeModel({ model: "gemini-pro" });', color: 'standard' },
      { text: '  const context = buildContextHistory(session.history, 10);', color: 'standard' },
      { text: '  const response = await model.generateContent(context);', color: 'standard' },
      { text: '  return detectEscalation(response.text);', color: 'return' },
      { text: '}', color: 'keyword' }
    ]
  }
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('splitmint');
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const activeSnippet = codeSnippets[activeTab];

  const handleCopyCode = () => {
    const textToCopy = activeSnippet.lines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Headline, Bio & Calls to Action */}
        <div className="hero-content">
          
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="status-indicator">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            {personalInfo.heroHeadline.split('&')[0]} &amp;{' '}
            <span className="text-gradient">
              {personalInfo.heroHeadline.split('&')[1]?.trim() || "Applied AI Systems."}
            </span>
          </h1>

          {/* Introduction & Supporting Description */}
          <p className="hero-intro">
            {personalInfo.heroIntro}
          </p>

          <p className="hero-supporting">
            {personalInfo.heroSupporting}
          </p>

          {/* Technology Badges */}
          <div className="hero-tech-pills">
            <span className="tech-pill">
              <span className="pill-dot node-dot" /> Python &amp; FastAPI
            </span>
            <span className="tech-pill">
              <span className="pill-dot react-dot" /> React.js &amp; Next.js
            </span>
            <span className="tech-pill">
              <span className="pill-dot ai-dot" /> PostgreSQL &amp; Redis
            </span>
            <span className="tech-pill">
              <span className="pill-dot python-dot" /> RAG &amp; Qdrant
            </span>
            <span className="tech-pill">
              <span className="pill-dot cv-dot" /> Pytest &amp; Docker
            </span>
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a href="#experience" className="btn btn-secondary">
              <span>View Experience</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View Chetan Thakur's GitHub (opens in new tab)"
            >
              <GithubIcon size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View Chetan Thakur's LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Profile summary badge with GitHub avatar & Quick Contacts */}
          <div className="hero-profile-summary">
            <div className="hero-avatar-frame">
              {!imageError ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="hero-avatar-img"
                  onError={() => setImageError(true)}
                  width="54"
                  height="54"
                />
              ) : (
                <div className="hero-avatar-placeholder">CT</div>
              )}
            </div>
            <div className="hero-avatar-info">
              <span className="hero-avatar-name">{personalInfo.name}</span>
              <span className="hero-avatar-role">Full-Stack Software Developer • MNNIT Allahabad</span>
              <div className="hero-quick-meta">
                <span className="quick-meta-item">
                  <MapPin size={12} className="text-cyan" /> {personalInfo.location}
                </span>
                <span className="quick-meta-divider">•</span>
                <a href={`tel:${personalInfo.phoneRaw}`} className="quick-meta-item link-item">
                  <Phone size={12} className="text-cyan" /> {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Sandbox / Terminal Preview */}
        <div className="hero-visual">
          <div className="hero-terminal-card">
            
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              {/* Interactive File Tabs */}
              <div className="terminal-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'splitmint'}
                  className={`terminal-tab ${activeTab === 'splitmint' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('splitmint')}
                >
                  <Terminal size={13} className="tab-icon" />
                  <span>SplitMint (Two-Pointer)</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'rag'}
                  className={`terminal-tab ${activeTab === 'rag' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('rag')}
                >
                  <Zap size={13} className="tab-icon" />
                  <span>NIFN-RAG (Hybrid)</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'gemini'}
                  className={`terminal-tab ${activeTab === 'gemini' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('gemini')}
                >
                  <Sparkles size={13} className="tab-icon" />
                  <span>AI-Bot</span>
                </button>
              </div>

              {/* Copy snippet button */}
              <button
                type="button"
                className="terminal-copy-btn"
                onClick={handleCopyCode}
                title="Copy code snippet"
                aria-label="Copy snippet to clipboard"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Code Content */}
            <div className="terminal-body">
              <div className="terminal-file-info">
                <span className="file-name">{activeSnippet.filename}</span>
                <span className="file-lang">{activeSnippet.language}</span>
              </div>

              <pre className="terminal-code">
                <code>
                  {activeSnippet.lines.map((line, idx) => (
                    <div key={idx} className="code-line">
                      <span className="line-num">{idx + 1}</span>
                      <span className={`line-content code-${line.color}`}>
                        {line.text}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Terminal Status Footer */}
            <div className="terminal-footer">
              <div className="terminal-status-left">
                <CheckCircle2 size={13} className="status-check" />
                <span>Verified Code Implementation</span>
              </div>
              <a
                href={
                  activeTab === 'splitmint'
                    ? "https://github.com/chetannit/Splitmint"
                    : activeTab === 'rag'
                    ? "https://github.com/chetannit"
                    : "https://github.com/chetannit/AI-customer-Bot"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-repo-link"
              >
                Inspect Implementation &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
