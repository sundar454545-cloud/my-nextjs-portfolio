import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CaseStudy from "../components/CaseStudy.jsx";
import AmazonDemo from "./AmazonDemo";

const ThemeStyle = () => (
  <style>{`
    :root {
      --background: 240 10% 99%;
      --foreground: 240 10% 3.9%;
      --card: 240 10% 99%;
      --card-foreground: 240 10% 3.9%;
      --popover: 240 10% 99%;
      --popover-foreground: 240 10% 3.9%;
      --primary: 221 83% 53%;
      --primary-foreground: 240 10% 99%;
      --secondary: 240 5% 96%;
      --secondary-foreground: 240 10% 3.9%;
      --muted: 240 5% 96%;
      --muted-foreground: 240 4% 46%;
      --accent: 262 83% 58%;
      --accent-foreground: 240 10% 99%;
      --destructive: 0 84% 60%;
      --destructive-foreground: 240 10% 99%;
      --border: 240 6% 90%;
      --input: 240 6% 90%;
      --ring: 221 83% 53%;
    }

    .dark {
      --background: 240 10% 3.9%;
      --foreground: 240 10% 99%;
      --card: 240 10% 3.9%;
      --card-foreground: 240 10% 99%;
      --popover: 240 10% 3.9%;
      --popover-foreground: 240 10% 99%;
      --primary: 217 91% 60%;
      --primary-foreground: 240 10% 3.9%;
      --secondary: 240 4% 12%;
      --secondary-foreground: 240 10% 99%;
      --muted: 240 4% 12%;
      --muted-foreground: 240 5% 64%;
      --accent: 262 83% 58%;
      --accent-foreground: 240 10% 99%;
      --destructive: 0 63% 31%;
      --destructive-foreground: 240 10% 99%;
      --border: 240 4% 12%;
      --input: 240 4% 12%;
      --ring: 217 91% 60%;
    }
  `}</style>
);

export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [view, setView] = useState("portfolio"); // portfolio, caseStudy, demo

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Auto-scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const renderContent = () => {
    switch (view) {
      case "caseStudy":
        return <CaseStudy setView={setView} />;
      case "demo":
        return (
          <AmazonDemo
            setView={setView}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        );
      case "portfolio":
      default:
        return (
          <>
            <main>
              <div id="home">
                <Hero />
              </div>
              <div id="about" className="scroll-mt-20">
                <About />
              </div>
              <div id="skills" className="scroll-mt-20">
                <Skills />
              </div>
              <div id="experience" className="scroll-mt-20">
                <Experience />
              </div>
              <div id="projects" className="scroll-mt-20">
                <Projects />
              </div>
              <div id="contact" className="scroll-mt-20">
                <Contact />
              </div>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeStyle />
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        view={view}
        setView={setView}
      />
      {renderContent()}
    </div>
  );
}
