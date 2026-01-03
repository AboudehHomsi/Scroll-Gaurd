import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Ready to take back
            <br />
            <span className="text-gradient">your time?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Start your journey to reduced screen time and healthier digital habits with ScrollGuard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              <Smartphone className="w-5 h-5" />
              Download for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
