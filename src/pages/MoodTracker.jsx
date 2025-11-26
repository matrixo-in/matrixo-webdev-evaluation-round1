import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import './MoodTracker.css';

const MoodTracker = () => {
  const { language, moods, addMood } = useApp();
  const t = translations[language];
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');

  const moodOptions = [
    { type: 'veryHappy', emoji: '😄', label: t.veryHappy },
    { type: 'happy', emoji: '😊', label: t.happy },
    { type: 'neutral', emoji: '😐', label: t.neutral },
    { type: 'sad', emoji: '😢', label: t.sad },
    { type: 'stressed', emoji: '😰', label: t.stressed }
  ];

  const handleSaveMood = () => {
    if (selectedMood) {
      addMood({
        type: selectedMood,
        note: note
      });
      setSelectedMood('');
      setNote('');
      alert(t.profileUpdated);
    }
  };

  return (
    <div className="mood-tracker-container">
      <div className="mood-tracker-header">
        <h1>{t.howAreYou}</h1>
      </div>

      <div className="mood-selector">
        <h2>{t.trackMood}</h2>
        <div className="mood-options">
          {moodOptions.map((mood) => (
            <button
              key={mood.type}
              className={`mood-option ${selectedMood === mood.type ? 'selected' : ''}`}
              onClick={() => setSelectedMood(mood.type)}
            >
              <span className="mood-option-emoji">{mood.emoji}</span>
              <span className="mood-option-label">{mood.label}</span>
            </button>
          ))}
        </div>

        <div className="mood-note">
          <textarea
            placeholder="Add a note (optional)..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows="4"
          />
        </div>

        <button 
          className="save-mood-btn"
          onClick={handleSaveMood}
          disabled={!selectedMood}
        >
          {t.saveMood}
        </button>
      </div>

      <div className="mood-history">
        <h2>{t.moodHistory}</h2>
        {moods.length > 0 ? (
          <div className="mood-history-list">
            {moods.map((mood) => {
              const moodOption = moodOptions.find(m => m.type === mood.type);
              return (
                <div key={mood.id} className="mood-history-item">
                  <span className="mood-history-emoji">{moodOption?.emoji}</span>
                  <div className="mood-history-content">
                    <p className="mood-history-type">{moodOption?.label}</p>
                    {mood.note && <p className="mood-history-note">{mood.note}</p>}
                    <p className="mood-history-date">
                      {new Date(mood.timestamp).toLocaleString(
                        language === 'hi' ? 'hi-IN' : 
                        language === 'te' ? 'te-IN' : 'en-US',
                        { 
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        }
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="no-moods">{t.noMoodData}</p>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
