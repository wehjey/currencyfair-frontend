import React from "react";
import { render, screen } from '@testing-library/react';
import TransactBox from './TransactBox';

test('renders transact box component', () => {
    render(<TransactBox />);
    const rec = screen.getByText(/Receiver Gets/i);
    const youSend = screen.getByText(/You Send/i);
    expect(rec).toBeInTheDocument();
    expect(youSend).toBeInTheDocument();
});
