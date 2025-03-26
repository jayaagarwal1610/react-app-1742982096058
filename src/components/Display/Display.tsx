import React, { memo } from 'react';
import styled from 'styled-components';
import { useCalculator } from '../../context/CalculatorContext';
import { formatNumber } from '../../utils/calculator';

const DisplayContainer = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;