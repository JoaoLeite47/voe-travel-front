import React, { useState } from "react";
import "./Hotel.scss";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { deleteHotel } from "../../services/callsHotel";
import Swal from "sweetalert2";

export default function Hotel(data) {

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
        Swal.fire(
          "Deletado!",
          "O cliente foi deletado com sucesso.",
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
                <th>Café da Manhã:</th>
                <td>{hotel.cafe_da_manha ? "Sim" : "Não"}</td>
              </tr>
              <tr>
                <th>Valor Inicial:</th>
                <td>{hotel.valor_inicial || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Valor Final:</th>
                <td>{hotel.valor_final || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Foto - 1:</th>
                <td>{hotel.imagem1 || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Foto - 2:</th>
                <td>{hotel.imagem2 || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th>Foto - 3:</th>
                <td>{hotel.imagem3 || "Nada Cadastrado"}</td>
              </tr>
              <tr>
                <th className="th-delete">
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(hotel.id)}
                  >
                    DELETAR
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Nenhum hotel disponível.</p>
      )}
    </div>
  );
}
