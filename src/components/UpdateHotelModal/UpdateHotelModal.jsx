import React, { useEffect, useState } from "react";
import { getHotelById, updateHotel } from "../../services/callsHotel";
import "./UpdateHotelModal.scss";
import { updateEroor, updateSucess } from "../../assets/alerts";

export default function UpdateHotelModal({ handleClose, id, clientId }) {
  const [endereco, setEndereco] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [quartoEscolhido, setQuartoEscolhido] = useState("");
  const [quartoEscolhidoTipo, setQuartoEscolhidoTipo] = useState("");
  const [quartoEscolhidoEndereco, setQuartoEscolhidoEndereco] = useState("");
  const [cafeDaManha, setCafeDaManha] = useState(false);
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");

  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarHotel = async () => {
      try {
        const response = await getHotelById(id);
        const hotelData = response.data[0];
        setEndereco(hotelData.endereco || "");
        setDataInicial(hotelData.data_inicial || "");
        setDataFinal(hotelData.data_final || "");
        setQuartoEscolhido(hotelData.quarto_escolhido || "");
        setQuartoEscolhidoTipo(hotelData.quarto_escolhido_tipo || "");
        setQuartoEscolhidoEndereco(hotelData.quarto_escolhido_endereco || "");
        setCafeDaManha(hotelData.cafe_da_manha || false);
        setValorInicial(hotelData.valor_inicial || "");
        setValorFinal(hotelData.valor_final || "");
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
      // imagem1: selectedPhoto,
      // imagem2: selectedPhoto2,
      // imagem3: selectedPhoto3,
      endereco: endereco,
      data_inicial: dataInicialDate.toISOString().split("T")[0],
      data_final: dataFinalDate.toISOString().split("T")[0],
      quarto_escolhido: quartoEscolhido,
      quarto_escolhido_tipo: quartoEscolhidoTipo,
      quarto_escolhido_endereco: quartoEscolhidoEndereco,
      cafe_da_manha: cafeDaManha,
      valor_inicial: valorInicial,
      valor_final: valorFinal,
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
          {/* <label className="label-cadastro">Foto - 1:</label>
          <input
            className="input-cadastro"
            type="file"
            name="imagem1"
            accept="image/*"
            id="photoInput"
            onChange={handlePhotoChange}
          />
          <label className="label-cadastro">Foto - 2:</label>
          <input
            className="input-cadastro"
            type="file"
            name="imagem2"
            accept="image/*"
            id="photoInput2"
            onChange={handlePhotoChange2}
          />
          <label className="label-cadastro">Foto - 3:</label>
          <input
            className="input-cadastro"
            type="file"
            name="imagem3"
            accept="image/*"
            id="photoInput3"
            onChange={handlePhotoChange3}
          /> */}
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
              setCafeDaManha(e.target.value === "true"); // converte para booleano
            }}
            required
          >
            <option value="">Selecione</option>
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
            <button className="buttons-cadastro close" onClick={handleCancel}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
