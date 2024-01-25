import api from "./api";

export const getHotelByCliente = async (id) => {
  try {
    const response = await api.get(`/opcoes_hoteis_cliente/${id}`, {
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

export const createHotel = async (data) => {
  try {
    const response = await api.post(`/opcoes_hoteis`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};
