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
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");
  const [ciaAerea, setCiaAerea] = useState("");

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
      valor_inicial: valorInicial,
      valor_final: valorFinal,
      cia_aerea: ciaAerea,
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
          <label className="label-cadastro">Valor Inicial:</label>
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
            <button className="buttons-cadastro close" onClick={closeModalVoos}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
