import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import CadastroServicos from "../pages/CadastroServicos/CadastroServicos";
import Home from "../pages/Home/Home";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/cadastroServicos" element={<CadastroServicos />}></Route>
    </Routes>
  );
}
