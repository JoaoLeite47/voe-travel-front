import React, { useEffect, useState } from "react";
import "./Cliente.scss";
import { getHotelByCliente } from "../../services/callsHotel";
import { getOpcoesAereasByCliente } from "../../services/callsAerea";
import { getServicosByCliente } from "../../services/callsServicos";
import ModalInsertHotel from "../ModalInsertHotel/ModalInsertHotel";
import Hotel from "../Hotel/Hotel";
import logoImage from "../../assets/imgs/logo.png";

export default function Cliente({ cliente, id }) {
  const [modalHotelOpen, setModalHotelOpen] = useState(false);
  const [dataHotel, setDataHotel] = useState([]);

  const openModalHotel = () => {
    setModalHotelOpen(true);
  };

  const closeModalHotel = () => {
    setModalHotelOpen(false);
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
        {modalHotelOpen && (
          <ModalInsertHotel
            closeModalHotel={closeModalHotel}
            ClienteId={id}
            clienteNome={cliente}
          />
        )}
      </div>
      <Hotel data={dataHotel} />
    </div>
  );
}
