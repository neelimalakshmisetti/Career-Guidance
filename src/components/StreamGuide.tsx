import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { EducationStage } from "./EducationStageCards";
import UserInputForm from "./UserInputForm";

interface StreamGuideProps {
  stage: EducationStage;
}

type Stream = {
  id: string;
  name: string;
  careers: string[];
  exams: string[];
  description: string;
  internalChoices?: { id: string; name: string }[];
};

const streamData: Record<EducationStage, Stream[]> = {
  "class-10": [
    {
      id: "science",
      name: "Science",
      careers: ["Doctor", "Engineer", "Scientist", "Researcher"],
      exams: ["JEE", "NEET", "KVPY", "Olympiads"],
      description: "Focus on Physics, Chemistry, Biology, and Mathematics for careers in medicine, engineering, and research."
    },
    {
      id: "commerce",
      name: "Commerce",
      careers: ["CA", "MBA", "Financial Analyst", "Economist"],
      exams: ["CA Foundation", "CUET", "CLAT"],
      description: "Study Business Studies, Accountancy, Economics, and Mathematics for careers in finance and business."
    },
    {
      id: "humanities",
      name: "Humanities",
      careers: ["Lawyer", "Journalist", "Psychologist", "Civil Services"],
      exams: ["CUET", "CLAT", "UPSC"],
      description: "Learn History, Political Science, Sociology, Psychology, and Languages for careers in law, media, and social sciences."
    },
    {
      id: "vocational",
      name: "Vocational",
      careers: ["Animator", "Chef", "Fashion Designer", "Technician"],
      exams: ["NID", "NIFT", "Skill Certification Exams"],
      description: "Practical skill-based education focusing on specific trades like design, hospitality, or technical skills."
    }
  ],
  "class-12": [
    {
      id: "engineering",
      name: "Engineering",
      careers: ["Software Engineer", "Mechanical Engineer", "Civil Engineer"],
      exams: ["JEE Main", "JEE Advanced", "BITSAT", "State CETs"],
      description: "Choose for careers in designing and building technologies, infrastructure, and software systems."
    },
    {
      id: "medicine",
      name: "Medicine",
      careers: ["Doctor", "Surgeon", "Dentist", "Veterinarian"],
      exams: ["NEET-UG", "AIIMS", "JIPMER"],
      description: "For those interested in healthcare, diagnosis, treatment, and medical research."
    },
    {
      id: "design",
      name: "Design",
      careers: ["UX Designer", "Product Designer", "Graphic Designer"],
      exams: ["UCEED", "NID DAT", "NIFT", "CEED"],
      description: "Focused on visual, product, fashion, and digital design for creative industries."
    },
    {
      id: "business",
      name: "Business",
      careers: ["Manager", "Entrepreneur", "Consultant", "Marketer"],
      exams: ["CUET", "IPU CET", "SET", "NPAT"],
      description: "Study business administration, commerce, economics for corporate or entrepreneurial careers."
    }
  ],
  "graduation": [
    {
      id: "higher-studies",
      name: "Higher Studies",
      careers: ["Researcher", "Professor", "Specialist"],
      exams: ["GATE", "GRE", "CAT", "GMAT"],
      description: "Pursue masters or PhD programs to specialize in your field and access advanced research opportunities."
    },
    {
      id: "govt-exams",
      name: "Government Exams",
      careers: ["Civil Servant", "Bank Officer", "PSU Officer"],
      exams: ["UPSC", "SSC", "Banking Exams", "State PSCs"],
      description: "Prepare for prestigious government jobs with competitive exams offering stability and public service."
    },
    {
      id: "freelancing",
      name: "Freelancing",
      careers: ["Freelance Developer", "Content Creator", "Consultant"],
      exams: ["Certification Exams", "Skill Assessments"],
      description: "Independent work opportunities in various fields based on your skills and market demand."
    },
    {
      id: "startup",
      name: "Startup",
      careers: ["Founder", "Co-founder", "Early Employee"],
      exams: ["Not Applicable"],
      description: "Create or join early-stage companies with high growth potential and innovative ideas."
    }
  ],
  "post-graduation": [
    {
      id: "phd",
      name: "PhD & Research",
      careers: ["Research Scientist", "R&D Specialist", "Academic Researcher"],
      exams: ["UGC NET", "CSIR NET", "University Entrance Tests"],
      description: "Advanced research and specialized knowledge to become an expert in your domain."
    },
    {
      id: "teaching",
      name: "Teaching",
      careers: ["Professor", "Lecturer", "Corporate Trainer"],
      exams: ["UGC NET", "SET", "CTET"],
      description: "Share knowledge and mentor the next generation in academic or corporate settings."
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      careers: ["Business Owner", "CEO", "Venture Capitalist"],
      exams: ["Not Applicable"],
      description: "Create your own business venture leveraging your expertise and market opportunities."
    },
    {
      id: "field-switch",
      name: "Switching Fields",
      careers: ["Career Changer", "Multi-disciplinary Professional"],
      exams: ["Field-specific Entrance Exams"],
      description: "Transition to a new career path by leveraging transferable skills and additional training."
    }
  ],
  "alternative": [
    {
      id: "certifications",
      name: "Certifications",
      careers: ["IT Professional", "Project Manager", "Digital Marketer"],
      exams: ["Industry Certification Exams"],
      description: "Fast-track your career with industry-recognized certifications validating specific skills."
    },
    {
      id: "bootcamps",
      name: "Bootcamps",
      careers: ["Web Developer", "Data Scientist", "UX Designer"],
      exams: ["Not Applicable"],
      description: "Intensive, short-term training programs focused on practical skills for quick employment."
    },
    {
      id: "freelance",
      name: "Freelance",
      careers: ["Freelance Writer", "Designer", "Programmer"],
      exams: ["Skill Assessments"],
      description: "Build a portfolio and client base as an independent professional offering services."
    },
    {
      id: "online-learning",
      name: "Online Learning",
      careers: ["Self-taught Professional", "Digital Nomad"],
      exams: ["Varies by Platform"],
      description: "Flexible, self-paced learning through online platforms to acquire specific skills."
    }
  ]
};

const stageHeadings: Record<EducationStage, string> = {
  "class-10": "Stream Selection Guide for Class 10",
  "class-12": "Career Path Options after Class 12",
  "graduation": "Opportunities after Graduation",
  "post-graduation": "Advanced Paths after Post-Graduation",
  "alternative": "Non-Traditional Education Routes"
};

const stageTools: Record<EducationStage, string> = {
  "class-10": "Interest-based quiz for stream suggestions",
  "class-12": "Stream comparison tool",
  "graduation": "Career vs Study Decision Matrix",
  "post-graduation": "Career Switch Planner",
  "alternative": "Interactive Income Potential Calculator"
};

const StreamGuide: React.FC<StreamGuideProps> = ({ stage }) => {
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  const [selectedInternalChoice, setSelectedInternalChoice] = useState<string | null>(null);
  const streams = streamData[stage];

  const getInternalChoices = (streamId: string) => {
    const selectedStreamData = streams.find(s => s.id === streamId);
    if (selectedStreamData?.id === "science") {
      return [
        { id: "pcm", name: "Physics, Chemistry, Mathematics" },
        { id: "pcb", name: "Physics, Chemistry, Biology" },
        { id: "pcmb", name: "Physics, Chemistry, Mathematics, Biology" }
      ];
    } else if (selectedStreamData?.id === "commerce") {
      return [
        { id: "maths", name: "Commerce with Mathematics" },
        { id: "ip", name: "Commerce with Informatics Practices" }
      ];
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{stageHeadings[stage]}</h2>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Explore options based on your current education level and interests to plan your next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {streams.map((stream) => (
          <button
            key={stream.id}
            onClick={() => {
              setSelectedStream(stream.id);
              setSelectedInternalChoice(null);
            }}
            className={`p-6 rounded-xl border text-left transition-all hover-scale ${
              selectedStream === stream.id
                ? "border-skillflow-purple bg-skillflow-purple/5 shadow-md"
                : "border-gray-200 hover:border-skillflow-purple-light"
            }`}
          >
            <h3 className="text-xl font-semibold mb-3">{stream.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{stream.description}</p>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Careers</p>
                <p className="text-sm">{stream.careers.slice(0, 3).join(", ")}{stream.careers.length > 3 ? "..." : ""}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Exams</p>
                <p className="text-sm">{stream.exams.slice(0, 3).join(", ")}{stream.exams.length > 3 ? "..." : ""}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedStream && (
        <>
          {getInternalChoices(selectedStream) && (
            <div className="mt-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Choose Your Combination</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getInternalChoices(selectedStream)?.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => setSelectedInternalChoice(choice.id)}
                    className={`p-4 rounded-lg border text-left transition-all hover-scale ${
                      selectedInternalChoice === choice.id
                        ? "border-skillflow-purple bg-skillflow-purple/5 shadow-md"
                        : "border-gray-200 hover:border-skillflow-purple-light"
                    }`}
                  >
                    <h4 className="font-semibold">{choice.name}</h4>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Create Your Personalized Roadmap</h3>
            <UserInputForm 
              stage={stage} 
              stream={selectedStream}
              internalChoice={selectedInternalChoice}
            />
          </div>
        </>
      )}

      <div className="mt-8 p-4 bg-skillflow-purple-light/30 rounded-lg flex items-center gap-3">
        <CheckCircle className="h-5 w-5 text-skillflow-purple" />
        <p className="text-sm"><span className="font-semibold">Available Tool:</span> {stageTools[stage]}</p>
      </div>
    </div>
  );
};

export default StreamGuide;
