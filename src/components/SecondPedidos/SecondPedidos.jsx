import React from "react";
import "./SecondPedidos.scss";
import { FaHotel } from "react-icons/fa";
import { format } from "date-fns";

export default function SecondPedidos({ hoteis }) {

  return (
    <div>
      {hoteis.map((hotel, index) => (
        <div key={index}>
          <div>
            <div className="content-box-second-pedidos">
              <h3 className="content-box-second-pedidos-h3">
                Opção de{" "}
                <span className="content-box-second-pedidos-span-1">Hotel</span>{" "}
                {index + 1}{" "}
                <span className="content-box-second-pedidos-span-2">
                  <FaHotel />
                </span>
              </h3>
            </div>
            <div className="container-content-box-second-pedidos-box">
              <div className="div-content-box-second-pedidos-box">
                <p className="p-content-box-second-pedidos">
                  Nome do Hotel:{" "}
                  <span className="span-content-box-second-pedidos">
                    {hotel.nome_do_quarto}
                  </span>
                </p>
                <p className="p-content-box-second-pedidos">
                  Endereço:{" "}
                  <span className="span-content-box-second-pedidos">
                    {hotel.endereco}
                  </span>
                </p>
                <p className="p-content-box-second-pedidos">
                  Data Inicial:{" "}
                  <span className="span-content-box-second-pedidos">
                    {format(new Date(hotel.data_inicial), "dd/MM/yyyy")}
                  </span>
                </p>
                <p className="p-content-box-second-pedidos">
                  Data Final:{" "}
                  <span className="span-content-box-second-pedidos">
                    {format(new Date(hotel.data_final), "dd/MM/yyyy")}
                  </span>
                </p>
                <p className="p-content-box-second-pedidos">
                  Diarias:{" "}
                  <span className="span-content-box-second-pedidos">
                    {hotel.diarias}
                  </span>
                </p>
                <p className="p-content-box-second-pedidos">
                  Quarto escolhido:{" "}
                  <span className="span-content-box-second-pedidos">
                    {hotel.quarto_escolhido}
                  </span>
                </p>
              </div>
              <div className="img-container-content-box-second-pedidos">
                <img
                  src={hotel.imagem1}
                  alt="foto 1"
                  className="img-content-box-second-pedidos"
                />
                <img
                  src={hotel.imagem2}
                  alt="foto 2"
                  className="img-content-box-second-pedidos"
                />
                <img
                  src={hotel.imagem3}
                  alt="foto 3"
                  className="img-content-box-second-pedidos"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
