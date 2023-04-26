import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import ContactForm from './ContactForm';

jest.mock('axios');

describe('ContactForm', () => {
  test('should render the form and submit the data', async () => {
    // Mock the axios post request
    axios.post.mockResolvedValueOnce({ data: 'success' });

    // Render the component
    render(<ContactForm />);

    // Fill out the form
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello world!' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Wait for the post request to complete
    await screen.findByText('Success!');

    // Assert that the post request was made with the correct data
    expect(axios.post).toHaveBeenCalledWith('https://api.aakashlabs.com/contact-form', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      message: 'Hello world!'
    });
  });
});
