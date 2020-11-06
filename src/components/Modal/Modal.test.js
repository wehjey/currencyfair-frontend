import React from "react";
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders modal component', () => {
    render(<Modal />);
    const linkElement = screen.getByText(/Identity verification required/i);
    const linkElement2 = screen.getByText(/Enter the code sent via SMS to/i);
    const linkElement3 = screen.getByText(/Receive a new code/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
    expect(linkElement3).toBeInTheDocument();
});
