import { motion } from "framer-motion";
import { GraduationCap, Calendar, School, BookOpen } from "lucide-react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="section-container education-section">
      <div className="section-header text-center">
        <div className="section-badge">
          <GraduationCap size={14} className="badge-icon" />
          <span>Education</span>
        </div>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic background
        </p>
      </div>

      <div className="education-grid">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.id || idx}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="education-card-top">
              <div className="education-icon-box">
                <School size={22} className="edu-icon" />
              </div>
              {edu.level && (
                <div className="education-badge-status">
                  <span className="edu-status-dot" />
                  <span>{edu.level}</span>
                </div>
              )}
            </div>

            <div className="education-card-body">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
