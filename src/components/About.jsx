import { personalInfo } from "../data/personalInfo";
import { Code, Layers, Rocket, CheckCircle2 } from "lucide-react";

export default function About() {
  const iconMap = [Code, Layers, Rocket];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">
            Passionate About Building <span className="gradient-text-accent">Practical Web Apps</span>
          </h2>
          <p className="section-subtitle">
            An IT student dedicated to turning ideas into functional, responsive, and delightful user interfaces.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Card */}
          <div className="glass-card about-text-card">
            <div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "700", marginBottom: "1.25rem", color: "#ffffff" }}>
                {personalInfo.about.heading}
              </h3>
              {personalInfo.about.paragraphs.map((p, idx) => (
                <p key={idx} className="about-intro-p">
                  {p}
                </p>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <span className="tech-badge">
                <CheckCircle2 size={13} color="#10b981" />
                <span>Responsive Design</span>
              </span>
              <span className="tech-badge">
                <CheckCircle2 size={13} color="#10b981" />
                <span>Component Architecture</span>
              </span>
              <span className="tech-badge">
                <CheckCircle2 size={13} color="#10b981" />
                <span>RESTful Integration</span>
              </span>
              <span className="tech-badge">
                <CheckCircle2 size={13} color="#10b981" />
                <span>Modern Clean UI</span>
              </span>
            </div>
          </div>

          {/* Key Highlight Cards List */}
          <div className="about-cards-list">
            {personalInfo.about.highlights.map((item, idx) => {
              const IconComponent = iconMap[idx % iconMap.length];
              return (
                <div key={idx} className="glass-card about-highlight-card">
                  <div className="about-highlight-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h4 className="about-highlight-title">{item.title}</h4>
                    <p className="about-highlight-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
