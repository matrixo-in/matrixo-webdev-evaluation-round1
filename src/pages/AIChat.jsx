import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';
import './AIChat.css';

const AIChat = () => {
  const { language } = useApp();
  const t = translations[language];
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: language === 'hi' 
        ? 'नमस्ते! मैं आपका AI वेलनेस कोच हूं। मैं तनाव, चिंता, अध्ययन टिप्स और मानसिक स्वास्थ्य में आपकी मदद कर सकता हूं। आप कैसा महसूस कर रहे हैं?'
        : language === 'te'
        ? 'హలో! నేను మీ AI వెల్నెస్ కోచ్‌ని. ఒత్తిడి, ఆందోళన, అధ్యయన చిట్కాలు మరియు మానసిక ఆరోగ్యంలో నేను మీకు సహాయం చేయగలను. మీరు ఎలా అనుభూతి చెందుతున్నారు?'
        : 'Hello! I\'m your AI Wellness Coach. I can help you with stress, anxiety, study tips, and mental health. How are you feeling today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getAIResponse = async (userMessage) => {
    // Simulated AI responses based on keywords
    const lowerMessage = userMessage.toLowerCase();
    
    const responses = {
      stress: language === 'hi' 
        ? 'तनाव प्रबंधन के लिए कुछ सुझाव: गहरी सांस लेने का अभ्यास करें, नियमित व्यायाम करें, पर्याप्त नींद लें, और काम को छोटे हिस्सों में बांटें। याद रखें, विराम लेना ठीक है!'
        : language === 'te'
        ? 'ఒత్తిడి నిర్వహణ కోసం కొన్ని చిట్కాలు: లోతైన శ్వాస వ్యాయామం చేయండి, క్రమం తప్పకుండా వ్యాయామం చేయండి, తగినంత నిద్ర పొందండి, మరియు పనిని చిన్న భాగాలుగా విభజించండి. విరామం తీసుకోవడం సరే అని గుర్తుంచుకోండి!'
        : 'Here are some stress management tips: Practice deep breathing exercises, get regular exercise, maintain a good sleep schedule, and break tasks into smaller chunks. Remember, it\'s okay to take breaks!',
      
      anxiety: language === 'hi'
        ? 'चिंता से निपटने के लिए: 5-4-3-2-1 तकनीक आजमाएं (5 चीजें देखें, 4 छूएं, 3 सुनें, 2 सूंघें, 1 चखें), दिमागीपन का अभ्यास करें, और किसी दोस्त या परामर्शदाता से बात करें।'
        : language === 'te'
        ? 'ఆందోళనను ఎదుర్కోవడానికి: 5-4-3-2-1 టెక్నిక్ ప్రయత్నించండి (5 విషయాలు చూడండి, 4 తాకండి, 3 వినండి, 2 వాసన చూడండి, 1 రుచి చూడండి), మైండ్‌ఫుల్‌నెస్ ప్రాక్టీస్ చేయండి, మరియు స్నేహితుడు లేదా కౌన్సెలర్‌తో మాట్లాడండి।'
        : 'To cope with anxiety: Try the 5-4-3-2-1 technique (5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste), practice mindfulness, and talk to a friend or counselor.',
      
      study: language === 'hi'
        ? 'अध्ययन के लिए प्रभावी सुझाव: पोमोडोरो तकनीक का उपयोग करें (25 मिनट अध्ययन, 5 मिनट विराम), एक समर्पित अध्ययन स्थान बनाएं, नोट्स बनाएं, और नियमित रूप से समीक्षा करें।'
        : language === 'te'
        ? 'అధ్యయనం కోసం సమర్థవంతమైన చిట్కాలు: పోమోడోరో టెక్నిక్ ఉపయోగించండి (25 నిమిషాల అధ్యయనం, 5 నిమిషాల విరామం), అంకితమైన అధ్యయన స్థలాన్ని సృష్టించండి, గమనికలు రాయండి, మరియు క్రమం తప్పకుండా సమీక్షించండి।'
        : 'Effective study tips: Use the Pomodoro technique (25 min study, 5 min break), create a dedicated study space, take active notes, and review regularly.',
      
      sleep: language === 'hi'
        ? 'बेहतर नींद के लिए: सोने से 1 घंटे पहले स्क्रीन से बचें, एक नियमित नींद कार्यक्रम बनाए रखें, शाम को कैफीन सीमित करें, और आरामदायक सोने का माहौल बनाएं।'
        : language === 'te'
        ? 'మంచి నిద్ర కోసం: పడుకోవడానికి 1 గంట ముందు స్క్రీన్‌లను నివారించండి, క్రమం తప్పకుండా నిద్ర షెడ్యూల్ నిర్వహించండి, సాయంత్రం కెఫీన్ పరిమితం చేయండి, మరియు సౌకర్యవంతమైన నిద్ర వాతావరణాన్ని సృష్టించండి।'
        : 'For better sleep: Avoid screens 1 hour before bed, maintain a regular sleep schedule, limit evening caffeine, and create a comfortable sleep environment.',
      
      default: language === 'hi'
        ? 'मैं समझता हूं। याद रखें कि मानसिक स्वास्थ्य की देखभाल करना महत्वपूर्ण है। क्या आप तनाव प्रबंधन, अध्ययन युक्तियों या विश्राम तकनीकों के बारे में अधिक जानना चाहेंगे?'
        : language === 'te'
        ? 'నేను అర్థం చేసుకుంటున్నాను. మానసిక ఆరోగ్యాన్ని జాగ్రత్తగా చూసుకోవడం ముఖ్యం అని గుర్తుంచుకోండి। మీరు ఒత్తిడి నిర్వహణ, అధ్యయన చిట్కాలు లేదా విశ్రాంతి పద్ధతుల గురించి మరింత తెలుసుకోవాలనుకుంటున్నారా?'
        : 'I understand. Remember that taking care of your mental health is important. Would you like to know more about stress management, study tips, or relaxation techniques?'
    };

    let response = responses.default;
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('तनाव') || lowerMessage.includes('ఒత్తిడి')) {
      response = responses.stress;
    } else if (lowerMessage.includes('anxiet') || lowerMessage.includes('चिंता') || lowerMessage.includes('ఆందోళన')) {
      response = responses.anxiety;
    } else if (lowerMessage.includes('study') || lowerMessage.includes('exam') || lowerMessage.includes('अध्ययन') || lowerMessage.includes('परीक्षा') || lowerMessage.includes('అధ్యయన') || lowerMessage.includes('పరీక్ష')) {
      response = responses.study;
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('नींद') || lowerMessage.includes('నిద్ర')) {
      response = responses.sleep;
    }

    return response;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI thinking time
    setTimeout(async () => {
      const aiResponse = await getAIResponse(input);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse
      }]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-header">
        <h1>🤖 {t.aiCoach}</h1>
        <p>{t.askQuestion}</p>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-avatar">
              {message.role === 'assistant' ? '🤖' : '👤'}
            </div>
            <div className="message-content">
              {message.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="message assistant">
            <div className="message-avatar">🤖</div>
            <div className="message-content typing">
              {t.thinking}
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-container">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t.chatPlaceholder}
          rows="2"
        />
        <button onClick={handleSend} disabled={!input.trim() || loading}>
          {t.send}
        </button>
      </div>
    </div>
  );
};

export default AIChat;
