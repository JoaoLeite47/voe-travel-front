import React, { useEffect, useState } from "react";
import { getConexaoById } from "../../services/callsConexoes";
import { updateEroor, updateSucess } from "../../assets/alerts";

export default function UpdateConexaoModal(id, handleClose, voo) {
  const [destino, setDestino] = useState("");
  const [dataVoo, setDataVoo] = useState("");
  const [horarioSaida, setHoriarioSaida] = useState("");
  const [horarioChegada, setHorarioChegada] = useState("");
  const [ciaAerea, setCiaAerea] = useState("");
  const [codigoReserva, setCodigoReserva] = useState("");
  const [bagagemMao, setBagagemMao] = useState(0);
  const [bagagemDesp, setBagagemDesp] = useState(0);

  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarConexao = async () => {
      try {
        const response = await getConexaoById(id);
        const vooData = response.data[0];
        setDestino(vooData.destino || "");
        setDataVoo(vooData.data_voo || "");
        setHoriarioSaida(vooData.horario_saida || "");
        setHorarioChegada(vooData.horario_chegada || "");
        setCiaAerea(vooData.cia_aerea || "");
        setCodigoReserva(vooData.codigo_reserva || "");
        setBagagemMao(vooData.bagagem_mao || "");
        setBagagemDesp(vooData.bagagem_desp || "");
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarConexao();

    return () => {};
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const dataInicialDate = new Date(dataVoo);

    // Certifique-se de que os objetos Date foram criados corretamente
    if (isNaN(dataInicialDate)) {
      console.error("Erro ao converter datas para objetos Date.");
      return;
    }

    const data = {
      id_voo: voo,
      origem: vooOrigem,
      destino: destino,
      data_voo: dataInicialDate.toISOString().split("T")[0],
      horario_saida: horarioSaida,
      horario_chegada: horarioChegada,
      cia_aerea: ciaAerea,
      codigo_reserva: codigoReserva,
      bagagem_mao: Number(bagagemMao),
      bagagem_desp: Number(bagagemDesp),
    };

    // try {
    //   const response = await updateVoos(data, id);
    //   if (response == 200) {
    //     updateSucess();
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 3000);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   updateEroor();
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000);
    // }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="form-modal-cadastro" onSubmit={handleUpdate}>
          <h2>Atualizar Conexões</h2>
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
          <label className="label-cadastro">*Data:</label>
          <input
            className="input-cadastro"
            type="date"
            id="dataInicial"
            name="dataInicial"
            value={dataVoo}
            onChange={(e) => {
              setDataVoo(e.target.value);
            }}
            required
          />
          <label className="label-cadastro">Horário Saída:</label>
          <input
            className="input-cadastro"
            type="time"
            id="horarioInicial"
            name="horarioInicial"
            value={horarioSaida}
            onChange={(e) => {
              setHoriarioSaida(e.target.value);
            }}
          />
          <label className="label-cadastro">Horário Chegada:</label>
          <input
            className="input-cadastro"
            type="time"
            id="horarioFinal"
            name="horarioFinal"
            value={horarioChegada}
            onChange={(e) => {
              setHorarioChegada(e.target.value);
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
          <label className="label-cadastro">Codigo de reserva:</label>
          <input
            className="input-cadastro"
            type="text"
            id="codigoReserva"
            name="codigoReserva"
            value={codigoReserva}
            onChange={(e) => {
              setCodigoReserva(e.target.value);
            }}
          />
          <label className="label-cadastro">Bagagem de mão:</label>
          <input
            className="input-cadastro"
            type="number"
            id="bagagemMao"
            name="bagagemMao"
            value={bagagemMao}
            onChange={(e) => {
              setBagagemMao(e.target.value);
            }}
          />
          <label className="label-cadastro">Bagagem Despachada:</label>
          <input
            className="input-cadastro"
            type="number"
            id="bagagemDesp"
            name="bagagemDesp"
            value={bagagemDesp}
            onChange={(e) => {
              setBagagemDesp(e.target.value);
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
