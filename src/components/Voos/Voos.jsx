import React, { useEffect, useState } from "react";
import "./Voos.scss";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Swal from "sweetalert2";
import { deleteVoo } from "../../services/callsAerea";
import UpdateVooModal from "../UpdateVooModal/UpdateVooModal";
import ModalInsertConexoes from "../ModalInsertConexoes/ModalInsertConexoes";
import Conexoes from "../Conexoes/Conexoes";
import { getConexoesById } from "../../services/callsConexoes";

export default function Voos({ data, clientIdForConexion }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showConexoesModal, setShowConexoesModal] = useState(false);
  const [selectedVooId, setSelectedVooId] = useState(null);
  const [clientId, setClienteId] = useState(null);
  const [origem, setOrigem] = useState(null);
  const [dataVoos, setDataVoos] = useState([]);
  const [showVoosComponent, setShowVoosComponent] = useState(false);

  const handleUpdate = (id, client) => {
    setShowUpdateModal(true);
    setSelectedVooId(id);
    setClienteId(client);
  };

  const handleClickConexoes = (id, origem) => {
    setShowConexoesModal(true);
    setSelectedVooId(id);
    setOrigem(origem);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedVooId(null);
  };

  const handleCloseConexoesModal = () => {
    setShowConexoesModal(false);
    setSelectedVooId(null);
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
        await deleteVoo(id);
        Swal.fire("Deletado!", "O Voo foi deletado com sucesso.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao exibir o alerta:", error);
    }
  };

  const showVoos = (id) => {
    setSelectedVooId(id);
    setShowVoosComponent(true);
  };

  useEffect(() => {
    const getPavimentarConexao = async () => {
      try {
        if (selectedVooId !== null) {
          const response = await getConexoesById(selectedVooId);
          const conexaoData = response.data.map((conexoes) => {
            return conexoes;
          });
          setDataVoos(conexaoData);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarConexao();

    return () => {};
  }, [selectedVooId]);

  return (
    <div className="form-container">
      <h2>Voos Cadastrados </h2>
      {data.length > 0 ? (
        data.map((voo, index) => (
          <table className="voo-table" key={index}>
            <tbody>
              <tr>
                <th className="th-oferta">Oferta:</th>
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
                <th>Data Inicial:</th>
                <td>{formatarData(voo.data_inicial) || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Data Final:</th>
                <td>{formatarData(voo.data_final) || "Nada Cadastrado"}</td>
              </tr>

              <tr>
                <th>Horário Inicial - Ida:</th>
                <td>{voo.horario_inicial || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Horário Final - Ida:</th>
                <td>{voo.horario_final || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Horário Inicial - Retorno:</th>
                <td>{voo.horario_inicial_volta || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Horário Final - Retorno:</th>
                <td>{voo.horario_final_volta || "Nada Cadastrado"}</td>
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
              <tr>
                <th>Ações</th>
                <td className="th-update">
                  <button
                    className="button-update"
                    onClick={() => handleUpdate(voo.id, voo.id_client)}
                  >
                    Atualizar
                  </button>
                </td>
              </tr>
              <tr>
                <th>Cadastro</th>
                <td className="th-conexoes">
                  <button
                    className="button-conexoes"
                    onClick={() => handleClickConexoes(voo.id, voo.origem)}
                  >
                    Conexão
                  </button>
                </td>
              </tr>
              <tr>
                <th>Conexões</th>
                <td className="th-conexoes">
                  <button
                    className="button-conexoes"
                    onClick={() => showVoos(voo.id)}
                  >
                    Mostrar Conexões
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhum Voo disponível.</p>
      )}
      {showUpdateModal && (
        <UpdateVooModal
          id={selectedVooId}
          handleClose={handleCloseUpdateModal}
          clientId={clientId}
        />
      )}
      {showConexoesModal && (
        <ModalInsertConexoes
          voo_id={selectedVooId}
          handleClose={handleCloseConexoesModal}
          vooOrigem={origem}
          clientIdForConexion={clientIdForConexion}
        />
      )}
      {showVoosComponent && <Conexoes data={dataVoos} />}
    </div>
  );
}
