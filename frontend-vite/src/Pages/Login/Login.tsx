import React from "react";
import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, LoginContainer, LogoWrapper, LogoImg } from "./styles";
import wlpLogo from "../../assets/wlp-logo.png";

const Login: React.FC = () => {
  return (
    <ContainerMain>
      <LoginContainer>
        <LogoWrapper>
          <LogoImg src={wlpLogo} alt="WLP Financial" />
        </LogoWrapper>
        <h3>Bem-vindo de volta</h3>
        <h5>Acesse a sua conta</h5>
        <Formulario />
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
