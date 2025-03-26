import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { useCalculator } from '../../context/CalculatorContext';
import { ActionType, OperationType } from '../../types/calculator';

const KeypadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 16px;
  background-color: ${props => props.theme.primary};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;