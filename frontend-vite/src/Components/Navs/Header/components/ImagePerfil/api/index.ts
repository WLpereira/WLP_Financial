import { endpoint } from "../../../../../../services/endpoint";

export async function buscarImagemPerfilPorCaminho(logomarca: string = '') {
  if (!logomarca || logomarca === "null" || logomarca === "undefined") {
    return null;
  }
  const resposta = await endpoint.get(`/usuarios/usuario_imagem/${logomarca}`, {
    responseType: "blob",
  });
  return URL.createObjectURL(resposta?.data);
}

