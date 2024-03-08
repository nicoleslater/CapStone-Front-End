import React from 'react';
import './Profile.css';
import NavBarDashboard from './NavBarDashboard';

export default function Profile() {
  return (
    <div className="profile-container">
      <NavBarDashboard />
      <div className="main-content">
        <div className="top-section">
          <div className="logo">
            <img src="logo-image.jpg" alt="Your Logo" />
          </div>
          <div className="profile-info">
            <div className="profile-picture">
              <img src="profile-picture.jpg" alt="Profile" />
            </div>
            <div className="profile-name">Your Name</div>
          </div>
        </div>
        <div className="profile-details">
          <div>Location:</div>
          <div>Skills:</div>
          <div>Interests:</div>
          <button>Edit Profile</button>
        </div>
        <div className="tidbits">
          <h2>Your Uploaded Tidbits</h2>
          {/* Video cards */}
        </div>
        <div className="tidbits">
          <h2>Saved Tidbits</h2>
          {/* Video cards */}
        </div>
      </div>
      <div className="message-button">Message</div>
    </div>
  );
}
