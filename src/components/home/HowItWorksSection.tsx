import { Download, Settings, TrendingDown } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & Setup",
    description: "Install ScrollGuard and grant the necessary permissions to start monitoring your usage",
  },
  {
    icon: Settings,
    step: "02",
    title: "Set Your Limits",
    description: "Choose your daily limits for each social media app and customize your alert preferences",
  },
  {
    icon: TrendingDown,
    step: "03",
    title: "Reclaim Your Time",
    description: "Watch your screen time decrease as you build healthier habits day by day",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How it
            <span className="text-gradient"> works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your relationship with social media
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Step number */}
              <div className="absolute -top-4 -left-4 text-8xl font-extrabold text-gradient opacity-20 select-none">
                {step.step}
              </div>

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-500">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 glow-primary group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
