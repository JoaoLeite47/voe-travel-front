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

export const cadastroClienteEroor = () => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Erro no cadastro!",
    showConfirmButton: false,
    timer: 1500,
  });
};
