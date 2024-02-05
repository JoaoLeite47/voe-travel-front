import React, { useState } from "react";
import { cadastroClienteEroor, cadastroHotelSucess } from "../../assets/alerts";
import { createServicos } from "../../services/callsServicos";

export default function ModalInstertServicos({
  closeModalServicos,
  ClienteId,
  clienteNome,
}) {
  const [aluguelDeCarros, setAluguelDeCarros] = useState(false);
  const [aluguelDeCarrosDescricao, setAluguelDeCarrosDescricao] = useState("");
  const [passeios, setPasseios] = useState(false);
  const [passeiosDescricao, setPasseiosDescricao] = useState("");
  const [ingressos, setIngressos] = useState(false);
  const [ingressosDescricao, setIngressosDescricao] = useState("");
  const [guias, setGuias] = useState(false);
  const [guiasDescricao, setGuiasDescricao] = useState("");
  const [cruzeiros, setCruzeiros] = useState(false);
  const [cruzeirosDescricao, setCruzeirosDescricao] = useState("");
  const [cafeDaManha, setCafeDaManha] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      client_id: ClienteId,
      aluguel_de_carros: aluguelDeCarros,
      aluguel_de_carros_descricao: aluguelDeCarrosDescricao,
      passeios: passeios,
      passeios_descricao: passeiosDescricao,
      ingressos: ingressos,
      ingressos_descricao: ingressosDescricao,
      guias: guias,
      guias_descricao: guiasDescricao,
      cruzeiros: cruzeiros,
      cruzeiros_descricao: cruzeirosDescricao,
      cafe_da_manha: cafeDaManha,
    };
    try {
      const response = await createServicos(data);
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
          <h2>Cadastro de Serviços</h2>
          <label className="label-cadastro">Cliente: {clienteNome}</label>
          <label className="label-cadastro">Aluguel de Carros:</label>
          <select
            className="input-cadastro"
            value={aluguelDeCarros}
            onChange={(e) => {
              setAluguelDeCarros(e.target.value === "true");
            }}
          >
            <option value="">Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label className="label-cadastro">
            Aluguel de Carros - Descrição:
          </label>
          <input
            className="input-cadastro"
            type="text"
            id="aluguelDescricao"
            name="aluguelDescricao"
            value={aluguelDeCarrosDescricao}
            onChange={(e) => {
              setAluguelDeCarrosDescricao(e.target.value);
            }}
          />
          <label className="label-cadastro">Passeios:</label>
          <select
            className="input-cadastro"
            value={passeios}
            onChange={(e) => {
              setPasseios(e.target.value === "true");
            }}
          >
            <option value="">Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label className="label-cadastro">Passeios - Descrição:</label>
          <input
            className="input-cadastro"
            type="text"
            id="passeios"
            name="paseios"
            value={passeiosDescricao}
            onChange={(e) => {
              setPasseiosDescricao(e.target.value);
            }}
          />
          <label className="label-cadastro">Ingressos:</label>
          <select
            className="input-cadastro"
            value={ingressos}
            onChange={(e) => {
              setIngressos(e.target.value === "true");
            }}
          >
            <option value="">Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label className="label-cadastro">Ingressos - Descrição:</label>
          <input
            className="input-cadastro"
            type="text"
            id="ingressoDescricao"
            name="ingressoDescricao"
            value={ingressosDescricao}
            onChange={(e) => {
              setIngressosDescricao(e.target.value);
            }}
          />
          <label className="label-cadastro">Guias:</label>
          <select
            className="input-cadastro"
            value={guias}
            onChange={(e) => {
              setGuias(e.target.value === "true");
            }}
          >
            <option value="">Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label className="label-cadastro">Guias - Descrição:</label>
          <input
            className="input-cadastro"
            type="text"
            id="guiasDescricao"
            name="guiasDescricao"
            value={guiasDescricao}
            onChange={(e) => {
              setGuiasDescricao(e.target.value);
            }}
          />
          <label className="label-cadastro">Cruzeiro:</label>
          <select
            className="input-cadastro"
            value={cruzeiros}
            onChange={(e) => {
              setCruzeiros(e.target.value === "true");
            }}
          >
            <option value="">Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <label className="label-cadastro">Cruzeiros - Descrição:</label>
          <input
            className="input-cadastro"
            type="text"
            id="cruzeirosDescricao"
            name="cruzeirosDescricao"
            value={cruzeirosDescricao}
            onChange={(e) => {
              setCruzeirosDescricao(e.target.value);
            }}
          />
          <label className="label-cadastro">Café da manhã:</label>
          <select
            className="input-cadastro"
            value={cafeDaManha}
            onChange={(e) => {
              setCafeDaManha(e.target.value === "true");
            }}
          >
            <option value="">Selecione</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
          <div className="div-buttons">
            <button className="buttons-cadastro send" type="submit">
              Enviar
            </button>
            <button
              className="buttons-cadastro close"
              onClick={closeModalServicos}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
