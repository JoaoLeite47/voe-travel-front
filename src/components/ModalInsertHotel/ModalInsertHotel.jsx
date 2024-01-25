import React, { useState } from "react";
import "./ModalInsertHotel.scss";
import { createHotel } from "../../services/callsHotel";
import { cadastroClienteEroor, cadastroHotelSucess } from "../../assets/alerts";

export default function ModalInsertHotel({
  closeModalHotel,
  ClienteId,
  clienteNome,
}) {
  const [imagem1, setImagem1] = useState("");
  const [imagem2, setImagem2] = useState("");
  const [imagem3, setImagem3] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [quartoEscolhido, setQuartoEscolhido] = useState("");
  const [quartoEscolhidoTipo, setQuartoEscolhidoTipo] = useState("");
  const [quartoEscolhidoEndereco, setQuartoEscolhidoEndereco] = useState("");
  const [cafeDaManha, setCafeDaManha] = useState(false);
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      client_id: ClienteId,
      imagem1: imagem1,
      imagem2: imagem2,
      imagem3: imagem3,
      endereco: endereco,
      data_inicial: dataInicial,
      data_final: dataFinal,
      quarto_escolhido: quartoEscolhido,
      quarto_escolhido_tipo: quartoEscolhidoTipo,
      quarto_escolhido_endereco: quartoEscolhidoEndereco,
      cafe_da_manha: cafeDaManha,
      valor_inicial: valorInicial,
      valor_final: valorFinal,
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
        <form onSubmit={handleSubmit} className="form-modal-cadastro">
          <h2>Cadastro de Hotel</h2>
          <label className="label-cadastro">Cliente: {clienteNome}</label>
          <label className="label-cadastro">Foto - 1:</label>
          <input
            className="input-cadastro"
            type="text"
            id="imagem1"
            name="imagem1"
            value={imagem1}
            onChange={(e) => {
              setImagem1(e.target.value);
            }}
          />
          <label className="label-cadastro">Foto - 2:</label>
          <input
            className="input-cadastro"
            type="text"
            id="imagem2"
            name="imagem2"
            value={imagem2}
            onChange={(e) => {
              setImagem2(e.target.value);
            }}
          />
          <label className="label-cadastro">Foto - 3:</label>
          <input
            className="input-cadastro"
            type="text"
            id="imagem3"
            name="imagem3"
            value={imagem3}
            onChange={(e) => {
              setImagem3(e.target.value);
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
          <label className="label-cadastro">*Café da manhã:</label>
          <select
            className="input-cadastro"
            value={cafeDaManha}
            onChange={(e) => {
              setCafeDaManha(e.target.value);
            }}
            required
          >
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label className="label-cadastro">Valor - Inicial:</label>
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
