import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const { language, theme, setTheme, profile, updateProfile } = useApp();
  const t = translations[language];

  const [displayName, setDisplayName] = useState(profile.displayName || user?.displayName || '');
  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatar || '😊');

  const avatars = ['😊', '😎', '🤓', '😇', '🥳', '🤗', '😴', '🧐', '🤠', '👨‍💻', '👩‍💻', '🎓'];
  const themes = [
    { id: 'light', name: t.lightTheme, icon: '☀️' },
    { id: 'dark', name: t.darkTheme, icon: '🌙' },
    { id: 'blue', name: t.blueTheme, icon: '💙' },
    { id: 'green', name: t.greenTheme, icon: '💚' }
  ];

  const handleSave = () => {
    updateProfile({
      displayName,
      avatar: selectedAvatar
    });
    alert(t.profileUpdated);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>⚙️ {t.profileSettings}</h1>
      </div>

      <div className="profile-card">
        <div className="profile-section">
          <h2>{t.displayName}</h2>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder={user?.displayName}
            className="profile-input"
          />
        </div>

        <div className="profile-section">
          <h2>{t.selectAvatar}</h2>
          <div className="avatar-grid">
            {avatars.map((avatar) => (
              <button
                key={avatar}
                className={`avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
                onClick={() => setSelectedAvatar(avatar)}
              >
                {avatar}
              </button>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h2>{t.selectTheme}</h2>
          <div className="theme-grid">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                className={`theme-option ${theme === themeOption.id ? 'selected' : ''}`}
                onClick={() => setTheme(themeOption.id)}
              >
                <span className="theme-icon">{themeOption.icon}</span>
                <span className="theme-name">{themeOption.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h2>{t.language}</h2>
          <div className="language-info">
            <p>Current language: {
              language === 'en' ? 'English' : 
              language === 'hi' ? 'हिंदी' : 'తెలుగు'
            }</p>
            <p className="language-note">Change language from the navigation bar</p>
          </div>
        </div>

        <button className="save-profile-btn" onClick={handleSave}>
          {t.saveProfile}
        </button>
      </div>

      <div className="profile-info-card">
        <h3>Account Information</h3>
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">{user?.email}</span>
        </div>
        <div className="info-item">
          <span className="info-label">User ID:</span>
          <span className="info-value">{user?.uid?.substring(0, 20)}...</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
