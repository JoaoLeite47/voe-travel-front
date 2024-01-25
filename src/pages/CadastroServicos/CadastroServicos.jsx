import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getClientId } from "../../services/calls";
import Cliente from "../../components/Cliente/Cliente";

export default function CadastroServicos() {
  const [nome, setNome] = useState("");
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    const getPavimentarPessoa = async () => {
      try {
        const response = await getClientId(id);
        const pessoaData = response.data[0];
        setNome(pessoaData.nome);
      } catch (error) {
        console.log("error", error);
      }
    };

    getPavimentarPessoa();

    return () => {};
  }, [id]);

  return (
    <div>
      <Cliente cliente={nome} id={id} />
    </div>
  );
}
