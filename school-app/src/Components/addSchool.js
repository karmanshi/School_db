import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ShowSchool from './showSchool'; // Import the component to save data
import axios from 'axios';
import './SchoolRegistrationForm.css';

const SchoolRegistrationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  const [formData, setFormData] = useState(null);

  const onSubmit  = async (data) => {
      try {
        const f_Data = new FormData();
        f_Data.append('photo', data.image[0]);

        // You can also append other data to the FormData object
        f_Data.append('name', data.name);
        f_Data.append('city', data.city);
        f_Data.append('address', data.address);
        f_Data.append('email', data.email);
        f_Data.append('phone_no', data.phoneNumber);
        f_Data.append('state', data.state);

        const response = await axios.post('http://localhost:5000/add_school', f_Data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert("Data Added Successfully!")
        console.log('Upload successful:', response.data);
      } catch (error) {
        alert("An Error Occurred!")
        console.error('Error uploading file:', error);
      }
      setFormData(data)
      reset();
    };

  return (
    <div className="school-registration-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="school-registration-form">
        <div className="form-group">
          <label htmlFor="name">School's Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'School Name is required' })}
          />
          <span className="error">{errors.name && errors.name.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            {...register('address', { required: 'Address is required' })}
          />
          <span className="error">{errors.address && errors.address.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number',
              },
            })}
          />
          <span className="error">{errors.phoneNumber && errors.phoneNumber.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email',
              },
            })}
          />
          <span className="error">{errors.email && errors.email.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register('city', { required: 'City is required' })}
          />
          <span className="error">{errors.city && errors.city.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            {...register('state', { required: 'State is required' })}
          />
          <span className="error">{errors.state && errors.state.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" {...register('image', { required: 'Image is required' })} />
          <span className="error">{errors.image && errors.image.message}</span>
        </div>

        <button type="submit">Register</button>
      </form>

      
    </div>
  );
};

export default SchoolRegistrationForm;
