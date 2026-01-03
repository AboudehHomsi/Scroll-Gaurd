import { Button } from "@/components/ui/button";
import { Clock, Smartphone, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Reclaim your time</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Stop the
              <br />
              <span className="text-gradient">Endless Scroll</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
              Break free from doom scrolling. Take control of your screen time and get your life back with intelligent limits and mindful reminders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                <Smartphone className="w-5 h-5" />
                Download Now
              </Button>
              <Button variant="glass" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative animate-float hidden lg:block">
            <div className="relative w-[320px] h-[640px] mx-auto">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-card to-secondary border border-border/50 card-shadow overflow-hidden">
                {/* Screen content */}
                <div className="absolute inset-4 rounded-[2.5rem] bg-background overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-card/50">
                    <span className="text-xs text-muted-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 rounded-sm bg-primary" />
                    </div>
                  </div>
                  
                  {/* App content mockup */}
                  <div className="p-6">
                    <div className="text-center mb-8">
                      <div className="text-sm text-muted-foreground mb-2">Today's usage</div>
                      <div className="text-5xl font-bold text-gradient">1h 23m</div>
                      <div className="text-sm text-primary mt-2">↓ 45% from yesterday</div>
                    </div>

                    {/* App usage bars */}
                    <div className="space-y-4">
                      {[
                        { name: 'Instagram', time: '32m', percent: 40, color: 'bg-accent' },
                        { name: 'TikTok', time: '28m', percent: 35, color: 'bg-primary' },
                        { name: 'YouTube', time: '15m', percent: 20, color: 'bg-destructive' },
                        { name: 'Twitter', time: '8m', percent: 10, color: 'bg-muted-foreground' },
                      ].map((app) => (
                        <div key={app.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-foreground">{app.name}</span>
                            <span className="text-muted-foreground">{app.time}</span>
                          </div>
                          <div className="h-2 rounded-full bg-secondary overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${app.color} transition-all duration-1000`}
                              style={{ width: `${app.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center glow-primary animate-pulse-glow">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
