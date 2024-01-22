import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import "./Cadastro.scss"

export default function Cadastro() {
  return (
    <div className="dashboard-box">
      <h1 className="h1-cadastro">Cadastro Interno</h1>
      <AddButton />
    </div>
  );
}
