import styled from "styled-components";

export const Campo = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  font-size: 0.92rem;
  font-family: inherit;
  background-color: #FFFFFF;
  border: 1.5px solid #CBD5E1;
  min-height: 100px;
  border-radius: 10px;
  color: #0F172A;
  transition: all 0.2s ease;
  box-sizing: border-box;
  resize: vertical;

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

