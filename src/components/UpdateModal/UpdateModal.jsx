import React, { useEffect, useState } from "react";
import "./UpdateModal.scss";
import { getClientId, updateClient } from "../../services/calls";
import {
  cadastroClienteEroor,
  cadastroClienteSucess,
} from "../../assets/alerts";

export default function UpdateModal({ handleClose, id }) {
  const [nome, setNome] = useState("");
  const [pedido, setPedido] = useState("");

  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getClientId(id);
        const pessoaData = response.data[0];
        setNome(pessoaData.nome || "");
        setPedido(pessoaData.pedido || "");
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarPessoa();

    return () => {};
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      nome: nome,
      pedido: pedido,
    };

    try {
      const response = await updateClient(data, id);
      if (response == 200) {
        cadastroClienteSucess();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      cadastroClienteEroor();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="update-person-modal">
      <div className="update-person-modal-content">
        <h2 className="update-h2">Atualizar Cliente</h2>
        <form onSubmit={handleUpdate}>
          <label className="label-update">Nome:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            maxLength={255}
          />{" "}
          <label className="label-update">Pedido:</label>
          <input
            className="input-update"
            type="text"
            placeholder="Pedido"
            value={pedido}
            onChange={(e) => setPedido(e.target.value)}
            maxLength={255}
          />
          <div className="button-container">
            <button className="cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
