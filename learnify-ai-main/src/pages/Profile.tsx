import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Navigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Profile = () => {
  const { user, loading } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState(user?.displayName || '');

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

  const handleSave = () => {
    // In a real app, you'd update Firebase user profile here
    toast({
      title: t('profile.updated'),
      description: "Your preferences have been saved.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-tranquil via-background to-serene">
      <Header />
      
      <main className="container px-4 py-8 mx-auto max-w-2xl">
        <Card className="p-8 shadow-peaceful">
          <h1 className="text-3xl font-bold mb-6">{t('profile.title')}</h1>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + user.uid}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <p className="font-medium">{user.displayName}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">{t('profile.name')}</Label>
              <Input
                id="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your display name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('profile.email')}</Label>
              <Input
                id="email"
                value={user.email || ''}
                disabled
                className="bg-muted"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">{t('profile.language')}</Label>
              <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">{t('lang.en')}</SelectItem>
                  <SelectItem value="hi">{t('lang.hi')}</SelectItem>
                  <SelectItem value="ta">{t('lang.ta')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleSave} className="w-full">
              {t('profile.save')}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
