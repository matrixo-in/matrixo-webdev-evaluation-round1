import { Youtube, Music, Mic, Film, MessageSquare, BookOpen } from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    icon: Youtube,
    title: "YouTube Scripts",
    description: "Long-form video scripts with hooks, structure, and CTAs",
    gradient: "bg-gradient-to-br from-red-500 to-red-600",
  },
  {
    icon: Music,
    title: "TikTok & Reels",
    description: "Short, punchy scripts optimized for viral content",
    gradient: "bg-gradient-to-br from-pink-500 to-purple-600",
  },
  {
    icon: Mic,
    title: "Podcast Scripts",
    description: "Interview questions, episode outlines, and show notes",
    gradient: "bg-gradient-to-br from-primary to-cyan-400",
  },
  {
    icon: Film,
    title: "Ad Scripts",
    description: "Compelling ad copy for products and services",
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    icon: MessageSquare,
    title: "Social Posts",
    description: "Engaging captions and thread scripts",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Course Scripts",
    description: "Educational content and tutorial scripts",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
];

interface CategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

const Categories = ({ selectedCategory, onSelectCategory }: CategoriesProps) => {
  return (
    <section id="templates" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scripts for <span className="gradient-text">Every Platform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your content type and let our AI craft the perfect script tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
              isSelected={selectedCategory === category.title}
              onClick={() => onSelectCategory(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
