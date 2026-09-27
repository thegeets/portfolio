import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import GPLogo from "./GPLogo";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "education", "experience", "projects", "certificates", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-25% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo with GP Monogram */}
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Geeta Poudel Home"
        >
          <GPLogo size={34} showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                    {isActive && <span className="active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="navbar-actions">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn btn-nav-cta"
            aria-label="Contact Geeta Poudel"
          >
            <Mail size={14} />
            <span>Get in Touch</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "drawer-open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />

        <div className="mobile-menu-panel">
          <div className="mobile-panel-header">
            <div className="navbar-brand">
              <GPLogo size={32} showText={true} />
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.href} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="mobile-active-indicator" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-panel-footer">
            <a
              href="#contact"
              className="btn btn-primary w-full justify-center"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
