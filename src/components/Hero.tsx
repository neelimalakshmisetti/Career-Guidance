import React from "react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-skillflow-purple-light/20 to-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your Personalized <span className="text-skillflow-purple">Career Journey</span> Starts Here
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              SkillFlow creates tailored roadmaps for your education and career journey, guiding you through colleges, skills, and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
