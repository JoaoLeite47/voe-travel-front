import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalRedirect.scss";

export default function ModalRedirect({ closeModal }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === "76543") {
      navigate(`/cadastro`);
      closeModal();
    } else {
      alert("Senha incorreta");
    }
  };

  return (
    <div className="first-page-modal-overlay">
      <div className="first-page-modal">
        <h3 className="h3-first-page-modal">Insira sua senha</h3>
        <input
          type="text"
          className="input-pedido"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
