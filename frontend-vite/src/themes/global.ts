import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* CSS Variables - WLP Financial Theme */
    :root {
      /* Core Brand Colors */
      --color-bg-dark:      #0A1628;
      --color-bg-mid:       #0D1F3C;
      --color-bg-card:      #112240;
      --color-primary:      #1B3A8C;
      --color-primary-dark: #0F2460;
      --color-accent-teal:  #00B4D8;
      --color-accent-green: #00D97E;
      --color-gradient-start: #1B3A8C;
      --color-gradient-end:   #00B4D8;

      /* Text */
      --color-text-light:   #E8EEF8;
      --color-text-muted:   #7A90B0;

      /* UI States */
      --color-success: #00D97E;
      --color-danger:  #FF5B7F;
      --color-warning: #FFAB00;
    }

    *:focus {
      outline: none;
    }

    h1, h2, h3, h4, h5, strong {
      color: #1B3A8C;
    }

    * {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      color: #1B3A8C;
      text-decoration: none;
    }

    body {
      background-color: #F0F4FF;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    summary {
      padding: 4px;
      list-style-type: '+';
    }

    details {
      overflow-y: scroll;
      animation-name: showDetails;
      animation-duration: 1s;
    }

    details[open] summary ~ * {
      animation-name: showDetails;
      animation-duration: 1s;
    }

    @keyframes showDetails {
      0%   { opacity: 0; max-height: 0; }
      100% { opacity: 1; max-height: 100%; }
    }

    *::-webkit-scrollbar {
      width: 8px;
      border-radius: 20px;
    }
    *::-webkit-scrollbar-track {
      background-color: rgba(27,58,140,0.1);
      border-radius: 1em;
    }
    *::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: linear-gradient(180deg, #1B3A8C, #00B4D8);
    }

    @keyframes balancar {
      0%, 7%  { transform: rotateZ(0); }
      15%     { transform: rotateZ(-5deg); }
      20%     { transform: rotateZ(5deg); }
      25%     { transform: rotateZ(-2deg); }
      30%     { transform: rotateZ(3deg); }
      35%     { transform: rotateZ(-1deg); }
      40%, 100% { transform: rotateZ(0); }
    }

    @keyframes entradaSuave {
      0%   { transform: translateX(100vw); opacity: 0; }
      100% { transform: translateX(0vw);  opacity: 1; }
    }

    @keyframes fadeIn {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      0%   { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
`;

export default GlobalStyle;
