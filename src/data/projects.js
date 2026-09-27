/**
 * Projects Data Configuration
 * Centralized project showcase configuration for Geeta Poudel.
 * 
 * To add or edit projects later, simply modify this file.
 */

import citizenPortalImg from "../assets/projects/citizen-portal.png";
import geetsBeautyImg from "../assets/projects/geets-beauty.png";

export const projectsData = [
  {
    id: "citizen-issue-reporting-portal",
    title: "Citizen Issue Reporting Portal",
    subtitle: "Municipal Grievance & Issue Tracking Platform",
    description: "A full-stack municipal platform where citizens can report issues, track submitted complaints, and administrators can manage and update issue reports.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://client-geets.vercel.app/",
    githubUrl: "https://github.com/thegeets/Citizen-Issue-Reporting-Portal",
    image: citizenPortalImg,
    featured: true,
    highlights: [
      "Citizen issue submission with status tracking",
      "Admin dashboard for reviewing and resolving reports",
      "RESTful API endpoints with MongoDB persistence"
    ]
  },
  {
    id: "geets-beauty-world",
    title: "Geets Beauty World",
    subtitle: "Full-Stack Beauty E-Commerce Store",
    description: "A full-stack beauty e-commerce application with product browsing, product details, cart, authentication, checkout, payment options, and backend API integration.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://geets-beauty-world.vercel.app/",
    githubUrl: "https://github.com/thegeets/geets-beauty-world",
    image: geetsBeautyImg,
    featured: true,
    highlights: [
      "Dynamic catalog browsing and category filtering",
      "Cart state management and secure checkout flow",
      "User authentication and order data modeling"
    ]
  }
];
