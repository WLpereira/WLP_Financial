import { useQuery } from "react-query";
import React from "react";
import { FaUser } from "react-icons/fa";

import { Perfil } from "./styles";

import { buscarImagemPerfilPorCaminho } from "./api";

type Props = {
  caminho_image: string;
};

export const ImagemPerfil: React.FC<Props> = ({ caminho_image }) => {
  const { data: caminhoLogomarca, isError } = useQuery(
    ["imagem-perfil-usuariologado", caminho_image],
    () => buscarImagemPerfilPorCaminho(caminho_image),
    {
      enabled: !!caminho_image && caminho_image !== "null" && caminho_image !== "undefined",
      retry: false,
    }
  );

  return (
    <Perfil>
      {caminhoLogomarca && !isError ? (
        <img alt="Foto de perfil" src={caminhoLogomarca} />
      ) : (
        <FaUser size={48} color="#00B4D8" />
      )}
    </Perfil>
  );
};

