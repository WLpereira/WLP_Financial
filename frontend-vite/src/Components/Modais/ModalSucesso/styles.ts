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
  font-size: 1.15rem;
  color: #0F172A;
  font-weight: 700;
  margin-top: 8px;
`;

export const Body = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 32px 40px;
  box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.25);
  border: 1px solid #E2E8F0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 90vw;
  animation: slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const AnimationSucesso = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto;
`;

