import React from 'react';
import './SchoolRegistrationForm.css';
const ShowSchool = ({ formData }) => {
    return (
        <div className="registration-summary">
            <h2>Registration Summary</h2>
            <p>
                <strong>School's Name:</strong> {formData.name}
            </p>
            <p>
                <strong>Address:</strong> {formData.address}
            </p>
            <p>
                <strong>Phone Number:</strong> {formData.phoneNumber}
            </p>
            <p>
                <strong>Email:</strong> {formData.email}
            </p>
            <p>
                <strong>City:</strong> {formData.city}
            </p>
            
            <div className="card">
                <strong>Image:</strong><img src={URL.createObjectURL(formData.image[0])} alt='image' /> 
                    
            </div>
        </div>
    );
};

export default ShowSchool;
