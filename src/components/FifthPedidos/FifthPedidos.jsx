import React from "react";
import "./FifthPedidos.scss";

export default function FifthPedidos({ valores }) {
  return (
    <div className="fifth-conteiner-father">
      <div>
        <div className="box-fifth-page-pedidos">
          <h2 className="h2-fifth-page-pedidos">
            Viaje com <span className="span-fifth-page-pedidos">Sorisos</span> e{" "}
            <span className="span-fifth-page-pedidos">Memórias</span>!
          </h2>
        </div>
      </div>
      <div className="container-fifth-group">
        <div className="container-fifth">
          <div>
            <p className="p-fifth-page-1">
              Parabéns por considerar{" "}
              <span className="span-fifth-page-1">Voe + Travel</span> para suas
              necessidades. Sabemos que escolher é um momento crucial. <br /> Ao
              decidir por nós, você não está apenas fazendo uma compra. <br />{" "}
              Mas sim investindo em uma experiência única e personalizada.
            </p>
          </div>
          <div className="container-valores">
            {valores.map((valor, index) => (
              <div key={index}>
                <h1 className="valor">Oferta n. {index + 1}</h1>
                <h2 className="valor inicial">R$ {valor.valor_inicial}</h2>
                <h2 className="valor final">R$ {valor.valor_final}</h2>
                {valor.link_pagamento !== "" && (
                  <button className="container-valores-button" type="submit">
                    <a
                      href={valor.link_pagamento}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="container-valores-button-a"
                    >
                      Comprar Agora!
                    </a>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="p-fifth-page-2">
            <span className="span-fifth-page-2">Cartão de Crédito:</span>{" "}
            Desfrute da conveniência de pagar com seu cartão de crédito.
            <br /> Aceitamos uma variedade de bandeiras para garantir
            flexibilidade.
            <br />{" "}
            <span className="span-fifth-page-2">
              Transferência Bancária:
            </span>{" "}
            Facilite suas transações realizando transferências diretamente da
            sua conta bancária. <br /> Uma opção segura e direta.
            <br /> <span className="span-fifth-page-2">
              Pagamento Online:
            </span>{" "}
            Explore a facilidade do pagamento online. <br /> Oferecemos um
            processo rápido e seguro para compras com apenas alguns cliques.
            <br /> <span className="span-fifth-page-2">
              Boleto Bancário:
            </span>{" "}
            Para quem prefere um método mais tradicional, <br />{" "}
            disponibilizamos boletos bancários. Imprima e pague no seu próprio
            ritmo.
          </p>
        </div>
      </div>
    </div>
  );
}
