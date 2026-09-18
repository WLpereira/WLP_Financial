import styled from "styled-components";

export const NoBorders = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 0.92rem;
  font-weight: 500;
  border: 1.5px solid #CBD5E1;
  border-radius: 10px;
  background: #FFFFFF;
  color: #0F172A;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #00B4D8;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.18);
    color: #0F172A;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const SecondaryInputStyle = styled(NoBorders)``;

