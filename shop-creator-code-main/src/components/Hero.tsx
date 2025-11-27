import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent rounded-full">
                New Season Collection
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance text-white">
              Discover Your <span className="text-accent">Signature</span> Style
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg">
              Explore our curated collection of premium fashion pieces designed for the modern individual. Luxury meets comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Lookbook
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=700&fit=crop"
              alt="Fashion model showcasing premium collection"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
