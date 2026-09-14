import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 0.75em 1.5em;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.02em;

  background: linear-gradient(135deg, #1B3A8C 0%, #0F2460 40%, #00B4D8 100%);
  background-size: 200% 200%;
  background-position: 0% 50%;

  box-shadow: 0 4px 15px rgba(27,58,140,0.4);
  transition: all 0.3s ease;

  &:hover {
    background-position: 100% 50%;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,180,216,0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(27,58,140,0.3);
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8em 1.5em;
  }
`;
