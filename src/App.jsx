import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import MoodTracker from './pages/MoodTracker';
import AIChat from './pages/AIChat';
import Profile from './pages/Profile';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      {user && (
        <nav className="bottom-nav">
          <Link to="/" className="nav-link">
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <Link to="/mood" className="nav-link">
            <span>📊</span>
            <span>Mood</span>
          </Link>
          <Link to="/ai-chat" className="nav-link">
            <span>🤖</span>
            <span>AI Chat</span>
          </Link>
          <Link to="/profile" className="nav-link">
            <span>⚙️</span>
            <span>Profile</span>
          </Link>
        </nav>
      )}
      
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mood"
          element={
            <ProtectedRoute>
              <MoodTracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai-chat"
          element={
            <ProtectedRoute>
              <AIChat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
