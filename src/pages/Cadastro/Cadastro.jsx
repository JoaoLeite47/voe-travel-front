import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import "./Cadastro.scss";
import MostrarUsuario from "../../components/MostrarUsuario/MostrarUsuario";

export default function Cadastro() {
  return (
    <div>
      <div className="dashboard-box">
        <h1 className="h1-cadastro">Cadastro Interno</h1>
        <div className="icons">
          <AddButton />
        </div>
      </div>
      <MostrarUsuario/>
    </div>
  );
}
