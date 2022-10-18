import "./NavbarStyle.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo-simple.png";

import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/"><img src={Logo} alt="Logo" srcSet="" /></Link>


      <ul className={click ? "nav-menu active" : "nav-menu"}>

        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/project">Projets</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={40} style={{ color: "#fff" }} />) : (<FaBars size={40} style={{ color: "#fff" }} />)}


      </div>
    </div>
  );
};

export default Navbar