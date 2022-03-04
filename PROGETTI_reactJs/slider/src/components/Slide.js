import React from "react";
import { starCreator } from "./utils/";
const Slide = ({ autore, recensione, voto, classes }) => {
  return (
    <article className={`slide ${classes}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <div className="star-container">{voto}</div>
      </div>
    </article>
  );
};

export default Slide;
