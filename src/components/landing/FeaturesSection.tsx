import { 
  BarChart3, 
  Bot, 
  Cpu, 
  FileText, 
  Globe, 
  LineChart, 
  MessagesSquare, 
  Shield, 
  Workflow 
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description: "Deep learning models that understand your business context and provide strategic insights.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Execute strategies automatically with intelligent task orchestration.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Metrics",
    description: "Live dashboards tracking KPIs, growth metrics, and business health.",
  },
  {
    icon: Globe,
    title: "Market Intelligence",
    description: "Continuous monitoring of market trends, competitors, and opportunities.",
  },
  {
    icon: FileText,
    title: "Smart Documentation",
    description: "Auto-generated reports, proposals, and strategic documents.",
  },
  {
    icon: Shield,
    title: "Decision Validation",
    description: "Risk assessment and ROI projections for every strategic decision.",
  },
  {
    icon: LineChart,
    title: "Growth Forecasting",
    description: "Predictive analytics for revenue, customer acquisition, and scaling.",
  },
  {
    icon: MessagesSquare,
    title: "Strategic Advisor",
    description: "Conversational AI that acts as your 24/7 business strategist.",
  },
  {
    icon: Cpu,
    title: "Deep Integration",
    description: "Connect with your existing tools and data sources seamlessly.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 radial-gradient-bg opacity-50" />
      
      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Powerful </span>
            <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to make your business smarter, faster, and more competitive.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group relative glass rounded-xl p-6 transition-all duration-300 hover:shadow-glow hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
