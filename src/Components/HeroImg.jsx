import React from 'react';

import Back from "../assets/setup.jpg";
import "./HeroImgStyle.css";

import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img className='into-img' src={Back} alt="Background"  />
      </div>
      <div className="content">
        <p className='lower-case'>B<span>onjour !</span>J<span>e suis Développeur Web</span> </p>
        <h1>Front-End REACT</h1>
        <div className='btn-container'>
          <Link to="/project" className='button'>Projets</Link>
          <Link to="/contact" className='button button-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg