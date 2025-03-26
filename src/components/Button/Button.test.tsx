import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ThemeProvider } from '../../context/ThemeContext';

describe('Button Component', () => {
  const mockOnClick = jest.fn();
  
  beforeEach(() => {
    mockOnClick.mockClear();
  });
  
  test('renders with correct value', () => {
    render(
      <ThemeProvider>
        <Button value="7" onClick={mockOnClick} />
      </ThemeProvider>
    );
    
    expect(screen.getByText('7')).toBeInTheDocument();
  });
  
  test('calls onClick handler when clicked', () => {
    render(
      <ThemeProvider>
        <Button value="7" onClick={mockOnClick} />
      </ThemeProvider>
    );
    
    fireEvent.click(screen.getByText('7'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  
  test('applies correct variant styling', () => {
    const { rerender } = render(
      <ThemeProvider>
        <Button value="7" onClick={mockOnClick} variant="number" />
      </ThemeProvider>
    );
    
    const button = screen.getByText('7');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider>
        <Button value="+" onClick={mockOnClick} variant="operation" />
      </ThemeProvider>
    );
    
    const opButton = screen.getByText('+');
    expect(opButton).toBeInTheDocument();
  });
  
  test('has correct aria-label', () => {
    render(
      <ThemeProvider>
        <Button value="+" onClick={mockOnClick} ariaLabel="Add" />
      </ThemeProvider>
    );
    
    expect(screen.getByLabelText('Add')).toBeInTheDocument();
  });
});