import React, { useEffect, useState } from "react";
import "./MostrarUsuario.scss";
import { deleteClient, getClient } from "../../services/calls";
import { MdRefresh, MdDelete, MdList } from "react-icons/md";
import Swal from "sweetalert2";
import UpdateModal from "../UpdateModal/UpdateModal";
import { useNavigate } from "react-router-dom";

export default function MostrarUsuario() {
  const [dataList, setDataList] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();

  const filteredDataList = dataList.filter((item) =>
    item.nome.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleUpdate = (id) => {
    setShowUpdateModal(true);
    setSelectedPersonId(id);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedPersonId(null);
  };

  const getData = async () => {
    const response = await getClient();
    if (response.status === 200) {
      setDataList(response.data);
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

  const handleRedirect = (id) => {
    navigate("/cadastroServicos", { state: { id } });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="data-list">
      <input
        type="text"
        className="filter-input"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filtrar pelo nome..."
      />
      <ul>
        {/* Renderizando os itens filtrados */}
        {filteredDataList.map((item) => (
          <li key={item.id}>
            <div className="data-item">
              <span>{item.nome}</span>
              <span>
                <span className="pedido-span">Pedido</span>
                {item.pedido}
              </span>
              <div className="buttonsContainer">
                <button onClick={() => handleUpdate(item.id)}>
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
                <button onClick={() => handleRedirect(item.id)}>
                  <span role="img" aria-label="Atualizar">
                    <MdList className="button-icon atualizar" />
                  </span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showUpdateModal && (
        <UpdateModal
          id={selectedPersonId}
          handleClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
}
