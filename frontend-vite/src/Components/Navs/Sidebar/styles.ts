import styled from "styled-components";

/* ─── SIDEBAR (desktop: 240px, mobile: oculto via MobileSidebar) ───────── */

export const Container = styled.aside`
  width: 240px;
  min-width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0 12px 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #0A1628;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.3);
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
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  margin-bottom: 12px;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    overflow: hidden;
  }

  p {
    color: #FFFFFF !important;
    font-weight: 700;
    font-size: 0.92rem;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Image = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Item = styled.li`
  display: flex;
  border-radius: 10px;
  padding: 11px 14px;
  align-items: center;
  gap: 12px;
  color: #FFFFFF !important;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  list-style: none;
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 3px;

  a {
    color: #FFFFFF !important;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex: 1;
  }

  p {
    color: #FFFFFF !important;
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0;
  }

  svg {
    color: #00B4D8;
    font-size: 1.25rem;
    flex-shrink: 0;
    transition: color 0.2s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(27, 58, 140, 0.9) 0%, rgba(0, 180, 216, 0.4) 100%);
    color: #FFFFFF;
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

    a, p {
      color: #FFFFFF !important;
    }

    svg {
      color: #00D97E;
    }
  }
`;

export const Elementos = styled.ul`
  border-radius: 8px;
  padding: 4px 0 6px 12px;
  list-style: none;

  li {
    color: #F1F5F9;
    padding: 8px 12px;
    display: flex;
    gap: 10px;
    border-radius: 8px;
    align-items: center;
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 2px;
  }

  a {
    color: #F1F5F9 !important;
    font-size: 0.88rem;
    font-weight: 500;
    text-decoration: none;
    flex: 1;
  }

  svg {
    color: #94A3B8;
    transition: color 0.2s ease;
  }

  li:hover {
    background: rgba(0, 217, 126, 0.15);
    color: #00D97E;
    transform: translateX(3px);

    a {
      color: #00D97E !important;
    }

    svg {
      color: #00D97E;
    }
  }
`;

export const ColecaoElementos = styled.summary`
  display: flex;
  border-radius: 10px;
  padding: 11px 14px;
  align-items: center;
  gap: 12px;
  color: #FFFFFF !important;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease;
  margin-bottom: 3px;

  &::-webkit-details-marker {
    display: none;
  }

  p {
    color: #FFFFFF !important;
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0;
    flex: 1;
  }

  svg {
    color: #00B4D8;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(27, 58, 140, 0.9) 0%, rgba(0, 180, 216, 0.4) 100%);
    color: #FFFFFF;
  }
`;

