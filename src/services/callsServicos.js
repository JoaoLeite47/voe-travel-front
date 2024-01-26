import api from "./api";

export const getServicoById = async (id) => {
  try {
    const response = await api.get(`/servicos/${id}`, {
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
    return 500;
  }
};

export const createServicos = async (data) => {
  try {
    const response = await api.post(`/servicos`, data, {
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

export const updateServicos = async (data, id) => {
  try {
    const response = await api.patch(`/servicos/${id}`, data, {
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

export const deleteServico = async (id) => {
  try {
    const response = await api.delete(`/servicos/${id}`, {
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
