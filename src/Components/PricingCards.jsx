import "./PricingCardsStyle.css";

import React from "react";
import { Link } from "react-router-dom";

const PricingCards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-  Site vitrine -</h3>
          <span className="bar"></span>
          <p className="card-evolut">A partir de</p>
          <p className="btc">1500 €</p>
          <p>- Jours -</p>
          <p>- Features -</p>
          <p>- Responsive design -</p>
          <Link to="/contact" className="button">Poursuive</Link>
        </div>

        <div className="card">
          <h3>-  Wordpress -</h3>
          <span className="bar"></span>
          <p className="card-evolut"></p>
          <p className="btc">Sur devis</p>
          <p>-  Jours -</p>
          <p>- Features -</p>
          <p>- Responsive design -</p>
          <Link to="/contact" className="button">Poursuive</Link>
        </div>

        <div className="card">
          <h3>-  E-commerce -</h3>
          <span className="bar"></span>
          <p className="card-evolut"></p>
          <p className="btc">Sur devis</p>
          <p>-  Jours -</p>
          <p>- Features -</p>
          <p>- Responsive design -</p>
          <Link to="/contact" className="button">Poursuive</Link>
        </div>

        
      </div>
    </div>
  );
};

export default PricingCards;
