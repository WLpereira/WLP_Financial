import styled from "styled-components";

export const Perfil = styled.div`
  width: 34px;
  height: 34px;
  min-width: 34px;
  min-height: 34px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #00B4D8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E2E8F0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;