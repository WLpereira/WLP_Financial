import styled from "styled-components";

export const BackGround = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 22, 40, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s forwards;
`;

export const Body = styled.div`
  width: 90vw;
  max-width: 440px;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 28px 24px;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.25);
  border: 1px solid #E2E8F0;
  animation: slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  div {
    display: flex;
    gap: 12px;
    justify-content: center;
    width: 100%;
  }
`;

