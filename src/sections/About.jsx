import { motion } from "framer-motion";
import { User, MapPin, Mail, Sparkles, Code2, Layers, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export default function About() {
  return (
    <section id="about" className="section-container about-section">
      {/* Section Header */}
      <div className="section-header text-center">
        <div className="section-badge">
          <User size={14} className="badge-icon" />
          <span>About Me</span>
        </div>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A little about how I work
        </p>
      </div>

      <div className="about-grid">
        {/* Main Bio Card */}
        <motion.div
          className="about-main-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-bio-content">
            <h3 className="about-heading">
              Building modern, user-focused web experiences with React & MERN
            </h3>
            
            <p className="about-text">
              {personalInfo.about.bio}
            </p>

            {/* Quick Details Chips */}
            <div className="about-info-chips">
              <div className="info-chip">
                <MapPin size={16} className="chip-icon" />
                <div className="chip-text">
                  <span className="chip-label">Location</span>
                  <span className="chip-val">{personalInfo.about.location}</span>
                </div>
              </div>

              <div className="info-chip">
                <Mail size={16} className="chip-icon" />
                <div className="chip-text">
                  <span className="chip-label">Email</span>
                  <a href={`mailto:${personalInfo.about.email}`} className="chip-val email-chip">
                    {personalInfo.about.email}
                  </a>
                </div>
              </div>

              <div className="info-chip">
                <Sparkles size={16} className="chip-icon text-accent" />
                <div className="chip-text">
                  <span className="chip-label">Current Status</span>
                  <span className="chip-val text-accent-highlight">{personalInfo.about.status}</span>
                </div>
              </div>
            </div>

            {/* Core Values / Work Principles */}
            <div className="about-keypoints">
              <div className="keypoint-item">
                <CheckCircle2 size={18} className="keypoint-icon" />
                <span>Responsive, accessible, and mobile-first frontend engineering</span>
              </div>
              <div className="keypoint-item">
                <CheckCircle2 size={18} className="keypoint-icon" />
                <span>Modular React architecture, custom hooks & clean component state</span>
              </div>
              <div className="keypoint-item">
                <CheckCircle2 size={18} className="keypoint-icon" />
                <span>Structured REST APIs with Node.js, Express, and MongoDB</span>
              </div>
              <div className="keypoint-item">
                <CheckCircle2 size={18} className="keypoint-icon" />
                <span>Clean Git version control workflows and cloud deployments</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Cards Column */}
        <motion.div
          className="about-highlights-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="highlight-card">
            <div className="highlight-icon-box">
              <Code2 size={22} className="highlight-icon" />
            </div>
            <div className="highlight-text-box">
              <h4 className="highlight-title">Frontend Engineering</h4>
              <p className="highlight-desc">
                Building responsive, interactive user interfaces with React, JavaScript (ES6+), and CSS design patterns.
              </p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon-box">
              <Layers size={22} className="highlight-icon" />
            </div>
            <div className="highlight-text-box">
              <h4 className="highlight-title">MERN Stack Workflow</h4>
              <p className="highlight-desc">
                Developing full-stack applications connecting React frontends with Node.js, Express servers, and MongoDB.
              </p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-icon-box">
              <Cpu size={22} className="highlight-icon" />
            </div>
            <div className="highlight-text-box">
              <h4 className="highlight-title">Hands-on Project Builder</h4>
              <p className="highlight-desc">
                Continuously improving developer workflows, debugging skills, and learning modern best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
