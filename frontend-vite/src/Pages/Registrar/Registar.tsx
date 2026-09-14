import React from "react";
import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, RegistarContainer, LogoWrapper, LogoImg } from "./styles";
import wlpLogo from "../../assets/wlp-logo.png";

export const Registrar: React.FC = () => {
  return (
    <ContainerMain>
      <RegistarContainer>
        <LogoWrapper>
          <LogoImg src={wlpLogo} alt="WLP Financial" />
        </LogoWrapper>
        <h2>Criar conta</h2>
        <h4>Comece já a usar o WLP Financial!</h4>
        <Formulario />
      </RegistarContainer>
    </ContainerMain>
  );
};
