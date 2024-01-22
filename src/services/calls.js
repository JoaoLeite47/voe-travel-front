import api from "./api";

export const createClient = async (data) => {
  const dados = {
    nome: data.nome,
    pedido: data.pedido,
  };

  try {
    const response = await api.post("/clientes", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 201) {
      console.log(response);
      return 201;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};
