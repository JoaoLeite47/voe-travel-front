import React from "react";
import "./FirstPedidos.scss";
import foto from "../../assets/imgs/foto-1-pedidos-1.jpg";

export default function FirstPedidos({ cliente }) {
  return (
    <div
      className="first-pedidos-container"
      style={{ backgroundImage: `url(${foto})` }}
    >
      <div className="box-pedidos">
        <div className="content-pedidos">
          <div className="cotainer-sub-pedidos">
            <div>
              <p className="p-pedidos">
                Pedido N.{" "}
                <span className="span-1-pedidos">{cliente.pedido}</span>
              </p>
            </div>
            <div>
              <h2 className="h2-pedidos">
                Viva Experiências únicas!{" "}
                <span className="span-2-pedidos">{cliente.nome}</span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
