import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  School,
  BookOpen,
  Building2,
  CheckCircle2,
  Sparkles,
  Code2,
  Cpu,
  Layers
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-container academic-journey-section">
      {/* Section Header */}
      <motion.div
        className="section-header text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-badge">
          <GraduationCap size={14} className="badge-icon" />
          <span>Academic Background</span>
        </div>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-subtitle">
          My educational journey and foundation
        </p>
      </motion.div>

      {/* Academic Journey Path Container */}
      <div className="academic-journey-wrapper">
        {/* Ambient Subtle Glow */}
        <div className="academic-ambient-glow" aria-hidden="true" />

        <div className="academic-journey-flow">
          {/* ================================================================
              MILESTONE 01: BACHELOR'S DEGREE (FEATURED HERO CARD)
              ================================================================ */}
          <motion.div
            className="academic-milestone milestone-featured"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Milestone Indicator Node */}
            <div className="milestone-indicator-column">
              <div className="milestone-node node-active">
                <span className="milestone-number">01</span>
                <span className="node-live-ring" aria-hidden="true" />
              </div>
              <div className="milestone-connector-line" aria-hidden="true">
                <span className="connector-energy-pulse" />
              </div>
            </div>

            {/* Milestone Card Content */}
            <div className="academic-card card-featured">
              <div className="academic-card-glass-shine" aria-hidden="true" />
              <div className="academic-featured-glow" aria-hidden="true" />

              {/* Top Meta Bar: Status & Badges */}
              <div className="academic-card-top-bar">
                <div className="academic-badges-group">
                  <span className="academic-pill pill-live">
                    <span className="pill-dot-pulse" />
                    <span>Currently Studying — 6th Semester</span>
                  </span>
                  <span className="academic-pill pill-univ">
                    <Building2 size={13} />
                    <span>Tribhuvan University</span>
                  </span>
                </div>
                <div className="academic-timeline-badge">
                  <Calendar size={13} />
                  <span>2080 B.S. – Present</span>
                </div>
              </div>

              {/* Main Degree Title & Institution */}
              <div className="academic-main-info">
                <div className="academic-title-wrap">
                  <h3 className="academic-degree-name">
                    BSc CSIT
                    <span className="academic-degree-full">
                      (Bachelor of Science in Computer Science &amp; Information Technology)
                    </span>
                  </h3>
                  <div className="academic-institution-row">
                    <School size={16} className="institution-icon" />
                    <span className="academic-college-name">SOCH College of IT</span>
                    <span className="academic-divider">•</span>
                    <span className="academic-location">Affiliated with Tribhuvan University</span>
                  </div>
                </div>
              </div>

              {/* Degree Scope Description */}
              <p className="academic-summary-text">
                Pursuing comprehensive undergraduate computing studies with intensive focus on full-stack software architecture, data structures &amp; algorithms, database modeling, and modern web application development.
              </p>

              {/* Core Coursework & Focus Pillars */}
              <div className="academic-curriculum-box">
                <div className="curriculum-header">
                  <BookOpen size={14} className="curriculum-icon" />
                  <span className="curriculum-title">Key Academic Focus &amp; Coursework</span>
                </div>
                <div className="curriculum-tags-grid">
                  <span className="curriculum-tag">
                    <Code2 size={12} />
                    <span>Web Technologies</span>
                  </span>
                  <span className="curriculum-tag">
                    <Cpu size={12} />
                    <span>Algorithms &amp; Data Structures</span>
                  </span>
                  <span className="curriculum-tag">
                    <Layers size={12} />
                    <span>Database Management (DBMS)</span>
                  </span>
                  <span className="curriculum-tag">
                    <Sparkles size={12} />
                    <span>Software Engineering Principles</span>
                  </span>
                  <span className="curriculum-tag">
                    <CheckCircle2 size={12} />
                    <span>Object-Oriented Programming (OOP)</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================================================================
              MILESTONE 02: HIGHER SECONDARY EDUCATION (FOUNDATION CARD)
              ================================================================ */}
          <motion.div
            className="academic-milestone milestone-foundation"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Milestone Indicator Node */}
            <div className="milestone-indicator-column">
              <div className="milestone-node node-foundation">
                <span className="milestone-number">02</span>
              </div>
            </div>

            {/* Milestone Card Content */}
            <div className="academic-card card-foundation">
              {/* Top Meta Bar */}
              <div className="academic-card-top-bar">
                <div className="academic-badges-group">
                  <span className="academic-pill pill-completed">
                    <CheckCircle2 size={13} />
                    <span>Higher Secondary Foundation</span>
                  </span>
                  <span className="academic-pill pill-stream">
                    <span>Science Stream</span>
                  </span>
                </div>
                <span className="academic-level-label">Grade 11 &amp; 12</span>
              </div>

              {/* Main Degree Title & School */}
              <div className="academic-main-info">
                <div className="academic-title-wrap">
                  <h3 className="academic-degree-name degree-secondary">
                    Class 11–12
                    <span className="academic-degree-full">
                      (Higher Secondary Science &amp; Computer Foundation)
                    </span>
                  </h3>
                  <div className="academic-institution-row">
                    <School size={16} className="institution-icon text-muted" />
                    <span className="academic-college-name">Balodaya Secondary School</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="academic-summary-text text-secondary-desc">
                Completed secondary school education with academic grounding in computer science, physics, and advanced mathematics, forming the analytical and problem-solving foundation for engineering studies.
              </p>

              {/* Foundation Tags */}
              <div className="academic-curriculum-box curriculum-compact">
                <div className="curriculum-tags-grid">
                  <span className="curriculum-tag tag-muted">
                    <span>Computer Science Fundamentals</span>
                  </span>
                  <span className="curriculum-tag tag-muted">
                    <span>Mathematics &amp; Logic</span>
                  </span>
                  <span className="curriculum-tag tag-muted">
                    <span>Analytical Problem Solving</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

