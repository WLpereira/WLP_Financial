import axios from "axios";
import { buscaDadoUsuarioNaSessao } from "../../utils/buscaDadoUsuarioNaSessao";

const rotaPrincipal = import.meta.env.VITE_ENDPOINT;

export const endpoint = axios.create({
  baseURL: rotaPrincipal,
  headers: {
    "Content-type": "application/json",
  },
});

endpoint.interceptors.request.use((config) => {
  const { tokenSessao } = buscaDadoUsuarioNaSessao();
  if (tokenSessao && config.headers) {
    config.headers.auth = tokenSessao;
  }
  return config;
});

endpoint.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);
