import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink, FileText, CheckCircle2, Sparkles, Calendar, Layers } from "lucide-react";
import { certificatesData } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import Button from "../components/Button";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const hasCertificates = certificatesData && certificatesData.length > 0;

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="section-container certificates-section">
      {/* Section Header */}
      <div className="section-header text-center">
        <div className="section-badge">
          <Award size={14} className="badge-icon" />
          <span>Certifications</span>
        </div>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Certificates and learning achievements
        </p>
      </div>

      {/* Certificates Grid */}
      {hasCertificates ? (
        <div className="certificates-grid">
          {certificatesData.map((cert, idx) => (
            <CertificateCard
              key={cert.id || idx}
              certificate={cert}
              index={idx}
              onSelectCertificate={(c) => setSelectedCert(c)}
            />
          ))}
        </div>
      ) : (
        <motion.div
          className="certificates-empty-state"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="empty-state-glow" />
          <div className="empty-icon-wrapper">
            <Award size={36} className="empty-cert-icon" />
          </div>
          <h3 className="empty-state-title">Continuous Learning & Certifications</h3>
          <p className="empty-state-description">
            Certificates will be added here as I complete relevant courses and certifications.
          </p>
          <div className="empty-state-pill">
            <Sparkles size={14} />
            <span>Add new certificates anytime in <code>src/data/certificates.js</code></span>
          </div>
        </motion.div>
      )}

      {/* Certificate Viewer Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
            <motion.div
              className="cert-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Modal Header */}
              <div className="cert-modal-header">
                <div className="cert-modal-header-left">
                  <div className="cert-modal-icon-wrap">
                    <Award size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="cert-modal-title">{selectedCert.title}</h3>
                    <span className="cert-modal-issuer">{selectedCert.issuer}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="cert-modal-close-btn"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate preview"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="cert-modal-body">
                {selectedCert.image ? (
                  <div className="cert-modal-image-wrap">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="cert-modal-image"
                    />
                  </div>
                ) : (
                  <div className="cert-modal-placeholder">
                    <div className="cert-modal-placeholder-icon">
                      <FileText size={48} className="text-accent" />
                    </div>
                    <h4 className="cert-modal-doc-title">{selectedCert.title}</h4>
                    <p className="cert-modal-doc-desc">
                      Official credential issued by <span className="text-highlight">{selectedCert.issuer}</span>.
                    </p>
                    {selectedCert.date && (
                      <div className="cert-modal-meta-item">
                        <Calendar size={14} />
                        <span>Completed: {selectedCert.date}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Skills tags in modal */}
                {selectedCert.skills && selectedCert.skills.length > 0 && (
                  <div className="cert-modal-skills-box">
                    <span className="cert-modal-skills-label">Skills & Competencies:</span>
                    <div className="cert-modal-skills-list">
                      {selectedCert.skills.map((skill, i) => (
                        <span key={i} className="cert-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="cert-modal-footer">
                {(selectedCert.certificateUrl || selectedCert.credentialUrl) && (
                  <Button
                    as="a"
                    href={selectedCert.certificateUrl || selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                  >
                    Open Certificate URL
                  </Button>
                )}
                <Button
                  as="button"
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
