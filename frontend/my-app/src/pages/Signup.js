import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';
import { server } from '../server';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '' 
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setError('');
    try {
      const res = await fetch(`${server}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Signup failed');
        return;
      }

      alert('Signup successful. Please login now.');
      navigate('/login');
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Signup</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="form-group">
          <label htmlFor="fullName">Full Name <span className="required">*</span></label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            type="text"
            value={formData.fullName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone <span className="required">*</span></label>
          <input
            id="phone"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            type="tel"
            value={formData.phone}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password <span className="required">*</span></label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            placeholder="Company"
            onChange={handleChange}
            type="text"
            value={formData.company}
          />
        </div>

        {/* Updated agency radio buttons */}
        <div className="form-group">
          <label>Agency <span className="required">*</span></label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={formData.agency === 'Yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="No"
                checked={formData.agency === 'No'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button className="primary-btn" onClick={handleSignup}>Create Account</button>
      </div>
    </div>
  );
};

export default Signup;
