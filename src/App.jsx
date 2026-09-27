import { useState } from "react";
import Loader from "./components/Loader";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="portfolio-app">
      {/* 0% to 100% Smooth Animated Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Ambient Visual Background Effects */}
      <BackgroundEffects />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
