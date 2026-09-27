import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Terminal, Code2, FolderGit2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "../components/Icons";
import { personalInfo } from "../data/personalInfo";
import Button from "../components/Button";
import profilePhoto from "../assets/geeta-profile.jpg";

const ROLES = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Developer",
  "Web Developer"
];

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion for accessibility
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(ROLES[0]);
      return;
    }

    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word for readability
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText === "") {
      // Fully deleted: switch to next role after slight pause
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      timer = setTimeout(() => {}, 250);
    } else {
      // Smooth typing and backspacing
      const speed = isDeleting ? 38 : 75;
      timer = setTimeout(() => {
        const nextLength = isDeleting ? displayText.length - 1 : displayText.length + 1;
        setDisplayText(currentRole.substring(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Typography & Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Availability Status Line */}
          <div className="hero-status-pill">
            <span className="status-live-dot" />
            <span className="status-text">
              Open to Internship &amp; Junior Developer Opportunities
            </span>
          </div>

          {/* Main Large Heading */}
          <h1 className="hero-main-heading">Geeta Poudel</h1>

          {/* Smooth Typewriter Animated Role Title */}
          <div 
            className="hero-role-wrapper" 
            aria-label={`I'm a ${displayText || ROLES[0]}`}
          >
            <span className="hero-role-prefix">I'm a</span>
            <span className="hero-animated-role">
              {displayText}
              <span className="typing-cursor" aria-hidden="true" />
            </span>
          </div>

          {/* Readable, Compact Description */}
          <p className="hero-description">
            I build responsive, user-focused web applications with React and modern JavaScript. I'm continuously expanding my skills across the MERN stack.
          </p>

          {/* Clean CTA Buttons */}
          <div className="hero-cta-group">
            <Button
              as="a"
              href="#projects"
              onClick={scrollToProjects}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="btn-hero-primary"
            >
              View Projects
            </Button>

            <Button
              as="a"
              href="#contact"
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              icon={Mail}
              iconPosition="left"
              className="btn-hero-secondary"
            >
              Get in Touch
            </Button>
          </div>

          {/* Subtle Developer Social Profiles */}
          <div className="hero-socials" aria-label="Social Profiles">
            <span className="socials-label">Connect:</span>
            <div className="socials-icons-list">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.emailLink}
                className="social-icon-btn"
                aria-label="Send Email to Geeta Poudel"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Unified Visual Stack (Floating Code Card + Profile Photo + 3+ Projects Stat) */}
        <motion.div
          className="hero-visual-column"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-visual-stack">
            {/* Ambient backlight glow */}
            <div className="hero-stack-glow" aria-hidden="true" />

            {/* 1. Floating Code Editor Card (Positioned Above / Overlapping Upper Photo) */}
            <div className="hero-code-card">
              <div className="code-card-header">
                <div className="card-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="card-file-tab">
                  <Terminal size={12} className="tab-terminal-icon" />
                  <span className="tab-filename">developer.ts</span>
                </div>
                <div className="card-lang-tag">
                  <Code2 size={11} />
                  <span>TS</span>
                </div>
              </div>

              <div className="code-card-content">
                <div className="code-line">
                  <span className="c-kw">const</span> <span className="c-var">dev</span> <span className="c-punct">=</span> &#123;
                </div>
                <div className="code-line code-indent">
                  <span className="c-prop">stack</span><span className="c-punct">:</span> [<span className="c-str">"React"</span><span className="c-punct">,</span> <span className="c-str">"Node.js"</span><span className="c-punct">,</span> <span className="c-str">"MongoDB"</span>]<span className="c-punct">,</span>
                </div>
                <div className="code-line code-indent">
                  <span className="c-prop">focus</span><span className="c-punct">:</span> <span className="c-str">"clean, user-focused interfaces"</span><span className="c-punct">,</span>
                </div>
                <div className="code-line">
                  &#125;<span className="c-punct">;</span>
                </div>
              </div>
            </div>

            {/* 2. Main Profile Photo Frame (Positioned Below Code Card) */}
            <div className="hero-photo-wrapper">
              <div className="hero-photo-frame">
                {!photoError ? (
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="hero-profile-image"
                    onError={() => setPhotoError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="hero-photo-fallback">
                    <span className="photo-initials">GP</span>
                  </div>
                )}
              </div>

              {/* 3. Stat Badge (3+ Projects Built) */}
              <div className="hero-stat-badge">
                <div className="stat-badge-icon">
                  <FolderGit2 size={16} />
                </div>
                <div className="stat-badge-info">
                  <span className="stat-badge-val">3+</span>
                  <span className="stat-badge-txt">Projects Built</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
