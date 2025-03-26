import React from 'react';
import { render, screen } from '@testing-library/react';
import { CalculatorProvider, useCalculator } from './CalculatorContext';
import { ActionType } from '../types/calculator';

// Test component to extract context values
const TestComponent: React.FC = () => {
  const { state, dispatch } = useCalculator();
  
  return (
    <div>
      <div data-testid="current-value">{state.currentValue}</div>
      <button 
        onClick={() => dispatch({ 
          type: ActionType.ADD_DIGIT, 
          payload: { digit: '5' } 
        })}
      >
        Add 5
      </button>
    </div>
  );
};

describe('CalculatorContext', () => {
  test('provides initial state', () => {
    render(
      <CalculatorProvider>
        <TestComponent />
      </CalculatorProvider>
    );
    
    expect(screen.getByTestId('current-value')).toHaveTextContent('0');
  });
  
  test('dispatches actions correctly', () => {
    render(
      <CalculatorProvider>
        <TestComponent />
      </CalculatorProvider>
    );
    
    // Initial state
    expect(screen.getByTestId('current-value')).toHaveTextContent('0');
    
    // Click to dispatch ADD_DIGIT action
    screen.getByText('Add 5').click();
    
    // State should be updated
    expect(screen.getByTestId('current-value')).toHaveTextContent('5');
  });
});
```