import React, { useState } from "react";
import { cadastroClienteEroor, cadastroHotelSucess } from "../../assets/alerts";
import "./ModalInsertConexoes.scss";
import { createConexao } from "../../services/callsConexoes";

export default function ModalInsertConexoes({
  voo_id,
  handleClose,
  vooOrigem,
}) {
  const [destino, setDestino] = useState("");
  const [dataVoo, setDataVoo] = useState("");
  const [horarioSaida, setHoriarioSaida] = useState("");
  const [horarioChegada, setHorarioChegada] = useState("");
  const [ciaAerea, setCiaAerea] = useState("");
  const [codigoReserva, setCodigoReserva] = useState("");
  const [bagagemMao, setBagagemMao] = useState(0);
  const [bagagemDesp, setBagagemDesp] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id_voo: voo_id,
      origem: vooOrigem,
      destino: destino,
      data_voo: dataVoo,
      horario_saida: horarioSaida,
      horario_chegada: horarioChegada,
      cia_aerea: ciaAerea,
      codigo_reserva: codigoReserva,
      bagagem_mao: Number(bagagemMao),
      bagagem_desp: Number(bagagemDesp),
    };
    try {
      const response = await createConexao(data);
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
        <form className="form-modal-cadastro" onSubmit={handleSubmit}>
          <h2>Cadastro de Conexões</h2>
          <label className="label-cadastro">Conexão do voo: {vooOrigem}</label>
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
            <button className="buttons-cadastro close" onClick={handleClose}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
