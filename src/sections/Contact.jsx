import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, MessageSquare, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "../components/Icons";
import { personalInfo } from "../data/personalInfo";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const subject = encodeURIComponent(`Project / Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Scope & Message:\n${formData.message}`
      );
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");
    }, 500);
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header text-center">
        <div className="section-badge">
          <MessageSquare size={14} className="badge-icon" />
          <span>Get In Touch</span>
        </div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's talk about a project or opportunity
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Contact Info & Socials */}
        <motion.div
          className="contact-info-col"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-info-card">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I'm open to internship, junior developer, and suitable freelance opportunities. If you'd like to discuss a project or opportunity, feel free to reach out.
            </p>

            {/* Email Box with Copy Button */}
            <div className="contact-email-box">
              <div className="email-icon-wrapper">
                <Mail size={22} className="text-accent" />
              </div>
              <div className="email-details">
                <span className="email-label">Email Address</span>
                <a href={personalInfo.emailLink} className="email-value">
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                className="copy-email-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <CheckCircle2 size={16} className="text-green" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location & Status Meta */}
            <div className="contact-meta-cards">
              <div className="contact-meta-item">
                <MapPin size={18} className="meta-icon" />
                <div>
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{personalInfo.location}</span>
                </div>
              </div>

              <div className="contact-meta-item">
                <Sparkles size={18} className="meta-icon text-accent" />
                <div>
                  <span className="meta-label">Status</span>
                  <span className="meta-value text-accent-highlight">{personalInfo.status}</span>
                </div>
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="contact-socials-group">
              <span className="socials-group-title">Connect on Socials</span>
              <div className="contact-social-cards">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item"
                >
                  <div className="social-card-left">
                    <GithubIcon size={18} />
                    <span className="social-card-name">GitHub</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item"
                >
                  <div className="social-card-left">
                    <LinkedinIcon size={18} />
                    <span className="social-card-name">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item"
                >
                  <div className="social-card-left">
                    <InstagramIcon size={18} />
                    <span className="social-card-name">Instagram</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>

                <a
                  href={personalInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item"
                >
                  <div className="social-card-left">
                    <FacebookIcon size={18} />
                    <span className="social-card-name">Facebook</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Form */}
        <motion.div
          className="contact-form-col"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Message</h3>
            <p className="form-card-desc">
              Have a question or project in mind? Leave your details below and I'll get back to you promptly.
            </p>

            {submitted ? (
              <div className="form-success-alert">
                <CheckCircle2 size={36} className="success-icon" />
                <h4 className="success-title">Message Ready & Prepared!</h4>
                <p className="success-desc">
                  Thank you for reaching out, {formData.name}. Your message has been prepared for email transmission.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="label-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="label-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@example.com"
                    className="form-input"
                  />
                </div>

                {/* What are you trying to build? */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    What are you trying to build? <span className="label-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or inquiry..."
                    className="form-textarea"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="right"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? "Preparing..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
