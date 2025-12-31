import { Brain, Lightbulb, Target, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Business Twin",
    subtitle: "Digital Replica",
    description: "A living digital copy of your entire business. Stores and understands your model, products, customers, market, goals, and operations. It learns continuously.",
    color: "primary",
    features: ["Business Model Mapping", "Customer Intelligence", "Market Analysis", "Goal Tracking"],
  },
  {
    icon: Lightbulb,
    title: "AI Growth Engine",
    subtitle: "Strategic Intelligence",
    description: "Creates marketing strategies, business plans, sales funnels, brand identity, and innovation suggestions. Always structured, logical, never random.",
    color: "secondary",
    features: ["Marketing Strategies", "Business Planning", "Sales Funnels", "Brand Identity"],
  },
  {
    icon: Target,
    title: "Decision Layer",
    subtitle: "Priority Intelligence",
    description: "Prioritizes what matters, shows why decisions matter, balances risk vs ROI, and suggests real-world actionable next steps.",
    color: "accent",
    features: ["Priority Matrix", "Risk Analysis", "ROI Optimization", "Action Plans"],
  },
  {
    icon: Rocket,
    title: "Execution Layer",
    subtitle: "Auto Action",
    description: "Generates content, creates campaigns, builds documentation, designs roadmaps, and automates where possible. Makes EVO Grow feel alive.",
    color: "primary",
    features: ["Content Generation", "Campaign Builder", "Task Automation", "Roadmap Design"],
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "secondary":
      return {
        bg: "bg-secondary/10",
        border: "border-secondary/30",
        text: "text-secondary",
        glow: "group-hover:shadow-[0_0_40px_hsl(var(--secondary)/0.3)]",
      };
    case "accent":
      return {
        bg: "bg-accent/10",
        border: "border-accent/30",
        text: "text-accent",
        glow: "group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]",
      };
    default:
      return {
        bg: "bg-primary/10",
        border: "border-primary/30",
        text: "text-primary",
        glow: "group-hover:shadow-glow",
      };
  }
};

const PillarsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Four Pillars of </span>
            <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            EVO Grow operates on four interconnected intelligence layers that work together to transform your business.
          </p>
        </div>
        
        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            const Icon = pillar.icon;
            
            return (
              <div
                key={index}
                className={`group relative glass-strong rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] ${colors.glow} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                
                {/* Content */}
                <div className="mb-6">
                  <span className={`text-sm font-medium ${colors.text} uppercase tracking-wider`}>
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground mt-3">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border text-sm`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.text} bg-current`} />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-bl-full opacity-50`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
