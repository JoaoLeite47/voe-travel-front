import React from "react";
import logoVoe from "../../assets/imgs/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logoVoe}
          style={{ width: "70px", height: "70px" }}
          alt="Logo"
          className="logo"
        />
      </div>
    </header>
  );
}
