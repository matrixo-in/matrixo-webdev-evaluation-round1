import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ScriptGenerator from "@/components/ScriptGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    // Scroll to generator
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      <ScriptGenerator selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
};

export default Index;
