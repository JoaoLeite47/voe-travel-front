import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPedidosAll } from "../../services/calls";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FirstPedidos from "../../components/FirstPedidos/FirstPedidos";
import SecondPedidos from "../../components/SecondPedidos/SecondPedidos";
import ThirdPedidos from "../../components/ThirdPedidos/ThirdPedidos";
import FourthPedidos from "../../components/FourthPedidos/FourthPedidos";
import FifthPedidos from "../../components/FifthPedidos/FifthPedidos";
import "./ClientePage.scss";
import SixthPedidos from "../../components/SixthPedidos/SixthPedidos";

export default function ClientePage() {
  const { pedido } = useParams();
  const pedidoNumber = Number(pedido);
  const [cliente, setCliente] = useState([]);
  const [hoteis, setHoteis] = useState([]);
  const [voos, setVoos] = useState([]);
  const [servico, setServico] = useState([]);
  const [valores, setValores] = useState([]);
  const [conexao, setConexao] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      try {
        const response = await getPedidosAll(pedidoNumber);
        console.log(response);
        setCliente(response.data.cliente);
        setHoteis(response.data.opcoesHoteis);
        setVoos(response.data.opcoesAereas);
        setServico(response.data.opcoesServicos);
        setValores(response.data.opcoesValores);
        setConexao(response.data.conexoes);
      } catch (error) {
        console.log(error);
      }
    };
    getPedidos();
  }, [pedidoNumber]);

  return (
    <div className="clientPage-Container">
      <Header />
      <FirstPedidos cliente={cliente} />
      <SecondPedidos hoteis={hoteis} />
      <ThirdPedidos voos={voos} />
      <SixthPedidos conexao={conexao} />
      <FourthPedidos servico={servico} />
      <FifthPedidos valores={valores} />
      <Footer />
    </div>
  );
}
