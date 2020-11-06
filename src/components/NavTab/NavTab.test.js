import React from "react";
import { render, screen } from '@testing-library/react';
import NavTab from './NavTab';

test('renders nav tab component', () => {
    render(<NavTab />);
    const step1 = screen.getByText(/Step 1/i);
    const step2 = screen.getByText(/Step 2/i);
    const step3 = screen.getByText(/Step 3/i);
    const transInfo = screen.getByText(/Transaction Info/i);
    const recpInfo = screen.getByText(/Recipient Info/i);
    const payment = screen.getByText(/Make Payment/i);
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
    expect(transInfo).toBeInTheDocument();
    expect(recpInfo).toBeInTheDocument();
    expect(payment).toBeInTheDocument();
});
