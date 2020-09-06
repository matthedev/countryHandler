import React from "react";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <span className="header__logo">Travel There!</span>
      <span className="header__darkmode">Dark Mode</span>
    </header>
  );
};

export default Header;
