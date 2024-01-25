import api from "./api";

export const getServicosByCliente = async (id) => {
  try {
    const response = await api.get(`/servicos_client/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};
