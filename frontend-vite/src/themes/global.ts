import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* CSS Variables - WLP Financial Clean Theme */
    :root {
      /* Brand Colors */
      --color-primary:        #1B3A8C;
      --color-primary-dark:   #0A1628;
      --color-primary-light:  #2563EB;
      --color-accent-teal:    #00B4D8;
      --color-accent-green:   #10B981;
      --color-accent-rose:    #F43F5E;
      --color-accent-amber:   #F59E0B;

      /* Neutrals & Surfaces */
      --color-bg-page:        #F8FAFC;
      --color-bg-card:        #FFFFFF;
      --color-border:         #E2E8F0;
      --color-border-hover:   #CBD5E1;

      /* Text */
      --color-text-main:      #0F172A;
      --color-text-body:      #334155;
      --color-text-muted:     #64748B;
      --color-text-subtle:    #94A3B8;

      /* UI States */
      --color-success:        #10B981;
      --color-danger:         #F43F5E;
      --color-warning:        #F59E0B;
    }

    * {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *:focus {
      outline: none;
    }

    html, body {
      width: 100%;
      min-height: 100vh;
      background-color: var(--color-bg-page);
      color: var(--color-text-body);
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, strong {
      color: var(--color-text-main);
      font-weight: 700;
      letter-spacing: -0.015em;
    }

    p, span, label {
      color: var(--color-text-body);
    }

    a {
      color: var(--color-primary);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    a:hover {
      color: var(--color-accent-teal);
    }

    /* Scrollbars elegantes */
    *::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    *::-webkit-scrollbar-track {
      background: transparent;
    }
    *::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 999px;
    }
    *::-webkit-scrollbar-thumb:hover {
      background: #94A3B8;
    }

    /* Animações suaves e sutis (sem quebra horizontal de 100vw) */
    @keyframes entradaSuave {
      0%   { opacity: 0; transform: translateY(6px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes slideInUp {
      0%   { opacity: 0; transform: translateY(12px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInLeft {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(0); }
    }
`;

export default GlobalStyle;

