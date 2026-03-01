import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-muted">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />

      <div className="container relative z-10 text-center px-4 py-20">
        <p className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in-up">
          Elevate Every Performance
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Move with Grace,
          <br />
          <span className="text-primary italic">Shop with Style</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Premium dancewear and accessories for every discipline. From studio to stage, find everything you need to shine.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="rounded-full px-10 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-3">
            Shop Now
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
