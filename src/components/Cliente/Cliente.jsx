import React, { useEffect, useState } from "react";
import "./Cliente.scss";
import { getHotelByCliente } from "../../services/callsHotel";
import { getOpcoesAereasByCliente } from "../../services/callsAerea";
import { getServicosByCliente } from "../../services/callsServicos";
import ModalInsertHotel from "../ModalInsertHotel/ModalInsertHotel";
import Hotel from "../Hotel/Hotel";
import logoImage from "../../assets/imgs/logo.png";
import ModalInsertOpcoesAereas from "../ModalInsertOpcoesAereas/ModalInsertOpcoesAereas";
import Voos from "../Voos/Voos";
import ModalInstertServicos from "../modalInstertServicos/ModalInstertServicos";
import Servicos from "../Servicos/Servicos";
import { getValoresByCliente } from "../../services/callsValores";
import ModalInsertValores from "../ModalInsertValores/ModalInsertValores";
import Valores from "../Valores/Valores";

export default function Cliente({ cliente, id }) {
  const [modalHotelOpen, setModalHotelOpen] = useState(false);
  const [modalVoosOpen, setModalVoosOpen] = useState(false);
  const [modalServicosOpen, setModalServicosOpen] = useState(false);
  const [modalValoresOpen, setModalValoresOpen] = useState(false);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataVoos, setDataVoos] = useState([]);
  const [dataServicos, setDataServicos] = useState([]);
  const [dataValores, setDataValores] = useState([]);
  const [showHotelComponent, setShowHotelComponent] = useState(false);
  const [showVoosComponent, setShowVoosComponent] = useState(false);
  const [showServicosComponent, setShowServicosComponent] = useState(false);
  const [showValoresComponent, setShowValoresComponent] = useState(false);

  const openModalHotel = () => {
    setModalHotelOpen(true);
  };

  const closeModalHotel = () => {
    setModalHotelOpen(false);
  };

  const openModalValores = () => {
    setModalValoresOpen(true);
  };

  const closeModalValores = () => {
    setModalValoresOpen(false);
  };

  const openModalVoos = () => {
    setModalVoosOpen(true);
  };

  const closeModalVoos = () => {
    setModalVoosOpen(false);
  };

  const openModalServicos = () => {
    setModalServicosOpen(true);
  };

  const closeModalServicos = () => {
    setModalServicosOpen(false);
  };

  const showHotel = () => {
    setShowHotelComponent(true);
  };

  const showVoos = () => {
    setShowVoosComponent(true);
  };

  const showServicos = () => {
    setShowServicosComponent(true);
  };

  const showValores = () => {
    setShowValoresComponent(true);
  };

  useEffect(() => {
    const getPavimentarhotel = async () => {
      try {
        const response = await getHotelByCliente(id);
        const hotelDataArray = response.data.map((hotel) => {
          return hotel;
        });
        setDataHotel(hotelDataArray);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarhotel();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarOpcoesAereas = async () => {
      try {
        const response = await getOpcoesAereasByCliente(id);
        const opcoesAereasData = response.data.map((voos) => {
          return voos;
        });
        setDataVoos(opcoesAereasData);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarOpcoesAereas();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarServicos = async () => {
      try {
        const response = await getServicosByCliente(id);
        const opcoesServicosData = response.data.map((servicos) => {
          return servicos;
        });
        setDataServicos(opcoesServicosData);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarServicos();

    return () => {};
  }, [id]);

  useEffect(() => {
    const getPavimentarValores = async () => {
      try {
        const response = await getValoresByCliente(id);
        const opcoesValoresData = response.data.map((valores) => {
          return valores;
        });
        setDataValores(opcoesValoresData);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarValores();

    return () => {};
  }, [id]);

  return (
    <div className="cliente-container">
      <img src={logoImage} alt="Logo da empresa" />
      <h2 className="cliente-title">Adicionar serviços para:</h2>
      <span className="cliente-span">{cliente}</span>
      <div className="button-container">
        <button
          className="add-button"
          onClick={openModalVoos}
          disabled={dataVoos.length === 3}
        >
          Adicionar Voos
        </button>
        <button
          className="add-button"
          onClick={openModalHotel}
          disabled={dataHotel.length === 3}
        >
          Adicionar Hotel
        </button>
        <button
          className="add-button"
          onClick={openModalServicos}
          disabled={dataServicos.length === 3}
        >
          Adicionar Serviços
        </button>
        <button
          className="add-button"
          onClick={openModalValores}
          disabled={dataValores.length === 3}
        >
          Adicionar Valores
        </button>
        <button
          className="add-button"
          onClick={showHotel}
          disabled={showHotelComponent}
        >
          Mostrar Hotéis
        </button>
        <button
          className="add-button"
          onClick={showVoos}
          disabled={showVoosComponent}
        >
          Mostrar Voos
        </button>
        <button
          className="add-button"
          onClick={showServicos}
          disabled={showServicosComponent}
        >
          Mostrar Serviços
        </button>
        <button
          className="add-button"
          onClick={showValores}
          disabled={showValoresComponent}
        >
          Mostrar Valores
        </button>
        {modalHotelOpen && (
          <ModalInsertHotel
            closeModalHotel={closeModalHotel}
            ClienteId={id}
            clienteNome={cliente}
          />
        )}
        {modalVoosOpen && (
          <ModalInsertOpcoesAereas
            closeModalVoos={closeModalVoos}
            ClienteId={id}
            clienteNome={cliente}
          />
        )}
        {modalServicosOpen && (
          <ModalInstertServicos
            closeModalServicos={closeModalServicos}
            ClienteId={id}
            clienteNome={cliente}
          />
        )}
        {modalValoresOpen && (
          <ModalInsertValores
            closeModalValores={closeModalValores}
            ClienteId={id}
            clienteNome={cliente}
          />
        )}
      </div>
      {showHotelComponent && <Hotel data={dataHotel} />}
      {showVoosComponent && <Voos data={dataVoos} />}
      {showServicosComponent && <Servicos data={dataServicos} />}
      {showValoresComponent && <Valores data={dataValores} />}
    </div>
  );
}
