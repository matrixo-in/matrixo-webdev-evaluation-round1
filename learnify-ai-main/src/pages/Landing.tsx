import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import { Brain, Heart, Sparkles } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const Landing = () => {
  const { user, signInWithGoogle } = useAuth();
  const { t } = useLanguage();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tranquil via-background to-serene">
      <Header />
      
      {/* Hero Section */}
      <section className="container px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-float">
          <div className="inline-block p-4 mb-4 rounded-full gradient-calm animate-breathe">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={signInWithGoogle}
              className="gradient-calm text-white hover:opacity-90 transition-opacity shadow-zen text-lg px-8 py-6 rounded-full"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center shadow-peaceful hover:shadow-zen transition-shadow">
            <div className="inline-block p-4 mb-4 rounded-full bg-primary/10">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('features.chat.title')}</h3>
            <p className="text-muted-foreground">{t('features.chat.desc')}</p>
          </Card>

          <Card className="p-8 text-center shadow-peaceful hover:shadow-zen transition-shadow">
            <div className="inline-block p-4 mb-4 rounded-full bg-secondary/10">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('features.mood.title')}</h3>
            <p className="text-muted-foreground">{t('features.mood.desc')}</p>
          </Card>

          <Card className="p-8 text-center shadow-peaceful hover:shadow-zen transition-shadow">
            <div className="inline-block p-4 mb-4 rounded-full bg-accent/10">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('features.meditation.title')}</h3>
            <p className="text-muted-foreground">{t('features.meditation.desc')}</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>Shanti - शांति - அமைதி</p>
        <p className="mt-2">Peace for your mind, anytime, anywhere 🕊️</p>
      </footer>
    </div>
  );
};

export default Landing;
