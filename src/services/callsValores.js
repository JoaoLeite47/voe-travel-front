import api from "./api";

export const createValores = async (data) => {
  try {
    const response = await api.post(`/valores`, data, {
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
    return 500;
  }
};

export const updateValores = async (data, id) => {
  try {
    const response = await api.patch(`/valores/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return 200;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getValoresById = async (id) => {
  try {
    const response = await api.get(`/valores/${id}`, {
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

export const getValoresByCliente = async (id) => {
  try {
    const response = await api.get(`/valores_cliente/${id}`, {
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
    return 500;
  }
};

export const deleteValores = async (id) => {
  try {
    const response = await api.delete(`/valores/${id}`, {
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
