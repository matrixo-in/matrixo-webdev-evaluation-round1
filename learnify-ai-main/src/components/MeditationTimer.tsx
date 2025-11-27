import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Play, Pause, RotateCcw } from 'lucide-react';

const MeditationTimer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [duration, setDuration] = useState(5 * 60); // 5 minutes default
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      toast({
        title: t('meditation.complete'),
        description: "Take a moment to appreciate your practice. 🧘",
      });
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, timeLeft, t, toast]);

  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setIsActive(false);
    setTimeLeft(duration);
  };

  const changeDuration = (minutes: number) => {
    const seconds = minutes * 60;
    setDuration(seconds);
    setTimeLeft(seconds);
    setIsActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <Card className="p-6 shadow-peaceful">
      <h2 className="text-2xl font-semibold mb-4">{t('meditation.title')}</h2>

      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-48 h-48">
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 88}`}
              strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
              className="text-primary transition-all duration-1000 ease-linear"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {[5, 10, 15].map((mins) => (
            <Button
              key={mins}
              variant={duration === mins * 60 ? "default" : "outline"}
              size="sm"
              onClick={() => changeDuration(mins)}
              disabled={isActive}
            >
              {mins} min
            </Button>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={toggle}
            size="lg"
            className="rounded-full w-16 h-16"
          >
            {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            size="lg"
            className="rounded-full w-16 h-16"
          >
            <RotateCcw className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MeditationTimer;
