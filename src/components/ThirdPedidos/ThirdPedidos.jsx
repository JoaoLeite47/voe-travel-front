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
            <p className="p-content-box-third-pedidos">
              Código de Reserva:{" "}
              <span className="span-content-box-third-pedidos">
                {voo.codigo_reserva}
              </span>
            </p>
          </div>
          <div>
            <div className="container-div-content-box-third-pedidos-box">
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Data de ída:{" "}
                  <span className="span-content-box-third-pedidos">
                    {format(new Date(voo.data_inicial), "dd/MM/yyyy")}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Data de retorno:{" "}
                  <span className="span-content-box-third-pedidos">
                    {format(new Date(voo.data_final), "dd/MM/yyyy")}
                  </span>
                </p>
              </div>
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Embarque:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.horario_inicial}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Embarque:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.horario_inicial_volta}
                  </span>
                </p>
              </div>
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Desembarque:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.horario_final}
                  </span>
                </p>

                <p className="p-content-box-third-pedidos">
                  Desembarque:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.horario_final_volta}
                  </span>
                </p>
              </div>
              <div className="div-content-box-third-pedidos-box">
                <p className="p-content-box-third-pedidos">
                  Origem:{" "}
                  <span className="span-content-box-third-pedidos origem">
                    <FaArrowLeft /> {voo.origem}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Destino:{" "}
                  <span className="span-content-box-third-pedidos viagem">
                    <FaArrowRight /> {voo.destino}
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
                <p className="p-content-box-third-pedidos">
                  Bagagem de mão:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.bagagem_mao}
                  </span>
                </p>
                <p className="p-content-box-third-pedidos">
                  Bagagem despachada:{" "}
                  <span className="span-content-box-third-pedidos">
                    {voo.bagagem_desp}
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
