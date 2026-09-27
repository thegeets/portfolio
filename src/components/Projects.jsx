import { projectsData } from "../data/projects";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">
            Recent <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world full-stack web applications built with the MERN stack and React.js, featuring responsive UI and functional architectures.
          </p>
        </div>

        <div className="grid-2">
          {projectsData.map((project) => (
            <article key={project.id} className="glass-card project-card">
              {/* Project Image Preview */}
              <div className="project-preview-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="project-preview-img"
                  loading="lazy"
                />
                <span className="project-badge-tag">
                  {project.category}
                </span>
              </div>

              {/* Project Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">{project.description}</p>

                {/* Key Features */}
                {project.features && (
                  <ul className="project-features-list">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="project-feature-item">
                        <span className="project-feature-dot" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions: Live Demo & GitHub */}
                <div className="project-actions">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label={`Open Live Demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
