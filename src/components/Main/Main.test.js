import React from "react";
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main component', () => {
    render(<Main />);
    const linkElement = screen.getByText(/Let's set up your transaction!/i);
    const linkElement2 = screen.getByText(/the amount to be sent/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
});
