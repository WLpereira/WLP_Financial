import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(10, 22, 40, 0.65);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 50;
  display: flex;
  animation: fadeIn 0.2s ease-out forwards;
`;

export const Drawer = styled.aside`
  width: 290px;
  max-width: 85vw;
  height: 100vh;
  background: #0A1628;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
  animation: slideInLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 14px;
`;

export const LogoImg = styled.img`
  width: 130px;
  object-fit: contain;
`;

export const Exit = styled.button`
  color: #94A3B8;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const PerfilContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  margin-bottom: 16px;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  strong {
    color: #E2E8F0;
    font-size: 0.92rem;
    font-weight: 600;
  }

  span {
    color: #00B4D8;
    font-size: 0.78rem;
    margin-top: 2px;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;

  details {
    margin: 2px 0;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #CBD5E1;
    font-size: 0.92rem;
    font-weight: 500;
    flex: 1;
  }

  &:hover {
    background: rgba(0, 180, 216, 0.12);
    a {
      color: #00B4D8;
    }
  }
`;

export const ColecaoElementos = styled.summary`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  color: #CBD5E1;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  transition: all 0.2s ease;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    background: rgba(0, 180, 216, 0.12);
    color: #00B4D8;
  }
`;

export const Elementos = styled.ul`
  list-style: none;
  padding-left: 28px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    border-radius: 8px;
  }

  a {
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    color: #94A3B8;
    font-size: 0.86rem;
    transition: all 0.2s ease;
  }

  a:hover {
    color: #00D97E;
    background: rgba(0, 217, 126, 0.08);
    border-radius: 8px;
  }
`;

export const LogoutItem = styled(Item)`
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 14px;

  a {
    color: #F43F5E;
  }

  &:hover {
    background: rgba(244, 63, 94, 0.12);
    a {
      color: #F43F5E;
    }
  }
`;

