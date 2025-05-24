
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-card">
        <h2>Welcome to <span className="highlight">PopX</span></h2>
        <p>Your ultimate platform for smart digital solutions</p>
        <button className="primary-btn" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="secondary-btn" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
