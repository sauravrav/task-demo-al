import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Joke from './free-api';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        id: 1,
        setup: 'Why did the chicken cross the road?',
        punchline: 'To get to the other side.',
      },
    })
  ),
}));

describe('Joke component', () => {
  it('renders a list of jokes', async () => {
    render(<Joke />);

    // Wait for the API request to finish and the component to render
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Expect that the rendered jokes match the mocked data
    expect(screen.getByText('Jokes of the day')).toBeInTheDocument();
    expect(screen.getByText('Why did the chicken cross the road?')).toBeInTheDocument();
    expect(screen.getByText('To get to the other side.')).toBeInTheDocument();
  });
});
