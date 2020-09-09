import React from "react";
import "./Header.styles.css";

const Header = (props) => {
  return (
    <header className={props.dark ? "header header-darkmode" : "header"}>
      <span className="header__logo">Geography Now</span>
      <span className="header__darkmode" onClick={props.clicked}>
        Dark Mode
      </span>
    </header>
  );
};

export default Header;
