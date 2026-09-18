export function buscaDadoUsuarioNaSessao() {
  const idUsuario = sessionStorage.getItem("id");
  const nomeUsuario = sessionStorage.getItem("nome");
  const tokenSessao = sessionStorage.getItem("token");
  let imagePerfil = sessionStorage.getItem("avatar");

  if (
    !imagePerfil ||
    imagePerfil === "null" ||
    imagePerfil === "undefined" ||
    imagePerfil.trim() === ""
  ) {
    imagePerfil = null;
  }

  return { idUsuario, nomeUsuario, tokenSessao, imagePerfil };
}

