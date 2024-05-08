import React from "react";
import "../styles/Canvas.css";
import img1 from "../assets/canvas/img1.png";
import img2 from "../assets/canvas/img2.png";
import img3 from "../assets/canvas/img3.png";
import img4 from "../assets/canvas/img4.png";
import img5 from "../assets/canvas/img5.png";
import img6 from "../assets/canvas/img6.png";
import img7 from "../assets/canvas/img7.png";
import img8 from "../assets/canvas/img8.png";
import img9 from "../assets/canvas/img9.png";
import img10 from "../assets/canvas/img10.png";
import img11 from "../assets/canvas/img11.png";
import img12 from "../assets/canvas/img12.png";

const Canvas = () => {
  return (
    <section className="canvas-section" id="works">
      <div>
        <h1 className="canvas-title">Canvas Art</h1>
        <p className="text-canvas">
          Explore canvas artistry that reflects the vibrant essence of Kerala
          and transcends boundaries of tradition and innovation. Each piece
          captures the artist's journey from mechanical engineering to
          passionate expression, inviting you into a world where colors and
          strokes intertwine to evoke emotion and intrigue.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img1} alt />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img2}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img3}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img4}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img5}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img6}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img7}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img8}
              alt="img"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img9}
              alt="img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img10}
              alt="img"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img11}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img12}
              alt="image-canvas"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Canvas;
