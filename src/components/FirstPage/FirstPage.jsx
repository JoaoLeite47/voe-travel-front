import React, { useEffect, useState } from "react";
import "./FirstPage.scss";
import foto1 from "../../assets/imgs/foto-1-page-1.jpg";
import foto2 from "../../assets/imgs/foto-2-page-1.jpg";
import foto3 from "../../assets/imgs/foto-3-page-1.jpg";
import { FaPlane, FaWhatsapp } from "react-icons/fa";
import FirstPageModal from "./FirstPageModal/FirstPageModal";

export default function FirstPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [foto1, foto2, foto3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setFade(false);
      }, 300);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="first-page-container">
      <div className="box">
        <div className="content">
          <div className="image-container">
            <img
              src={slides[currentSlide]}
              alt="Sample"
              className={`image ${fade ? "fade" : ""}`}
            />
          </div>
          <div className="cotainer-sub">
            <div className="text-container">
              <h2 className="h2-firstPage">Faça sua Jornada!</h2>
              <p className="p-firstPage">
                A Voe + Travel é uma empresa pioneira de mercado!
                <br /> Criada com o objetivo de ser diferente em:
                <br />{" "}
                <span className="span-firstPage">
                  preços, confiabilidade e atendimento!
                </span>
              </p>
              <div className="buttons-container">
                <button className="button" onClick={openModal}>
                  <FaPlane className="icons" />
                </button>
                <span className="button-span">Confira sua viagem!</span>
                <button className="button">
                  <a href="https://contate.me/voetravel" target="_blank">
                    <FaWhatsapp className="icons" />
                  </a>
                </button>
                <span className="button-span">Nos chame no WhatsApp!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <FirstPageModal closeModal={closeModal} />}
    </div>
  );
}
