import React from "react";
import "./FifthPage.scss";
import foto1 from "../../assets/imgs/foto-1-page-6.jpg";
import foto2 from "../../assets/imgs/foto-2-page-6.jpg";
import foto3 from "../../assets/imgs/foto-3-page-6.jpg";

const cardData = [
  {
    image: foto1,
    title: "Atendimento Prioritário!",
    description:
      "Oferecemos atendimento prioritário para garantir que você receba o melhor suporte possível!",
  },
  {
    image: foto2,
    title: "Facilidade de pagamento!",
    description:
      "Proporcionamos opções flexíveis de pagamento para tornar sua experiência mais tranquila!",
  },
  {
    image: foto3,
    title: "Oferta exclusiva por tempo limitado!",
    description: "Não perca a oportunidade de obter benefícios exclusivos!",
  },
];

export default function FifthPage() {
  return (
    <div className="fifth-page-container">
      <div className="content">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img
              src={card.image}
              alt={`Photo ${index + 1}`}
              className="images-in-cards"
            />
            <div className="overlay">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
