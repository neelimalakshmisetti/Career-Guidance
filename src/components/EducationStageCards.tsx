
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import StreamGuide from "./StreamGuide";

export type EducationStage = 
  | "class-10" 
  | "class-12" 
  | "graduation" 
  | "post-graduation" 
  | "alternative";

const stageData = [
  {
    id: "class-10",
    name: "Class 10",
    icon: "🎓",
    description: "Explore streams, entrance exams, early preparation",
    color: "bg-skillflow-blue",
    borderColor: "border-skillflow-blue",
  },
  {
    id: "class-12",
    name: "Class 12",
    icon: "📘",
    description: "Discover career paths, college options, exams",
    color: "bg-skillflow-purple-light",
    borderColor: "border-skillflow-purple-light",
  },
  {
    id: "graduation",
    name: "Graduation",
    icon: "🧑‍🎓",
    description: "Plan higher studies, jobs, certifications",
    color: "bg-skillflow-peach",
    borderColor: "border-skillflow-peach",
  },
  {
    id: "post-graduation",
    name: "Post-Graduation",
    icon: "🎓",
    description: "Research, advanced careers, switching fields",
    color: "bg-skillflow-blue",
    borderColor: "border-skillflow-blue",
  },
  {
    id: "alternative",
    name: "Alternative Paths",
    icon: "🛤️",
    description: "Non-degree routes, freelancing, bootcamps",
    color: "bg-skillflow-purple-light",
    borderColor: "border-skillflow-purple-light",
  },
];

const EducationStageCards = () => {
  const [selectedStage, setSelectedStage] = useState<EducationStage | null>(null);

  const handleStageSelect = (stageId: EducationStage) => {
    setSelectedStage(stageId);
    setTimeout(() => {
      document.getElementById("stream-guide")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="py-16" id="start">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose Your <span className="text-skillflow-purple">Education Stage</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            Select your current education level to get a personalized roadmap
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {stageData.map((stage) => (
            <button
              key={stage.id}
              onClick={() => handleStageSelect(stage.id as EducationStage)}
              className={`stage-card p-6 ${stage.color}/10 border-2 ${stage.borderColor} ${
                selectedStage === stage.id ? "ring-2 ring-skillflow-purple" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">{stage.icon}</span>
                <ArrowRight className="h-5 w-5 text-skillflow-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stage.name}</h3>
              <p className="text-gray-500 text-sm">{stage.description}</p>
            </button>
          ))}
        </div>

        {selectedStage && (
          <div id="stream-guide" className="mt-16 animate-fade-in">
            <StreamGuide stage={selectedStage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationStageCards;
