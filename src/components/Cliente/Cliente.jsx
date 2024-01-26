import React, { useEffect, useState } from "react";
import "./Cliente.scss";
import { getHotelByCliente } from "../../services/callsHotel";
import { getOpcoesAereasByCliente } from "../../services/callsAerea";
import { getServicosByCliente } from "../../services/callsServicos";
import ModalInsertHotel from "../ModalInsertHotel/ModalInsertHotel";
import Hotel from "../Hotel/Hotel";
import logoImage from "../../assets/imgs/logo.png";
import ModalInsertOpcoesAereas from "../ModalInsertOpcoesAereas/ModalInsertOpcoesAereas";

export default function Cliente({ cliente, id }) {
  const [modalHotelOpen, setModalHotelOpen] = useState(false);
  const [modalVoosOpen, setModalVoosOpen] = useState(false);
  const [dataHotel, setDataHotel] = useState([]);
  const [dataVoos, setDataVoos] = useState([]);
  const [showHotelComponent, setShowHotelComponent] = useState(false);

  const openModalHotel = () => {
    setModalHotelOpen(true);
  };

  const closeModalHotel = () => {
    setModalHotelOpen(false);
  };
  const openModalVoos = () => {
    setModalVoosOpen(true);
  };

  const closeModalVoos = () => {
    setModalVoosOpen(false);
  };

  const showHotel = () => {
    setShowHotelComponent(true);
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

  //   useEffect(() => {
  //     const getPavimentarOpcoesAereas = async () => {
  //       try {
  //         const response = await getOpcoesAereasByCliente(id);
  //         const opcoesAereasData = response.data[0];
  //         console.log(opcoesAereasData);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     getPavimentarOpcoesAereas();

  //     return () => {};
  //   }, [id]);

  //   useEffect(() => {
  //     const getPavimentarServicos = async () => {
  //       try {
  //         const response = await getServicosByCliente(id);
  //         const opcoesServicos = response.data[0];
  //         console.log(opcoesServicos);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     getPavimentarServicos();

  //     return () => {};
  //   }, [id]);

  return (
    <div className="cliente-container">
      <img src={logoImage} alt="Logo da empresa" />
      <h2 className="cliente-title">Adicionar serviços para:</h2>
      <span className="cliente-span">{cliente}</span>
      <div className="button-container">
        <button
          className="add-button"
          onClick={openModalHotel}
          disabled={dataHotel.length === 3}
        >
          Adicionar Hotel
        </button>
        <button
          className="add-button"
          onClick={openModalVoos}
          disabled={dataVoos.length === 3}
        >
          Adicionar Voos
        </button>
        <button
          className="add-button"
          onClick={showHotel}
          disabled={showHotelComponent}
        >
          Mostrar Hotéis
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
      </div>
      {showHotelComponent && <Hotel data={dataHotel} />}
    </div>
  );
}
