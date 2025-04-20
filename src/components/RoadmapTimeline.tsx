import React from "react";

interface RoadmapTimelineProps {
  stage: string;
  stream: string;
  interest: string;
  internalChoice: string | null;
  location: {
    city: string;
    state: string;
  };
  budget: {
    maxAmount: string;
    studyMode: string;
  };
}

type TimelineItem = {
  year: string;
  title: string;
  courses: string[];
  certifications: string[];
  projects: string[];
  skills: string[];
};

const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ 
  stage, 
  stream, 
  interest,
  internalChoice,
  location,
  budget 
}) => {
  const roadmapData: TimelineItem[] = generateRoadmapData(stage, stream, interest);

  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Your Personalized Career Roadmap</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          This timeline shows the recommended path for your selected education stage, stream, and area of interest.
        </p>
      </div>

      <div className="relative">
        <div className="timeline-connector"></div>
        
        {roadmapData.map((item, index) => (
          <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="timeline-dot">{index + 1}</div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="bg-skillflow-purple text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-3">
                {item.year}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-skillflow-purple">Courses & Learning</h4>
                  <ul className="space-y-1">
                    {item.courses.map((course, i) => (
                      <li key={i} className="text-sm">• {course}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-skillflow-purple">Certifications & Exams</h4>
                  <ul className="space-y-1">
                    {item.certifications.map((cert, i) => (
                      <li key={i} className="text-sm">• {cert}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-skillflow-purple">Projects & Experience</h4>
                  <ul className="space-y-1">
                    {item.projects.map((project, i) => (
                      <li key={i} className="text-sm">• {project}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-skillflow-purple">Skills to Develop</h4>
                  <ul className="space-y-1">
                    {item.skills.map((skill, i) => (
                      <li key={i} className="text-sm">• {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
        <button className="px-6 py-2 bg-skillflow-purple text-white rounded-md shadow hover:bg-skillflow-purple-dark transition-colors hover-scale">
          Save Roadmap
        </button>
        <button className="px-6 py-2 border border-skillflow-purple text-skillflow-purple rounded-md hover:bg-skillflow-purple/10 transition-colors hover-scale">
          Download as PDF
        </button>
      </div>
    </div>
  );
};

function generateRoadmapData(stage: string, stream: string, interest: string): TimelineItem[] {
  if (stage === "class-12" && stream === "engineering" && interest === "Computer Science") {
    return [
      {
        year: "Year 1 (B.Tech)",
        title: "Foundation & Core Concepts",
        courses: [
          "Programming Fundamentals (C/C++/Java)",
          "Computer Organization",
          "Digital Logic Design",
          "Mathematics for Computer Science"
        ],
        certifications: [
          "Microsoft Technology Associate",
          "Oracle Certified Associate Java",
          "Programming competition participation"
        ],
        projects: [
          "Simple calculator application",
          "Library management system",
          "Join programming club/society"
        ],
        skills: [
          "Problem-solving",
          "Algorithmic thinking",
          "Technical communication",
          "Version control basics (Git)"
        ]
      },
      {
        year: "Year 2 (B.Tech)",
        title: "Advanced Programming & Systems",
        courses: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Database Management Systems",
          "Object-Oriented Programming"
        ],
        certifications: [
          "Data Structures specialization",
          "AWS Cloud Practitioner",
          "Hackathon participation"
        ],
        projects: [
          "E-commerce website prototype",
          "File system implementation",
          "Database design project"
        ],
        skills: [
          "SQL & database design",
          "System architecture",
          "Critical thinking",
          "Team collaboration"
        ]
      },
      {
        year: "Year 3 (B.Tech)",
        title: "Specialization & Internship",
        courses: [
          "Computer Networks",
          "Software Engineering",
          "Web Development",
          "Artificial Intelligence basics"
        ],
        certifications: [
          "Full Stack Development certification",
          "Network+ or CCNA",
          "Professional resume preparation"
        ],
        projects: [
          "Full-stack web application",
          "Summer internship at tech company",
          "Open-source contribution"
        ],
        skills: [
          "Frontend & backend development",
          "Software development lifecycle",
          "Professional communication",
          "Time management"
        ]
      },
      {
        year: "Year 4 (B.Tech)",
        title: "Capstone & Career Preparation",
        courses: [
          "Cloud Computing",
          "Machine Learning",
          "Information Security",
          "Electives in area of interest"
        ],
        certifications: [
          "Cloud certification (AWS/Azure/GCP)",
          "Specialized tech certification",
          "Interview preparation courses"
        ],
        projects: [
          "Capstone project",
          "Industry-sponsored project",
          "Professional portfolio"
        ],
        skills: [
          "Project management",
          "Advanced problem-solving",
          "Job interview skills",
          "Leadership"
        ]
      },
      {
        year: "Post-Graduation",
        title: "Career Launch & Growth",
        courses: [
          "Continuous learning in specialized domain",
          "Professional development courses",
          "Advanced algorithms (optional)",
          "System design"
        ],
        certifications: [
          "Professional Engineer certification",
          "Specialized technical certifications",
          "Management certifications (optional)"
        ],
        projects: [
          "Industry role as Software Engineer",
          "Personal tech projects/blog",
          "Mentoring junior developers"
        ],
        skills: [
          "System design & architecture",
          "Advanced coding practices",
          "Mentorship & leadership",
          "Continuous learning mindset"
        ]
      }
    ];
  }
  
  return [
    {
      year: "Year 1",
      title: "Foundation Building",
      courses: [
        "Core subject fundamentals",
        "Introduction to specialization",
        "General education requirements",
        "Basic technical skills"
      ],
      certifications: [
        "Entry-level certification",
        "Fundamentals exam",
        "Online course certificates"
      ],
      projects: [
        "Beginner projects",
        "Joining relevant clubs/societies",
        "Online portfolio setup"
      ],
      skills: [
        "Communication skills",
        "Time management",
        "Basic technical skills",
        "Research methods"
      ]
    },
    {
      year: "Year 2",
      title: "Knowledge Expansion",
      courses: [
        "Intermediate specialized courses",
        "Related interdisciplinary subjects",
        "Professional writing",
        "Technical skills development"
      ],
      certifications: [
        "Intermediate level certification",
        "Professional skills verification",
        "Industry-specific training"
      ],
      projects: [
        "Team-based projects",
        "Competition participation",
        "Volunteer experience in field"
      ],
      skills: [
        "Collaboration",
        "Problem-solving",
        "Technical proficiency",
        "Presentation skills"
      ]
    },
    {
      year: "Year 3",
      title: "Specialization & Experience",
      courses: [
        "Advanced specialized courses",
        "Industry-focused electives",
        "Professional development",
        "Internship preparation"
      ],
      certifications: [
        "Professional certification",
        "Specialized technical verification",
        "Soft skills training"
      ],
      projects: [
        "Internship experience",
        "Research project",
        "Portfolio enhancement"
      ],
      skills: [
        "Professional networking",
        "Advanced technical skills",
        "Project management",
        "Critical thinking"
      ]
    },
    {
      year: "Year 4",
      title: "Career Preparation",
      courses: [
        "Capstone/final year projects",
        "Career-specific electives",
        "Advanced specialization",
        "Interview preparation"
      ],
      certifications: [
        "Industry-recognized certification",
        "Advanced professional verification",
        "Leadership training"
      ],
      projects: [
        "Capstone project",
        "Industry collaboration",
        "Professional portfolio completion"
      ],
      skills: [
        "Leadership",
        "Advanced problem-solving",
        "Interview skills",
        "Industry-specific expertise"
      ]
    }
  ];
}

export default RoadmapTimeline;
