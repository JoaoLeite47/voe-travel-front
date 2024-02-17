import React, { useState } from "react";
import { cadastroClienteEroor, cadastroHotelSucess } from "../../assets/alerts";
import { createValores } from "../../services/callsValores";

export default function ModalInsertValores({
  closeModalValores,
  ClienteId,
  clienteNome,
}) {
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");
  const [linkPagamento, setLinkPagamento] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      client_id: ClienteId,
      valor_inicial: valorInicial,
      valor_final: valorFinal,
      link_pagamento: linkPagamento,
    };
    try {
      const response = await createValores(data);
      if (response.status === 201) {
        cadastroHotelSucess();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        cadastroClienteEroor();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      alert("Falha na comunicação com o servidor");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="form-modal-cadastro" onSubmit={handleSubmit}>
          <h2>Cadastro de Voos</h2>
          <label className="label-cadastro">Cliente: {clienteNome}</label>
          <label className="label-cadastro">Valor Inicial:</label>
          <input
            className="input-cadastro"
            type="text"
            id="ValorInicial"
            name="ValorInicial"
            value={valorInicial}
            onChange={(e) => {
              setValorInicial(e.target.value);
            }}
          />
          <label className="label-cadastro">Valor Final:</label>
          <input
            className="input-cadastro"
            type="text"
            id="valorFinal"
            name="valorFinal"
            value={valorFinal}
            onChange={(e) => {
              setValorFinal(e.target.value);
            }}
          />
          <label className="label-cadastro">Link Pagamento:</label>
          <input
            className="input-cadastro"
            type="text"
            id="linkPagamento"
            name="linkPagamento"
            value={linkPagamento}
            onChange={(e) => {
              setLinkPagamento(e.target.value);
            }}
          />
          <div className="div-buttons">
            <button className="buttons-cadastro send" type="submit">
              Enviar
            </button>
            <button
              className="buttons-cadastro close"
              onClick={closeModalValores}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
