import React, { useState } from "react";
import "./ModalInsertHotel.scss";
import { createHotel } from "../../services/callsHotel";
import { cadastroClienteEroor, cadastroHotelSucess } from "../../assets/alerts";

export default function ModalInsertHotel({
  closeModalHotel,
  ClienteId,
  clienteNome,
}) {
  const [endereco, setEndereco] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [quartoEscolhido, setQuartoEscolhido] = useState("");
  const [quartoEscolhidoTipo, setQuartoEscolhidoTipo] = useState("");
  const [quartoEscolhidoEndereco, setQuartoEscolhidoEndereco] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [selectedPhoto2, setSelectedPhoto2] = useState("");
  const [selectedPhoto3, setSelectedPhoto3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      client_id: ClienteId,
      imagem1: selectedPhoto,
      imagem2: selectedPhoto2,
      imagem3: selectedPhoto3,
      endereco: endereco,
      data_inicial: dataInicial,
      data_final: dataFinal,
      quarto_escolhido: quartoEscolhido,
      quarto_escolhido_tipo: quartoEscolhidoTipo,
      quarto_escolhido_endereco: quartoEscolhidoEndereco,
    };
    try {
      const response = await createHotel(data);
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
        <form
          onSubmit={handleSubmit}
          className="form-modal-cadastro"
          encType="multipart/form-data"
        >
          <h2>Cadastro de Hotel</h2>
          <label className="label-cadastro">Cliente: {clienteNome}</label>
          <label className="label-cadastro">Foto - 1:</label>
          <input
            className="input-cadastro"
            type="text"
            id="photoInput"
            value={selectedPhoto}
            onChange={(e) => {
              setSelectedPhoto(e.target.value);
            }}
          />
          <label className="label-cadastro">Foto - 2:</label>
          <input
            className="input-cadastro"
            type="text"
            id="photoInput2"
            value={selectedPhoto2}
            onChange={(e) => {
              setSelectedPhoto2(e.target.value);
            }}
          />
          <label className="label-cadastro">Foto - 3:</label>
          <input
            className="input-cadastro"
            type="text"
            id="photoInput3"
            value={selectedPhoto3}
            onChange={(e) => {
              setSelectedPhoto3(e.target.value);
            }}
          />
          <label className="label-cadastro">Endereço:</label>
          <input
            className="input-cadastro"
            type="text"
            id="endereco"
            name="endereco"
            value={endereco}
            onChange={(e) => {
              setEndereco(e.target.value);
            }}
          />
          <label className="label-cadastro">*Data Inicial:</label>
          <input
            className="input-cadastro"
            type="date"
            id="dataInicial"
            name="dataInicial"
            value={dataInicial}
            onChange={(e) => {
              setDataInicial(e.target.value);
            }}
            required
          />
          <label className="label-cadastro">*Data Final:</label>
          <input
            className="input-cadastro"
            type="date"
            id="dataFinal"
            name="dataFinal"
            value={dataFinal}
            onChange={(e) => {
              setDataFinal(e.target.value);
            }}
            required
          />
          <label className="label-cadastro">Quarto:</label>
          <input
            className="input-cadastro"
            type="text"
            id="quartoEscolhido"
            name="quartoEscolhido"
            value={quartoEscolhido}
            onChange={(e) => {
              setQuartoEscolhido(e.target.value);
            }}
          />
          <label className="label-cadastro">Quarto - Tipo:</label>
          <input
            className="input-cadastro"
            type="text"
            id="quartoEscolhidoTipo"
            name="quartoEscolhidoTipo"
            value={quartoEscolhidoTipo}
            onChange={(e) => {
              setQuartoEscolhidoTipo(e.target.value);
            }}
          />
          <label className="label-cadastro">Quarto - Endereço:</label>
          <input
            className="input-cadastro"
            type="text"
            id="quartoEscolhidoEndereco"
            name="quartoEscolhidoEndereco"
            value={quartoEscolhidoEndereco}
            onChange={(e) => {
              setQuartoEscolhidoEndereco(e.target.value);
            }}
          />
          <div className="div-buttons">
            <button className="buttons-cadastro send" type="submit">
              Enviar
            </button>
            <button
              className="buttons-cadastro close"
              onClick={closeModalHotel}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
