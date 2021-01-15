import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders boilerplate heading', () => {
  render(<App />);
  const headingElement = screen.getByText('Boilerplate');
  expect(headingElement).toBeInTheDocument();
});
