import React, { Component } from "react";
import "./importantCard.styles.css";

class importantCard extends Component {
  render() {
    if (this.props.country) {
      console.log(this.props.country.population);
      return (
        <div className={this.props.show ? "iCard iCard-show" : "iCard"}>
          <div className="iCard__flag">
            <img src={this.props.country.flag} alt="geo" />
          </div>
          <h3>Country: {this.props.country.name} </h3>
          <h3>Language: {this.props.country.languages[0].name}</h3>
          <h3>Capital: {this.props.country.capital}</h3>
          <h3>Population: {this.props.country.population.toString()} </h3>
          <h3>Region: {this.props.country.region}</h3>
          <h3>Currency: {this.props.country.currencies[0].name}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default importantCard;
