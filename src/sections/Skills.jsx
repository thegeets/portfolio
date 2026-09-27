import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Layers, CheckCircle } from "lucide-react";
import { skillsData } from "../data/skills";

const categoryIconMap = {
  FRONTEND: Layers,
  BACKEND: Server,
  DATABASE: Database,
  "TOOLS & DEVELOPMENT": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-header text-center">
        <div className="section-badge">
          <Code2 size={14} className="badge-icon" />
          <span>Skills</span>
        </div>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Tools I use to build modern web applications
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((category, idx) => {
          const CategoryIcon = categoryIconMap[category.category] || Code2;

          return (
            <motion.div
              key={category.id || idx}
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <CategoryIcon size={22} className="category-icon" />
                </div>
                <div>
                  <span className="category-tag">{category.category}</span>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="skills-item-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-main-info">
                      <div className="skill-name-row">
                        <span className="skill-dot" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level-text">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
