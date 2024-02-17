import api from "./api";

export const getHotelById = async (id) => {
  try {
    const response = await api.get(`/opcoes_hoteis/${id}`, {
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
        // "Content-Type": "multipart/form-data",
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

export const updateHotel = async (data, id) => {
  try {
    const response = await api.patch(`/opcoes_hoteis/${id}`, data, {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return 200;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const deleteHotel = async (id) => {
  try {
    const response = await api.delete(`/opcoes_hoteis/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 204) {
      return 204;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};
