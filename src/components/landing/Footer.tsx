import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", path: "/#features" },
      { name: "Pricing", path: "/#pricing" },
      { name: "Integrations", path: "/integrations" },
      { name: "API", path: "/api" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/#contact" },
    ],
    Resources: [
      { name: "Documentation", path: "/documentation" },
      { name: "Help Center", path: "/help-center" },
      { name: "Community", path: "/community" },
      { name: "Tutorials", path: "/tutorials" },
    ],
    Legal: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" },
      { name: "Security", path: "/security" },
      { name: "Cookies", path: "/cookies" },
    ],
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                EVO<span className="text-gradient">Grow</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              The futuristic Business Operating Intelligence System that evolves with your business.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 EVO Grow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Built with <span className="text-primary">♦</span> for the future
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
