import React, { useEffect, useState } from "react";
import "./UpdateVooModal.scss";
import { getVoosById, updateVoos } from "../../services/callsAerea";
import { updateEroor, updateSucess } from "../../assets/alerts";

export default function UpdateVooModal({ handleClose, id, clientId }) {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [horarioInicial, setHorarioInicial] = useState("");
  const [horarioFinal, setHorarioFinal] = useState("");
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");
  const [ciaAerea, setCiaAerea] = useState("");

  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarVoo = async () => {
      try {
        const response = await getVoosById(id);
        const vooData = response.data[0];
        setOrigem(vooData.origem || "");
        setDestino(vooData.destino || "");
        setDataInicial(vooData.data_inicial || "");
        setDataFinal(vooData.data_final || "");
        setHorarioInicial(vooData.horario_inicial || "");
        setHorarioFinal(vooData.horario_final || "");
        setValorInicial(vooData.valor_inicial || "");
        setValorFinal(vooData.valor_final || "");
        setCiaAerea(vooData.cia_aerea || "");
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarVoo();

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
      id_client: clientId,
      origem: origem,
      destino: destino,
      data_inicial: dataInicialDate.toISOString().split("T")[0],
      data_final: dataFinalDate.toISOString().split("T")[0],
      horario_inicial: horarioInicial,
      horario_final: horarioFinal,
      valor_inicial: valorInicial,
      valor_final: valorFinal,
      cia_aerea: ciaAerea,
    };

    try {
      const response = await updateVoos(data, id);
      if (response == 200) {
        updateSucess();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
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
          <h2>Atualizar Voo</h2>
          <label className="label-cadastro">origem:</label>
          <input
            className="input-cadastro"
            type="text"
            id="origem"
            name="origem"
            value={origem}
            onChange={(e) => {
              setOrigem(e.target.value);
            }}
          />
          <label className="label-cadastro">Destino:</label>
          <input
            className="input-cadastro"
            type="text"
            id="destino"
            name="destino"
            value={destino}
            onChange={(e) => {
              setDestino(e.target.value);
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
          <label className="label-cadastro">Horário Inicial:</label>
          <input
            className="input-cadastro"
            type="time"
            id="horarioInicial"
            name="horarioInicial"
            value={horarioInicial}
            onChange={(e) => {
              setHorarioInicial(e.target.value);
            }}
          />
          <label className="label-cadastro">Horário Final:</label>
          <input
            className="input-cadastro"
            type="time"
            id="horarioFinal"
            name="horarioFinal"
            value={horarioFinal}
            onChange={(e) => {
              setHorarioFinal(e.target.value);
            }}
          />
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
          <label className="label-cadastro">CIA:</label>
          <input
            className="input-cadastro"
            type="text"
            id="cia"
            name="cia"
            value={ciaAerea}
            onChange={(e) => {
              setCiaAerea(e.target.value);
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