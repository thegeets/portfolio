import { certificatesData } from "../data/certificates";
import { Award, ExternalLink, Calendar, CheckCircle, PlusCircle } from "lucide-react";

export default function Certificates() {
  const hasCertificates = certificatesData && certificatesData.length > 0;

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Continuous Learning</span>
          <h2 className="section-title">
            Certificates &amp; <span className="gradient-text-accent">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Professional course certifications, workshops, and verified skill achievements.
          </p>
        </div>

        {hasCertificates ? (
          <div className="grid-3">
            {certificatesData.map((cert) => (
              <div key={cert.id} className="glass-card cert-card">
                {cert.image && (
                  <div
                    style={{
                      aspectRatio: "16/10",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "1.25rem",
                      background: "#0f172a",
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <Award size={18} color="#06b6d4" />
                  <span style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontWeight: "600" }}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#ffffff", marginBottom: "0.75rem" }}>
                  {cert.title}
                </h3>

                {cert.date && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    <Calendar size={13} />
                    <span>Issued {cert.date}</span>
                  </div>
                )}

                {cert.skills && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-badge" style={{ fontSize: "0.7rem" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ width: "100%" }}
                    >
                      <span>View Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card cert-empty-state">
            <div className="cert-empty-icon">
              <Award size={32} />
            </div>
            <h3 className="cert-empty-title">Certifications In Progress</h3>
            <p className="cert-empty-desc">
              Currently undertaking advanced certifications in frontend engineering and full-stack development. Verified certificates will be showcased here upon completion.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
