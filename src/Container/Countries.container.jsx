import React, { Component, Fragment } from "react";
import "./Countries.styles.css";
import axios from "axios";
import Card from "../Components/Card/Card.components";
import SearchBox from "../Components/SearchBox/SearchBox.component";

class Countries extends Component {
  state = {
    countries: [],
    inputValue: "",
    filteredCountries: [],
  };
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((data) => this.setState({ filteredCountries: data.data }));
  }

  searchInputHandler = (event) => {
    const filtered = this.state.filteredCountries.filter((country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filtered);
    this.setState({ filteredCountries: filtered });
  };

  render() {
    return (
      <Fragment>
        <SearchBox searcher={this.searchInputHandler} />
        <div className="countries-container">
          {this.state.filteredCountries.map((country) => (
            <Card
              name={country.name}
              flag={country.flag}
              capital={country.capital}
              key={country.numericCode}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Countries;
