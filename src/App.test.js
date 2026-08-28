// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Forge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Forge/i);
    expect(titleElement).toBeInTheDocument();
});
