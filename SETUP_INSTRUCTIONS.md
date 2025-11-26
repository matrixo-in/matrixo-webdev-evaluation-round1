# 🚀 MindCare Setup Instructions

## Complete Setup Guide for matriXO Web Development Evaluation

---

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for cloning the repository)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

4. **Google Account** (for Firebase and testing login)

5. **Modern Web Browser** (Chrome, Firefox, Edge, or Safari)

---

## 🔥 Firebase Setup (IMPORTANT)

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `mindcare-wellness` (or any name you prefer)
4. Click **Continue**
5. Disable Google Analytics (optional for this project)
6. Click **Create project**
7. Wait for project creation, then click **Continue**

### Step 2: Enable Google Authentication

1. In Firebase Console, click **Build** > **Authentication** in the left sidebar
2. Click **Get started**
3. Go to **Sign-in method** tab
4. Click on **Google** provider
5. Enable the toggle switch
6. Select a **Project support email** from dropdown
7. Click **Save**

### Step 3: Register Web App

1. In Firebase Console, go to **Project Overview** (home icon)
2. Click the **Web icon** (`</>`) to add a web app
3. Enter app nickname: `MindCare Web App`
4. **DO NOT** check "Firebase Hosting" (not needed)
5. Click **Register app**
6. **COPY** the Firebase configuration object shown (you'll need this!)

It will look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

7. Click **Continue to console**

### Step 4: Add Authorized Domain (if needed)

1. Go to **Authentication** > **Settings** tab
2. Scroll to **Authorized domains**
3. `localhost` should already be there
4. If deploying, add your deployment domain later

---

## 💻 Project Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/shivaganesht/matrixo-webdev-evaluation-round1.git
cd matrixo-webdev-evaluation-round1
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React
- React Router DOM
- Firebase
- Vite
- And other dependencies

**Wait for installation to complete** (may take 1-2 minutes)

### Step 3: Configure Firebase

Open the file: `src/config/firebase.js`

Replace the placeholder configuration with YOUR Firebase config:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Replace this entire object with YOUR Firebase config from Step 3 above
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-actual-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-actual-project.appspot.com",
  messagingSenderId: "YOUR_ACTUAL_SENDER_ID",
  appId: "YOUR_ACTUAL_APP_ID"
};

// Don't modify anything below this line
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

**⚠️ IMPORTANT:** Without valid Firebase credentials, Google login will not work!

---

## 🎬 Running the Application

### Start Development Server

```bash
npm run dev
```

You should see:

```
ROLLDOWN-VITE v7.2.5  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Open in Browser

1. Open your browser
2. Navigate to: `http://localhost:5173/`
3. You should see the **MindCare Login Page**

---

## 🧪 Testing the Application

### Test 1: Google Login

1. Click **"Login with Google"** button
2. Select your Google account
3. Grant permissions if asked
4. You should be redirected to the **Home Dashboard**

### Test 2: Navigation

1. Click on different sections:
   - Home (🏠)
   - Mood Tracker (📊)
   - AI Chat (🤖)
   - Profile (⚙️)

### Test 3: Mood Tracking

1. Go to **Mood Tracker**
2. Select a mood (Very Happy, Happy, Neutral, Sad, Stressed)
3. Add an optional note
4. Click **Save Mood**
5. Check if it appears in Mood History

### Test 4: AI Chat

1. Go to **AI Wellness Coach**
2. Type a message like:
   - "I'm feeling stressed"
   - "How can I study better?"
   - "Tips for better sleep"
3. Press Enter or click Send
4. Check if AI responds appropriately

### Test 5: Profile Customization

1. Go to **Profile**
2. Change your display name
3. Select a different avatar
4. Switch themes (Light, Dark, Blue, Green)
5. Click **Save Profile**
6. Verify changes are reflected

### Test 6: Language Translation

1. In the navbar, find the language dropdown
2. Select **हिंदी** (Hindi)
3. Verify entire UI translates
4. Select **తెలుగు** (Telugu)
5. Verify translation
6. Switch back to **English**

### Test 7: Responsive Design

1. Resize browser window to mobile size (or use DevTools)
2. Check if bottom navigation appears
3. Verify all features work on mobile

### Test 8: Logout

1. Click **Logout** button in navbar
2. Verify you're redirected to login page
3. Verify you can't access protected pages

---

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

---

## 🐛 Troubleshooting

### Issue: "Firebase configuration error"

**Solution:** 
- Double-check your Firebase config in `src/config/firebase.js`
- Ensure all values are correct (no placeholders)
- Verify Google Auth is enabled in Firebase Console

### Issue: "npm install" fails

**Solution:**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Check your Node.js version: `node --version` (should be 18+)

### Issue: Login popup blocked

**Solution:**
- Allow popups for localhost in your browser
- Try a different browser
- Check if ad-blockers are interfering

### Issue: Styles not loading

**Solution:**
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

### Issue: Port 5173 already in use

**Solution:**
- Stop the existing dev server
- Or change port in `vite.config.js`:
```javascript
export default defineConfig({
  server: {
    port: 3000
  }
})
```

---

## 📁 Project Structure Explanation

```
matrixo-webdev-evaluation-round1/
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── Navbar.css
│   │
│   ├── pages/               # Page components
│   │   ├── Login.jsx        # Login page
│   │   ├── Home.jsx         # Dashboard
│   │   ├── MoodTracker.jsx  # Mood tracking
│   │   ├── AIChat.jsx       # AI chatbot
│   │   └── Profile.jsx      # User profile
│   │
│   ├── contexts/            # React Context for state
│   │   ├── AuthContext.jsx  # Authentication state
│   │   └── AppContext.jsx   # App-wide state
│   │
│   ├── config/              # Configuration files
│   │   └── firebase.js      # Firebase config
│   │
│   ├── utils/               # Utility functions
│   │   └── translations.js  # Multi-language text
│   │
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles & themes
│   └── main.jsx             # Entry point
│
├── public/                  # Static assets
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── PROJECT_README.md        # Project documentation
└── SETUP_INSTRUCTIONS.md    # This file
```

---

## 🎯 Features Checklist

Before submission, verify all features work:

- [ ] Google Login (Firebase)
- [ ] User authentication flow
- [ ] Protected routes
- [ ] Home dashboard
- [ ] Mood tracking with history
- [ ] AI chatbot responses
- [ ] Profile customization (name, avatar)
- [ ] Theme switching (4 themes)
- [ ] Language switching (3 languages)
- [ ] Responsive design (mobile/desktop)
- [ ] Logout functionality
- [ ] Local data persistence
- [ ] Smooth animations
- [ ] No console errors

---

## 📤 Submission Checklist

- [ ] Firebase configured with your credentials
- [ ] Application runs without errors
- [ ] All features tested and working
- [ ] README updated with your name and roll number
- [ ] Code committed to your forked repository
- [ ] Pull request created with format: `FullName_RollNumber`

---

## 🆘 Need Help?

If you encounter issues:

1. Check this guide's **Troubleshooting** section
2. Review Firebase Console for any configuration issues
3. Check browser console for error messages
4. Ensure all dependencies are installed
5. Contact: hello@matrixo.in

---

## 🎉 Success!

If you can:
- ✅ Login with Google
- ✅ Track your mood
- ✅ Chat with AI coach
- ✅ Customize your profile
- ✅ Switch languages
- ✅ Change themes

**Congratulations! Your MindCare application is fully functional! 🚀**

---

### Good luck with your evaluation! 💪
