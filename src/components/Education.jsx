import { personalInfo } from "../data/personalInfo";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic Background</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text-accent">Learning</span>
          </h2>
          <p className="section-subtitle">
            Formal computing education grounding my software engineering and web development practices.
          </p>
        </div>

        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          {personalInfo.education.map((edu, idx) => (
            <div key={idx} className="glass-card education-card">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-institution">{edu.institution}</div>
                </div>

                <span className="education-status-badge">
                  <GraduationCap size={15} />
                  <span>{edu.status}</span>
                </span>
              </div>

              <p className="education-desc">{edu.description}</p>

              <div className="education-tags">
                {edu.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-badge">
                    <BookOpen size={12} color="#06b6d4" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
