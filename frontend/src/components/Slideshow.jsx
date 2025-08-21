import React, { useState } from "react";
import "./Slideshow.css";
import arrow from "../assets/arrow.png"; // ta flèche unique

const Slideshow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  return (
    <div className="slideshow">
      {total > 1 && (
        <>
          <img
            src={arrow}
            alt="Précédent"
            className="arrow arrow-left"
            onClick={prevSlide}
          />
          <img
            src={arrow}
            alt="Suivant"
            className="arrow arrow-right"
            onClick={nextSlide}
          />
          <span className="counter">{`${current + 1} / ${total}`}</span>
        </>
      )}
      <img
        src={pictures[current]}
        alt={`slide ${current + 1}`}
        className="slide-image"
      />
    </div>
  );
};

export default Slideshow;

