import React from "react";
import "./ThirdPage.scss";

export default function ThirdPage() {
  return (
    <div className="third-page-container-home">
      <div className="content">
        <div>
          <div>
            {" "}
            <h2 className="h2-third-page">Missão</h2>
            <p className="p-third-page">
              Proporcionar experiências de viagem excepcionais, conectando
              pessoas a{" "}
              <span className="span-1-third-page">destinos inspiradores.</span>{" "}
              <br /> Serviços personalizados e{" "}
              <span className="span-1-third-page">
                atendimento de alta qualidade.
              </span>{" "}
              <br />
              Buscamos superar as expectativas dos nossos clientes, tornando
              cada viagem uma{" "}
              <span className="span-1-third-page">jornada inesquecível.</span>
            </p>
          </div>
          <div>
            {" "}
            <h2 className="h2-third-page">Visão</h2>
            <p className="p-third-page">
              excelência em serviços, inovação constante e compromisso com a
              satisfação do cliente.
              <br /> Buscamos ser a primeira escolha dos viajantes que procuram
              não apenas destinos incríveis,
              <br /> mas uma parceria confiável para <br />
              <span className="span-1-third-page">
                realizar seus sonhos de viagem.
              </span>
            </p>
          </div>
        </div>
        <div className="div-third-page-2">
          <div>
            <h2 className="h2-third-page">Valores</h2>
            <p className="p-third-page">
              <span className="span-2-third-page">
                {" "}
                · Comprometimento com a Satisfação do Cliente:{" "}
              </span>
              Colocamos os clientes em primeiro lugar, buscando sempre exceder
              suas expectativas e garantir experiências de viagem memoráveis.
              <br />{" "}
              <span className="span-2-third-page">
                · Ética e Transparência:{" "}
              </span>{" "}
              Agimos com integridade e transparência em todas as interações,
              construindo relações de confiança com nossos clientes, parceiros e
              colaboradores.
              <br />{" "}
              <span className="span-2-third-page">
                · Trabalho em Equipe:{" "}
              </span>{" "}
              Fomentamos um ambiente colaborativo, onde cada membro da equipe
              contribui com suas habilidades únicas para alcançar objetivos
              comuns e promover o sucesso coletivo
              <br />{" "}
              <span className="span-2-third-page">
                · Personalização Excepcional:{" "}
              </span>{" "}
              Comprometemo-nos a compreender as necessidades individuais de cada
              cliente, proporcionando experiências de viagem altamente
              personalizadas que atendem aos seus gostos, preferências e
              expectativas exclusivas.
              <br />{" "}
              <span className="span-2-third-page">
                · Assistência Proativa:{" "}
              </span>{" "}
              Estamos sempre um passo à frente, oferecendo assistência proativa
              e solucionando qualquer desafio potencial antes mesmo de se tornar
              uma preocupação para os nossos clientes, garantindo tranquilidade
              durante toda a viagem.
              <br />{" "}
              <span className="span-2-third-page">
                · Feedback Contínuo e Melhoria:{" "}
              </span>{" "}
              Valorizamos a opinião dos nossos clientes e buscamos
              constantemente feedback para aprimorar nossos serviços. A melhoria
              contínua é uma parte integral de nossa abordagem, assegurando que
              cada viagem seja melhor que a anterior.
            </p>
          </div>
          <div>
            <button className="button-third-page-home">
              <a href="https://contate.me/voetravel" target="_blank" className="link-contact">
                Fala com a gente!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
