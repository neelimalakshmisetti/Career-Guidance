import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-skillflow-purple to-skillflow-purple-dark bg-clip-text text-transparent">
                  SkillFlow
                </span>
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              SkillFlow helps students and professionals create personalized career roadmaps based on their education, interests, and goals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("explore")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Explore Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("colleges")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Colleges & Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("explore")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Roadmap Builder
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("explore")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Career Guides
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("colleges")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Scholarships Database
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("explore")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Exam Preparation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("explore")}
                  className="text-sm text-gray-500 hover:text-skillflow-purple transition-colors"
                >
                  Career Blogs
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">
                contact@skillflow.edu
              </li>
              <li className="text-sm text-gray-500">
                +91 98765 43210
              </li>
              <li className="text-sm text-gray-500">
                Career Tower, Education Street, Knowledge City - 400001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 SkillFlow. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-skillflow-purple transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.015-.42-.034-.628.961-.689 1.8-1.56 2.46-2.548z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-skillflow-purple transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-skillflow-purple transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-skillflow-purple transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
