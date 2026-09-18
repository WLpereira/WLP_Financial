import styled from "styled-components";

/* ─── SIDEBAR (desktop: 220px, mobile: oculto via MobileSidebar) ───────── */

export const Container = styled.aside`
  width: 240px;
  min-width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 72px;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #0A1628;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.25);
  z-index: 40;
  overflow-y: auto;
  overflow-x: hidden;

  *::-webkit-scrollbar { width: 4px; }
  *::-webkit-scrollbar-track { background: transparent; }
  *::-webkit-scrollbar-thumb { background: rgba(0,180,216,0.3); border-radius: 4px; }

  @media only screen and (max-width: 840px) {
    display: none;
  }
`;

export const PerfilImagem = styled.div`
  border-radius: 4em;
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 0.7em;

  a {
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const Item = styled.li`
  display: flex;
  border-radius: 10px;
  padding: 9px 12px;
  align-items: center;
  gap: 0.8em;
  color: rgba(232, 238, 248, 0.85);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  list-style: none;

  a {
    color: rgba(232, 238, 248, 0.85);
    font-size: 0.88rem;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(27,58,140,0.6), rgba(0,180,216,0.3));
    color: #fff;
    transform: translateX(4px);

    a { color: #fff; }
  }
`;

export const Elementos = styled.ul`
  border-radius: 8px;
  padding: 3px 0;
  list-style: none;

  li {
    margin-left: 0.8em;
    color: rgba(232, 238, 248, 0.75);
    padding: 7px 12px;
    display: flex;
    gap: 0.7em;
    border-radius: 8px;
    align-items: center;
    font-size: 0.84rem;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  a { color: rgba(232, 238, 248, 0.75); font-size: 0.84rem; }

  li:hover {
    background: rgba(0,180,216,0.15);
    color: #00D97E;
    transform: translateX(4px);

    a { color: #00D97E; }
  }
`;

export const ColecaoElementos = styled.summary`
  display: flex;
  border-radius: 10px;
  padding: 9px 12px;
  align-items: center;
  gap: 0.8em;
  color: rgba(232, 238, 248, 0.85);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(27,58,140,0.5), rgba(0,180,216,0.25));
    color: #fff;
  }
`;
