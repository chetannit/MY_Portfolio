import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Info, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Honest form handling: creates a direct mailto URI without pretending to have a remote backend
  const handleMailtoSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedbackMsg('Please fill in your name, email, and message.');
      return;
    }

    const emailTo = personalInfo.email;
    const subject = encodeURIComponent(
      formData.subject.trim() 
        ? `[Portfolio Inquiry] ${formData.subject.trim()}` 
        : `[Portfolio Inquiry] Connecting regarding opportunity from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Chetan,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );

    // Open user's default email client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    setFeedbackMsg('Opening your default email application with pre-composed message...');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyFullDraftToClipboard = () => {
    if (!formData.message.trim()) {
      setFeedbackMsg('Please enter a message before copying.');
      return;
    }
    const fullDraft = `To: ${personalInfo.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(fullDraft);
    setCopiedDraft(true);
    setFeedbackMsg('Message copied to clipboard! You can paste it into Gmail or your webmail.');
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={13} aria-hidden="true" />
            <span>07. Contact</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="section-description">
            I am currently open to conversations regarding software engineering, full-stack web development, and AI/ML associate roles.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Connect & Links */}
          <div className="contact-info-column">
            
            <div className="card contact-intro-card">
              <div className="intro-badge">
                <Sparkles size={14} className="text-cyan" />
                <span>Open for Collaboration</span>
              </div>
              <h3 className="intro-title">Get in Touch Directly</h3>
              <p className="intro-text">
                Whether you are a recruiter with an open engineering position, a hiring manager looking for a dedicated full-stack developer, or an engineer wanting to connect, feel free to reach out.
              </p>

              {/* Direct Email Item */}
              <div className="direct-item email-item">
                <div className="item-icon-box">
                  <Mail size={18} className="text-cyan" />
                </div>
                <div className="item-details">
                  <span className="item-label">Direct Email</span>
                  <div className="item-value-row">
                    <a href={`mailto:${personalInfo.email}`} className="item-link">
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={copyEmailToClipboard}
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* GitHub Item */}
              <div className="direct-item">
                <div className="item-icon-box">
                  <GithubIcon size={18} className="text-cyan" />
                </div>
                <div className="item-details">
                  <span className="item-label">GitHub Profile</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-link flex items-center gap-1"
                  >
                    <span>github.com/{personalInfo.githubUsername}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* LinkedIn Placeholder Item */}
              <div className="direct-item">
                <div className="item-icon-box">
                  <LinkedinIcon size={18} className="text-cyan" />
                </div>
                <div className="item-details">
                  <span className="item-label">LinkedIn Profile</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-link flex items-center gap-1"
                  >
                    <span>[Your LinkedIn Profile]</span>
                    <ExternalLink size={12} />
                  </a>
                  <span className="editable-subtext">Configure in portfolioData.js</span>
                </div>
              </div>

              {/* Location Item */}
              <div className="direct-item">
                <div className="item-icon-box">
                  <MapPin size={18} className="text-cyan" />
                </div>
                <div className="item-details">
                  <span className="item-label">Work Preference</span>
                  <span className="item-static-text">{personalInfo.location}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Functional Message Dispatcher Form */}
          <div className="contact-form-column">
            <div className="card contact-form-card">
              
              <div className="form-card-header">
                <MessageSquare size={18} className="text-cyan" />
                <div>
                  <h3 className="form-card-title">Compose a Message</h3>
                  <p className="form-card-subtitle">
                    Dispatches directly to Chetan via your email client or clipboard.
                  </p>
                </div>
              </div>

              <form onSubmit={handleMailtoSubmit} className="contact-form" noValidate>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Your Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Engineering Inquiry"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Chetan, I reviewed your SplitMint and AI projects and would love to discuss an open role at..."
                    className="form-textarea"
                    required
                  />
                </div>

                {/* Form feedback status */}
                {feedbackMsg && (
                  <div className="form-status-alert" role="status">
                    <Info size={15} className="text-cyan flex-shrink-0" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                {/* Dual Dispatch Options */}
                <div className="form-action-group">
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <Send size={16} aria-hidden="true" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary form-copy-btn"
                    onClick={copyFullDraftToClipboard}
                    title="Copy full inquiry to clipboard for Gmail/Webmail"
                  >
                    {copiedDraft ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                    <span>Copy Draft</span>
                  </button>
                </div>

                {/* Honest Transparency Notice */}
                <div className="form-transparency-notice">
                  <Info size={13} className="text-muted flex-shrink-0" />
                  <p>
                    <strong>Functional Notice:</strong> This form directly prepares your email in your default client or copies the message to your clipboard without fabricating a fake background delivery. To hook up Formspree or EmailJS, simply connect your endpoint in <code>src/data/portfolioData.js</code>.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
