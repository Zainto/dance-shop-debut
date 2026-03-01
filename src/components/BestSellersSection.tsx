import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const products = [
  { name: "Satin Pointe Shoes", price: "$89.00", tag: "Best Seller" },
  { name: "Jazz Split-Sole", price: "$62.00", tag: "New" },
  { name: "Mesh Leotard", price: "$45.00", tag: null },
  { name: "Warm-Up Bootie", price: "$38.00", tag: "Popular" },
];

const BestSellersSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/50">
      <div className="container max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">Curated</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Best Sellers</h2>
          </div>
          <Button variant="outline" className="rounded-full">View All Products</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[3/4] bg-accent/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/40 font-serif text-lg italic">Image</span>
                </div>
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-semibold text-card-foreground mb-1">{product.name}</h3>
                <p className="text-secondary font-bold mb-4">{product.price}</p>
                <Button variant="outline" size="sm" className="w-full rounded-full gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <ShoppingBag size={14} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
