import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post('https://api.aakashlabs.com/contact-form', formData)
      .then(response => {
        console.log(response);
        // do something with the response, e.g. show a success message
      })
      .catch(error => {
        console.error(error);
        // show an error message to the user
      });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto'
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    display: 'block',
  };

  const inputStyle = {
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #ced4da',
    marginBottom: '1rem'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0069d9'
  };

  return (
    <Form onSubmit={handleSubmit} style={formStyle}>
      <FormGroup>
        <Label for="name" style={labelStyle}>Name</Label>
        <Input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} style={inputStyle} />
      </FormGroup>
      <FormGroup>
        <Label for="email" style={labelStyle}>Email</Label>
        <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
      </FormGroup>
      <FormGroup>
        <Label for="message" style={labelStyle}>Message</Label>
        <Input type="textarea" name="message" id="message" value={formData.message} onChange={handleInputChange} style={{ ...inputStyle, height: '10rem' }} />
      </FormGroup>
      <Button type="submit" style={{ ...buttonStyle }} onMouseEnter={() => { setButtonStyle({ ...buttonStyle, ...buttonHoverStyle }); }} onMouseLeave={() => { setButtonStyle({ ...buttonStyle }); }}>Submit</Button>
    </Form>
  );
};

export default ContactForm;
