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

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    border-color: #00B4D8;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.18);
    color: #0F172A;
  }

  &:read-only {
    background: #F1F5F9;
    color: #64748B;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 11px 14px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const SecondaryInputStyle = styled(NoBorders)`
  background: #FFFFFF;
  color: #1B3A8C;
  border-color: #CBD5E1;

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    border-color: #1B3A8C;
    box-shadow: 0 0 0 3px rgba(27, 58, 140, 0.14);
    background: #FFFFFF;
    color: #1B3A8C;
  }
`;

