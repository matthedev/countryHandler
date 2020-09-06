import React from "react";
import "./App.css";

import Header from "./Components/Header/Header.component";

import Countries from "./Container/Countries.container";

function App() {
  return (
    <div>
      <Header />

      <Countries />
    </div>
  );
}

export default App;
