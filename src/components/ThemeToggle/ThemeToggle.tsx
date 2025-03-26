import React, { memo } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const ToggleContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  
  @media (max-width: 400px) {
    top: 10px;
    right: 10px;
  }
`;