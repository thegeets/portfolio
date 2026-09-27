import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Code, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import Button from "./Button";

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  const liveLink = project.liveUrl || project.liveDemoUrl || "";
  const gitLink = project.githubUrl || "";

  const hasLiveDemo = Boolean(liveLink && liveLink.trim() !== "");
  const hasGithub = Boolean(gitLink && gitLink.trim() !== "");
  const hasAnyLink = hasLiveDemo || hasGithub;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Project Image Box */}
      <div className="project-image-container">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="project-fallback-visual">
            <div className="fallback-grid" />
            <div className="fallback-content">
              <Layers className="fallback-icon" size={36} />
              <span className="fallback-title">{project.title}</span>
              <span className="fallback-badge">Full-Stack Project</span>
            </div>
          </div>
        )}

        {/* Hover Action Overlay */}
        {hasAnyLink && (
          <div className="project-image-overlay">
            <div className="project-overlay-actions">
              {hasLiveDemo && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-action-btn"
                  title="Open Live Demo"
                  aria-label={`Open live demo of ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
              {hasGithub && (
                <a
                  href={gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-action-btn"
                  title="View GitHub Repository"
                  aria-label={`View GitHub source code of ${project.title}`}
                >
                  <GithubIcon size={20} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="project-featured-badge">
            <span className="badge-dot" />
            <span>Featured Project</span>
          </div>
        )}
      </div>

      {/* Project Info & Tech */}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        
        <p className="project-description">{project.description}</p>

        {/* Highlights if provided */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="project-highlights-list">
            {project.highlights.map((item, hIdx) => (
              <div key={hIdx} className="project-highlight-item">
                <CheckCircle2 size={14} className="highlight-bullet-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Badges */}
        <div className="project-tech-stack" aria-label="Technologies used">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">
              <Code size={12} className="tech-tag-icon" />
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {hasAnyLink && (
          <div className="project-actions">
            {hasLiveDemo && (
              <Button
                as="a"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={ExternalLink}
                iconPosition="right"
                className="flex-1"
              >
                Live Demo
              </Button>
            )}

            {hasGithub && (
              <Button
                as="a"
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={GithubIcon}
                iconPosition="left"
                className="flex-1"
              >
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
