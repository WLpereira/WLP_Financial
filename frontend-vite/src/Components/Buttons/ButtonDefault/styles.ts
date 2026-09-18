import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: auto;
  min-height: 40px;
  padding: 9px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.92rem;
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: 0.01em;
  background: linear-gradient(135deg, #1B3A8C 0%, #0096C7 100%);
  box-shadow: 0 4px 12px rgba(27, 58, 140, 0.2);
  transition: all 0.2s ease;
  box-sizing: border-box;

  p, span {
    color: #FFFFFF;
    font-weight: inherit;
    margin: 0;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 150, 199, 0.3);
    filter: brightness(1.06);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(27, 58, 140, 0.2);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
    min-height: 42px;
    padding: 10px 18px;
  }
`;

