<div align="center">
    <img src="https://matrixo.in/logos/logo-dark.png" width="30%" alt="matriXO Logo Dark"/>
</div>

# 🧠 MindCare - Student Wellness Hub

## Project Information

### Name of the domain:
**Student Mental Health & Wellness**

### The Problem:
Students face significant mental health challenges including stress, anxiety, exam pressure, and difficulty managing their emotional wellbeing. Many students struggle silently without proper support systems or tools to track and improve their mental health. There's a lack of accessible, personalized wellness platforms that combine mood tracking, AI-powered guidance, and multi-language support tailored for students.

### Target Users:
- College and university students dealing with academic stress
- Students experiencing anxiety and mental health concerns
- Young adults seeking daily wellness support and mood tracking
- Students who prefer accessing mental health resources in their native language
- Anyone looking for AI-powered wellness guidance and emotional support

### How your solution addresses it:
MindCare provides a comprehensive mental wellness platform specifically designed for students:

1. **Mood Tracking System**: Daily mood logging with notes to identify emotional patterns over time
2. **AI Wellness Coach**: Intelligent chatbot providing 24/7 support, stress management tips, study advice, and mental health guidance
3. **Multi-Language Support**: Full interface translation in English, Hindi (हिंदी), and Telugu (తెలుగు) making wellness accessible across language barriers
4. **Personalized Experience**: Profile customization with avatars, display names, and theme preferences
5. **Secure Authentication**: Google Sign-In integration ensuring user privacy and data security
6. **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

---

## 🚀 Features Implemented

### ✅ Mandatory Requirements Completed:

1. **Google Login (Firebase Authentication)** ✓
   - Secure Google Sign-In integration
   - User session management
   - Protected routes

2. **AI-Powered Feature** ✓
   - **AI Wellness Coach Chatbot**
   - Context-aware responses for stress, anxiety, study tips, and sleep
   - Multi-language support in responses
   - Real-time conversational interface

3. **Profile Customization** ✓
   - Custom display name
   - Avatar selection (12 unique options)
   - Theme customization (Light, Dark, Blue, Green)
   - Preferences saved locally

4. **Multi-Language Translation** ✓
   - **English** (Full support)
   - **Hindi (हिंदी)** (Full support)
   - **Telugu (తెలుగు)** (Full support)
   - Entire UI translates dynamically

### Additional Features:
- Mood history visualization
- Quick action dashboard
- Responsive bottom navigation for mobile
- Local data persistence
- Beautiful gradient themes
- Smooth animations and transitions

---

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router v6
- **Authentication**: Firebase Authentication
- **Styling**: Custom CSS with CSS Variables
- **State Management**: React Context API
- **Storage**: LocalStorage for user preferences
- **Language**: JavaScript (ES6+)

---

## 📦 Installation & Setup

### Prerequisites:
- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Steps:

1. **Clone the repository**
```bash
git clone https://github.com/shivaganesht/matrixo-webdev-evaluation-round1.git
cd matrixo-webdev-evaluation-round1
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase**
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Google Authentication
   - Copy your Firebase config
   - Update `src/config/firebase.js` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

---

## 📱 How to Use

1. **Login**: Click "Login with Google" on the landing page
2. **Home Dashboard**: View quick actions and recent mood entries
3. **Track Mood**: Select your current mood and add optional notes
4. **AI Chat**: Ask the wellness coach about stress, study tips, or mental health
5. **Profile**: Customize your name, avatar, and theme
6. **Language**: Switch between English, Hindi, and Telugu from the navbar

---

## 🎨 Theme Options

- **☀️ Light Theme**: Clean and bright interface
- **🌙 Dark Theme**: Easy on the eyes for night use
- **💙 Blue Theme**: Calming blue color palette
- **💚 Green Theme**: Nature-inspired green tones

---

## 🌍 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | en | ✅ Complete |
| हिंदी (Hindi) | hi | ✅ Complete |
| తెలుగు (Telugu) | te | ✅ Complete |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
├── pages/
│   ├── Login.jsx / Login.css
│   ├── Home.jsx / Home.css
│   ├── MoodTracker.jsx / MoodTracker.css
│   ├── AIChat.jsx / AIChat.css
│   └── Profile.jsx / Profile.css
├── contexts/
│   ├── AuthContext.jsx
│   └── AppContext.jsx
├── config/
│   └── firebase.js
├── utils/
│   └── translations.js
├── App.jsx
├── App.css
└── index.css
```

---

## 🎯 Key Highlights

- ✅ Fully functional web application
- ✅ Real-world problem solving
- ✅ Clean and intuitive UI/UX
- ✅ Responsive design
- ✅ Modern React patterns
- ✅ Firebase integration
- ✅ Multi-language support
- ✅ AI-powered features
- ✅ Local data persistence

---

## 📝 Future Enhancements

- Integration with real AI APIs (GPT-4, Gemini)
- Data visualization charts for mood trends
- Push notifications for wellness reminders
- Community support features
- Professional counselor connections
- Export mood history reports

---

## 📧 Contact

For any queries regarding this project:  
Email: hello@matrixo.in

---

## 🏆 Acknowledgments

This project was developed as part of the **matriXO Web Development Internship - Technical Evaluation Round 1 (Jan 2026)**.

---

### **Built with ❤️ for student mental wellness**
