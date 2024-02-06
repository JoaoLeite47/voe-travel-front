import Swal from "sweetalert2";

export const cadastroClienteSucess = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Cadastro de cliente concluído!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const cadastroHotelSucess = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Cadastro concluído!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const cadastroClienteEroor = () => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Erro no cadastro!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const updateSucess = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Atualizado com sucesso!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const updateEroor = () => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Erro na atualização!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const emailSucess = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Email enviado!",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const emailError = () => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Erro no envio do formulário!",
    showConfirmButton: false,
    timer: 1500,
  });
};
