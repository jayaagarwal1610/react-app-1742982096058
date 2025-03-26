import React, { createContext, useContext, useReducer, useMemo, ReactNode } from 'react';
import { CalculatorState, Action, ActionType, OperationType } from '../types/calculator';
import { calculate } from '../utils/calculator';

interface CalculatorContextProps {
  state: CalculatorState;
  dispatch: React.Dispatch<Action>;
}

const initialState: CalculatorState = {
  currentValue: '0',
  previousValue: '',
  operation: '',
  isResult: false
};

const CalculatorContext = createContext<CalculatorContextProps | undefined>(undefined);

const calculatorReducer = (state: CalculatorState, action: Action): CalculatorState => {
  switch (action.type) {
    case ActionType.ADD_DIGIT: {
      // Reset if we just got a result
      if (state.isResult) {
        return {
          ...initialState,
          currentValue: action.payload.digit === '.' ? '0.' : action.payload.digit
        };
      }
      
      // Don't allow multiple zeros at the start
      if (action.payload.digit === '0' && state.currentValue === '0') {
        return state;
      }
      
      // Don't allow multiple decimal points
      if (action.payload.digit === '.' && state.currentValue.includes('.')) {
        return state;
      }
      
      // Replace initial zero (except when decimal point)
      if (state.currentValue === '0' && action.payload.digit !== '.') {
        return {
          ...state,
          currentValue: action.payload.digit
        };
      }
      
      return {
        ...state,
        currentValue: `${state.currentValue}${action.payload.digit}`
      };
    }
    
    case ActionType.CHOOSE_OPERATION: {
      // If no value entered yet, don't allow operations
      if (state.currentValue === '0' && state.previousValue === '') {
        return state;
      }
      
      // If we have current value but no previous, store current and set operation
      if (state.previousValue === '') {
        return {
          ...state,
          previousValue: state.currentValue,
          operation: action.payload.operation,
          currentValue: '0',
          isResult: false
        };
      }
      
      // If we already have an operation in progress, calculate it first
      return {
        previousValue: calculate(state.previousValue, state.currentValue, state.operation),
        operation: action.payload.operation,
        currentValue: '0',
        isResult: false
      };
    }
    
    case ActionType.EVALUATE: {
      // Can't evaluate without all parts
      if (state.operation === '' || state.previousValue === '' || state.currentValue === '') {
        return state;
      }
      
      return {
        currentValue: calculate(state.previousValue, state.currentValue, state.operation),
        previousValue: '',
        operation: '',
        isResult: true
      };
    }
    
    case ActionType.CLEAR: {
      return initialState;
    }
    
    case ActionType.DELETE_DIGIT: {
      // If displaying a result, clear it all
      if (state.isResult) {
        return initialState;
      }
      
      // If current value is a single digit, reset to zero
      if (state.currentValue.length === 1) {
        return {
          ...state,
          currentValue: '0'
        };
      }
      
      // Otherwise delete the last digit
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1)
      };
    }
    
    case ActionType.TOGGLE_SIGN: {
      if (state.currentValue === '0') return state;
      
      return {
        ...state,
        currentValue: state.currentValue.startsWith('-') 
          ? state.currentValue.substring(1) 
          : `-${state.currentValue}`
      };
    }
    
    case ActionType.PERCENTAGE: {
      if (state.currentValue === '0') return state;
      
      const percent = parseFloat(state.currentValue) / 100;
      return {
        ...state,
        currentValue: percent.toString()
      };
    }
    
    default:
      return state;
  }
};

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  
  const contextValue = useMemo(() => ({
    state,
    dispatch
  }), [state]);
  
  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = (): CalculatorContextProps => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};