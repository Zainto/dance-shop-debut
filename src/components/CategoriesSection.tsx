import { Music, Star, Wind, Zap } from "lucide-react";

const categories = [
  { name: "Ballet", icon: Star, description: "Elegant essentials for classical dance" },
  { name: "Jazz", icon: Music, description: "Bold pieces for dynamic performances" },
  { name: "Contemporary", icon: Wind, description: "Fluid styles for expressive movement" },
  { name: "Hip Hop", icon: Zap, description: "Street-ready gear with attitude" },
];

const CategoriesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">Explore</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Shop by Style
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <category.icon className="text-accent-foreground group-hover:text-primary transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
