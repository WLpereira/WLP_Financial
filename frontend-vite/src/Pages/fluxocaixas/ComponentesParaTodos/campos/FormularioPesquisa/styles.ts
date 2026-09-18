import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #FFFFFF;
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04);
  margin-bottom: 20px;
  box-sizing: border-box;

  h2 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0F172A;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 14px 16px;
  }
`;

export const ContainerPesquisa = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 12px;
  align-items: flex-end;

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const ContainerEntradaSaida = styled.section`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 8px 12px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ContainerRadios = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  label {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 0.86rem;
    font-weight: 600;
    color: #475569;
    cursor: pointer;
  }
`;

