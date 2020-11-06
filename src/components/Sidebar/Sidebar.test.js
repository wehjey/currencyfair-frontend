import React from "react";
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders sidebar component', () => {
    render(<Sidebar />);
    const send = screen.getByText(/Sending Details/i);
    const rec = screen.getByText(/Receiving Details/i);
    const youSend = screen.getByText(/You Send/i);
    const rate = screen.getByText(/Rate/i);
    const fee = screen.getByText(/Fee/i);
    const delDate = screen.getByText(/Delivery Date/i);
    const recGet = screen.getByText(/Recipient Gets/i);
    expect(send).toBeInTheDocument();
    expect(rec).toBeInTheDocument();
    expect(youSend).toBeInTheDocument();
    expect(rate).toBeInTheDocument();
    expect(fee).toBeInTheDocument();
    expect(delDate).toBeInTheDocument();
    expect(recGet).toBeInTheDocument();
});
