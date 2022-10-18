import React from "react";
import {
  FaFacebook,
  FaGit,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>17 rue Louis PASTEUR</p>
              <p>14123 Fleury sur Orne</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              06 86 26 87 36
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              la-maison-du-code@outlook.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>A propose de nous</h4>
          <p>
            Pascal LUCAS, Développeur web Front-end. Discutons ensemble de votre
            projet React, Javacript, wordpress
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGit size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
