import React, { Component } from "react";
import "./SearchBox.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <div className={this.props.dark ? "search search-dark" : "search"}>
        <div className="search__input">
          <input
            placeholder="Search"
            onChange={(event) => this.props.searcher(event)}
          />
        </div>
        <div className="search__dropDown">
          <select onChange={(event) => this.props.drop(event)}>
            <option value="">Choose Continents</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="oceania">Oceania</option>
            <option value="africa">Africa</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchBox;
