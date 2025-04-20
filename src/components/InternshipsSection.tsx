import React from "react";

const internshipData = [
  {
    role: "Software Development",
    company: "Tech Innovators",
    duration: "3 months",
    stipend: "₹15,000 - ₹25,000",
    location: "Remote",
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    role: "Data Science",
    company: "Analytics Pro",
    duration: "6 months",
    stipend: "₹20,000 - ₹30,000",
    location: "Bangalore",
    skills: ["Python", "Machine Learning", "SQL"]
  },
  {
    role: "UI/UX Design",
    company: "Creative Solutions",
    duration: "4 months",
    stipend: "₹12,000 - ₹18,000",
    location: "Hybrid",
    skills: ["Figma", "Adobe XD", "User Research"]
  },
  {
    role: "Digital Marketing",
    company: "Growth Masters",
    duration: "3 months",
    stipend: "₹10,000 - ₹15,000",
    location: "Remote",
    skills: ["SEO", "Social Media", "Content Writing"]
  }
];

const InternshipsSection = () => {
  return (
    <section className="py-16 bg-skillflow-gray-light/50" id="internships">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Available Internships
          </h2>
          <p className="mt-4 text-gray-500">
            Kickstart your career with these exciting internship opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {internshipData.map((internship, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-skillflow-purple">
                    {internship.role}
                  </h3>
                  <p className="text-gray-600">{internship.company}</p>
                </div>
                <span className="bg-skillflow-purple/10 text-skillflow-purple px-3 py-1 rounded-full text-sm">
                  {internship.duration}
                </span>
              </div>
              
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Stipend:</span> {internship.stipend}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Location:</span> {internship.location}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {internship.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://internshala.com', '_blank')}
                className="mt-6 w-full bg-skillflow-purple hover:bg-skillflow-purple-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
