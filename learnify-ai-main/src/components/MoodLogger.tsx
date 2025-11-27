import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Smile, Meh, Frown, CloudRain, Zap } from 'lucide-react';

type Mood = 'happy' | 'calm' | 'neutral' | 'sad' | 'anxious';

interface MoodEntry {
  mood: Mood;
  timestamp: number;
}

const MoodLogger = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [recentMoods, setRecentMoods] = useState<MoodEntry[]>(() => {
    const saved = localStorage.getItem('moods');
    return saved ? JSON.parse(saved) : [];
  });

  const moods: { value: Mood; icon: typeof Smile; label: string; color: string }[] = [
    { value: 'happy', icon: Smile, label: t('mood.happy'), color: 'mood-happy' },
    { value: 'calm', icon: CloudRain, label: t('mood.calm'), color: 'mood-calm' },
    { value: 'neutral', icon: Meh, label: t('mood.neutral'), color: 'mood-neutral' },
    { value: 'sad', icon: Frown, label: t('mood.sad'), color: 'mood-sad' },
    { value: 'anxious', icon: Zap, label: t('mood.anxious'), color: 'mood-anxious' },
  ];

  const logMood = (mood: Mood) => {
    const entry: MoodEntry = {
      mood,
      timestamp: Date.now(),
    };
    const updated = [entry, ...recentMoods].slice(0, 10);
    setRecentMoods(updated);
    localStorage.setItem('moods', JSON.stringify(updated));
    
    toast({
      title: t('mood.logged'),
      description: `${moods.find(m => m.value === mood)?.label}`,
    });
  };

  return (
    <Card className="p-6 shadow-peaceful">
      <h2 className="text-2xl font-semibold mb-4">{t('dashboard.howFeeling')}</h2>
      
      <div className="grid grid-cols-5 gap-3 mb-6">
        {moods.map(({ value, icon: Icon, label, color }) => (
          <button
            key={value}
            onClick={() => logMood(value)}
            className={`flex flex-col items-center p-4 rounded-xl transition-all hover:scale-105 hover:shadow-md bg-${color}/10 border border-${color}/20`}
          >
            <Icon className={`h-8 w-8 mb-2 text-${color}`} />
            <span className="text-xs text-center">{label}</span>
          </button>
        ))}
      </div>

      {recentMoods.length > 0 && (
        <div>
          <h3 className="text-sm font-medium mb-3">{t('dashboard.recentMoods')}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {recentMoods.map((entry, idx) => {
              const mood = moods.find(m => m.value === entry.mood);
              const Icon = mood?.icon || Meh;
              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 p-2 rounded-lg bg-${mood?.color}/10 border border-${mood?.color}/20`}
                >
                  <Icon className={`h-5 w-5 text-${mood?.color}`} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};

export default MoodLogger;
