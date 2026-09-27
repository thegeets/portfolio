import { FolderGit2 } from "lucide-react";
import { projectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-container projects-section">
      <div className="section-header text-center">
        <div className="section-badge">
          <FolderGit2 size={14} className="badge-icon" />
          <span>Selected Work</span>
        </div>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Things I've built
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
