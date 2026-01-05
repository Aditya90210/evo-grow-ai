import { useState, useEffect } from "react";
import { Menu, X, Zap, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/", section: null },
    { label: "Features", href: "/#features", section: "features" },
    { label: "How It Works", href: "/#pillars", section: "pillars" },
    { label: "Pricing", href: "/#pricing", section: "pricing" },
    { label: "Testimonials", href: "/#testimonials", section: "testimonials" },
  ];

  // Track active section on home page
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = ["features", "pillars", "pricing", "testimonials"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    // Check if at top of page for "Home" active state
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const isLinkActive = (link: { section: string | null }) => {
    if (location.pathname !== "/") return false;
    if (link.section === null) return activeSection === null;
    return activeSection === link.section;
  };

  const handleNavClick = (link: { href: string; section: string | null }) => {
    if (link.section === null) {
      // Home link
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else {
      // Section link
      if (location.pathname === "/") {
        const target = document.getElementById(link.section);
        target?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/#${link.section}`);
        // After navigation, scroll to section
        setTimeout(() => {
          const target = document.getElementById(link.section!);
          target?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              EVO<span className="text-gradient">Grow</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-medium transition-colors bg-transparent border-none cursor-pointer ${
                  isLinkActive(link)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
                <Button variant="default" size="sm" onClick={() => navigate("/auth")}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    handleNavClick(link);
                    setIsOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors py-2 bg-transparent border-none cursor-pointer text-left ${
                    isLinkActive(link)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                {user ? (
                  <>
                    <Button variant="ghost" size="sm" className="justify-start" onClick={() => { navigate("/dashboard"); setIsOpen(false); }}>
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" size="sm" className="justify-start" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="justify-start" onClick={() => { navigate("/auth"); setIsOpen(false); }}>
                      Sign In
                    </Button>
                    <Button variant="default" size="sm" onClick={() => { navigate("/auth"); setIsOpen(false); }}>
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
