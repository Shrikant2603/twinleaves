import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        onClick={() => window.scroll(0, 0)}
        src={logo}
        alt="Twinleaves"
      />
    </div>
  );
};

export default Header;
