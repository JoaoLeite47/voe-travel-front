import React from "react";
import {
  FaHiking,
  FaTicketAlt,
  FaMapMarkedAlt,
  FaShip,
  FaCoffee,
  FaCar,
} from "react-icons/fa";
import "./FourthPedidos.scss";

export default function FourthPedidos({ servico }) {
  console.log(servico);
  return (
    <div>
      {servico.map((item, index) => (
        <div key={index}>
          <h2 className="h2-fourth-page-pedidos">Serviços Escolhidos!</h2>
          <div className="fourth-page-container-pedidos">
            <div className="second-box-home-pedidos">
              <div className="category-pedidos">
                <div className="icon-button-pedidos">
                  <FaHiking className="icon-pedidos" />
                </div>
                {item.passeios === 1 ? (
                  <h3>Passeios - Contratado!</h3>
                ) : (
                  <h3>Passeios - Não Contratado</h3>
                )}
                <span className="span-descricao">
                  {item.descricao_passeios}
                </span>
              </div>
              <div className="category-pedidos">
                <div className="icon-button-pedidos">
                  <FaTicketAlt className="icon-pedidos" />
                </div>
                {item.ingressos === 1 ? (
                  <h3>Ingressos - Contratado!</h3>
                ) : (
                  <h3>Ingressos - Não Contratado</h3>
                )}
                <span className="span-descricao">
                  {item.ingressos_descricao}
                </span>
              </div>
              <div className="category-pedidos">
                <div className="icon-button-pedidos">
                  <FaMapMarkedAlt className="icon-pedidos" />
                </div>
                {item.guias === 1 ? (
                  <h3>Guias - Contratado!</h3>
                ) : (
                  <h3>Guias - Não Contratado</h3>
                )}
                <span className="span-descricao">{item.guias_descricao}</span>
              </div>
              <div className="category-pedidos">
                <div className="icon-button-pedidos">
                  <FaShip className="icon-pedidos" />
                </div>
                {item.cruzeiros === 1 ? (
                  <h3>Cruzeiro - Contratado!</h3>
                ) : (
                  <h3>Cruzeiro - Não Contratado</h3>
                )}
                <span className="span-descricao">
                  {item.cruzeiros_descricao}
                </span>
              </div>
              <div className="category-pedidos">
                <div className="icon-button-pedidos">
                  <FaCoffee className="icon-pedidos" />
                </div>
                {item.cafe_da_manha === 1 ? (
                  <h3>Café da manhã - Contratado!</h3>
                ) : (
                  <h3>Café da manhã - Não Contratado</h3>
                )}
              </div>
              <div className="category-pedidos">
                <div className="icon-button-pedidos">
                  <FaCar className="icon-pedidos" />
                </div>
                {item.cafe_da_manha === 1 ? (
                  <h3>Aluguel de Carro - Contratado!</h3>
                ) : (
                  <h3>Aluguel de Carro - Não Contratado</h3>
                )}
                <span className="span-descricao">
                  {item.aluguel_de_carros_descricao}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
