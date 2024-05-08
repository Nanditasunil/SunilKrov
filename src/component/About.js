import React from "react";
import "../styles/About.css";
import img from "../assets/aboutImage.png";
import { MdTravelExplore } from "react-icons/md";
import { PiBooksFill } from "react-icons/pi";
import { GiCrossroad } from "react-icons/gi";

const About = () => {
  return (
    <div>
      <section className="about-section" id="about">
        <div className="about-container">
          <img src={img} alt="image" className="about_img" />
          <div className="div-text">
            <div className="about_btns">
              <div className="box_about">
                <MdTravelExplore className="icons_about" />
                <h3>Explore My Work</h3>
              </div>
              <div className="box_about">
                <PiBooksFill className="icons_about" />
                <h3>Discover My Books</h3>
              </div>
              <div className="box_about">
                <GiCrossroad className="icons_about" />
                <h3>Follow my Journey</h3>
              </div>
            </div>
            <p className="desc_about">
              Welcome to my world of artistry! Originally a mechanical engineer
              from Pune, I found my true calling amidst the lush landscapes of
              Kerala. Trading gears for brushes, I now immerse myself in the
              vibrant world of animation and canvas paintings.
              <br />
              <br />
              With two published books under my belt, my artistic journey is a
              fusion of tradition and innovation. Drawing inspiration from my
              roots and beyond, each piece is a reflection of my passion and
              dedication.
              <br />
              <br />
              Join me as I continue to explore the endless possibilities of
              creativity, inviting you to experience the beauty and depth of my
              artistic expression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
