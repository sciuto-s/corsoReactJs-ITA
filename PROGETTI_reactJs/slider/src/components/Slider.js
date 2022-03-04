import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";
const Slider = () => {
  const [recensioni, setRecensione] = useState(data);
  const [active, setActive] = useState(0);

  // NEXT SLIDE
  const nextSlide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > recensioni.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  };

  const prevSlide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return recensioni.length - 1;
      }
      return prevValue - 1;
    });
  };
  return (
    <div className="container slider">
      {recensioni.map((recensione, index) => {
        let positionClass = "";
        if (index === active) {
          positionClass = "active";
        } else if (
          index + 1 === "active" ||
          (active === 0 && index === recensioni.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }
        return (
          <Slide key={recensione.id} {...recensione} classes={positionClass} />
        );
      })}
      <div className="btn-group slider-btn-group">
        <button className="btn btn-slider prev-slider" onClick={prevSlide}>
          PREV
        </button>
        <button className="btn btn-slider next-slider" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Slider;
