import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.dashboard": "Dashboard",
      "nav.profile": "Profile",
      "nav.signOut": "Sign Out",
      
      // Landing Page
      "hero.title": "Find Peace in the Present Moment",
      "hero.subtitle": "Your personal AI companion for mental wellness, mindfulness, and emotional support - available 24/7",
      "hero.cta": "Get Started Free",
      "hero.signin": "Sign in with Google",
      
      // Features
      "features.chat.title": "AI Wellness Companion",
      "features.chat.desc": "Talk to an empathetic AI that understands your feelings and provides support",
      "features.mood.title": "Mood Tracking",
      "features.mood.desc": "Track your emotional patterns and gain insights into your wellness journey",
      "features.meditation.title": "Guided Meditation",
      "features.meditation.desc": "Practice mindfulness with timed sessions and breathing exercises",
      
      // Dashboard
      "dashboard.welcome": "Welcome back",
      "dashboard.howFeeling": "How are you feeling today?",
      "dashboard.moodLog": "Log Your Mood",
      "dashboard.chat": "Wellness Chat",
      "dashboard.meditate": "Meditate",
      "dashboard.recentMoods": "Recent Moods",
      
      // Moods
      "mood.happy": "Happy",
      "mood.calm": "Calm",
      "mood.neutral": "Neutral",
      "mood.sad": "Sad",
      "mood.anxious": "Anxious",
      "mood.logged": "Mood logged successfully",
      
      // Chat
      "chat.title": "Wellness Companion",
      "chat.placeholder": "Share what's on your mind...",
      "chat.send": "Send",
      "chat.welcome": "Hello! I'm here to support you. How are you feeling today?",
      
      // Meditation
      "meditation.title": "Meditation Timer",
      "meditation.duration": "Select Duration",
      "meditation.start": "Start Meditation",
      "meditation.stop": "Stop",
      "meditation.complete": "Meditation complete! Well done.",
      
      // Profile
      "profile.title": "Your Profile",
      "profile.name": "Display Name",
      "profile.email": "Email",
      "profile.language": "Language",
      "profile.save": "Save Changes",
      "profile.updated": "Profile updated successfully",
      
      // Languages
      "lang.en": "English",
      "lang.hi": "हिंदी (Hindi)",
      "lang.ta": "தமிழ் (Tamil)",
      
      // Common
      "common.loading": "Loading...",
      "common.error": "Something went wrong",
      "common.close": "Close",
      "common.save": "Save",
      "common.cancel": "Cancel",
    }
  },
  hi: {
    translation: {
      // Navigation
      "nav.home": "होम",
      "nav.dashboard": "डैशबोर्ड",
      "nav.profile": "प्रोफ़ाइल",
      "nav.signOut": "साइन आउट",
      
      // Landing Page
      "hero.title": "वर्तमान क्षण में शांति पाएं",
      "hero.subtitle": "मानसिक स्वास्थ्य, माइंडफुलनेस और भावनात्मक समर्थन के लिए आपका व्यक्तिगत AI साथी - 24/7 उपलब्ध",
      "hero.cta": "मुफ्त शुरू करें",
      "hero.signin": "Google से साइन इन करें",
      
      // Features
      "features.chat.title": "AI वेलनेस साथी",
      "features.chat.desc": "एक सहानुभूतिपूर्ण AI से बात करें जो आपकी भावनाओं को समझता है और सहायता प्रदान करता है",
      "features.mood.title": "मूड ट्रैकिंग",
      "features.mood.desc": "अपने भावनात्मक पैटर्न को ट्रैक करें और अपनी स्वास्थ्य यात्रा में अंतर्दृष्टि प्राप्त करें",
      "features.meditation.title": "निर्देशित ध्यान",
      "features.meditation.desc": "समयबद्ध सत्रों और श्वास अभ्यासों के साथ माइंडफुलनेस का अभ्यास करें",
      
      // Dashboard
      "dashboard.welcome": "वापसी पर स्वागत है",
      "dashboard.howFeeling": "आज आप कैसा महसूस कर रहे हैं?",
      "dashboard.moodLog": "अपना मूड लॉग करें",
      "dashboard.chat": "वेलनेस चैट",
      "dashboard.meditate": "ध्यान करें",
      "dashboard.recentMoods": "हाल के मूड",
      
      // Moods
      "mood.happy": "खुश",
      "mood.calm": "शांत",
      "mood.neutral": "तटस्थ",
      "mood.sad": "उदास",
      "mood.anxious": "चिंतित",
      "mood.logged": "मूड सफलतापूर्वक लॉग किया गया",
      
      // Chat
      "chat.title": "वेलनेस साथी",
      "chat.placeholder": "अपने मन की बात साझा करें...",
      "chat.send": "भेजें",
      "chat.welcome": "नमस्ते! मैं आपका समर्थन करने के लिए यहां हूं। आज आप कैसा महसूस कर रहे हैं?",
      
      // Meditation
      "meditation.title": "ध्यान टाइमर",
      "meditation.duration": "अवधि चुनें",
      "meditation.start": "ध्यान शुरू करें",
      "meditation.stop": "रोकें",
      "meditation.complete": "ध्यान पूरा हुआ! बहुत बढ़िया।",
      
      // Profile
      "profile.title": "आपकी प्रोफ़ाइल",
      "profile.name": "प्रदर्शन नाम",
      "profile.email": "ईमेल",
      "profile.language": "भाषा",
      "profile.save": "परिवर्तन सहेजें",
      "profile.updated": "प्रोफ़ाइल सफलतापूर्वक अपडेट की गई",
      
      // Languages
      "lang.en": "English",
      "lang.hi": "हिंदी (Hindi)",
      "lang.ta": "தமிழ் (Tamil)",
      
      // Common
      "common.loading": "लोड हो रहा है...",
      "common.error": "कुछ गलत हो गया",
      "common.close": "बंद करें",
      "common.save": "सहेजें",
      "common.cancel": "रद्द करें",
    }
  },
  ta: {
    translation: {
      // Navigation
      "nav.home": "முகப்பு",
      "nav.dashboard": "டாஷ்போர்டு",
      "nav.profile": "சுயவிவரம்",
      "nav.signOut": "வெளியேறு",
      
      // Landing Page
      "hero.title": "நிகழ்கால தருணத்தில் அமைதி காண்க",
      "hero.subtitle": "மன ஆரோக்கியம், நினைவாற்றல் மற்றும் உணர்ச்சி ஆதரவுக்கான உங்கள் தனிப்பட்ட AI துணை - 24/7 கிடைக்கும்",
      "hero.cta": "இலவசமாக தொடங்குங்கள்",
      "hero.signin": "Google உடன் உள்நுழைக",
      
      // Features
      "features.chat.title": "AI ஆரோக்கிய துணை",
      "features.chat.desc": "உங்கள் உணர்வுகளை புரிந்துகொண்டு ஆதரவை வழங்கும் பச்சாதாபமுள்ள AI உடன் பேசுங்கள்",
      "features.mood.title": "மனநிலை கண்காணிப்பு",
      "features.mood.desc": "உங்கள் உணர்ச்சி வடிவங்களை கண்காணித்து உங்கள் ஆரோக்கிய பயணத்தில் நுண்ணறிவுகளைப் பெறுங்கள்",
      "features.meditation.title": "வழிகாட்டப்பட்ட தியானம்",
      "features.meditation.desc": "நேர அமர்வுகள் மற்றும் சுவாச பயிற்சிகளுடன் நினைவாற்றலை பயிற்சி செய்யுங்கள்",
      
      // Dashboard
      "dashboard.welcome": "மீண்டும் வரவேற்கிறோம்",
      "dashboard.howFeeling": "இன்று நீங்கள் எப்படி உணர்கிறீர்கள்?",
      "dashboard.moodLog": "உங்கள் மனநிலையை பதிவு செய்யுங்கள்",
      "dashboard.chat": "ஆரோக்கிய அரட்டை",
      "dashboard.meditate": "தியானம்",
      "dashboard.recentMoods": "சமீபத்திய மனநிலைகள்",
      
      // Moods
      "mood.happy": "மகிழ்ச்சி",
      "mood.calm": "அமைதி",
      "mood.neutral": "நடுநிலை",
      "mood.sad": "துக்கம்",
      "mood.anxious": "கவலை",
      "mood.logged": "மனநிலை வெற்றிகரமாக பதிவு செய்யப்பட்டது",
      
      // Chat
      "chat.title": "ஆரோக்கிய துணை",
      "chat.placeholder": "உங்கள் மனதில் இருப்பதை பகிருங்கள்...",
      "chat.send": "அனுப்பு",
      "chat.welcome": "வணக்கம்! உங்களுக்கு ஆதரவளிக்க நான் இங்கே இருக்கிறேன். இன்று நீங்கள் எப்படி உணர்கிறீர்கள்?",
      
      // Meditation
      "meditation.title": "தியான டைமர்",
      "meditation.duration": "காலத்தை தேர்ந்தெடுக்கவும்",
      "meditation.start": "தியானத்தை தொடங்குங்கள்",
      "meditation.stop": "நிறுத்து",
      "meditation.complete": "தியானம் முடிந்தது! நன்றாக செய்தீர்கள்.",
      
      // Profile
      "profile.title": "உங்கள் சுயவிவரம்",
      "profile.name": "காட்சி பெயர்",
      "profile.email": "மின்னஞ்சல்",
      "profile.language": "மொழி",
      "profile.save": "மாற்றங்களை சேமிக்கவும்",
      "profile.updated": "சுயவிவரம் வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
      
      // Languages
      "lang.en": "English",
      "lang.hi": "हिंदी (Hindi)",
      "lang.ta": "தமிழ் (Tamil)",
      
      // Common
      "common.loading": "ஏற்றுகிறது...",
      "common.error": "ஏதோ தவறு ஏற்பட்டது",
      "common.close": "மூடு",
      "common.save": "சேமி",
      "common.cancel": "ரத்துசெய்",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
