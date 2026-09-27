import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GPLogo from "./GPLogo";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6s smooth loading

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100) + 1);

      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="preloader-content">
            {/* Ambient Background Glow */}
            <div className="preloader-glow" />

            {/* Brand / GP Monogram */}
            <motion.div
              className="preloader-brand"
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <GPLogo size={58} showText={true} className="preloader-gp-logo" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="preloader-subtext"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Frontend & MERN Stack Developer
            </motion.p>

            {/* Percentage Bar & Counter */}
            <div className="preloader-progress-container">
              <div className="preloader-progress-track">
                <motion.div
                  className="preloader-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="preloader-counter">
                <span className="preloader-percentage">{progress}</span>
                <span className="preloader-percent-symbol">%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
