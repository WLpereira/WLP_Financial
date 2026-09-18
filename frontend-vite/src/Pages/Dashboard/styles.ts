import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

export const Titulo = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0F172A;
  margin-top: 8px;
  margin-bottom: 0px;
  letter-spacing: -0.02em;
`;

export const Cabecalho = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Caixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  gap: 12px;

  h3 {
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748B;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #0F172A;
    letter-spacing: -0.02em;
  }

  strong {
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748B;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
    display: block;
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const IconBadge = styled.div<{ bg?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${(props) => props.bg || "#F1F5F9"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FontDespesa = styled.h2`
  color: #F43F5E !important;
`;

