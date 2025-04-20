import React, { useState } from "react";
import RoadmapTimeline from "./RoadmapTimeline";

interface UserInputFormProps {
  stage: string;
  stream: string;
  internalChoice: string | null;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ stage, stream, internalChoice }) => {
  const [formData, setFormData] = useState({
    interest: "",
    location: "",
    budget: "",
    goal: "",
    preferredCity: "",
    maxFees: "",
    studyMode: "full-time"
  });

  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRoadmap(true);
    setTimeout(() => {
      document.getElementById("roadmap-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const interests = {
    "class-10-science": ["Physics", "Chemistry", "Biology", "Mathematics", "Programming"],
    "class-10-commerce": ["Economics", "Accounting", "Business Studies", "Finance"],
    "class-10-humanities": ["History", "Political Science", "Psychology", "Sociology", "Languages"],
    "class-10-vocational": ["Design", "Animation", "Culinary Arts", "Fashion", "Tourism"],
    "class-12-engineering": ["Computer Science", "Mechanical", "Civil", "Electrical", "Chemical"],
    "class-12-medicine": ["MBBS", "Dental", "Pharmacy", "Veterinary", "AYUSH"],
    "class-12-design": ["UI/UX", "Product Design", "Graphic Design", "Fashion", "Animation"],
    "class-12-business": ["BBA", "B.Com", "Economics", "Hotel Management"],
    "graduation-higher-studies": ["M.Tech", "MBA", "M.Sc", "MA", "LLM"],
    "graduation-govt-exams": ["Civil Services", "Banking", "SSC", "Defense", "Teaching"],
    "graduation-freelancing": ["Web Development", "Content Writing", "Digital Marketing", "Design"],
    "graduation-startup": ["Tech Startup", "E-commerce", "Education", "Health & Wellness"],
    "post-graduation-phd": ["Science & Technology", "Humanities", "Management", "Medical Research"],
    "post-graduation-teaching": ["School Teaching", "Higher Education", "Corporate Training"],
    "post-graduation-entrepreneurship": ["Product-based", "Service-based", "Social Enterprise"],
    "post-graduation-field-switch": ["Tech", "Management", "Creative Arts", "Healthcare"],
    "alternative-certifications": ["Cloud Computing", "Data Science", "Digital Marketing", "Project Management"],
    "alternative-bootcamps": ["Web Development", "Data Science", "UX Design", "Cybersecurity"],
    "alternative-freelance": ["Writing", "Design", "Development", "Consulting"],
    "alternative-online-learning": ["Programming", "Business", "Design", "Languages"]
  };

  const goals = [
    "Secure a well-paying job",
    "Pursue higher education",
    "Start my own business",
    "Develop expertise in my field",
    "Work abroad",
    "Achieve work-life balance",
    "Make a social impact"
  ];

  const interestKey = `${stage}-${stream}` as keyof typeof interests;
  const interestOptions = interests[interestKey] || [];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-semibold mb-4">Personalize Your Roadmap</h3>
      <p className="text-gray-500 mb-6">Fill in your details to generate a tailored career plan</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="interest" className="text-sm font-medium">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            >
              <option value="">Select your interest</option>
              {interestOptions.map(interest => (
                <option key={interest} value={interest}>{interest}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="preferredCity" className="text-sm font-medium">
              Preferred City
            </label>
            <input
              type="text"
              id="preferredCity"
              name="preferredCity"
              value={formData.preferredCity}
              onChange={handleChange}
              placeholder="Enter preferred city"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium">
              State/Country
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="State or Country"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="maxFees" className="text-sm font-medium">
              Maximum Budget (per year)
            </label>
            <input
              type="text"
              id="maxFees"
              name="maxFees"
              value={formData.maxFees}
              onChange={handleChange}
              placeholder="e.g., ₹5 lakhs"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="studyMode" className="text-sm font-medium">
              Study Mode
            </label>
            <select
              id="studyMode"
              name="studyMode"
              value={formData.studyMode}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="distance">Distance Learning</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="goal" className="text-sm font-medium">
              Long-term Goal
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            >
              <option value="">Select your goal</option>
              {goals.map(goal => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-skillflow-purple text-white rounded-md shadow hover:bg-skillflow-purple-dark transition-colors hover-scale"
          >
            Generate My Roadmap
          </button>
        </div>
      </form>

      {showRoadmap && (
        <div id="roadmap-section" className="mt-10 animate-fade-in">
          <RoadmapTimeline 
            stage={stage} 
            stream={stream} 
            interest={formData.interest}
            internalChoice={internalChoice}
            location={{
              city: formData.preferredCity,
              state: formData.location
            }}
            budget={{
              maxAmount: formData.maxFees,
              studyMode: formData.studyMode
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserInputForm;
