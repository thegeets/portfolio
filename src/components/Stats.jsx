import { useState, useEffect, useRef } from "react";
import { personalInfo } from "../data/personalInfo";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(personalInfo.stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1600; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const newCounts = personalInfo.stats.map((stat) => {
        return Math.floor(easeProgress * stat.value);
      });

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(personalInfo.stats.map((s) => s.value));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section id="experience" ref={sectionRef} className="section stats-container">
      <div className="container">
        <div className="stats-grid">
          {personalInfo.stats.map((stat, idx) => {
            const formattedValue =
              counts[idx] < 10 ? `0${counts[idx]}` : `${counts[idx]}`;

            return (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-number">
                  {formattedValue}
                  <span style={{ fontSize: "0.65em", color: "var(--accent-cyan)" }}>
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-desc">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
