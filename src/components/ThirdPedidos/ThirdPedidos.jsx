import React from "react";
import "./ThirdPedidos.scss";
import { FaPlane } from "react-icons/fa";
import { format } from "date-fns";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function ThirdPedidos({ voos }) {
  return (
    <div>
      {voos.map((voo, index) => (
        <div key={index}>
          <div className="content-box-third-pedidos">
            <h3 className="content-box-third-pedidos-h3">
              Opção de{" "}
              <span className="content-box-third-pedidos-span-1">Voo</span>{" "}
              {index + 1}{" "}
              <span className="content-box-third-pedidos-span-2">
                <FaPlane />
              </span>
            </h3>
          </div>
          <div>
            <div className="container-div-content-box-third-pedidos-box">
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Data inicial:{" "}
                  <span className="span-content-box-third-pedidos">
                    {format(new Date(voo.data_inicial), "dd/MM/yyyy")}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Data final:{" "}
                  <span className="span-content-box-third-pedidos">
                    {format(new Date(voo.data_final), "dd/MM/yyyy")}
                  </span>
                </p>
              </div>
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Horário inicial:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.horario_inicial}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Horário Final:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.horario_final}
                  </span>
                </p>
              </div>
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Destino:{" "}
                  <span className="span-content-box-third-pedidos viagem">
                    <FaArrowRight /> {voo.destino}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Origem:{" "}
                  <span className="span-content-box-third-pedidos origem">
                    <FaArrowLeft /> {voo.origem}
                  </span>
                </p>
              </div>
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  CIA:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.cia_aerea}
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