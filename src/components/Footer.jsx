import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "./Icons";
import { personalInfo } from "../data/personalInfo";
import GPLogo from "./GPLogo";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleFooterNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow" />

      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <GPLogo size={36} showText={true} />
            </div>
            <p className="footer-role">
              {personalInfo.role}
            </p>
            <p className="footer-tagline">
              Building responsive, user-focused web applications with React and modern JavaScript across the MERN stack.
            </p>
            <div className="footer-social-links">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.emailLink}
                className="footer-social-btn"
                aria-label="Email Geeta Poudel"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleFooterNav(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Area Column */}
          <div className="footer-focus-col">
            <h4 className="footer-heading">Focus & Stack</h4>
            <ul className="footer-stack-list">
              <li>React.js & Component Architecture</li>
              <li>Modern JavaScript (ES6+) & Clean CSS</li>
              <li>Full-Stack MERN Application Building</li>
              <li>RESTful API Endpoints & Node / Express</li>
              <li>MongoDB Schemas & Persistence</li>
              <li>Git Version Control & Vercel Deployments</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; 2026 Geeta Poudel. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
