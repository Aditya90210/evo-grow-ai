import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Brain, 
  Lightbulb, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Business Twin Technology",
      description: "Create a comprehensive digital replica of your business that understands your model, customers, market, and operations.",
      benefits: [
        "Deep business understanding",
        "Continuous learning & adaptation",
        "Contextual recommendations",
        "Real-time synchronization"
      ],
      gradient: "from-primary to-primary/60"
    },
    {
      icon: Lightbulb,
      title: "AI Growth Engine",
      description: "Generate intelligent, data-driven strategies tailored specifically to your business context and goals.",
      benefits: [
        "Marketing strategy generation",
        "Sales funnel optimization",
        "Brand identity recommendations",
        "Innovation suggestions"
      ],
      gradient: "from-secondary to-secondary/60"
    },
    {
      icon: Target,
      title: "Decision Intelligence",
      description: "Transform complex business decisions into clear, actionable insights backed by data and AI analysis.",
      benefits: [
        "Priority recommendations",
        "Risk assessment",
        "ROI projections",
        "Actionable next steps"
      ],
      gradient: "from-accent to-accent/60"
    },
    {
      icon: Zap,
      title: "Execution Layer",
      description: "Automate repetitive tasks and execute strategies with intelligent automation capabilities.",
      benefits: [
        "Content generation",
        "Campaign automation",
        "Task management",
        "Process optimization"
      ],
      gradient: "from-primary to-secondary"
    },
  ];

  const additionalFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and reports that provide deep insights into your business performance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared workspaces, role-based access, and real-time collaboration."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and advanced security features to protect your data."
    },
    {
      icon: Sparkles,
      title: "Smart Integrations",
      description: "Connect with your favorite tools including Salesforce, HubSpot, Slack, and 50+ more platforms."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Everything You Need to
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Grow Intelligently
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the complete suite of AI-powered tools designed to transform how you understand, strategize, and grow your business.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
            <Link to="/auth">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Core</span>{" "}
              <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four powerful pillars that work together to create a complete business intelligence system.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">And</span>{" "}
              <span className="text-gradient">Much More</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional features that make EVO Grow the complete solution for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your 7-day free trial and see how EVO Grow can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                <Link to="/auth">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
