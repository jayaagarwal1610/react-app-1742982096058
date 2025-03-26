import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalculatorProvider } from './context/CalculatorContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </ThemeProvider>
  </React.StrictMode>
);