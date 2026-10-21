import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Code2, Terminal, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Hero.css';

const codeSnippets = {
  gemini: {
    filename: 'aiSupportBot.js',
    language: 'JavaScript',
    lines: [
      { text: '// Google Gemini AI integration with multi-turn context', color: 'comment' },
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
  },
  classifier: {
    filename: 'image_classifier.py',
    language: 'Python',
    lines: [
      { text: '# Feature extraction: Wavelet transform + Haar Cascade', color: 'comment' },
      { text: 'import cv2, pywt, joblib, numpy as np', color: 'import' },
      { text: '', color: 'standard' },
      { text: 'def extract_wavelet_features(img, mode="haar", level=1):', color: 'keyword' },
      { text: '    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)', color: 'standard' },
      { text: '    coeffs = pywt.wavedec2(np.float32(gray)/255, mode, level)', color: 'standard' },
      { text: '    coeffs_H = list(coeffs); coeffs_H[0] *= 0', color: 'standard' },
      { text: '    return pywt.waverec2(coeffs_H, mode) * 255', color: 'return' },
      { text: '', color: 'standard' },
      { text: 'def classify_image(base64_img):', color: 'keyword' },
      { text: '    cropped_faces = get_cropped_face_if_2_eyes(base64_img)', color: 'standard' },
      { text: '    return model.predict_proba(combined_features)', color: 'return' }
    ]
  },
  splitmint: {
    filename: 'settlementEngine.js',
    language: 'JavaScript',
    lines: [
      { text: '// SplitMint balance settlement & debt minimization', color: 'comment' },
      { text: 'export function computeNetBalances(participants, expenses) {', color: 'keyword' },
      { text: '  const balances = new Map();', color: 'standard' },
      { text: '  expenses.forEach(({ payerId, splits, amount }) => {', color: 'standard' },
      { text: '    balances.set(payerId, (balances.get(payerId) || 0) + amount);', color: 'standard' },
      { text: '    splits.forEach(s => balances.set(s.userId, balances.get(s.userId) - s.owed));', color: 'standard' },
      { text: '  });', color: 'standard' },
      { text: '  // Settle debtor balances with creditors in O(n log n)', color: 'comment' },
      { text: '  return generateSettlementTransactions(balances);', color: 'return' },
      { text: '}', color: 'keyword' }
    ]
  }
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('gemini');
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
              {personalInfo.heroHeadline.split('&')[1]?.trim() || "Intelligent Solutions."}
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
              <span className="pill-dot react-dot" /> React
            </span>
            <span className="tech-pill">
              <span className="pill-dot python-dot" /> Python
            </span>
            <span className="tech-pill">
              <span className="pill-dot ai-dot" /> AI / ML
            </span>
            <span className="tech-pill">
              <span className="pill-dot node-dot" /> Node.js &amp; Express
            </span>
            <span className="tech-pill">
              <span className="pill-dot cv-dot" /> OpenCV &amp; Scikit-Learn
            </span>
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Projects</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={18} aria-hidden="true" />
              <span>Explore My GitHub</span>
            </a>
          </div>

          {/* Profile summary badge with GitHub avatar */}
          <div className="hero-profile-summary">
            <div className="hero-avatar-frame">
              {!imageError ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="hero-avatar-img"
                  onError={() => setImageError(true)}
                  width="52"
                  height="52"
                />
              ) : (
                <div className="hero-avatar-placeholder">CT</div>
              )}
            </div>
            <div className="hero-avatar-info">
              <span className="hero-avatar-name">{personalInfo.name}</span>
              <span className="hero-avatar-role">@{personalInfo.githubUsername} • Full-Stack Developer</span>
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
                  aria-selected={activeTab === 'gemini'}
                  className={`terminal-tab ${activeTab === 'gemini' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('gemini')}
                >
                  <Sparkles size={13} className="tab-icon" />
                  <span>AI-Customer-Bot</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'classifier'}
                  className={`terminal-tab ${activeTab === 'classifier' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('classifier')}
                >
                  <Code2 size={13} className="tab-icon" />
                  <span>Image-Classifier</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'splitmint'}
                  className={`terminal-tab ${activeTab === 'splitmint' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('splitmint')}
                >
                  <Terminal size={13} className="tab-icon" />
                  <span>SplitMint</span>
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
                <span>Verified Source Implementation</span>
              </div>
              <a
                href={
                  activeTab === 'gemini'
                    ? "https://github.com/chetannit/AI-customer-Bot"
                    : activeTab === 'classifier'
                    ? "https://github.com/chetannit/Image-Classifier"
                    : "https://github.com/chetannit/Splitmint"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-repo-link"
              >
                GitHub Repository &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
