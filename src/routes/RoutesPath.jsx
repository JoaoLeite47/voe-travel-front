import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/cadastro" element={<Cadastro />}></Route>
    </Routes>
  );
}
