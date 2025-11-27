import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import MoodLogger from '@/components/MoodLogger';
import MeditationTimer from '@/components/MeditationTimer';
import WellnessChat from '@/components/WellnessChat';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tranquil via-background to-serene">
      <Header />
      
      <main className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {t('dashboard.welcome')}, {user.displayName?.split(' ')[0] || 'friend'}! 🌟
          </h1>
          <p className="text-muted-foreground">
            Take a moment for yourself today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <MoodLogger />
            <MeditationTimer />
          </div>
          
          <div>
            <WellnessChat />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
