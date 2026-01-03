import { Timer, Bell, Shield, BarChart3, Focus, Lock } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Smart Time Tracking",
    description: "Real-time monitoring of your social media usage across all platforms",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Bell,
    title: "Gentle Reminders",
    description: "Customizable alerts that nudge you when you've been scrolling too long",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Lock,
    title: "App Blocking",
    description: "Automatically blocks distracting apps when you exceed your limits",
    gradient: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Beautiful visualizations of your digital habits over time",
    gradient: "from-accent to-primary",
  },
  {
    icon: Focus,
    title: "Focus Tasks",
    description: "Create focused work sessions without social media interruptions",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays secure. We never sell or share your information",
    gradient: "from-accent to-accent/50",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Features that
            <span className="text-gradient"> empower you</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build healthier digital habits and reclaim your precious time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 card-shadow hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
