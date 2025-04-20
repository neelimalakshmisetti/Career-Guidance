import React, { useState } from "react";
import { MapPin, Phone, Globe, Award, IndianRupee, Calendar, Navigation2 } from "lucide-react";

// Sample college data
const collegeData = [
  {
    id: 1,
    name: "Indian Institute of Technology (IIT) Delhi",
    location: "New Delhi, India",
    ranking: 2,
    courses: ["B.Tech", "M.Tech", "PhD"],
    feesRange: "₹2.5-8 lakhs per year",
    duration: "4 years (B.Tech)",
    contact: "+91-11-2659-7135",
    website: "https://home.iitd.ac.in/",
    entranceExams: ["JEE Advanced", "GATE"],
    scholarships: ["Merit-based", "SC/ST Scholarship", "Institute Free Studentship"]
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi, India",
    ranking: 1,
    courses: ["MBBS", "MD/MS", "DM/M.Ch"],
    feesRange: "₹1.5-6 lakhs total",
    duration: "5.5 years (MBBS)",
    contact: "+91-11-2658-8500",
    website: "https://www.aiims.edu/",
    entranceExams: ["NEET-UG", "NEET-PG"],
    scholarships: ["Merit-cum-means Scholarship", "Government Scholarships"]
  },
  {
    id: 3,
    name: "National Institute of Design (NID)",
    location: "Ahmedabad, Gujarat",
    ranking: 1,
    courses: ["B.Des", "M.Des", "PhD"],
    feesRange: "₹4-6 lakhs total",
    duration: "4 years (B.Des)",
    contact: "+91-79-2662-3692",
    website: "https://www.nid.edu/",
    entranceExams: ["NID DAT"],
    scholarships: ["Merit Scholarship", "Need-based Financial Aid"]
  },
  {
    id: 4,
    name: "Indian Institute of Management (IIM) Ahmedabad",
    location: "Ahmedabad, Gujarat",
    ranking: 1,
    courses: ["MBA", "Executive MBA", "PhD"],
    feesRange: "₹23-25 lakhs total",
    duration: "2 years (MBA)",
    contact: "+91-79-6632-4600",
    website: "https://www.iima.ac.in/",
    entranceExams: ["CAT", "GMAT"],
    scholarships: ["Need-based Financial Aid", "Corporate Scholarships"]
  },
  {
    id: 5,
    name: "Lady Hardinge Medical College",
    location: "New Delhi, India",
    ranking: 6,
    courses: ["MBBS", "MD", "MS", "DM"],
    feesRange: "₹50,000-2 lakhs per year",
    duration: "5.5 years (MBBS)",
    contact: "+91-11-2336-3070",
    website: "https://lhmc.gov.in/",
    entranceExams: ["NEET-UG", "NEET-PG"],
    scholarships: ["Central Sector Scheme", "Merit Scholarship", "PM Scholarship"]
  },
  {
    id: 6,
    name: "National Institute of Fashion Technology",
    location: "Mumbai, India",
    ranking: 1,
    courses: ["B.Des (Fashion)", "M.Des", "B.F.Tech"],
    feesRange: "₹2.5-4.5 lakhs per year",
    duration: "4 years",
    contact: "+91-22-2747-1000",
    website: "https://nift.ac.in/",
    entranceExams: ["NIFT Entrance Exam"],
    scholarships: ["NIFT Merit Scholarship", "SC/ST Scholarship"]
  },
  {
    id: 7,
    name: "Lal Bahadur Shastri National Academy of Administration",
    location: "Mussoorie, India",
    ranking: 1,
    courses: ["IAS Training", "Civil Services Foundation"],
    feesRange: "Government Sponsored",
    duration: "2 years training",
    contact: "+91-135-2632236",
    website: "https://www.lbsnaa.gov.in/",
    entranceExams: ["UPSC Civil Services"],
    scholarships: ["Full government sponsorship"]
  },
  {
    id: 8,
    name: "Indian Institute of Science",
    location: "Bangalore, India",
    ranking: 1,
    courses: ["M.Tech", "PhD", "Research Programs"],
    feesRange: "₹25,000-2 lakhs per year",
    duration: "2-5 years",
    contact: "+91-80-2293-2228",
    website: "https://iisc.ac.in/",
    entranceExams: ["GATE", "JEST", "NET"],
    scholarships: ["Research Fellowship", "Prime Minister's Fellowship"]
  }
];

const scholarshipData = [
  {
    name: "Central Sector Scheme of Scholarships",
    amount: "₹1,000 per month",
    eligibility: "Merit-based, family income below 8 lakhs/year",
    provider: "Ministry of Education"
  },
  {
    name: "Post Matric Scholarship",
    amount: "Up to ₹2.5 lakhs per year",
    eligibility: "SC/ST students",
    provider: "Ministry of Social Justice"
  },
  {
    name: "Prime Minister's Scholarship Scheme",
    amount: "₹2,500 per month",
    eligibility: "Wards of ex-servicemen",
    provider: "Ministry of Defence"
  }
];

const internshipData = {
  "engineering": [
    {
      company: "TCS",
      role: "Software Engineering Intern",
      duration: "2-6 months",
      stipend: "₹15,000-20,000 per month"
    },
    {
      company: "L&T",
      role: "Mechanical Engineering Intern",
      duration: "3 months",
      stipend: "₹12,000 per month"
    }
  ],
  "medicine": [
    {
      company: "Apollo Hospitals",
      role: "Medical Intern",
      duration: "12 months",
      stipend: "As per hospital norms"
    },
    {
      company: "AIIMS",
      role: "Research Intern",
      duration: "6 months",
      stipend: "₹10,000 per month"
    }
  ],
  "fashion": [
    {
      company: "Myntra",
      role: "Fashion Design Intern",
      duration: "3-6 months",
      stipend: "₹15,000 per month"
    },
    {
      company: "Lifestyle",
      role: "Fashion Merchandising Intern",
      duration: "3 months",
      stipend: "₹12,000 per month"
    }
  ]
};

const CollegeSection = () => {
  const [filter, setFilter] = useState("");
  const [showScholarships, setShowScholarships] = useState(false);
  const [selectedStream, setSelectedStream] = useState<string | null>(null);
  
  const handleNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        window.open(`https://www.google.com/maps/search/colleges+near+me/@${latitude},${longitude},12z`, '_blank');
      });
    }
  };

  const filteredColleges = collegeData.filter(college => 
    college.name.toLowerCase().includes(filter.toLowerCase()) ||
    college.courses.some(course => course.toLowerCase().includes(filter.toLowerCase())) ||
    college.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="py-16 bg-skillflow-gray-light/50" id="colleges">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Top <span className="text-skillflow-purple">Colleges & Programs</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg max-w-3xl mx-auto">
            Discover the best educational institutions based on your career path and interests.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by college, course or location..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-skillflow-purple"
            />
          </div>
          <button
            onClick={handleNearMe}
            className="flex items-center gap-2 px-4 py-2 bg-skillflow-purple text-white rounded-lg hover:bg-skillflow-purple-dark transition-colors"
          >
            <Navigation2 className="h-4 w-4" />
            <span>Colleges Near Me</span>
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Available Internships</h3>
          <div className="flex gap-4 flex-wrap">
            {Object.keys(internshipData).map((stream) => (
              <button
                key={stream}
                onClick={() => setSelectedStream(stream)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedStream === stream 
                    ? 'bg-skillflow-purple text-white' 
                    : 'hover:border-skillflow-purple'
                }`}
              >
                {stream.charAt(0).toUpperCase() + stream.slice(1)}
              </button>
            ))}
          </div>
          
          {selectedStream && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {internshipData[selectedStream as keyof typeof internshipData].map((internship, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white">
                  <h4 className="font-semibold">{internship.company}</h4>
                  <p className="text-sm text-gray-600">{internship.role}</p>
                  <p className="text-sm">Duration: {internship.duration}</p>
                  <p className="text-sm">Stipend: {internship.stipend}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowScholarships(!showScholarships)}
            className="flex items-center gap-2 px-4 py-2 bg-skillflow-purple text-white rounded-lg mb-4"
          >
            <Award className="h-4 w-4" />
            <span>View Available Scholarships</span>
          </button>
          
          {showScholarships && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scholarshipData.map((scholarship, idx) => (
                <div key={idx} className="p-4 border rounded-lg bg-white">
                  <h4 className="font-semibold">{scholarship.name}</h4>
                  <p className="text-sm text-gray-600">Amount: {scholarship.amount}</p>
                  <p className="text-sm">Eligibility: {scholarship.eligibility}</p>
                  <p className="text-sm text-skillflow-purple">Provider: {scholarship.provider}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{college.name}</h3>
                    <div className="flex items-center text-gray-500 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="text-sm">NIRF Ranking: #{college.ranking} in category</span>
                    </div>
                  </div>
                  
                  <div className="bg-skillflow-purple-light/20 rounded-lg px-4 py-2">
                    <div className="flex items-center mb-1">
                      <IndianRupee className="h-4 w-4 mr-1 text-skillflow-purple" />
                      <span className="text-sm">{college.feesRange}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-skillflow-purple" />
                      <span className="text-sm">{college.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Available Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.courses.map((course, i) => (
                        <span key={i} className="text-xs bg-gray-100 rounded-full px-3 py-1">{course}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Entrance Exams</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.entranceExams.map((exam, i) => (
                        <span key={i} className="text-xs bg-gray-100 rounded-full px-3 py-1">{exam}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2">Scholarships Available</h4>
                  <ul className="text-sm">
                    {college.scholarships.map((scholarship, i) => (
                      <li key={i} className="mb-1">• {scholarship}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <div className="flex gap-3 text-sm">
                    <a href={`tel:${college.contact}`} className="flex items-center text-skillflow-purple">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>Contact</span>
                    </a>
                    <a href={college.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-skillflow-purple">
                      <Globe className="h-4 w-4 mr-1" />
                      <span>Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-white border border-skillflow-purple text-skillflow-purple hover:bg-skillflow-purple/10 font-medium rounded-md px-6 py-2 shadow-sm transition-colors hover-scale">
            Explore More Colleges
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollegeSection;
