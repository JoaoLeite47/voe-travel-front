import React, { useState } from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { deleteConexao } from "../../services/callsConexoes";
import UpdateConexaoModal from "../UpdateConexaoModal/UpdateConexaoModal";

export default function Conexoes({ data }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedVooId, setSelectedVooId] = useState(null);
  const [vooId, setVooId] = useState(null);

  const handleUpdate = (id, voo) => {
    setVooId(voo);
    setShowUpdateModal(true);
    setSelectedVooId(id);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedVooId(null);
    setVooId(null);
  };

  const formatarData = (data) => {
    const formatoDataRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (!formatoDataRegex.test(data)) {
      return "Data inválida";
    }

    // Converte a data para o padrão brasileiro
    return format(new Date(data), "dd/MM/yyyy", { locale: ptBR });
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
        await deleteConexao(id);
        Swal.fire(
          "Deletado!",
          "a conexão foi deletada com sucesso.",
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
      <h2>Conexões Cadastradas </h2>
      {data.length > 0 ? (
        data.map((voo, index) => (
          <table className="voo-table" key={index}>
            <tbody>
              <tr>
                <th className="th-oferta">Conexão:</th>
                <td>N.{index}</td>
              </tr>
              <tr>
                <th>Destino:</th>
                <td>{voo.destino || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Origem:</th>
                <td>{voo.origem || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Data:</th>
                <td>{formatarData(voo.data_voo) || "Nada Cadastrado"}</td>
              </tr>

              <tr>
                <th>Horário saída:</th>
                <td>{voo.horario_saida || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Horário Chegada:</th>
                <td>{voo.horario_chegada || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>CIA:</th>
                <td>{voo.cia_aerea || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Código de reserva:</th>
                <td>{voo.codigo_reserva || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Bagagem de mão:</th>
                <td>{voo.bagagem_mao || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Bagagem despachada:</th>
                <td>{voo.bagagem_desp || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Ações</th>
                <td className="th-delete">
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(voo.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
              {/* <tr>
                <th>Ações</th>
                <td className="th-update">
                  <button
                    className="button-update"
                    onClick={() => handleUpdate(voo.id, voo.id_voo)}
                  >
                    Atualizar
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhuma Conexão disponível.</p>
      )}
      {/* {showUpdateModal && (
        <UpdateConexaoModal
          id={selectedVooId}
          handleClose={handleCloseUpdateModal}
          voo={vooId}
        />
      )} */}
    </div>
  );
}
