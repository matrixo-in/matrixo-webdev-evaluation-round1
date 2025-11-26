import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import './Home.css';

const Home = () => {
  const { user } = useAuth();
  const { language, moods, profile } = useApp();
  const t = translations[language];

  const recentMoods = moods.slice(0, 5);

  const moodEmojis = {
    'veryHappy': '😄',
    'happy': '😊',
    'neutral': '😐',
    'sad': '😢',
    'stressed': '😰'
  };

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>{t.welcomeBack}, {profile.displayName || user?.displayName}! 👋</h1>
        <p>{t.getStarted}</p>
      </div>

      <div className="home-grid">
        <div className="quick-actions-card">
          <h2>{t.quickActions}</h2>
          <div className="action-buttons">
            <Link to="/mood" className="action-btn mood-btn">
              <span className="action-icon">📊</span>
              <div>
                <h3>{t.moodTracker}</h3>
                <p>{t.trackMood}</p>
              </div>
            </Link>
            
            <Link to="/ai-chat" className="action-btn chat-btn">
              <span className="action-icon">🤖</span>
              <div>
                <h3>{t.aiCoach}</h3>
                <p>{t.askQuestion}</p>
              </div>
            </Link>
            
            <Link to="/profile" className="action-btn profile-btn">
              <span className="action-icon">⚙️</span>
              <div>
                <h3>{t.profile}</h3>
                <p>{t.profileSettings}</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="recent-moods-card">
          <h2>{t.recentMoods}</h2>
          {recentMoods.length > 0 ? (
            <div className="mood-list">
              {recentMoods.map((mood) => (
                <div key={mood.id} className="mood-item">
                  <span className="mood-emoji">{moodEmojis[mood.type]}</span>
                  <div className="mood-details">
                    <p className="mood-type">{t[mood.type]}</p>
                    <p className="mood-date">
                      {new Date(mood.timestamp).toLocaleDateString(
                        language === 'hi' ? 'hi-IN' : 
                        language === 'te' ? 'te-IN' : 'en-US',
                        { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">{t.noMoodData}</p>
          )}
        </div>
      </div>

      <div className="tip-card">
        <p>{t.tip}</p>
      </div>
    </div>
  );
};

export default Home;
