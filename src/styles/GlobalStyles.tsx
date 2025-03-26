import { createGlobalStyle } from 'styled-components';
import { useTheme } from '../context/ThemeContext';

export const GlobalStylesComponent = createGlobalStyle<{ theme: { background: string; text: string } }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`;

export const GlobalStyles: React.FC = () => {
  const { theme } = useTheme();
  return <GlobalStylesComponent theme={theme} />;
};