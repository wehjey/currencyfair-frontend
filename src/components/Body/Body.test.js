import React from "react";
import { render, screen } from '@testing-library/react';
import Body from './Body';

test('renders body component', () => {
    render(<Body />);
    const linkElement = screen.getByText(/Let's set up your transaction!/i);
    expect(linkElement).toBeInTheDocument();
});
