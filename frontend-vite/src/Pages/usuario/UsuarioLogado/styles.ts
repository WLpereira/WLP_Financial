import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 1.5rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem 2rem 0.5rem;
  }
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0;
  line-height: 1.3;
`;

export const UsuarioText = styled.span`
  color: #1B3A8C;
  font-weight: 800;
`;

