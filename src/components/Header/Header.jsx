import React from "react";
import logoVoe from "../../assets/imgs/logo.png";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <button className="button-header" onClick={handleClick}>
          <img
            src={logoVoe}
            style={{ width: "70px", height: "70px" }}
            alt="Logo"
            className="logo"
          />
        </button>
      </div>
    </header>
  );
}
