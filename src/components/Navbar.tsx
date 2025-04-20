import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-skillflow-purple to-skillflow-purple-dark bg-clip-text text-transparent">
            SkillFlow
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-medium hover:text-skillflow-purple transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("explore")}
            className="text-sm font-medium hover:text-skillflow-purple transition-colors"
          >
            Explore Careers
          </button>
          <button 
            onClick={() => scrollToSection("colleges")}
            className="text-sm font-medium hover:text-skillflow-purple transition-colors"
          >
            Colleges
          </button>
          <button 
            onClick={() => scrollToSection("internships")}
            className="text-sm font-medium hover:text-skillflow-purple transition-colors"
          >
            Internships
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
