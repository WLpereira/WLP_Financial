import styled from "styled-components";

export const LayoutRoot = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-bg-page, #F8FAFC);
`;

export const MainArea = styled.div`
  flex: 1;
  margin-left: 240px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: calc(100% - 240px);
  transition: margin-left 0.3s ease;

  @media screen and (max-width: 840px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Body = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 24px 40px 24px;
  box-sizing: border-box;

  @media screen and (max-width: 840px) {
    padding: 72px 14px 28px 14px;
    width: 100%;
  }
`;

export const BotaoPorCima = styled.div`
  display: none;
`;

export const IconFundo1Flutuante = styled.div`
  display: none;
`;

export const ImagePesos2Flutuante = styled.div`
  display: none;
`;

