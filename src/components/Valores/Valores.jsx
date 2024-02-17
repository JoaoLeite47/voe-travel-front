import React, { useState } from "react";
import Swal from "sweetalert2";
import { deleteValores } from "../../services/callsValores";
import UpdateValoresModal from "../UpdateValoresModal/UpdateValoresModal";

export default function Valores({ data }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedValoresId, setSelectedValoresId] = useState(null);
  const [clientId, setClienteId] = useState(null);

  const handleUpdate = (id, client) => {
    setShowUpdateModal(true);
    setSelectedValoresId(id);
    setClienteId(client);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedValoresId(null);
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Tem certeza?",
        text: "Você não será capaz de reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar!",
      });
      if (result.isConfirmed) {
        await deleteValores(id);
        Swal.fire("Deletado!", "O valor foi deletado com sucesso.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao exibir o alerta:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Valores Cadastrados </h2>
      {data.length > 0 ? (
        data.map((valores, index) => (
          <table className="voo-table" key={index}>
            <tbody>
              <tr>
                <th className="th-oferta">Oferta:</th>
                <td>N.{index}</td>
              </tr>
              <tr>
                <th>Valor Inicial:</th>
                <td>{valores.valor_inicial || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Valor Final:</th>
                <td>{valores.valor_final || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Link Pagamento:</th>
                <td>{valores.link_pagamento ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Ações</th>
                <td className="th-delete">
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(valores.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
              <tr>
                <th>Ações</th>
                <td className="th-update">
                  <button
                    className="button-update"
                    onClick={() => handleUpdate(valores.id, valores.client_id)}
                  >
                    Atualizar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhum Valor disponível.</p>
      )}
      {showUpdateModal && (
        <UpdateValoresModal
          id={selectedValoresId}
          handleClose={handleCloseUpdateModal}
          clientId={clientId}
        />
      )}
    </div>
  );
}
