import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useEffect } from 'react';

export const Carousel = ({ data }) => {
  const [slideCarousel, setSlideCarousel] = useState(0);

  const nextSlideCarousel = () => {
    setSlideCarousel(slideCarousel === data.length - 1 ? 0 : slideCarousel + 1);

  };

  const prevSlideCarousel = () => {
    setSlideCarousel(slideCarousel === 0 ? data.length - 1 : slideCarousel - 1);

  };



  const pressKey = () => {
    // your logic here
    console.log('pressed Enter');
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed key: ', event.key)
      console.log('User pressed keyCode: ', event.keyCode)
      if (event.key) {
        event.preventDefault();

        // 👇️ your logic here
        pressKey();
      }

      if (event.keyCode == '37') {
        // left arrow

      }

      if (event.keyCode == '39') {
        // right arrow

      }


    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

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
