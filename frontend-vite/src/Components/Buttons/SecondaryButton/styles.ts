import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: 1px solid rgba(0, 180, 216, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 0.7em 1.5em;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(232, 238, 248, 0.8);
  letter-spacing: 0.02em;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 180, 216, 0.12);
    border-color: rgba(0, 180, 216, 0.7);
    color: #00B4D8;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75em 1.5em;
  }
`;
