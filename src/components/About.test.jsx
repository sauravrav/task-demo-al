import { render, screen } from '@testing-library/react';
import About from './About';

test('renders the "About Us" section title', () => {
  render(<About />);
  const titleElement = screen.getByText(/About Us/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the "LOVELY CLIENTS" stats text', () => {
  render(<About />);
  const clientsElement = screen.getByText(/LOVELY CLIENTS/i);
  expect(clientsElement).toBeInTheDocument();
});
