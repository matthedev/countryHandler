import React from "react";
import "./Card.styles.css";

const Card = ({ name, flag, capital, dark, clicked }) => {
  return (
    <div className={dark ? "card dark-srf" : "card"} onClick={clicked}>
      <div className="card__flag">
        <img src={flag} alt="georgia" />
      </div>
      <div className="dark-srfc">Country: {name}</div>
      <div className="dark-srfc">Capital: {capital}</div>
    </div>
  );
};

export default Card;
