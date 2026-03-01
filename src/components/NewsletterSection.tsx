import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-24 px-4 bg-accent/40">
      <div className="container max-w-2xl text-center">
        <Mail className="mx-auto text-primary mb-6" size={36} />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Stay in the Spotlight
        </h2>
        <p className="text-muted-foreground mb-8">
          Subscribe for exclusive deals, new arrivals, and dance inspiration delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            placeholder="your@email.com"
            className="rounded-full flex-1 bg-card border-border"
          />
          <Button type="submit" className="rounded-full px-8 whitespace-nowrap">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
