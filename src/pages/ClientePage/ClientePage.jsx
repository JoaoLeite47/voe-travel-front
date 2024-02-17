import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPedidosAll } from "../../services/calls";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FirstPedidos from "../../components/FirstPedidos/FirstPedidos";

export default function ClientePage() {
  const { pedido } = useParams();
  const pedidoNumber = Number(pedido);
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      try {
        const response = await getPedidosAll(pedidoNumber);
        setCliente(response.data.cliente);
      } catch (error) {
        console.log(error);
      }
    };
    getPedidos();
  }, [pedidoNumber]);

  return (
    <div>
      <Header />
      <FirstPedidos cliente={cliente} />
      <Footer />
    </div>
  );
}
