import styled from "styled-components";

export const Perfil = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #00B4D8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #112240;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;