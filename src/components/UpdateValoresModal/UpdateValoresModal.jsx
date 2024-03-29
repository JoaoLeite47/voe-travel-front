import React, { useEffect, useState } from "react";
import { getValoresById, updateValores } from "../../services/callsValores";
import { updateEroor, updateSucess } from "../../assets/alerts";

export default function UpdateValoresModal({ handleClose, id, clientId }) {
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");
  const [linkPagamento, setLinkPagamento] = useState("");
  const [oferta, setOferta] = useState("");

  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarValores = async () => {
      try {
        const response = await getValoresById(id);
        const valoresData = response.data[0];
        setValorInicial(valoresData.valor_inicial || "");
        setValorFinal(valoresData.valor_final || "");
        setLinkPagamento(valoresData.link_pagamento || "");
        setOferta(valoresData.oferta || "");
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarValores();

    return () => {};
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      client_id: clientId,
      valor_inicial: valorInicial,
      valor_final: valorFinal,
      link_pagamento: linkPagamento,
      oferta: oferta,
    };

    try {
      const response = await updateValores(data, id);
      if (response == 200) {
        updateSucess();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      updateEroor();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="form-modal-cadastro" onSubmit={handleUpdate}>
          <h2>Atualizar Valores</h2>
          <label className="label-cadastro">Valor Inicial:</label>
          <input
            className="input-cadastro"
            type="text"
            id="valorInicial"
            name="valorInicial"
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
            id="valorFinal"
            name="valorFinal"
            value={linkPagamento}
            onChange={(e) => {
              setLinkPagamento(e.target.value);
            }}
          />
          <label className="label-cadastro">Oferta:</label>
          <input
            className="input-cadastro"
            type="text"
            id="oferta"
            name="oferta"
            value={oferta}
            onChange={(e) => {
              setOferta(e.target.value);
            }}
          />
          <div className="div-buttons">
            <button className="buttons-cadastro send" type="submit">
              Enviar
            </button>
            <button className="buttons-cadastro close" onClick={handleCancel}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
