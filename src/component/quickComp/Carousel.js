import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../../styles/Cartoons.css";
import car1 from "../../assets/cartoons/car1.png";
import car2 from "../../assets/cartoons/car2.png";
import car3 from "../../assets/cartoons/car3.png";
import car4 from "../../assets/cartoons/car4.png";
export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data[0].info.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data[0].info.length - 1 : slide - 1));
  };

  const data = [
    {
      info: [
        {
          src: car1,
          alt: "Image 1 for carousel",
        },
        {
          src: car2,
          alt: "Image 2 for carousel",
        },
        {
          src: car3,
          alt: "Image 3 for carousel",
        },
        {
          src: car4,
          alt: "Image 4 for carousel",
        },
      ],
    },
  ];

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data[0].info.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
          style={{ borderRadius: "2rem", padding: "1rem" }}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data[0].info.map((_, idx) => (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
