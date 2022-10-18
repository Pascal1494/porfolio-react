import React from "react";

import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Navbar from "../Components/Navbar";
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="A propos" text="Je m'appelle Pascal" desc="Je suis un développeur Front-End," concept="je développe des sites vitrines où dynamiques. J'utilise React, Wordpress, Bootstrap"/>

      <AboutContent />
      
      <Footer />
    </div>
  );
};

export default About;
