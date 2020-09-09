import React, { Component } from "react";
import "./App.css";

import Header from "./Components/Header/Header.component";

import Countries from "./Container/Countries.container";

class App extends Component {
  state = {
    darkMode: false,
  };

  darkModeHandler = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };
  render() {
    return (
      <div>
        <Header clicked={this.darkModeHandler} dark={this.state.darkMode} />

        <Countries dark={this.state.darkMode} />
      </div>
    );
  }
}

export default App;
