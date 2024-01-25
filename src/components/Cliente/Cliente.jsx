import React, { useEffect, useState } from "react";
import "./Cliente.scss";
import { getHotelByCliente } from "../../services/callsHotel";
import { getOpcoesAereasByCliente } from "../../services/callsAerea";
import { getServicosByCliente } from "../../services/callsServicos";
import ModalInsertHotel from "../ModalInsertHotel/ModalInsertHotel";

export default function Cliente({ cliente, id }) {
  const [modalHotelOpen, setModalHotelOpen] = useState(false);

  const openModalHotel = () => {
    setModalHotelOpen(true);
  };

  const closeModalHotel = () => {
    setModalHotelOpen(false);
  };

  //   useEffect(() => {
  //     const getPavimentarhotel = async () => {
  //       try {
  //         const response = await getHotelByCliente(id);
  //         const hotelData = response.data[0];
  //         console.log(hotelData);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     getPavimentarhotel();

  //     return () => {};
  //   }, [id]);

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
      <h2 className="cliente-title">Adicionar serviços para {cliente}</h2>
      <div className="button-container">
        <button className="add-button" onClick={openModalHotel}>
          Adicionar Hotel
        </button>
        {modalHotelOpen && (
          <ModalInsertHotel
            closeModalHotel={closeModalHotel}
            ClienteId={id}
            clienteNome={cliente}
          />
        )}
        {/* Adicione outros botões para diferentes serviços aqui */}
      </div>
    </div>
  );
}
