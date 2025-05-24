import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Settings.css';

const Settings = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem('loggedInUser');
    if (!localUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(localUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="settings-container">
      <div className="profile">
        {/* You can add an avatar here if you want */}
        <img
          src={user.avatar || 'https://imgs.search.brave.com/BmloU94I57QjJL1pSn7_wGBLdvAr5OjSthLdXDR_ov8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVVZ6RFFP/eWFsbDFrNHRKc21s/MDVvYmE1aFZBbWlQ/M19nMGhwNDdwRVM0/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dS9kbVZqZEc5/eWMzUnZZMnN1L1ky/OXRMMmt2Y0hKbGRt/bGwvZHkweGVDODJN/QzgyT1M5by9ZWEJ3/ZVMxbGJXOXFhUzFt/L1lXTmxMWGRwZEdn/dFltbG4vTFdWNVpY/TXRaWEJ6TVRBdC9k/bVZqZEc5eUxUSTFO/ekUyL01EWTVMbXB3/Wnc'} 
          alt="User Avatar"
          className="avatar"
        />
        <div className="profile-info">
          <h3>{user.fullName}</h3>
          <p className="email">{user.email}</p>
        </div>
      </div>

      <p className="description"><strong>Phone:</strong> {user.phone || 'N/A'}</p>
      <p className="description"><strong>Company:</strong> {user.company || 'N/A'}</p>
      <p className="description"><strong>Agency:</strong> {user.agency || 'N/A'}</p>

      <button className="edit-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Settings;
