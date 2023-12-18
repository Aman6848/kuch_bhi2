// src/EnrollmentForm.js
import React, { useState } from 'react';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Log the server response
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Preferred Batch:
        <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enroll</button>
    </form>
  );
};

export default EnrollmentForm;
