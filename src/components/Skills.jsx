import { skillsData } from "../data/skills";
import {
  Code2,
  Palette,
  FileCode2,
  Atom,
  Zap,
  Layout,
  Server,
  Cpu,
  Network,
  Database,
  GitBranch,
  Terminal,
  Send,
  Layers,
  Wrench
} from "lucide-react";
import { GithubIcon } from "./Icons";

// Icon mapping helper
const iconMap = {
  Code2,
  Palette,
  FileCode2,
  Atom,
  Zap,
  Layout,
  Server,
  Cpu,
  Network,
  Database,
  GitBranch,
  Github: GithubIcon,
  Terminal,
  Send
};

const categoryIconMap = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & Workflow": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Skills &amp; Tech Stack</span>
          <h2 className="section-title">
            Technical <span className="gradient-text-accent">Toolbox</span>
          </h2>
          <p className="section-subtitle">
            A categorized overview of the languages, frameworks, libraries, and tools I use to build robust web applications.
          </p>
        </div>

        <div className="grid-2">
          {skillsData.map((categoryGroup) => {
            const CategoryIcon =
              categoryIconMap[categoryGroup.category] || Layers;

            return (
              <div
                key={categoryGroup.category}
                className="glass-card skills-category-card"
              >
                <div className="skills-category-header">
                  <div className="skills-category-icon">
                    <CategoryIcon size={20} />
                  </div>
                  <h3 className="skills-category-title">
                    {categoryGroup.category}
                  </h3>
                </div>

                <p className="skills-category-desc">
                  {categoryGroup.description}
                </p>

                <div className="skills-items-grid">
                  {categoryGroup.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;

                    return (
                      <div key={skill.name} className="skill-pill">
                        <SkillIcon size={16} className="skill-pill-icon" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
