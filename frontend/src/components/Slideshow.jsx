import React, { useState } from "react";
import "./Slideshow.css";
import arrow from "../assets/arrow.png"; // Une seule flèche

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />

      {/* Flèche gauche */}
      {total > 1 && (
        <img
          src={arrow}
          alt="Précédent"
          className="arrow arrow-left"
          onClick={prevSlide}
        />
      )}

      {/* Flèche droite (rotation dans le CSS) */}
      {total > 1 && (
        <img
          src={arrow}
          alt="Suivant"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      )}

      {/* Compteur */}
      {total > 1 && (
        <div className="counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
}

export default Slideshow;

