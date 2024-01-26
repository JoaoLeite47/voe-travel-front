import React from "react";
import "./Voos.scss";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Swal from "sweetalert2";
import { deleteVoo } from "../../services/callsAerea";

export default function Voos({ data }) {
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
                <th>Origem:</th>
                <td>{voo.origem || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Destino:</th>
                <td>{voo.destino || "Nada Cadastrado"}</td>
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
                <th>Horário Inicial:</th>
                <td>{voo.horario_inicial || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Horário Final:</th>
                <td>{voo.horario_final || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Valor Inicial:</th>
                <td>{voo.valor_inicial || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Valor Final:</th>
                <td>{voo.valor_final || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>CIA:</th>
                <td>{voo.cia_aerea || "Nada Cadastrado"}</td>
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
                    // onClick={() => handleUpdate(voo.id, voo.client_id)}
                  >
                    Atualizar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhum Voo disponível.</p>
      )}
    </div>
  );
}
