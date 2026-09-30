import { useState } from "react";
import Loader from "./components/Loader";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="portfolio-app">
      {/* 0% to 100% Smooth Animated Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Nabraj-Inspired Ambient Visual Background Effects */}
      <BackgroundEffects />

      {/* Clean Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections: HOME -> ABOUT -> SKILLS -> PROJECTS -> CERTIFICATES -> EDUCATION -> CONTACT */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
