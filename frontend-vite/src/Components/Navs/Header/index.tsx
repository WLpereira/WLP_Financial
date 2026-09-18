import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { BsFillArrowRightCircleFill, BsList } from "react-icons/bs";

import {
  Container,
  ImageContainer,
  VoltarText,
  TextLimited,
  VoltarContainer,
  HeaderLeft,
  HeaderRight,
  MenuButton,
  BrandTitle,
} from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { ImagemPerfil } from "./components/ImagePerfil";

type HeaderProps = {
  onAbrirMenu?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onAbrirMenu }) => {
  const { nomeUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  const [perfil] = useState<string>(imagePerfil || "");

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }

  return (
    <Container>
      <HeaderLeft>
        {onAbrirMenu && (
          <MenuButton
            type="button"
            aria-label="Abrir menu"
            onClick={onAbrirMenu}
          >
            <BsList size={24} />
          </MenuButton>
        )}
        <BrandTitle>WLP Financial</BrandTitle>
      </HeaderLeft>

      <HeaderRight>
        <Link to={"/usuario_logado"}>
          <ImageContainer>
            <ImagemPerfil caminho_imagem={perfil} />
            <TextLimited>{nomeUsuario}</TextLimited>
          </ImageContainer>
        </Link>

        <VoltarContainer
          role="button"
          tabIndex={0}
          onClick={() => {
            voltarPaginaAnterior();
          }}
        >
          <VoltarText>Voltar</VoltarText>
          <BsFillArrowRightCircleFill size={18} />
        </VoltarContainer>
      </HeaderRight>
    </Container>
  );
};

export default Header;

