import React from "react";
import "./CadastroPessoa.scss";
const CadastroPessoa = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Cadastro de Cliente</h2>
        <form action="" className="form-modal-cadastro">
          <label className="label-cadastro">*Nome</label>
          <input className="input-cadastro" type="text" />
          <label className="label-cadastro">N. Pedido</label>
          <input className="input-cadastro" type="text" />
          <div className="div-buttons">
            <button className="buttons-cadastro send">Enviar</button>
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
