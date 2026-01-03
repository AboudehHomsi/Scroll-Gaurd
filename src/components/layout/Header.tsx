import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-110">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Scroll<span className="text-gradient">Guard</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            How It Works
          </a>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Privacy
          </Link>
        </nav>

        <Button variant="hero" size="sm">
          Download App
        </Button>
      </div>
    </header>
  );
};

export default Header;
