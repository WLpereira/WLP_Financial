import styled from "styled-components";

export const Perfil = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #00B4D8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0A1628;
  box-shadow: 0 4px 14px rgba(0, 180, 216, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

