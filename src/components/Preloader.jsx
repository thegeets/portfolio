import { useState, useEffect } from "react";
import { personalInfo } from "../data/personalInfo";

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 1 to 100
    const duration = 1800; // total animation time in ms
    const intervalTime = 18;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.floor(next);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small pause at 100% before smooth fade out
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
      }, 350);

      const finishTimeout = setTimeout(() => {
        if (onFinish) onFinish();
      }, 1150);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(finishTimeout);
      };
    }
  }, [progress, onFinish]);

  return (
    <div className={`preloader-container ${isFading ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-brand">
          <div className="preloader-logo-badge">GP</div>
          <span className="preloader-brand-name">{personalInfo.shortName}</span>
        </div>

        <div className="preloader-counter">
          <span>{progress}</span>
          <span className="preloader-counter-percent">%</span>
        </div>

        <div className="preloader-bar-bg">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="preloader-status">
          {progress < 40
            ? "INITIALIZING PORTFOLIO"
            : progress < 85
            ? "LOADING INTERFACES & PROJECTS"
            : "READY"}
        </p>
      </div>
    </div>
  );
}
