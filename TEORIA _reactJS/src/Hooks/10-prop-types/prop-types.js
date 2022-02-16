import React from "react";
import { datiIncompleti } from "../../data";
import PropTypes from "prop-types";
const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => {
        return <Prodotto key={el.id} {...el} />;
      })}
    </div>
  );
};

const Prodotto = ({ nome, prezzo, image }) => {
  // console.log(nome, prezzo, image);
  //_seconda: utilizzare && operator
  const img = image && image.url;
  return (
    <article className="card shadow my-3 p-2">
      <div className="card-body">
        <img
          src={img || defaultImage}
          alt={nome || "divano-default"}
          className="card-img-top"
        />
        <div className="card-text">
          <h4 className="card-title">{nome || "divano-default"}</h4>
          <p className="card-subtitle">{prezzo || 7.99} €</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};
//DUE SOLUZIONI

//_prima: definire props di default
/* Prodotto.defaultProps = {
  nome: "divano-default",
  prezzo: 17.99,
  image: defaultImage,
}; */
export default PropComponent;
