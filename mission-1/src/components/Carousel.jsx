import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const moveSlide = (direction) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + direction + totalSlides) % totalSlides
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="carousel-item">
          <img src="../src/assets/turnersbanner.png" alt="Image 1" />
          <div className="carousel-caption">
            <h2>Most Trusted Used Car Dealer!</h2>
            <p>
              As voted by you – we are once again proud to be NZ’s most trusted
              used vehicle dealership.
            </p>
            <a href="#" className="carousel-btn">
              Find out more
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../src/assets/turnersbanner1.png" alt="Image 2" />
          <div className="carousel-caption">
            <h2>Quality Cars for Sale</h2>
            <p>We offer a wide range of quality cars to choose from.</p>
            <a href="#" className="carousel-btn">
              Browse Cars
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../src/assets/turnersbanner2.png" alt="Image 3" />
          <div className="carousel-caption">
            <h2>Easy Financing Options</h2>
            <p>
              Get pre-approved for financing and drive your dream car home
              today.
            </p>
            <a href="#" className="carousel-btn">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <button className="carousel-btn-prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="carousel-btn-next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
