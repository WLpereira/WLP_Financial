import styled from "styled-components";

export const BackGround = styled.section`
  display: flex;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 22, 40, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s forwards;
`;

export const Title = styled.span`
  font-size: 0.95rem;
  color: #1E293B;
  font-weight: 600;
`;

export const Body = styled.div`
  background: #FFFFFF;
  border-radius: 18px;
  padding: 28px 36px;
  box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.2);
  border: 1px solid #E2E8F0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 90vw;
`;

export const AnimationSucesso = styled.img`
  width: 48px;
  height: 48px;
`;

