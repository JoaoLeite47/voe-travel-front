import React, { useEffect, useState } from "react";
import "./MostrarUsuario.scss";
import { getClient } from "../../services/calls";
import { MdRefresh, MdDelete } from "react-icons/md";

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
                  <MdDelete className="button-icon deletar" />
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
