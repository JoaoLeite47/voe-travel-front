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
    // const formData = new FormData();
    // formData.append("client_id", data.client_id);
    // formData.append("imagem1", data.imagem1);
    // formData.append("imagem2", data.imagem2);
    // formData.append("imagem3", data.imagem3);
    // formData.append("endereco", data.endereco);
    // formData.append("data_inicial", data.data_inicial);
    // formData.append("data_final", data.data_final);
    // formData.append("quarto_escolhido", data.quarto_escolhido);
    // formData.append("quarto_escolhido_tipo", data.quarto_escolhido_tipo);
    // formData.append(
    //   "quarto_escolhido_endereco",
    //   data.quarto_escolhido_endereco
    // );
    // formData.append("cafe_da_manha", data.cafe_da_manha);
    // formData.append("valor_inicial", data.valor_inicial);
    // formData.append("valor_final", data.valor_final);

    const response = await api.post(`/opcoes_hoteis`, data, {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      console.log(response)
      return response;
    } else {
      return 401;
    }
  } catch (error) {
    console.log(error);
    return 500;
  }
};
