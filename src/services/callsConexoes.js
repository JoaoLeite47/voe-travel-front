import api from "./api";

export const createConexao = async (data) => {
  try {
    const response = await api.post(`/conexoes`, data, {
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
