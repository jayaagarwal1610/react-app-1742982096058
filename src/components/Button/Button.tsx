import React, { memo } from 'react';
import styled from 'styled-components';

type ButtonVariant = 'number' | 'operation' | 'function';

interface ButtonProps {
  value: string;
  onClick: () => void;
  variant?: ButtonVariant;
  doubleWidth?: boolean;
  ariaLabel?: string;
}

const StyledButton = styled.button<{ variant: ButtonVariant; doubleWidth: boolean }>`
  border: none;
  outline: none;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  width: ${props => props.doubleWidth ? 'calc(50% - 0.5rem)' : 'calc(25% - 0.75rem)'};
  height: 4rem;
  margin: 0.25rem;
  transition: all 0.2s ease;
  
  background-color: ${props => {
    switch (props.variant) {
      case 'number':
        return props.theme.primary;
      case 'operation':
        return props.theme.accent;
      case 'function':
        return props.theme.secondary;
      default:
        return props.theme.primary;
    }
  }};
  
  color: ${props => {
    switch (props.variant) {
      case 'operation':
      case 'function':
        return '#FFFFFF';
      default:
        return props.theme.text;
    }
  }};
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 400px) {
    font-size: 1.2rem;
    padding: 0.75rem;
    height: 3.5rem;
  }
`;

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  variant = 'number',
  doubleWidth = false,
  ariaLabel = value
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      doubleWidth={doubleWidth}
      aria-label={ariaLabel}
    >
      {value}
    </StyledButton>
  );
};

export default memo(Button);