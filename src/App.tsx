import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { useTheme } from './context/ThemeContext';

// Lazy load the Calculator component for code splitting
const Calculator = lazy(() => import('./components/Calculator/Calculator'));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;