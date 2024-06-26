import React from "react";
import "../styles/Hero.css";
import img from "../assets/heroImg.jpg";
const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <img src={img} alt="" className="img" />
        <h1>
          <span className="spantext">I'm Sunil Nambu ,</span> artist based in
          India kerala pune
        </h1>
        <p>
          i am an artist from kerala , with 10 years of experince overall at
          differnet arenas and genres .
        </p>
        <div className="hero-action">
          <a href="#contact" className="hero-connect">
            Connect with me{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
