import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, FileDown, Sparkles, Terminal, Code2, FolderGit2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "../components/Icons";
import { personalInfo } from "../data/personalInfo";
import Button from "../components/Button";
import profilePhoto from "../assets/geeta-profile.jpg";
import cvFile from "../assets/Geeta-Poudel-CV.pdf";

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  // Dynamic Typing Animation State
  const roles = personalInfo.typingRoles || [
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Full-Stack Developer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && currentText === currentRole) {
      // Pause at full word for readability
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentText === "") {
      // Fully deleted: switch to next role after slight pause
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timeout = setTimeout(() => {}, 350);
    } else {
      // Typing or deleting next character
      const speed = isDeleting ? 40 : 85;
      timeout = setTimeout(() => {
        const nextLength = isDeleting ? currentText.length - 1 : currentText.length + 1;
        setCurrentText(currentRole.substring(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex, roles]);

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
        {/* Left Column: Hero Content & Typography */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Small Status Line */}
          <div className="hero-status-pill">
            <span className="status-live-dot" />
            <span className="status-text">{personalInfo.status}</span>
          </div>

          {/* Dominant Main Heading */}
          <h1 className="hero-main-heading">
            {personalInfo.name}
          </h1>

          {/* Dynamic Typing Subtitle Line */}
          <div className="hero-typing-container" aria-label={`I'm a ${currentText}`}>
            <span className="typing-prefix">I'm a</span>{" "}
            <span className="typing-dynamic-role">
              {currentText}
              <span className="typing-cursor" aria-hidden="true">|</span>
            </span>
          </div>

          {/* Controlled Paragraph Description */}
          <p className="hero-description">
            {personalInfo.hero.tagline}
          </p>

          {/* Premium CTA Buttons Group */}
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
              Get In Touch
            </Button>

            <Button
              as="a"
              href={cvFile || `${import.meta.env.BASE_URL}Geeta-Poudel-CV.pdf`}
              download="Geeta-Poudel-CV.pdf"
              variant="outline"
              size="lg"
              icon={FileDown}
              iconPosition="left"
              className="btn-hero-cv"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links Bar */}
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

        {/* Right Column: Profile Visual, Code Card & Mini Metric Card */}
        <motion.div
          className="hero-visual-column"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-visual-stack">
            {/* Ambient Accent Glow behind visual card */}
            <div className="hero-accent-glow" aria-hidden="true" />

            {/* Profile Card Frame */}
            <div className="profile-card-wrapper">
              <div className="photo-glow-effect" />
              <div className="photo-frame">
                {!photoError ? (
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="profile-photo-img"
                    onError={() => setPhotoError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="profile-fallback-avatar">
                    <span className="avatar-initials">GP</span>
                    <span className="avatar-name">{personalInfo.name}</span>
                    <span className="avatar-role">Frontend & MERN</span>
                  </div>
                )}

                {/* Floating Tech Pill 1 */}
                <div className="floating-badge badge-react">
                  <span className="floating-badge-dot" />
                  <span>React</span>
                </div>

                {/* Floating Tech Pill 2 */}
                <div className="floating-badge badge-mern">
                  <span className="floating-badge-dot dot-accent" />
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            {/* Developer Code Card */}
            <div className="hero-code-card">
              <div className="code-card-header">
                <div className="code-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="code-tab">
                  <Terminal size={13} className="tab-icon" />
                  <span>developer.ts</span>
                </div>
                <div className="code-lang-indicator">
                  <Code2 size={13} />
                  <span>TypeScript</span>
                </div>
              </div>

              <div className="code-card-body">
                <div className="code-lines">
                  <div className="code-line">
                    <span className="line-num">1</span>
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-var">developer</span> = &#123;
                  </div>
                  <div className="code-line">
                    <span className="line-num">2</span>
                    &nbsp;&nbsp;<span className="syntax-prop">name</span>:{" "}
                    <span className="syntax-string">"Geeta"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-num">3</span>
                    &nbsp;&nbsp;<span className="syntax-prop">stack</span>: [
                    <span className="syntax-string">"React"</span>,{" "}
                    <span className="syntax-string">"Node"</span>],
                  </div>
                  <div className="code-line">
                    <span className="line-num">4</span>
                    &nbsp;&nbsp;<span className="syntax-prop">focus</span>:{" "}
                    <span className="syntax-string">"clean & responsive UI"</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-num">5</span>
                    &#125;;
                  </div>
                </div>
              </div>
            </div>

            {/* Honest Experience / Mini Metric Card */}
            <div className="hero-mini-stat-card">
              <div className="stat-card-icon-box">
                <FolderGit2 size={18} className="text-accent" />
              </div>
              <div className="stat-card-info">
                <div className="stat-card-number">3+ Major Projects</div>
                <div className="stat-card-desc">React & MERN Stack Built</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
