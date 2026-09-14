import styled from "styled-components";

export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  overflow-y: auto;
  padding: 2em 1em;

  background: linear-gradient(135deg, #0A1628 0%, #0D1F3C 40%, #112240 70%, #0A1628 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(27,58,140,0.3) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(0,180,216,0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 90%, rgba(0,217,126,0.1) 0%, transparent 40%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,180,216,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,180,216,0.04) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 1em;
    align-items: flex-start;
  }
`;

export const RegistarContainer = styled.main`
  position: relative;
  z-index: 1;
  padding: 2.5em 3em;
  width: 480px;
  max-width: calc(100vw - 2em);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4em;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255,255,255,0.08) inset;

  animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  h2 {
    color: #E8EEF8;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-top: 0.5em;
  }

  h4 {
    color: rgba(232, 238, 248, 0.55);
    font-size: 0.88rem;
    font-weight: 400;
    margin-bottom: 0.5em;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 2em 1.5em;
    width: 100%;
    border-radius: 18px;
    margin-top: 0.5em;
    margin-bottom: 2em;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const LogoImg = styled.img`
  width: 160px;
  max-width: 65%;
  object-fit: contain;
  filter: drop-shadow(0 4px 20px rgba(0, 180, 216, 0.4));
`;
