import { motion } from "framer-motion";
import { GraduationCap, Calendar, School, BookOpen } from "lucide-react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section-container education-section">
      <div className="section-header text-center">
        <div className="section-badge">
          <GraduationCap size={14} className="badge-icon" />
          <span>Academic Background</span>
        </div>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Formal computing education that grounds my software engineering work.
        </p>
      </div>

      <div className="education-grid">
        {educationData.map((edu, idx) => (
          <motion.article
            key={edu.id || idx}
            className="education-card academic-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="academic-box-accent" aria-hidden="true" />

            <div className="education-card-top">
              <div className="education-icon-box">
                {idx === 0 ? <GraduationCap size={22} className="edu-icon" /> : <School size={22} className="edu-icon" />}
              </div>
              <span className="academic-index">{String(idx + 1).padStart(2, "0")}</span>
            </div>

            {edu.level && (
              <div className="education-badge-status">
                <span className="edu-status-dot" />
                <span>{edu.level}</span>
              </div>
            )}

            {edu.timeline ? (
              <div className="education-meta">
                <span className="edu-timeline">
                  <Calendar size={13} />
                  {edu.timeline}
                </span>
              </div>
            ) : null}

            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>

            {edu.description && (
              <p className="education-description">{edu.description}</p>
            )}

            {edu.focus && edu.focus.length > 0 && (
              <div className="academic-focus-row">
                <BookOpen size={13} className="academic-focus-icon" />
                <div className="academic-tags">
                  {edu.focus.map((item) => (
                    <span key={item} className="academic-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
