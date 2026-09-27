import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2, FileText, Eye } from "lucide-react";
import Button from "./Button";

export default function CertificateCard({ certificate, index, onSelectCertificate }) {
  const [imgError, setImgError] = useState(false);

  const title = certificate.title || certificate.name || "Certificate";
  const issuer = certificate.issuer || certificate.issuingOrganization || "Verified Course";
  const date = certificate.date || "";
  const hasImage = Boolean(certificate.image && certificate.image.trim() !== "" && !imgError);
  const certUrl = certificate.certificateUrl || certificate.credentialUrl || certificate.url || "";
  const isExternalUrl = certUrl.startsWith("http://") || certUrl.startsWith("https://") || certUrl.endsWith(".pdf");

  const handleCardClick = (e) => {
    if (onSelectCertificate) {
      onSelectCertificate(certificate);
    }
  };

  return (
    <motion.div
      className="certificate-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Top Banner / Preview Container */}
      <div className="certificate-banner">
        {hasImage ? (
          <img
            src={certificate.image}
            alt={`${title} Preview`}
            className="certificate-preview-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="certificate-banner-placeholder">
            <div className="cert-banner-pattern" />
            <div className="cert-banner-icon-box">
              <Award size={28} className="cert-main-icon" />
            </div>
            <span className="cert-banner-label">Certified Achievement</span>
          </div>
        )}

        {/* Verified Badge */}
        <div className="certificate-verified-badge">
          <CheckCircle2 size={12} className="verified-icon" />
          <span>Verified</span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="certificate-body">
        {date ? (
          <div className="certificate-date">
            <Calendar size={13} />
            <span>{date}</span>
          </div>
        ) : null}

        <h3 className="certificate-title">{title}</h3>

        <div className="certificate-issuer">
          <span className="issuer-label">Issuer:</span>
          <span className="issuer-name">{issuer}</span>
        </div>

        {certificate.skills && certificate.skills.length > 0 && (
          <div className="certificate-skills" aria-label="Skills covered">
            {certificate.skills.map((skill, i) => (
              <span key={i} className="cert-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer with "View Certificate" Button */}
      <div className="certificate-footer">
        {isExternalUrl ? (
          <Button
            as="a"
            href={certUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={ExternalLink}
            iconPosition="right"
            className="w-full justify-center cert-action-btn"
          >
            View Certificate
          </Button>
        ) : (
          <Button
            as="button"
            type="button"
            onClick={handleCardClick}
            variant="outline"
            size="sm"
            icon={hasImage ? Eye : FileText}
            iconPosition="right"
            className="w-full justify-center cert-action-btn"
          >
            View Certificate
          </Button>
        )}
      </div>
    </motion.div>
  );
}
