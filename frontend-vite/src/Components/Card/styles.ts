import styled from "styled-components";

type Colors = {
  light?: boolean;
};

export const CardContainer = styled.section<Colors>`
  border-radius: 16px;
  padding: 18px 20px;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.03);
    border-color: #CBD5E1;
  }

  @media screen and (max-width: 768px) {
    padding: 14px 16px;
    border-radius: 14px;
  }
`;

