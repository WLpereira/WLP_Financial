import { useQuery } from "react-query";
import React from "react";
import { FaUser } from "react-icons/fa";

import { Perfil } from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";

type Props = {
  caminho_imagem: string;
};

export const ImagemPerfil: React.FC<Props> = ({ caminho_imagem }) => {
  const { data: caminhoLogomarca, isError } = useQuery(
    ["imagem-perfil-sidebar", caminho_imagem],
    () => buscarImagemPerfilPorCaminho(caminho_imagem),
    {
      enabled: !!caminho_imagem && caminho_imagem !== "null" && caminho_imagem !== "undefined",
      retry: false,
    }
  );

  return (
    <div>
      <Perfil>
        {caminhoLogomarca && !isError ? (
          <img src={caminhoLogomarca} alt="Profile" />
        ) : (
          <FaUser size={20} color="#00B4D8" />
        )}
      </Perfil>
    </div>
  );
};

