import React from 'react'
import Footer from "../Components/Footer";
import Form from '../Components/Form';
import HeroImg2 from '../Components/HeroImg2';
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" text="Envoyez moi un message !"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact