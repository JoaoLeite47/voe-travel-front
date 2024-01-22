import React, { useState } from "react";
import "./CadastroPessoa.scss";
import { createClient } from "../../services/calls";
import {
  cadastroClienteEroor,
  cadastroClienteSucess,
} from "../../assets/alerts";
const CadastroPessoa = ({ closeModal }) => {
  const [nome, setNome] = useState("");
  const [pedido, setPedido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nome,
      pedido,
    };
    const response = await createClient(data);
    if (response === 201) {
      cadastroClienteSucess();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      cadastroClienteEroor();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Cadastro de Cliente</h2>
        <form onSubmit={handleSubmit} className="form-modal-cadastro">
          <label className="label-cadastro">*Nome</label>
          <input
            className="input-cadastro"
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <label className="label-cadastro">N. Pedido</label>
          <input
            className="input-cadastro"
            type="text"
            id="pedido"
            name="pedido"
            value={pedido}
            onChange={(e) => {
              setPedido(e.target.value);
            }}
          />
          <div className="div-buttons">
            <button className="buttons-cadastro send" type="submit">
              Enviar
            </button>
            <button className="buttons-cadastro close" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroPessoa;
