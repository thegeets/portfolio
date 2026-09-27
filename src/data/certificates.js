/**
 * Certificates Data Configuration
 * Centralized certificate repository for Geeta Poudel.
 * 
 * To add or update certificates, simply modify or add objects below:
 * - title: Name of the certificate
 * - issuer: Issuing institution or platform
 * - date: Completion date/year (optional)
 * - image: Path to preview image (optional, e.g. "/certificates/responsive-web-design.png")
 * - certificateUrl: External URL or local PDF/image path (optional, e.g. "https://..." or "/certificates/fullstack.pdf")
 */

export const certificatesData = [
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    issuer: "Full-Stack Development Certification",
    date: "",
    image: "",
    certificateUrl: "",
    skills: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: "getting-started-with-nodejs",
    title: "Getting Started with Node.js",
    issuer: "Node.js Development Certification",
    date: "",
    image: "",
    certificateUrl: "",
    skills: ["Node.js", "JavaScript", "Backend Development"]
  },
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "",
    image: "",
    certificateUrl: "https://www.freecodecamp.org/certification/thegeets/responsive-web-design",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"]
  }
];
