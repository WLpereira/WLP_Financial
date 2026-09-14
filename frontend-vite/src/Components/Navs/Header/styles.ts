import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 220px);
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
  position: fixed;
  gap: 1em;
  top: 10px;
  right: 12px;
  padding: 0 20px;
  justify-content: space-between;
  background: linear-gradient(135deg, #1B3A8C 0%, #0F2460 50%, #00B4D8 100%);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255,255,255,0.08) inset;
  color: #fff;
  z-index: 5;

  a { color: #fff; }

  @media only screen and (max-width: 840px) {
    width: calc(100vw - 24px);
    left: 12px;
    right: 12px;
    top: 8px;
    border-radius: 12px;
    height: 52px;
  }
`;

export const TextLimited = styled.p`
  width: auto;
  max-width: 280px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  font-weight: 600;
  color: #E8EEF8;

  @media only screen and (max-width: 840px) {
    max-width: 130px;
    font-size: 0.82rem;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 2em;
  display: flex;
  gap: 0.6em;
  padding: 4px;
  align-items: center;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255,255,255,0.12);
    border-radius: 10px;
  }
`;

export const VoltarContainer = styled.div`
  border-radius: 10px;
  display: flex;
  gap: 0.4em;
  padding: 6px 12px;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid rgba(255,255,255,0.2);

  &:hover {
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.4);
  }
`;

export const VoltarText = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.88rem;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
