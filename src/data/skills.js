/**
 * Core Capability Stack Data
 * Technologies and tools Geeta Poudel uses to build modern, responsive web experiences.
 */

export const capabilityCategories = [
  {
    id: "frontend",
    category: "Frontend",
    tagline: "Client-Side Engineering & UI",
    skills: [
      {
        name: "React",
        percentage: 90,
        subtext: "Component Architecture & Hooks",
        icon: "Atom"
      },
      {
        name: "JavaScript (ES6+)",
        percentage: 90,
        subtext: "Modern Syntax, Async & DOM",
        icon: "Zap"
      },
      {
        name: "HTML5 & CSS3",
        percentage: 90,
        subtext: "Semantic Markup & Modern CSS",
        icon: "Layout"
      },
      {
        name: "Responsive Web Design",
        percentage: 90,
        subtext: "Mobile-First & Cross-Device UX",
        icon: "Maximize2"
      }
    ]
  },
  {
    id: "backend-database",
    category: "Backend & Database",
    tagline: "Server Architecture & Data Persistence",
    skills: [
      {
        name: "Node.js & Express",
        percentage: 80,
        subtext: "Server Middleware & Endpoints",
        icon: "Server"
      },
      {
        name: "MongoDB",
        percentage: 80,
        subtext: "NoSQL Schemas & Mongoose ODM",
        icon: "Database"
      },
      {
        name: "REST APIs",
        percentage: 80,
        subtext: "CRUD Design & Integration",
        icon: "Network"
      },
      {
        name: "SQL",
        percentage: 70,
        subtext: "Relational Queries & Schemas",
        icon: "Layers"
      }
    ]
  },
  {
    id: "tools-workflow",
    category: "Tools & Workflow",
    tagline: "Developer Environment & Productivity",
    skills: [
      {
        name: "Git & GitHub",
        percentage: 85,
        subtext: "Version Control & Repositories",
        icon: "GitBranch"
      },
      {
        name: "Vite",
        percentage: 85,
        subtext: "Fast Bundling & Dev Tooling",
        icon: "Cpu"
      },
      {
        name: "Figma",
        percentage: 75,
        subtext: "UI/UX & Wireframing",
        icon: "Palette"
      },
      {
        name: "Postman",
        percentage: 75,
        subtext: "API Testing & Verification",
        icon: "Send"
      }
    ]
  }
];

// For backward compatibility if referenced elsewhere
export const skillsData = capabilityCategories;
