import axios from "axios";
import { buscaDadoUsuarioNaSessao } from "../../utils/buscaDadoUsuarioNaSessao";

const envEndpoint = import.meta.env.VITE_ENDPOINT || "http://localhost:3000/api/v1";

function getBaseUrl(): string {
  if (typeof window !== "undefined" && window.location.hostname && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    try {
      const url = new URL(envEndpoint);
      if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
        url.hostname = window.location.hostname;
        return url.toString().replace(/\/$/, "");
      }
    } catch (e) {
      // caso não seja URL completa
    }
  }
  return envEndpoint;
}

export const endpoint = axios.create({
  baseURL: getBaseUrl(),
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
