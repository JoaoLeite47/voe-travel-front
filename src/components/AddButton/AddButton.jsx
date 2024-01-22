import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./AddButton.scss";
import CadastroPessoa from "../CadastroPessoa/CadastroPessoa";

const AddButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className="add-button" onClick={openModal}>
        Adicionar
        <IoIosAddCircleOutline className="icon-home" />
      </button>
      {modalOpen && <CadastroPessoa closeModal={closeModal} />}
    </div>
  );
};

export default AddButton;
