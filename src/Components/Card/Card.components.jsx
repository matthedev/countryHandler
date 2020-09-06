import React from "react";
import "./Card.styles.css";

const Card = ({ name, flag, capital }) => {
  return (
    <div className="card">
      <div className="card__flag">
        <img src={flag} alt="georgia" />
      </div>
      <div className="card__name">Country: {name}</div>
      <div className="card__capital">Capital: {capital}</div>
    </div>
  );
};

export default Card;
