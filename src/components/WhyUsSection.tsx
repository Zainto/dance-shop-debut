import { Truck, HeartHandshake, RotateCcw } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", description: "Complimentary delivery on all orders over $75. Dance gear at your doorstep." },
  { icon: HeartHandshake, title: "Expert Fitting", description: "Our specialists help you find the perfect fit for every style and level." },
  { icon: RotateCcw, title: "Easy Returns", description: "30-day hassle-free returns. Dance with confidence knowing you're covered." },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            The Dancer's Choice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="text-accent-foreground group-hover:text-primary transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
