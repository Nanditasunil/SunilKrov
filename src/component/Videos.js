import React from "react";
import "../styles/Video.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import yt1 from "../assets/videos/yt1.png";
import yt2 from "../assets/videos/yt2.png";
import yt3 from "../assets/videos/yt3.png";
import yt4 from "../assets/videos/yt4.png";

const Videos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="video-section">
      <div>
        <h1 className="video-title">Youtube Videos</h1>
        <p className="text-video">
          Step into the enchanting world of Blender animation on my YouTube
          channel! From character animations to captivating landscapes, each
          video is a glimpse into the boundless creativity of digital artistry.
          Join me as we explore the magic of Blender together. Subscribe now and
          let's embark on this exciting journey of imagination and animation!
        </p>
      </div>
      <div className="w-3/4 m-auto ">
        <div className="mt-10">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img
                    src={d.img}
                    alt="img"
                    className="h-54 w-54"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button
                    className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"
                    onClick={() => handleButtonClick(d.link)}
                  >
                    View Video
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    name: `School Blues`,
    img: yt1,
    review: `Indulge in nostalgia with "School Blues," reliving the cherished moments and camaraderie of school life.`,
    link: "https://www.youtube.com/watch?v=FERENwju2a4",
  },
  {
    name: `Rasputin`,
    img: yt2,
    review: `Embark on a captivating journey through ancient folklore and legends with "Rasputin," where mysteries await.`,
    link: "https://www.youtube.com/watch?v=J7b0YoW8l2s",
  },
  {
    name: `Bheemante Pazhi`,
    img: yt3,
    review: `Immerse yourself in the vibrant tapestry of Kerala's traditions and culture with "Bheemante Pazhi," a celebration of heritage.`,
    link: "https://www.youtube.com/watch?v=JYI6vTXwBfY",
  },
  {
    name: `Happy New Year`,
    img: yt4,
    review: `Embrace the spirit of hope and new beginnings with "Happy New Year," spreading joy and optimism for the future.`,
    link: "https://www.youtube.com/watch?v=AVzndpgb5Wo",
  },
];

export default Videos;
