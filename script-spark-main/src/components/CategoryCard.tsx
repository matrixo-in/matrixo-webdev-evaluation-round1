import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const CategoryCard = ({ icon: Icon, title, description, gradient, onClick, isSelected }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-2xl glass-card text-left transition-all duration-300 hover:scale-[1.02] hover:border-primary/50",
        isSelected && "border-primary glow-primary"
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
        gradient
      )}>
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </button>
  );
};

export default CategoryCard;
