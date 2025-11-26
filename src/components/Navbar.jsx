import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { language, setLanguage, profile } = useApp();
  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-logo">🧠</span>
          <h1>{t.appName}</h1>
        </div>
        
        {user && (
          <div className="navbar-menu">
            <div className="language-selector">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="language-select"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="te">తెలుగు</option>
              </select>
            </div>
            
            <div className="user-info">
              <span className="user-avatar">{profile.avatar || '😊'}</span>
              <span className="user-name">
                {profile.displayName || user.displayName}
              </span>
            </div>
            
            <button onClick={logout} className="logout-btn">
              {t.logout}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
