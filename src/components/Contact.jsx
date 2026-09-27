import { useState } from "react";
import { personalInfo } from "../data/personalInfo";
import { Mail, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate successful frontend submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text-accent">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a question, project proposal, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <div className="glass-card contact-info-card">
            <h3 className="contact-info-title">Reach Out Directly</h3>
            <p className="contact-info-desc">
              I am open to internship opportunities, frontend developer roles, and collaborative projects.
            </p>

            <div className="contact-channels">
              {/* Email */}
              <div className="contact-channel-item" style={{ cursor: "default" }}>
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-channel-details" style={{ flexGrow: 1 }}>
                  <span className="contact-channel-label">Email</span>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    style={{ color: "var(--text-primary)", textDecoration: "none", wordBreak: "break-all" }}
                    className="contact-channel-value"
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-icon-only"
                  style={{ width: "34px", height: "34px", padding: 0 }}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-channel-icon">
                  <GithubIcon size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">GitHub</span>
                  <span className="contact-channel-value">github.com/geetapoudel</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-channel-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">LinkedIn</span>
                  <span className="contact-channel-value">linkedin.com/in/geetapoudel</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Contact Form (Frontend-only, strictly no phone) */}
          <div className="glass-card contact-form-card">
            {submitted && (
              <div className="form-alert-success" role="alert">
                <CheckCircle2 size={20} />
                <span>
                  Thank you! Your message has been sent. I'll get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Geeta, I'd love to discuss..."
                  required
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
