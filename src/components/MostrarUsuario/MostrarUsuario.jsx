import React, { useEffect, useState } from "react";
import "./MostrarUsuario.scss";
import { deleteClient, getClient } from "../../services/calls";
import { MdRefresh, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function MostrarUsuario() {
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    const response = await getClient();
    if (response.status === 200) {
      setDataList(response.data);
      console.log(dataList);
    } else {
      alert("Erro ao buscar dados");
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Tem certeza?",
        text: "Você não será capaz de reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, deletar!",
      });
      if (result.isConfirmed) {
        await deleteClient(id);
        Swal.fire(
          "Deletado!",
          "O cliente foi deletado com sucesso.",
          "success"
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao exibir o alerta:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="data-list">
      <ul>
        {dataList.map((item) => (
          <li key={item.id}>
            <div className="data-item">
              <span>{item.nome}</span>
              <span>
                <span className="pedido-span">Pedido</span>
                {item.pedido}
              </span>
              <button type="button">
                <span role="img" aria-label="Atualizar">
                  <MdRefresh className="button-icon atualizar" />
                </span>
              </button>
              <button type="button">
                <span role="img" aria-label="Deletar">
                  <MdDelete
                    className="button-icon deletar"
                    onClick={() => handleDelete(item.id)}
                  />
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
