import React from "react";
import "./Footer.scss";
import logo from "../../assets/imgs/logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div>
          <img src={logo} alt="logo" />
          <p>Email: Flaviocaribe@voemaistravel.com.br</p>
          <p>Celular: (ddd) 0 0000-0000</p>
          <p>
            Instagram:{" "}
            <a href="https://www.instagram.com/voemaistravel_">
              @voemaistravel_
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a href="https://www.facebook.com/voeplustravel">Voe + Travel</a>
          </p>
          <p>CNPJ: 52.794.961/0001-19</p>
        </div>
        <div>
          <p>
            Ao continuar a usar os serviços da Voe + Travel, <br />
            você reconhece e concorda com estes
            <br /> termos relacionados à proteção de dados.
          </p>
        </div>
      </div>
      <p> 1.0.0  &copy; Voe + Travel 2024 Alguns direitos reservados.</p>
    </div>
  );
}
