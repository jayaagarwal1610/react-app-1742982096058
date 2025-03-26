import React, { memo } from 'react';
import styled from 'styled-components';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import { useTheme } from '../../context/ThemeContext';

const CalculatorContainer = styled.div`
  width: 350px;
  background-color: ${props => props.theme.background};
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 400px) {
    width: 300px;
    padding: 1rem;
  }
`;