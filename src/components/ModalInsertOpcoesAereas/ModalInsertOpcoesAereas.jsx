import React, { useState } from "react";
import "./ModalInsertOpcoesAereas.scss";
import { cadastroClienteEroor, cadastroHotelSucess } from "../../assets/alerts";
import { createVoo } from "../../services/callsAerea";

export default function ModalInsertOpcoesAereas({
  closeModalVoos,
  ClienteId,
  clienteNome,
}) {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [horarioInicial, setHorarioInicial] = useState("");
  const [horarioFinal, setHorarioFinal] = useState("");
  const [horarioInicialVolta, setHorarioInicialVolta] = useState("");
  const [horarioFinalVolta, setHorarioFinalVolta] = useState("");
  const [ciaAerea, setCiaAerea] = useState("");
  const [codigoReserva, setCodigoReserva] = useState("");
  const [bagagemMao, setBagagemMao] = useState(0);
  const [bagagemDesp, setBagagemDesp] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id_client: ClienteId,
      origem: origem,
      destino: destino,
      data_inicial: dataInicial,
      data_final: dataFinal,
      horario_inicial: horarioInicial,
      horario_final: horarioFinal,
      cia_aerea: ciaAerea,
      codigo_reserva: codigoReserva,
      horario_inicial_volta: horarioInicialVolta,
      horario_final_volta: horarioFinalVolta,
      bagagem_mao: Number(bagagemMao),
      bagagem_desp: Number(bagagemDesp),
    };
    try {
      const response = await createVoo(data);
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
          <h2>Cadastro de Voos</h2>
          <label className="label-cadastro">Cliente: {clienteNome}</label>
          <label className="label-cadastro">Origem:</label>
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
            required
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
          <label className="label-cadastro">Horário Inicial - Volta:</label>
          <input
            className="input-cadastro"
            type="time"
            id="horarioInicialVolta"
            name="horarioInicialVolta"
            value={horarioInicialVolta}
            onChange={(e) => {
              setHorarioInicialVolta(e.target.value);
            }}
          />
          <label className="label-cadastro">Horário Final - Volta:</label>
          <input
            className="input-cadastro"
            type="time"
            id="horarioFinalVolta"
            name="horarioFinalVolta"
            value={horarioFinalVolta}
            onChange={(e) => {
              setHorarioFinalVolta(e.target.value);
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
            <button className="buttons-cadastro close" onClick={closeModalVoos}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
