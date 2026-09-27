import { personalInfo } from "../data/personalInfo";
import { ArrowRight, Download, Mail, Code2, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span className="hero-greeting-pulse" />
              <span>Available for Opportunities</span>
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text-accent">{personalInfo.name}</span>
            </h1>

            <h2 className="hero-title">
              {personalInfo.role}
            </h2>

            <p className="hero-description">
              {personalInfo.tagline} Focused on crafting clean, responsive, and performance-driven user interfaces using modern web technologies.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="btn btn-secondary"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span className="hero-social-label">Connect:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="btn-icon-only"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual Card */}
          <div className="hero-visual-card">
            {/* Floating Badges */}
            <div className="floating-badge badge-float-1">
              <Code2 size={18} color="#06b6d4" />
              <span>React &amp; JavaScript</span>
            </div>

            <div className="floating-badge badge-float-2">
              <Sparkles size={18} color="#ec4899" />
              <span>MERN Stack Explorer</span>
            </div>

            {/* Code Window Box */}
            <div className="hero-code-box">
              <div className="hero-code-header">
                <div className="hero-window-dots">
                  <span className="hero-window-dot red" />
                  <span className="hero-window-dot yellow" />
                  <span className="hero-window-dot green" />
                </div>
                <div className="hero-code-tab">developerProfile.js</div>
              </div>

              <div className="hero-code-body">
                <p>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">developer</span> = &#123;
                </p>
                <p style={{ paddingLeft: "1.25rem" }}>
                  <span className="code-prop">name</span>:{" "}
                  <span className="code-string">"{personalInfo.name}"</span>,
                </p>
                <p style={{ paddingLeft: "1.25rem" }}>
                  <span className="code-prop">role</span>:{" "}
                  <span className="code-string">"Frontend &amp; MERN"</span>,
                </p>
                <p style={{ paddingLeft: "1.25rem" }}>
                  <span className="code-prop">education</span>:{" "}
                  <span className="code-string">"BSc CSIT"</span>,
                </p>
                <p style={{ paddingLeft: "1.25rem" }}>
                  <span className="code-prop">coreSkills</span>: [
                  <span className="code-string">"React"</span>,{" "}
                  <span className="code-string">"JavaScript"</span>,{" "}
                  <span className="code-string">"Node.js"</span>],
                </p>
                <p style={{ paddingLeft: "1.25rem" }}>
                  <span className="code-prop">responsive</span>:{" "}
                  <span className="code-bool">true</span>,
                </p>
                <p style={{ paddingLeft: "1.25rem" }}>
                  <span className="code-prop">lovesCleanCode</span>:{" "}
                  <span className="code-bool">true</span>
                </p>
                <p>&#125;;</p>
                <p style={{ marginTop: "0.5rem" }}>
                  <span className="code-comment">// Ready to build impactful web applications</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
