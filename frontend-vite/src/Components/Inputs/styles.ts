import styled from "styled-components";

export const NoBorders = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #E8EEF8;
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;

  &::placeholder {
    color: rgba(232, 238, 248, 0.35);
  }

  &:focus {
    border-color: rgba(0, 180, 216, 0.7);
    background: rgba(0, 180, 216, 0.08);
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.15);
    color: #fff;
  }

  &:read-only {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 13px 16px;
  }
`;

export const ContainerInput = styled.div`
  display: grid;
  gap: 0.3em;
  width: 100%;
`;

export const SecondaryInputStyle = styled(NoBorders)`
  background: rgba(255, 255, 255, 0.08);
  color: #1B3A8C;
  border-color: rgba(27, 58, 140, 0.25);

  &::placeholder {
    color: rgba(27, 58, 140, 0.45);
  }

  &:focus {
    border-color: #1B3A8C;
    box-shadow: 0 0 0 3px rgba(27, 58, 140, 0.12);
    background: rgba(255,255,255,0.95);
    color: #1B3A8C;
  }
`;
