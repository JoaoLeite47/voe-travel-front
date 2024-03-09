import { useState } from "react";
import "./Footer.scss";
import logo from "../../assets/imgs/logo.png";
import ModalRedirect from "../ModalRecirect/ModalRedirect";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="footer-container">
      <div className="footer-box">
        <div>
          <img src={logo} alt="logo" />
          <p>Email: Flaviocaribe@voemaistravel.com.br</p>
          <p>Celular: (71)98442-0817 </p>
          <p>
            Instagram:{" "}
            <a href="https://www.instagram.com/voemaistravel_">
              @voemaistravel_
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a href="https://www.facebook.com/voeplustravel">Voe + Travel</a>
          </p>
          <p>CNPJ: 52.794.961/0001-19</p>
          <button className="cadastro" onClick={openModal}>
            Cadastro
          </button>
        </div>
        <div>
          <p>
            Ao continuar a usar os serviços da Voe + Travel, <br />
            você reconhece e concorda com estes
            <br /> termos relacionados à proteção de dados.
          </p>
        </div>
      </div>
      <p> 1.3.5 &copy; Voe + Travel 2024 Alguns direitos reservados.</p>
      {isModalOpen && <ModalRedirect closeModal={closeModal} />}
    </div>
  );
}
