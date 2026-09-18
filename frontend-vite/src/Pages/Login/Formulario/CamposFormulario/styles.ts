import styled from "styled-components";

export const CamposStyle = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
  width: 100%;

  button {
    width: 100%;
  }

  input {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: #FFFFFF;
    border-radius: 10px;
    padding: 12px 14px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.45);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.14);
      border-color: #00B4D8;
      box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.25);
      color: #FFFFFF;
    }
  }
`;


