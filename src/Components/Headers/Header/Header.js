import React from "react";
import logo from "../../../Assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img
          src={logo}
          alt="Logo da Labels, uma escrita em branco dizendo Labels"
        />
      </div>
    </header>
  );
};

export default Header;
