import React from "react";
import { FaPlane } from "react-icons/fa";
import { format } from "date-fns";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "./SixthPedidos.scss";

export default function SixthPedidos({ conexao }) {
  return (
    <div>
      {conexao.map((conexoes, index) => (
        <div key={index}>
          <div className="content-box-sixth-pedidos">
            <h3 className="content-box-sixth-pedidos-h3">
              Conexão{" "}
              <span className="content-box-sixth-pedidos-span-1">
                {conexoes.origem}
              </span>{" "}
              <span className="content-box-sixth-pedidos-span-2">
                <FaPlane />
              </span>
            </h3>
            {conexoes.codigo_reserva !== "" && (
              <p className="p-content-box-sixth-pedidos">
                Código de Reserva:{" "}
                <span className="span-content-box-sixth-pedidos">
                  {conexoes.codigo_reserva}
                </span>
              </p>
            )}
          </div>
          <div>
            <div className="container-div-content-box-sixth-pedidos-box">
              <div className="div-content-box-sixth-pedidos-box">
                <p className="p-content-box-sixth-pedidos">
                  Data de ída:{" "}
                  <span className="span-content-box-sixth-pedidos">
                    {format(new Date(conexoes.data_voo), "dd/MM/yyyy")}
                  </span>
                </p>
              </div>
              <div className="div-content-box-sixth-pedidos-box">
                <p className="p-content-box-sixth-pedidos">
                  Embarque:{" "}
                  <span className="span-content-box-sixth-pedidos">
                    {conexoes.horario_saida}
                  </span>
                </p>
              </div>
              <div className="div-content-box-sixth-pedidos-box">
                <p className="p-content-box-sixth-pedidos">
                  Desembarque:{" "}
                  <span className="span-content-box-sixth-pedidos">
                    {conexoes.horario_chegada}
                  </span>
                </p>
              </div>
              <div className="div-content-box-sixth-pedidos-box">
                <p className="p-content-box-sixth-pedidos">
                  Origem:{" "}
                  <span className="span-content-box-sixth-pedidos origem">
                    <FaArrowLeft /> {conexoes.origem}
                  </span>
                </p>
                <p className="p-content-box-sixth-pedidos">
                  Destino:{" "}
                  <span className="span-content-box-sixth-pedidos viagem">
                    <FaArrowRight /> {conexoes.destino}
                  </span>
                </p>
              </div>
              <div className="div-content-box-sixth-pedidos-box">
                <p className="p-content-box-sixth-pedidos">
                  CIA:{" "}
                  <span className="span-content-box-sixth-pedidos">
                    {conexoes.cia_aerea}
                  </span>
                </p>
                <p className="p-content-box-sixth-pedidos">
                  Bagagem de mão:{" "}
                  <span className="span-content-box-sixth-pedidos">
                    {conexoes.bagagem_mao}
                  </span>
                </p>
                <p className="p-content-box-sixth-pedidos">
                  Bagagem despachada:{" "}
                  <span className="span-content-box-sixth-pedidos">
                    {conexoes.bagagem_desp}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
