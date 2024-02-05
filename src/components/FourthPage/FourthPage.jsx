import React from "react";
import "./FourthPage.scss";
import {
  FaPlane,
  FaBus,
  FaHotel,
  FaShip,
  FaUmbrella,
  FaSuitcase,
  FaMapMarkerAlt,
  FaCar,
} from "react-icons/fa";

export default function FourthPage() {
  return (
    <div>
      <h2 className="h2-fourth-page">Nossos serviços!</h2>
      <div className="fourth-page-container">
        <div className="second-box">
          <div className="category">
            <div className="icon-button">
              <FaPlane className="icon" />
            </div>
            <h3>Passagens aéreas!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaBus className="icon" />
            </div>
            <h3>Passagens de ônibus!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaHotel className="icon" />
            </div>
            <h3>Hotéis!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaShip className="icon" />
            </div>
            <h3>Cruzeiros!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaUmbrella className="icon" />
            </div>
            <h3>Seguro de viagem!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaSuitcase className="icon" />
            </div>
            <h3>Pacotes!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Serviços no local!</h3>
          </div>
          <div className="category">
            <div className="icon-button">
              <FaCar className="icon" />
            </div>
            <h3>Aluguel de carros!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
