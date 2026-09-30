import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Code2,
  Cpu,
  Terminal,
  Layers,
  Binary,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "../components/Icons";
import { personalInfo } from "../data/personalInfo";
import Button from "../components/Button";
import profilePhoto1 from "../assets/geeta-profile.jpg";
import profilePhoto2 from "../assets/geeta-profile-2.jpg";
import profilePhoto3 from "../assets/geeta-profile-3.jpg";

// Array of profile photos for automatic smooth cycling (Kshitiz Paudel style presentation)
const PROFILE_IMAGES = [
  {
    id: 1,
    src: profilePhoto1,
    alt: "Geeta Poudel - MERN Stack Developer",
    tag: "MERN Stack Developer",
    zoomClass: "photo-frame-portrait",
  },
  {
    id: 2,
    src: profilePhoto2,
    alt: "Geeta Poudel - Full Stack Developer",
    tag: "Full Stack Developer",
    zoomClass: "photo-frame-focus",
  },
  {
    id: 3,
    src: profilePhoto3,
    alt: "Geeta Poudel - React & Node.js Engineer",
    tag: "React & Node.js",
    zoomClass: "photo-frame-vibrant",
  },
];

const TECH_BADGES = [
  { name: "React", icon: Code2, color: "#38bdf8" },
  { name: "Node.js", icon: Terminal, color: "#22c55e" },
  { name: "Express.js", icon: Layers, color: "#a855f7" },
  { name: "MongoDB", icon: Binary, color: "#10b981" },
  { name: "JavaScript", icon: Cpu, color: "#facc15" },
  { name: "REST APIs", icon: Sparkles, color: "#38bdf8" },
];

const CYCLING_ROLES = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "JavaScript Developer",
  "Web Developer",
];

// Smooth professional typewriter effect component
function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullRole = CYCLING_ROLES[roleIndex % CYCLING_ROLES.length];
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // pause when word is fully typed
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        }, 40); // smooth backspace speed
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % CYCLING_ROLES.length);
      }
    } else {
      if (displayedText.length < currentFullRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        }, 75); // natural typing speed
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isPaused, roleIndex]);

  return (
    <h2 className="hero-primary-role hero-typewriter-role" aria-label={`Role: ${CYCLING_ROLES[roleIndex]}`}>
      <span className="typewriter-text">{displayedText}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </h2>
  );
}

export default function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoError, setPhotoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [entranceSettled, setEntranceSettled] = useState(false);

  // Initial entrance drop settlement
  useEffect(() => {
    const settleTimer = setTimeout(() => {
      setEntranceSettled(true);
    }, 1200);

    return () => clearTimeout(settleTimer);
  }, []);

  // Automatic smooth photo swapping (Image 1 -> Image 2 -> Image 3 -> loop)
  useEffect(() => {
    if (!entranceSettled || isHovered || PROFILE_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [entranceSettled, isHovered]);

  const currentImage = PROFILE_IMAGES[photoIndex] || PROFILE_IMAGES[0];

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + PROFILE_IMAGES.length) % PROFILE_IMAGES.length);
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
  };

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
        {/* LEFT COLUMN: Clean Developer Introduction */}
        <div className="hero-content">
          {/* Status Badge */}
          <motion.div
            className="hero-status-pill"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="status-live-dot" />
            <span className="status-text">
              Open to MERN Stack &amp; Full Stack Developer Roles
            </span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            className="hero-main-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm <span className="hero-name-highlight">Geeta Poudel</span>
          </motion.h1>

          {/* Primary Role with Moving Typewriter / Cycling Animation */}
          <motion.div
            className="hero-role-wrapper"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <TypewriterRole />
          </motion.div>

          {/* Natural Personal Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Building scalable, high-performance web applications across the full MERN stack — from reactive frontends to robust REST APIs and database architectures.
          </motion.p>

          {/* Core Technology Stack Pills */}
          <motion.div
            className="hero-tech-badges-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            aria-label="Core Technology Stack"
          >
            {TECH_BADGES.map((tech) => {
              const IconComp = tech.icon;
              return (
                <span key={tech.name} className="hero-tech-pill">
                  <IconComp size={13} style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </span>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
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
              Contact Me
            </Button>
          </motion.div>

          {/* Developer Social Profiles */}
          <motion.div
            className="hero-socials"
            aria-label="Social Profiles"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
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
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Profile Photo Area with Smooth Continuous Swapping Animation */}
        <div className="hero-visual-column">
          <div className="hero-photo-showcase">
            {/* Ambient backlight glow */}
            <div className="hero-photo-ambient-halo" aria-hidden="true" />

            {/* Profile Photo Motion Drop Entrance Wrapper */}
            <motion.div
              className="hero-photo-motion-wrapper"
              initial={{
                opacity: 0,
                y: -140,
                rotate: -4,
                scale: 0.92,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 14,
                mass: 1.1,
                delay: 0.15,
              }}
            >
              {/* Floating Idle Motion Container */}
              <motion.div
                className="hero-photo-float-inner"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.0,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Luminous Glow Aura & Orbit Ring */}
                <div className="hero-photo-backdrop-glow" aria-hidden="true" />
                <div className="hero-photo-orbit-ring" aria-hidden="true" />

                {/* Profile Photo Frame (Fixed dimensions to prevent layout jumps) */}
                <div className="hero-photo-frame">
                  <div className="hero-photo-inner-glass">
                    {/* Top Segmented Story-Style Progress / Indicator Bars */}
                    <div className="hero-photo-indicators" aria-label="Photo slider controls">
                      {PROFILE_IMAGES.map((img, i) => (
                        <button
                          key={img.id}
                          type="button"
                          className={`photo-indicator-bar ${i === photoIndex ? "active" : ""} ${
                            i < photoIndex ? "passed" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoIndex(i);
                          }}
                          aria-label={`Switch to photo ${i + 1}`}
                        >
                          <span className="photo-indicator-progress" />
                        </button>
                      ))}
                    </div>

                    {/* Smooth Image Transition Layer (AnimatePresence popLayout for cross-fade) */}
                    <div className="hero-photo-viewport">
                      <AnimatePresence mode="popLayout" initial={false}>
                        {!photoError && currentImage.src ? (
                          <motion.div
                            key={currentImage.id}
                            className="hero-photo-slide"
                            initial={{ opacity: 0, scale: 1.06, filter: "blur(4px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(3px)" }}
                            transition={{
                              duration: 0.85,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <img
                              src={currentImage.src}
                              alt={currentImage.alt || personalInfo.name}
                              className={`hero-profile-image ${currentImage.zoomClass || ""}`}
                              onError={() => setPhotoError(true)}
                              loading="eager"
                            />
                            {/* Subtle dark gradient overlay for bottom legibility */}
                            <div className="hero-photo-vignette" aria-hidden="true" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="fallback"
                            className="hero-photo-slide hero-photo-fallback"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <span className="photo-initials">GP</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Subtle Left/Right Navigation Arrows visible on hover */}
                    <button
                      type="button"
                      className="photo-nav-arrow photo-nav-prev"
                      onClick={handlePrevPhoto}
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      className="photo-nav-arrow photo-nav-next"
                      onClick={handleNextPhoto}
                      aria-label="Next photo"
                    >
                      <ChevronRight size={16} />
                    </button>

                    {/* Status Badge Docked at Bottom with animated tag */}
                    <div className="photo-badge-overlay">
                      <span className="badge-live-dot" />
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentImage.tag}
                          className="badge-text"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                          {currentImage.tag || "MERN Stack Dev"}
                        </motion.span>
                      </AnimatePresence>
                      <Sparkles size={12} className="badge-sparkle-icon" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
