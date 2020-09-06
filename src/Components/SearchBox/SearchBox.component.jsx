import React, { Component } from "react";
import "./SearchBox.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <div className="search">
        <div className="search__input">
          <input
            placeholder="Search"
            onChange={(event) => this.props.searcher(event)}
          />
        </div>
        <div className="search__dropDown">Drop Down</div>
      </div>
    );
  }
}

export default SearchBox;
