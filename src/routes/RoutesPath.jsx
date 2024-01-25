import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import CadastroServicos from "../pages/CadastroServicos/CadastroServicos";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/cadastroServicos" element={<CadastroServicos />}></Route>
    </Routes>
  );
}
