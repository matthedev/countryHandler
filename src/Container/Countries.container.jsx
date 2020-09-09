import React, { Component, Fragment } from "react";
import "./Countries.styles.css";
import axios from "axios";
import Card from "../Components/Card/Card.components";
import SearchBox from "../Components/SearchBox/SearchBox.component";
import ImportantCard from "../Components/importantCard/importantCard.component";

class Countries extends Component {
  state = {
    countries: [],
    inputValue: "",
    dropDownValue: "",
    clickedCountry: false,
    country: null,
  };
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((data) => this.setState({ countries: data.data }));
  }

  searchInputHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  dropDownHandler = (event) => {
    this.setState({ dropDownValue: event.target.value });
  };

  showIcardHandler = (numericCode) => {
    this.setState({ clickedCountry: !this.state.clickedCountry });
    const res = this.state.countries.find(
      (country) => country.numericCode === numericCode
    );
    this.setState({ country: res }, (country) => console.log(country));
    // console.log(res);
  };

  render() {
    const filtered = this.state.countries.filter(
      (country) =>
        country.name
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) &&
        country.region
          .toLowerCase()
          .includes(this.state.dropDownValue.toLowerCase())
    );

    console.log(this.state.country);

    return (
      <Fragment>
        <SearchBox
          searcher={this.searchInputHandler}
          drop={this.dropDownHandler}
          dark={this.props.dark}
        />
        <Fragment>
          <ImportantCard
            show={this.state.clickedCountry}
            country={this.state.country}
          />
        </Fragment>
        <div
          className={
            this.props.dark
              ? "countries-container dark-background"
              : "countries-container"
          }
        >
          {filtered.map((country) => (
            <Card
              name={country.name}
              flag={country.flag}
              capital={country.capital}
              key={country.numericCode}
              dark={this.props.dark}
              clicked={() => this.showIcardHandler(country.numericCode)}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Countries;
