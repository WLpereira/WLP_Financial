import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: 1.5px solid #CBD5E1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: auto;
  min-height: 40px;
  padding: 8px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1E293B;
  letter-spacing: 0.01em;
  background: #FFFFFF;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: all 0.2s ease;
  box-sizing: border-box;

  p, span {
    color: inherit;
    font-weight: inherit;
    margin: 0;
  }

  &:hover {
    background: #F8FAFC;
    border-color: #00B4D8;
    color: #00B4D8;
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 180, 216, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
    min-height: 42px;
    padding: 9px 16px;
  }
`;

