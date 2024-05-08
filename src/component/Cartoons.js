import React, { useState } from "react";

import "../styles/Cartoons.css";
import car1 from "../assets/cartoons/car1.png";
import car2 from "../assets/cartoons/car2.png";
import car3 from "../assets/cartoons/car3.png";
import car4 from "../assets/cartoons/car4.png";
import car5 from "../assets/cartoons/car5.png";

import { Carousel } from "./quickComp/Carousel";
import info from "../data/carouselData.json";
const Cartoons = () => {
  return (
    <section className="cartoon-section">
      <div>
        <h1 className="cartoon-title">Political Cartoons</h1>
        <p className="text-cartoon">
          Embark on a captivating journey through the artist's world of
          political cartoons, where Kerala's essence merges with astute
          observations and compelling narratives. Delve into a realm where each
          stroke and satire unravels the intricate dynamics of society and
          politics, offering profound insights and sparking thought-provoking
          conversations.
        </p>
      </div>
      {/* <Caraousels data={info} /> */}
      <Carousel data={info} />
    </section>
  );
};

export default Cartoons;
