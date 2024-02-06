import React from "react";
import "./SecondPage.scss";
import { useNavigate } from "react-router-dom";

export default function SecondPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/formulario");
  };

  return (
    <div className="second-page-container">
      <div className="second-box">
        <label className="second-label">Solicite sua Cotação!</label>
        <span className="second-span">
          Confira agora a cotação para os destinos mais procurados do mundo!
        </span>
        <button className="second-button" onClick={handleClick}>
          Preencher Formulário!
        </button>
      </div>
    </div>
  );
}
