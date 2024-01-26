import React, { useEffect, useState } from "react";
import "./UpdateServicoModal.scss";
import { getServicoById, updateServicos } from "../../services/callsServicos";
import { updateEroor, updateSucess } from "../../assets/alerts";

export default function UpdateServicoModal({ handleClose, id, ClientId }) {
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
  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    const getPavimentarServico = async () => {
      try {
        const response = await getServicoById(id);
        const servicoData = response.data[0];
        setAluguelDeCarros(servicoData.aluguel_de_carros || false);
        setAluguelDeCarrosDescricao(
          servicoData.aluguel_de_carros_descricao || ""
        );
        setPasseios(servicoData.passeios || false);
        setPasseiosDescricao(servicoData.passeios_descricao || "");
        setIngressos(servicoData.ingressos || false);
        setIngressosDescricao(servicoData.ingressos_descricao || "");
        setGuias(servicoData.guias || false);
        setGuiasDescricao(servicoData.guias_descricao || "");
        setCruzeiros(servicoData.cruzeiros || false);
        setCruzeirosDescricao(servicoData.cruzeiros_descricao || "");
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarServico();

    return () => {};
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      client_id: ClientId,
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
    };

    try {
      const response = await updateServicos(data, id);
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
          <h2>Atualizar Serviços</h2>
          <label className="label-cadastro">Aluguel de Carros:</label>
          <select
            className="input-cadastro"
            value={aluguelDeCarros}
            onChange={(e) => {
              setAluguelDeCarros(e.target.value === "true");
            }}
          >
            {/* <option value="">Selecione</option> */}
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
            {/* <option value="">Selecione</option> */}
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
            {/* <option value="">Selecione</option> */}
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
            {/* <option value="">Selecione</option> */}
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
            {/* <option value="">Selecione</option> */}
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
