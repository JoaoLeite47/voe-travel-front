import React from "react";
import "./SixthPage.scss";
import { useNavigate } from "react-router-dom";

export default function SixthPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/formulario");
  };

  return (
    <div className="sixth-page-container">
      <div className="sixth-box">
        <label className="sixth-label">Por que escolher a Voe + Travel?</label>
        <span className="sixth-span">
          Ao escolher a voe + Travel, você está optando por uma experiência de
          viagem única,
          <br /> onde a qualidade, confiabilidade e satisfação do cliente estão
          no centro de tudo que fazemos.
        </span>
        <button className="sixth-button" onClick={handleClick}>
          Preencher Formulário!
        </button>
      </div>
    </div>
  );
}
