import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Scroll<span className="text-gradient">Guard</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Take back control of your time. ScrollGuard helps you break free from endless scrolling and build healthier digital habits.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 ScrollGuard. Your time, your choice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
