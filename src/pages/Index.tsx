import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EducationStageCards from "../components/EducationStageCards";
import CollegeSection from "../components/CollegeSection";
import CareerExploreSection from "../components/CareerExploreSection";
import InternshipsSection from "../components/InternshipsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <EducationStageCards />
        <CollegeSection />
        <CareerExploreSection />
        <InternshipsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
