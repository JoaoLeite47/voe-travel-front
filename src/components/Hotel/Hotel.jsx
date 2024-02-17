import React, { useState } from "react";
import "./Hotel.scss";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { deleteHotel } from "../../services/callsHotel";
import Swal from "sweetalert2";
import UpdateHotelModal from "../UpdateHotelModal/UpdateHotelModal";

export default function Hotel(data) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [clientId, setClienteId] = useState(null);

  const handleUpdate = (id, client) => {
    setShowUpdateModal(true);
    setSelectedHotelId(id);
    setClienteId(client);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedHotelId(null);
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
        await deleteHotel(id);
        Swal.fire("Deletado!", "O Hotel foi deletado com sucesso.", "success");
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
      <h2>Hoteis Cadastrados </h2>
      {data.data.length > 0 ? (
        data.data.map((hotel, index) => (
          <table className="hotel-table" key={index}>
            <tbody>
              <tr>
                <th className="th-oferta">Oferta:</th>
                <td>N.{index}</td>
              </tr>
              <tr>
                <th>Endereço:</th>
                <td>{hotel.endereco || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Data Inicial:</th>
                <td>{formatarData(hotel.data_inicial) || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Data Final:</th>
                <td>{formatarData(hotel.data_final) || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Quarto Escolhido:</th>
                <td>{hotel.quarto_escolhido || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Tipo de Quarto:</th>
                <td>{hotel.quarto_escolhido_tipo || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Endereço do Quarto:</th>
                <td>{hotel.quarto_escolhido_endereco || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Nome do hotel:</th>
                <td>{hotel.nome_do_quarto || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Diarias:</th>
                <td>{hotel.diarias || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Foto - 1:</th>
                <td>
                  {hotel.imagem1 ? (
                    <img
                      src={URL.createObjectURL(
                        new Blob([new Uint8Array(hotel.imagem1.data)], {
                          type: "image/png",
                        })
                      )}
                      alt="Imagem 1"
                    />
                  ) : (
                    "Nada Cadastrado"
                  )}
                </td>
              </tr>
              <tr>
                <th>Foto - 2:</th>
                <td>
                  {hotel.imagem2 ? (
                    <img
                      src={URL.createObjectURL(
                        new Blob([new Uint8Array(hotel.imagem2.data)], {
                          type: "image/png",
                        })
                      )}
                      alt="Imagem 2"
                    />
                  ) : (
                    "Nada Cadastrado"
                  )}
                </td>
              </tr>
              <tr>
                <th>Foto - 3:</th>
                <td>
                  {hotel.imagem3 ? (
                    <img
                      src={URL.createObjectURL(
                        new Blob([new Uint8Array(hotel.imagem3.data)], {
                          type: "image/png",
                        })
                      )}
                      alt="Imagem 3"
                    />
                  ) : (
                    "Nada Cadastrado"
                  )}
                </td>
              </tr>
              <tr>
                <th>Ações</th>
                <td className="th-delete">
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(hotel.id)}
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
                    onClick={() => handleUpdate(hotel.id, hotel.client_id)}
                  >
                    Atualizar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhum hotel disponível.</p>
      )}
      {showUpdateModal && (
        <UpdateHotelModal
          id={selectedHotelId}
          handleClose={handleCloseUpdateModal}
          clientId={clientId}
        />
      )}
    </div>
  );
}
