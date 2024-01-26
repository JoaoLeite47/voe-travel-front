import api from "./api";

export const createVoo = async (data) => {
  try {
    const response = await api.post(`/opcoes_aereas`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      console.log(response);
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const getOpcoesAereasByCliente = async (id) => {
  try {
    const response = await api.get(`/opcoes_aereas_cliente/${id}`, {
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
