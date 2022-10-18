import React, {Component} from "react";
import "./HeroImg2Style.css";

class HeroImg2 extends Component {
  render() {
  
    return (
      <div className="hero-img">
        <div className="heading">
          <h1 className="uppercase">{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <p>{this.props.desc}</p>
          <p>{this.props.concept}</p>
        </div>
      </div>
    );
  };
  }

export default HeroImg2;
