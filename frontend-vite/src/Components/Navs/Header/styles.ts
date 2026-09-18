import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 240px;
  right: 0;
  height: 64px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #E2E8F0;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  z-index: 30;
  transition: left 0.3s ease;

  @media only screen and (max-width: 840px) {
    left: 0;
    height: 58px;
    padding: 0 16px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1B3A8C;
  padding: 6px;
  border-radius: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: #F1F5F9;
  }

  @media only screen and (max-width: 840px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BrandTitle = styled.h1`
  font-size: 1.15rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0;
  letter-spacing: -0.02em;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media only screen and (max-width: 480px) {
    gap: 10px;
  }
`;

export const TextLimited = styled.p`
  width: auto;
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.88rem;
  font-weight: 600;
  color: #1E293B;

  @media only screen and (max-width: 840px) {
    max-width: 120px;
    font-size: 0.82rem;
  }

  @media only screen and (max-width: 480px) {
    max-width: 80px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #F1F5F9;
    border-color: #CBD5E1;
  }
`;

export const VoltarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1B3A8C;
  background: rgba(27, 58, 140, 0.06);
  border: 1px solid rgba(27, 58, 140, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(27, 58, 140, 0.12);
    border-color: #1B3A8C;
  }

  @media only screen and (max-width: 600px) {
    padding: 6px 10px;
  }
`;

export const VoltarText = styled.span`
  font-size: 0.82rem;
  font-weight: 600;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

