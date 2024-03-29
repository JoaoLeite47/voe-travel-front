import React, { useEffect, useState } from "react";
import { getHotelById, updateHotel } from "../../services/callsHotel";
import "./UpdateHotelModal.scss";
import { updateEroor, updateSucess } from "../../assets/alerts";

export default function UpdateHotelModal({ handleClose, id, clientId }) {
  const [endereco, setEndereco] = useState("");
  const [imagem1, setImagem1] = useState("");
  const [imagem2, setImagem2] = useState("");
  const [imagem3, setImagem3] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [quartoEscolhido, setQuartoEscolhido] = useState("");
  const [quartoEscolhidoTipo, setQuartoEscolhidoTipo] = useState("");
  const [quartoEscolhidoEndereco, setQuartoEscolhidoEndereco] = useState("");
  const [nomeDoQuarto, setNomeDoQuarto] = useState("");
  const [diarias, setDiarias] = useState("");

  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarHotel = async () => {
      try {
        const response = await getHotelById(id);
        const hotelData = response.data[0];
        setEndereco(hotelData.endereco || "");
        setImagem1(hotelData.imagem1 || "");
        setImagem2(hotelData.imagem2 || "");
        setImagem3(hotelData.imagem3 || "");
        setDataInicial(hotelData.data_inicial || "");
        setDataFinal(hotelData.data_final || "");
        setQuartoEscolhido(hotelData.quarto_escolhido || "");
        setQuartoEscolhidoTipo(hotelData.quarto_escolhido_tipo || "");
        setQuartoEscolhidoEndereco(hotelData.quarto_escolhido_endereco || "");
        setNomeDoQuarto(hotelData.codigo_reserva || "");
        setDiarias(hotelData.diarias || "");
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarHotel();

    return () => {};
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const dataInicialDate = new Date(dataInicial);
    const dataFinalDate = new Date(dataFinal);

    // Certifique-se de que os objetos Date foram criados corretamente
    if (isNaN(dataInicialDate) || isNaN(dataFinalDate)) {
      console.error("Erro ao converter datas para objetos Date.");
      return;
    }

    const data = {
      client_id: clientId,
      imagem1: imagem1,
      imagem2: imagem2,
      imagem3: imagem3,
      endereco: endereco,
      data_inicial: dataInicialDate.toISOString().split("T")[0],
      data_final: dataFinalDate.toISOString().split("T")[0],
      quarto_escolhido: quartoEscolhido,
      quarto_escolhido_tipo: quartoEscolhidoTipo,
      quarto_escolhido_endereco: quartoEscolhidoEndereco,
      codigo_reserva: nomeDoQuarto,
      diarias: diarias,
    };

    try {
      const response = await updateHotel(data, id);
      if (response == 200) {
        updateSucess();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      updateEroor();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="form-modal-cadastro" onSubmit={handleUpdate}>
          <h2>Atualizar Hotel</h2>
          <label className="label-cadastro">Foto - 1:</label>
          {imagem1 && (
            <img src={imagem1} alt="Imagem 1" style={{ width: "100px" }} />
          )}
          <input
            className="input-cadastro"
            type="text"
            name="imagem1"
            id="photoInput"
            value={imagem1}
            onChange={(e) => setImagem1(e.target.value)}
          />
          <label className="label-cadastro">Foto - 2:</label>
          {imagem2 && (
            <img src={imagem2} alt="Imagem 2" style={{ width: "100px" }} />
          )}
          <input
            className="input-cadastro"
            type="text"
            name="imagem2"
            id="photoInput2"
            value={imagem2}
            onChange={(e) => setImagem2(e.target.value)}
          />
          <label className="label-cadastro">Foto - 3:</label>
          {imagem3 && (
            <img src={imagem3} alt="Imagem 3" style={{ width: "100px" }} />
          )}
          <input
            className="input-cadastro"
            type="text"
            name="imagem3"
            id="photoInput3"
            value={imagem3}
            onChange={(e) => setImagem3(e.target.value)}
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
          />
          <label className="label-cadastro">Hotel:</label>
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
          {/* <label className="label-cadastro">Hotel - Endereço:</label>
          <input
            className="input-cadastro"
            type="text"
            id="quartoEscolhidoEndereco"
            name="quartoEscolhidoEndereco"
            value={quartoEscolhidoEndereco}
            onChange={(e) => {
              setQuartoEscolhidoEndereco(e.target.value);
            }}
          /> */}
          <label className="label-cadastro">Código de Reserva:</label>
          <input
            className="input-cadastro"
            type="text"
            id="quartoEscolhidoEndereco"
            name="quartoEscolhidoEndereco"
            value={nomeDoQuarto}
            onChange={(e) => {
              setNomeDoQuarto(e.target.value);
            }}
          />
          <label className="label-cadastro">Diarias:</label>
          <input
            className="input-cadastro"
            type="number"
            min="1"
            max="100"
            id="quartoEscolhidoEndereco"
            name="quartoEscolhidoEndereco"
            value={diarias}
            onChange={(e) => {
              setDiarias(e.target.value);
            }}
          />
          <div className="div-buttons">
            <button className="buttons-cadastro send" type="submit">
              Enviar
            </button>
            <button className="buttons-cadastro close" onClick={handleCancel}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
