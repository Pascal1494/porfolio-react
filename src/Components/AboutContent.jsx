import React from 'react'

import "./AboutContentStyle.css"
import { Link } from 'react-router-dom'
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Qui je suis ?</h1>
        <p>je suis un développeur web fron-end. je créé des sites Web responsive avec React, Bootstarp, Wordpress ou en pur Css Javascript.</p>
        <Link to="/contact">
          <button className='button'>Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top ">
            <img src={react2} className="img" alt="logo" />
          </div>
          <div className="img-stack bottom ">
            <img src={react1} className="img" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent