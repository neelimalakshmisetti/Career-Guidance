import React, { useState } from "react";
import { ChevronDown, Filter, Briefcase, TrendingUp, GraduationCap, DollarSign } from "lucide-react";

const careerData = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Design, develop, and maintain software systems and applications.",
    salaryRange: "₹6-50 lakhs per annum",
    education: "B.Tech/B.E. in Computer Science or related field",
    timeToLearn: "4-6 years",
    industry: "Technology",
    skills: ["Programming", "Data Structures", "Algorithms", "System Design", "Problem Solving"],
    growth: ["Junior Developer", "Software Engineer", "Senior Engineer", "Tech Lead", "Architect"],
    tools: ["VS Code", "Git", "Docker", "AWS/Azure/GCP", "JIRA"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions.",
    salaryRange: "₹8-40 lakhs per annum",
    education: "Masters or PhD in Statistics, Computer Science, or related field",
    timeToLearn: "5-8 years",
    industry: "Technology, Finance, Healthcare",
    skills: ["Machine Learning", "Statistics", "Python/R", "Data Visualization", "SQL"],
    growth: ["Data Analyst", "Junior Data Scientist", "Data Scientist", "Lead Data Scientist", "Chief Data Officer"],
    tools: ["Python", "R", "Tableau", "TensorFlow", "SQL Databases"]
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    description: "Create intuitive, aesthetically pleasing user interfaces for digital products.",
    salaryRange: "₹5-30 lakhs per annum",
    education: "Bachelor's in Design, Human-Computer Interaction or related field",
    timeToLearn: "3-5 years",
    industry: "Technology, Design, Media",
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "User Testing"],
    growth: ["UI Designer", "UX Designer", "Senior Designer", "Design Lead", "Design Director"],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Adobe Creative Suite"]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Define product vision and lead cross-functional teams to deliver successful products.",
    salaryRange: "₹10-60 lakhs per annum",
    education: "Bachelor's or MBA in Business, Engineering or related field",
    timeToLearn: "5-7 years",
    industry: "Technology, E-commerce, Finance",
    skills: ["Strategic Thinking", "Communication", "Market Research", "Prioritization", "Leadership"],
    growth: ["Associate PM", "Product Manager", "Senior PM", "Director of Product", "VP of Product"],
    tools: ["JIRA", "Asana", "Google Analytics", "Mixpanel", "Slack"]
  },
  {
    id: "medical-officer",
    title: "Medical Officer",
    description: "Practice medicine in hospitals, clinics, and healthcare facilities.",
    salaryRange: "₹5-40 lakhs per annum",
    education: "MBBS, MD/MS, DM/M.Ch",
    timeToLearn: "5.5-11 years",
    industry: "Healthcare",
    skills: ["Clinical Skills", "Patient Care", "Medical Knowledge", "Emergency Medicine", "Research"],
    growth: ["Junior Resident", "Senior Resident", "Specialist", "Senior Consultant", "Head of Department"],
    tools: ["Medical Equipment", "EMR Systems", "Diagnostic Tools", "Research Software", "Medical Imaging"]
  },
  {
    id: "fashion-designer",
    title: "Fashion Designer",
    description: "Create and design clothing, accessories, and fashion collections.",
    salaryRange: "₹3-30 lakhs per annum",
    education: "B.Des/B.F.Tech in Fashion Design",
    timeToLearn: "4 years",
    industry: "Fashion & Design",
    skills: ["Design", "Sketching", "Pattern Making", "Textile Knowledge", "CAD"],
    growth: ["Junior Designer", "Designer", "Senior Designer", "Design Head", "Creative Director"],
    tools: ["Adobe Illustrator", "CLO 3D", "Photoshop", "CAD Software", "Trend Forecasting Tools"]
  },
  {
    id: "civil-servant",
    title: "Civil Servant (IAS/IPS)",
    description: "Serve in administrative and policy-making roles in government.",
    salaryRange: "₹6-15 lakhs per annum + benefits",
    education: "Any Bachelor's degree + UPSC CSE",
    timeToLearn: "3-5 years preparation",
    industry: "Government",
    skills: ["Administration", "Policy Making", "Leadership", "Public Management", "Law"],
    growth: ["SDM/ASP", "DM/SP", "Commissioner", "Secretary", "Cabinet Secretary"],
    tools: ["Government Systems", "Policy Tools", "Administrative Software", "MS Office", "GIS"]
  },
  {
    id: "research-scientist",
    title: "Research Scientist (GATE)",
    description: "Conduct research in engineering and technology domains.",
    salaryRange: "₹5-25 lakhs per annum",
    education: "B.Tech + GATE + M.Tech/PhD",
    timeToLearn: "6-8 years",
    industry: "Research & Development",
    skills: ["Research", "Data Analysis", "Technical Writing", "Project Management", "Lab Skills"],
    growth: ["Research Assistant", "Scientist B", "Scientist C", "Principal Scientist", "Director"],
    tools: ["Research Software", "Lab Equipment", "Data Analysis Tools", "Publication Tools", "Simulation Software"]
  }
];

const CareerExploreSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    industry: "",
    salary: "",
    education: "",
    timeToLearn: ""
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleCard = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredCareers = careerData.filter(career => {
    if (filters.industry && !career.industry.toLowerCase().includes(filters.industry.toLowerCase())) return false;
    if (filters.education && !career.education.toLowerCase().includes(filters.education.toLowerCase())) return false;
    if (filters.timeToLearn && !career.timeToLearn.toLowerCase().includes(filters.timeToLearn.toLowerCase())) return false;
    if (filters.salary) {
      // Simplified salary filtering for demo
      if (filters.salary === "low" && !career.salaryRange.includes("5-")) return false;
      if (filters.salary === "medium" && !career.salaryRange.includes("8-")) return false;
      if (filters.salary === "high" && !career.salaryRange.includes("10-")) return false;
    }
    return true;
  });

  return (
    <section className="py-16" id="explore">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Explore <span className="text-skillflow-purple">Career Paths</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg max-w-3xl mx-auto">
            Discover different career options, requirements, growth trajectories and compensation insights.
          </p>
        </div>

        <div className="mb-8">
          <button 
            onClick={() => setShowFilters(!showFilters)} 
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <Filter className="h-4 w-4 text-skillflow-purple" />
            <span className="text-sm font-medium">Filter Careers</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          {showFilters && (
            <div className="mt-4 p-6 bg-white rounded-lg border border-gray-200 shadow-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={filters.industry}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
                  >
                    <option value="">All Industries</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="design">Design</option>
                    <option value="media">Media</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="salary" className="text-sm font-medium">Salary Range</label>
                  <select
                    id="salary"
                    name="salary"
                    value={filters.salary}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
                  >
                    <option value="">All Ranges</option>
                    <option value="low">Entry Level (₹5-10 lakhs)</option>
                    <option value="medium">Mid Level (₹8-25 lakhs)</option>
                    <option value="high">Senior Level (₹10+ lakhs)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="education" className="text-sm font-medium">Education Level</label>
                  <select
                    id="education"
                    name="education"
                    value={filters.education}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
                  >
                    <option value="">All Education Levels</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="timeToLearn" className="text-sm font-medium">Time to Learn</label>
                  <select
                    id="timeToLearn"
                    name="timeToLearn"
                    value={filters.timeToLearn}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
                  >
                    <option value="">Any Duration</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredCareers.map((career) => (
            <div 
              key={career.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(career.id)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-skillflow-purple-light/30 p-2 rounded-lg">
                      <Briefcase className="h-6 w-6 text-skillflow-purple" />
                    </div>
                    <h3 className="text-xl font-bold">{career.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-skillflow-purple" />
                      <div>
                        <p className="text-xs text-gray-500">Salary Range</p>
                        <p className="text-sm font-medium">{career.salaryRange}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-skillflow-purple" />
                      <div>
                        <p className="text-xs text-gray-500">Education</p>
                        <p className="text-sm font-medium truncate max-w-[200px]">{career.education}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-skillflow-purple" />
                      <div>
                        <p className="text-xs text-gray-500">Time to Learn</p>
                        <p className="text-sm font-medium">{career.timeToLearn}</p>
                      </div>
                    </div>
                  </div>
                  
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform ${expandedCard === career.id ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                {expandedCard === career.id && (
                  <div className="mt-6 pt-6 border-t animate-fade-in">
                    <p className="text-gray-700 mb-6">{career.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, i) => (
                            <span key={i} className="bg-skillflow-purple-light/20 text-skillflow-purple-dark text-sm px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {career.tools.map((tool, i) => (
                            <span key={i} className="bg-skillflow-blue/20 text-blue-600 text-sm px-3 py-1 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3">Career Growth Path</h4>
                      <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                        {career.growth.map((position, i) => (
                          <React.Fragment key={i}>
                            <div className="bg-white border border-skillflow-purple text-skillflow-purple px-3 py-2 rounded text-sm">
                              {position}
                            </div>
                            {i < career.growth.length - 1 && (
                              <ArrowConnector />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      <button 
                        onClick={() => window.open('https://guided-growth-mentorship.windsurf.build/', '_blank')}
                        className="bg-skillflow-purple hover:bg-skillflow-purple-dark text-white px-4 py-2 rounded-md shadow transition-colors hover-scale"
                      >
                        Peer2Peer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white border border-skillflow-purple text-skillflow-purple hover:bg-skillflow-purple/10 font-medium rounded-md px-6 py-3 shadow-sm transition-colors hover-scale">
            Load More Career Options
          </button>
        </div>
      </div>
    </section>
  );
};

const ArrowConnector = () => (
  <div className="flex-shrink-0 text-skillflow-purple mx-1">
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

export default CareerExploreSection;
