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
      return 201;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const getClient = async () => {
  try {
    const response = await api.get("/clientes", {
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

export const deleteClient = async (id) => {
  try {
    const response = await api.delete(`/clientes/${id}`, {
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

export const getClientId = async (id) => {
  try {
    const response = await api.get(`/clientes/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    return 500;
  }
};

export const updateClient = async (data, id) => {
  const dados = {
    nome: data.nome,
    pedido: data.pedido,
  };

  try {
    const response = await api.patch(`/clientes/${id}`, dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      return 200;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const sendEmail = async (data) => {
  try {
    const response = await api.post(`/enviarEmail`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};

export const getPedidosAll = async (pedido) => {
  try {
    const response = await api.get(`/clientes_all/${pedido}`, {
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
