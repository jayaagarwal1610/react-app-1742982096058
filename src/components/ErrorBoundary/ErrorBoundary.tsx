import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  background-color: #fff5f5;
  color: #c53030;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem;
  border: 1px solid #fc8181;
  max-width: 500px;
`;