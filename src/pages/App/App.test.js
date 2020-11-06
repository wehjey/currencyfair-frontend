import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders complete app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Specify the amount to be sent or received./i);
  expect(linkElement).toBeInTheDocument();
});
