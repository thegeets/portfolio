import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { statisticsData } from "../data/statistics";
import { FolderGit2, Cpu, Sparkles, Flame } from "lucide-react";

const statIcons = [FolderGit2, Cpu, Flame, Sparkles];

function CounterItem({ stat, index }) {
  const [count, setCount] = useState(0);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1400;
    const stepTime = Math.max(25, Math.floor(duration / (end || 1)));

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const displayCount = count < 10 && stat.prefix ? `${stat.prefix}${count}` : `${count}`;
  const IconComponent = statIcons[index % statIcons.length];

  return (
    <motion.div
      ref={itemRef}
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="stat-card-top">
        <div className="stat-icon-wrapper">
          <IconComponent size={20} className="stat-icon" />
        </div>
        <div className="stat-number-wrapper">
          <span className="stat-number">{displayCount}</span>
          <span className="stat-suffix">{stat.suffix}</span>
        </div>
      </div>
      <h3 className="stat-label">{stat.label}</h3>
      <p className="stat-description">{stat.description}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statisticsData.map((stat, idx) => (
            <CounterItem key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
