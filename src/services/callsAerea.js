import api from "./api";

export const createVoo = async (data) => {
  try {
    const response = await api.post(`/opcoes_aereas`, data, {
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

export const getVoosById = async (id) => {
  try {
    const response = await api.get(`/opcoes_aereas/${id}`, {
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

export const updateVoos = async (data, id) => {
  try {
    const response = await api.patch(`/opcoes_aereas/${id}`, data, {
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
    return 500;
  }
};

export const deleteVoo = async (id) => {
  try {
    const response = await api.delete(`/opcoes_aereas/${id}`, {
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
