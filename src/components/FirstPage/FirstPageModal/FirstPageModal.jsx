import React, { useState } from "react";
import "./FirstPageModal.scss";
import { useNavigate } from "react-router-dom";

export default function FirstPageModal({ closeModal }) {
  const [pedido, setPedido] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    closeModal();
    navigate(`/pedidos/${pedido}`);
  };

  return (
    <div className="first-page-modal-overlay">
      <div className="first-page-modal">
        <h3>Insira o número do pedido</h3>
        <input
          type="text"
          className="input-pedido"
          value={pedido}
          onChange={(e) => setPedido(e.target.value)}
        />
        <button className="buttons-pedido enviar" onClick={handleSubmit}>
          Confirmar
        </button>
        <button className="buttons-pedido fechar" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
