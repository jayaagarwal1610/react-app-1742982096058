import { OperationType } from '../types/calculator';

export const formatNumber = (num: string): string => {
  if (!num) return '0';
  
  // Handle edge cases
  if (num === 'Infinity' || num === '-Infinity') return 'Error';
  if (isNaN(parseFloat(num))) return 'Error';
  
  const [integerPart, decimalPart] = num.split('.');
  
  // Format the integer part with commas
  const formattedInteger = parseInt(integerPart).toLocaleString('en-US');
  
  // Return the formatted number
  return decimalPart !== undefined 
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
};

export const calculate = (
  previousValue: string,
  currentValue: string,
  operation: OperationType
): string => {
  if (!previousValue || !currentValue || !operation) return currentValue;
  
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  
  if (isNaN(prev) || isNaN(current)) return 'Error';
  
  let result: number;
  
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '�':
      result = prev * current;
      break;
    case '�':
      if (current === 0) return 'Error';
      result = prev / current;
      break;
    default:
      return currentValue;
  }
  
  // Convert to string and remove trailing zeros
  return parseFloat(result.toFixed(10)).toString();
};