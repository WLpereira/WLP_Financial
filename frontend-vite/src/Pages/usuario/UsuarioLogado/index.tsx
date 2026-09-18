import { Link } from "react-router-dom";
import { IoPersonRemoveSharp } from "react-icons/io5";
import React from "react";

import { Container, Header, ProfileInfo, Titulo, UsuarioText } from "./styles";

import { Formulario } from "./components/Formulario";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { ImagemPerfil } from "./components/ImagePerfil";
import { MundacaImagemPerfil } from "./components/MudancaImagemPerfil";

export const VisualizarUsuarioLogado: React.FC = () => {
  const { nomeUsuario, idUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <ImagemPerfil caminho_image={imagePerfil || ""} />
          <div>
            <Titulo>
              Seja bem-vindo, <UsuarioText>{nomeUsuario}</UsuarioText>
            </Titulo>
            <p style={{ margin: "4px 0 0 0", color: "#64748B", fontSize: "0.9rem" }}>
              Gerencie seus dados pessoais e imagem de perfil
            </p>
          </div>
        </ProfileInfo>
        <Link to={`deletar/${idUsuario}`}>
          <SecondaryButton>
            <IoPersonRemoveSharp size={20} />
            <p>Apagar Conta</p>
          </SecondaryButton>
        </Link>
      </Header>
      <MundacaImagemPerfil />
      <Formulario />
    </Container>
  );
};

