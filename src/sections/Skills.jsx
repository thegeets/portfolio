import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Server,
  Database,
  Wrench,
  Atom,
  Zap,
  Layout,
  Maximize2,
  Network,
  GitBranch,
  Palette,
  Send
} from "lucide-react";
import { capabilityCategories } from "../data/skills";
import TechBackgroundCanvas from "../components/TechBackgroundCanvas";

const iconComponentMap = {
  Atom,
  Zap,
  Layout,
  Maximize2,
  Server,
  Database,
  Network,
  Layers,
  GitBranch,
  Cpu,
  Palette,
  Send
};

const categoryIconMap = {
  Frontend: Layout,
  "Backend & Database": Server,
  "Tools & Workflow": Wrench
};

function AnimatedNumber({ target, inView, duration = 1.2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [inView, target, duration]);

  return <span className="counter-value">{count}%</span>;
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? capabilityCategories
      : capabilityCategories.filter((cat) => cat.id === activeCategory);

  const totalSkills = capabilityCategories.reduce(
    (sum, cat) => sum + cat.skills.length,
    0
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="core-capability-section"
      aria-label="Core Capability Stack"
    >
      <TechBackgroundCanvas isVisible={isInView} />

      <div className="section-container capability-container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-badge tech-badge">
            <Cpu size={14} className="badge-icon tech-glow-icon" />
            <span>Core Capability Stack</span>
          </div>
          <h2 className="section-title">Core Capability Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build modern, responsive web experiences.
          </p>
        </motion.div>

        <motion.div
          className="capability-filter-tabs"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button
            type="button"
            className={`filter-tab-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            <span>All Capabilities</span>
            <span className="filter-count">{totalSkills}</span>
          </button>
          {capabilityCategories.map((cat) => {
            const CatIcon = categoryIconMap[cat.category] || Layers;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <CatIcon size={14} />
                <span>{cat.category}</span>
                <span className="filter-count">{cat.skills.length}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="skill-box-groups">
          {filteredCategories.map((categoryGroup, catIdx) => {
            const CategoryIcon = categoryIconMap[categoryGroup.category] || Layers;

            return (
              <motion.div
                key={categoryGroup.id}
                className="skill-box-group"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + catIdx * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="skill-box-group-header">
                  <div className="capability-cat-icon-box">
                    <CategoryIcon size={20} className="cat-icon" />
                  </div>
                  <div>
                    <h3 className="capability-cat-title">{categoryGroup.category}</h3>
                    <p className="capability-cat-tagline">{categoryGroup.tagline}</p>
                  </div>
                </div>

                <div className="skill-boxes-grid">
                  {categoryGroup.skills.map((skill, sIdx) => {
                    const SkillIcon = iconComponentMap[skill.icon] || Code2;

                    return (
                      <motion.article
                        key={skill.name}
                        className="skill-box"
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.12 + catIdx * 0.08 + sIdx * 0.05
                        }}
                      >
                        <div className="skill-box-top">
                          <div className="skill-box-icon">
                            <SkillIcon size={20} />
                          </div>
                          <div className="skill-percentage-badge">
                            <AnimatedNumber
                              target={skill.percentage}
                              inView={isInView}
                              duration={1.2}
                            />
                          </div>
                        </div>

                        <h4 className="skill-box-name">{skill.name}</h4>
                        <p className="skill-box-subtext">{skill.subtext}</p>

                        <div
                          className="tech-progress-track skill-box-track"
                          role="progressbar"
                          aria-valuenow={skill.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label={`${skill.name} proficiency ${skill.percentage}%`}
                        >
                          <motion.div
                            className="tech-progress-fill"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                            transition={{
                              duration: 1.25,
                              delay: 0.2 + sIdx * 0.06,
                              ease: [0.16, 1, 0.3, 1]
                            }}
                          />
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
