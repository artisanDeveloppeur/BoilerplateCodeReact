import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slideCarousel, setSlideCarousel] = useState(0);

  const nextSlideCarousel = () => {
    setSlideCarousel(slideCarousel === data.length - 1 ? 0 : slideCarousel + 1);
  };

  const prevSlideCarousel = () => {
    setSlideCarousel(slideCarousel === 0 ? data.length - 1 : slideCarousel - 1);
  };

  return (
    <>
      <div className="carousel">
        <BsArrowLeftCircleFill onClick={prevSlideCarousel} className="carousel__arrow carousel__arrow-left" />
        <picture>
          {data.map((item, idx) => {
            return (

              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slideCarousel === idx ? "carousel__slide" : "carousel__slide carousel__slide-hidden"}
              />
            );
          })}
        </picture>

        <BsArrowRightCircleFill
          onClick={nextSlideCarousel}
          className="carousel__arrow carousel__arrow-right"
        />
        <span className="carousel__indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slideCarousel === idx ? "carousel__indicator" : "carousel__indicator carousel__indicator-inactive"
                }
                onClick={() => setSlideCarousel(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </>

  );
};
