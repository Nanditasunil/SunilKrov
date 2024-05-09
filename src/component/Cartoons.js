import React, { useState } from "react";

import "../styles/Cartoons.css";
import car1 from "../assets/cartoons/car1.png";
import car2 from "../assets/cartoons/car2.png";
import car3 from "../assets/cartoons/car3.png";
import car4 from "../assets/cartoons/car4.png";
import car5 from "../assets/cartoons/car5.png";

import { Carousel } from "./quickComp/Carousel";
import info from "../data/carouselData.json";
import { MdDraw } from "react-icons/md";
const Cartoons = () => {
  return (
    <section className="cartoon-section">
      <div>
        <div
          id="toast-default"
          className="flex items-center w-full max-w-l p-4 text-indigo-300 "
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-orange-500 bg[#FB8569] rounded-lg dark:bg-[#FB8569] dark:text-white">
            <MdDraw className="self-center text-4xl" />
          </div>
          <div className="ms-3 text-4xl font-bold">Political Cartoons</div>
        </div>
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
