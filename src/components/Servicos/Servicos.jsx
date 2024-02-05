import React, { useState } from "react";
import "./Servicos.scss";
import Swal from "sweetalert2";
import { deleteServico } from "../../services/callsServicos";
import UpdateServicoModal from "../UpdateServicoModal/UpdateServicoModal";

export default function Servicos({ data }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedServicoId, setSelectedServicoId] = useState(null);
  const [clientId, setClienteId] = useState(null);

  const handleUpdate = (id, client) => {
    setShowUpdateModal(true);
    setSelectedServicoId(id);
    setClienteId(client);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedServicoId(null);
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
        await deleteServico(id);
        Swal.fire(
          "Deletado!",
          "O Serviço foi deletado com sucesso.",
          "success"
        );
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
      <h2>Serviços Cadastrados </h2>
      {data.length > 0 ? (
        data.map((servico, index) => (
          <table className="servicos-table" key={index}>
            <tbody>
              <tr>
                <th className="th-oferta">Oferta:</th>
                <td>N.{index}</td>
              </tr>
              <tr>
                <th>Aluguel de Carro:</th>
                <td>{servico.aluguel_de_carros ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Aluguel de Carro - Descrição:</th>
                <td>
                  {servico.aluguel_de_carros_descricao || "Nada Cadastrado"}
                </td>
              </tr>
              <tr>
                <th>Passeios:</th>
                <td>{servico.passeios ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Passeios - Descrição:</th>
                <td>{servico.passeios_descricao || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Ingressos:</th>
                <td>{servico.ingressos ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Ingressos - Descrição:</th>
                <td>{servico.ingressos_descricao || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Guias:</th>
                <td>{servico.guias ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Guias - Descrição:</th>
                <td>{servico.guias_descricao || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Cruzeiro:</th>
                <td>{servico.cruzeiros ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Cruzeiro - Descrição:</th>
                <td>{servico.cruzeiros_descricao || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Café da manhã:</th>
                <td>{servico.cafe_da_manha ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Ações</th>
                <td className="th-delete">
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(servico.id)}
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
                    onClick={() => handleUpdate(servico.id, servico.client_id)}
                  >
                    Atualizar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhum Serviço disponível.</p>
      )}
      {showUpdateModal && (
        <UpdateServicoModal
          id={selectedServicoId}
          handleClose={handleCloseUpdateModal}
          ClientId={clientId}
        />
      )}
    </div>
  );
}
