import React, { Component } from "react";
import "./importantCard.styles.css";

class importantCard extends Component {
  render() {
    if (this.props.country) {
      return (
        <div className={this.props.show ? "iCard iCard-show" : "iCard"}>
          <div className="iCard__flag">
            <img src={this.props.country.flag} alt="geo" />
          </div>
          <h3>Country</h3>
          <h3>Language</h3>
          <h3>Capital</h3>
          <h3>Population</h3>
          <h3>Region</h3>
          <h3>Currency</h3>
          <h3>cioc</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default importantCard;
