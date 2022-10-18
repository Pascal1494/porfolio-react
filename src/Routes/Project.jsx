import React from "react";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Navbar from "../Components/Navbar";
import PricingCards from "../Components/PricingCards";
import Works from "../Components/Works";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="Projets" text="Mes projets reçents"/>
      <Works />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Project;
