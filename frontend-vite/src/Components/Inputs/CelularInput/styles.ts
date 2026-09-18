import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Campo = styled(ReactInputMask)`
  width: 100%;
  padding: 10px 14px;
  font-size: 0.92rem;
  font-weight: 500;
  border: 1.5px solid #CBD5E1;
  border-radius: 10px;
  background-color: #FFFFFF;
  color: #0F172A;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #00B4D8;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.18);
    color: #0F172A;
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

