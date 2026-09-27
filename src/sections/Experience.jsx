import { motion } from "framer-motion";
import { Compass, CheckCircle2, GitBranch, Calendar } from "lucide-react";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-container experience-section">
      <div className="section-header text-center">
        <div className="section-badge">
          <Compass size={14} className="badge-icon" />
          <span>Experience</span>
        </div>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Where I've been building
        </p>
      </div>

      <div className="experience-timeline">
        {experienceData.map((item, idx) => (
          <motion.div
            key={item.id || idx}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Timeline Marker & Line */}
            <div className="timeline-marker-col">
              <div className="timeline-dot">
                <span className="timeline-inner-dot" />
              </div>
              {idx !== experienceData.length - 1 && <div className="timeline-line" />}
            </div>

            {/* Timeline Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-title">{item.role}</h3>
                  <span className="timeline-focus">{item.subtitle}</span>
                </div>
                <div className="timeline-period-badge">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="timeline-description">{item.description}</p>

              <div className="timeline-points-list">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="timeline-point">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {item.technologies && item.technologies.length > 0 && (
                <div className="timeline-tech-stack">
                  {item.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="timeline-tech-pill">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
