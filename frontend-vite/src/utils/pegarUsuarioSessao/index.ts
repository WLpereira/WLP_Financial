export async function pegarUsuarioSessao(usuario: any) {
  const { id, nome, token, caminho_imagem } = usuario;
  sessionStorage.setItem("id", id || "");
  sessionStorage.setItem("nome", nome || "");
  sessionStorage.setItem("token", token || "");
  if (caminho_imagem && caminho_imagem !== "null" && caminho_imagem !== "undefined") {
    sessionStorage.setItem("avatar", caminho_imagem);
  } else {
    sessionStorage.removeItem("avatar");
  }

  return { idUsuario: id, nomeUsuario: nome, tokenSessao: token, imagePerfil: caminho_imagem };
}

