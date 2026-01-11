import { Check, Zap, Rocket, Building2, Crown, Star, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 499,
    description: "Perfect for small businesses starting their growth journey",
    icon: Zap,
    features: [
      "Business Twin (Basic)",
      "5 AI Strategy Reports/month",
      "Basic Decision Framework",
      "Email Support",
      "1 Team Member",
    ],
    cta: "Start Free Trial",
    popular: false,
    accent: "cyan",
  },
  {
    name: "Growth",
    monthlyPrice: 149,
    yearlyPrice: 1499,
    description: "For scaling businesses ready to accelerate growth",
    icon: Rocket,
    features: [
      "Business Twin (Advanced)",
      "Unlimited AI Strategy Reports",
      "Full Decision Intelligence",
      "Execution Automation",
      "Priority Support",
      "5 Team Members",
    ],
    cta: "Get Started",
    popular: true,
    accent: "purple",
  },
  {
    name: "Professional",
    monthlyPrice: 299,
    yearlyPrice: 2999,
    description: "For established businesses seeking advanced features",
    icon: Star,
    features: [
      "Everything in Growth",
      "10 Team Members",
      "Custom Integrations",
      "Advanced Analytics",
      "Dedicated Support",
      "API Access",
    ],
    cta: "Get Started",
    popular: false,
    accent: "electric",
  },
  {
    name: "Business",
    monthlyPrice: 599,
    yearlyPrice: 5999,
    description: "For growing organizations with demanding needs",
    icon: Building2,
    features: [
      "Everything in Professional",
      "25 Team Members",
      "White-label Options",
      "Custom AI Training",
      "Priority Phone Support",
      "SLA Guarantee",
    ],
    cta: "Get Started",
    popular: false,
    accent: "cyan",
  },
  {
    name: "Enterprise",
    monthlyPrice: 2999,
    yearlyPrice: 29999,
    description: "For large organizations with complex requirements",
    icon: Crown,
    features: [
      "Everything in Business",
      "Unlimited Team Members",
      "Dedicated Success Manager",
      "On-premise Deployment",
      "Custom Contracts",
      "99.9% Uptime SLA",
    ],
    cta: "Contact Sales",
    popular: false,
    accent: "purple",
  },
  {
    name: "Ultimate",
    monthlyPrice: 5999,
    yearlyPrice: 59999,
    description: "The complete solution for industry leaders",
    icon: Gem,
    features: [
      "Everything in Enterprise",
      "24/7 Priority Support",
      "Custom Feature Development",
      "Dedicated Infrastructure",
      "Executive Business Reviews",
      "Full Customization",
    ],
    cta: "Contact Sales",
    popular: false,
    accent: "electric",
  },
];

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

export const PricingSection = () => {
  const { ref: sectionRef, isInView } = useInView();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose Your
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start free and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                Save up to 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
            const period = isYearly ? "/year" : "/month";
            
            return (
              <div
                key={tier.name}
                className={`relative group transition-all duration-700 ease-out ${
                  tier.popular ? "lg:-mt-4 lg:mb-4" : ""
                } ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold shadow-glow">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl p-[1px] transition-all duration-500 ${
                    tier.popular
                      ? "bg-gradient-to-b from-primary via-secondary to-accent"
                      : "bg-gradient-to-b from-border/50 to-border/20 hover:from-primary/50 hover:to-secondary/50"
                  }`}
                >
                  <div className="relative h-full rounded-2xl bg-card/80 backdrop-blur-xl p-6 flex flex-col">
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        tier.popular ? "bg-primary/5" : "bg-primary/5"
                      }`}
                    />

                    {/* Icon & Name */}
                    <div className="relative z-10 flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${
                          tier.accent === "cyan"
                            ? "from-primary/20 to-primary/5"
                            : tier.accent === "purple"
                            ? "from-secondary/20 to-secondary/5"
                            : "from-accent/20 to-accent/5"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            tier.accent === "cyan"
                              ? "text-primary"
                              : tier.accent === "purple"
                              ? "text-secondary"
                              : "text-accent"
                          }`}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                    </div>

                    {/* Price */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-foreground">${price.toLocaleString()}</span>
                        <span className="text-muted-foreground text-sm">{period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="relative z-10 space-y-2 mb-6 flex-grow">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <div
                            className={`mt-0.5 p-1 rounded-full ${
                              tier.accent === "cyan"
                                ? "bg-primary/20"
                                : tier.accent === "purple"
                                ? "bg-secondary/20"
                                : "bg-accent/20"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                tier.accent === "cyan"
                                  ? "text-primary"
                                  : tier.accent === "purple"
                                  ? "text-secondary"
                                  : "text-accent"
                              }`}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant={tier.popular ? "default" : "outline"}
                      className="relative z-10 w-full"
                      asChild
                    >
                      <Link to={tier.cta === "Contact Sales" ? "/#contact" : "/auth"}>
                        {tier.cta}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Compare Plans
            </span>
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Features</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="p-4 text-center">
                      <span className={`text-sm font-semibold ${tier.popular ? 'text-primary' : 'text-foreground'}`}>
                        {tier.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Business Twin", values: ["Basic", "Advanced", "Advanced", "Advanced", "Custom", "Custom"] },
                  { feature: "AI Strategy Reports", values: ["5/month", "Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
                  { feature: "Decision Framework", values: ["Basic", "Full", "Full", "Full", "Full", "Full"] },
                  { feature: "Execution Automation", values: [false, true, true, true, true, true] },
                  { feature: "Team Members", values: ["1", "5", "10", "25", "Unlimited", "Unlimited"] },
                  { feature: "Custom Integrations", values: [false, false, true, true, true, true] },
                  { feature: "API Access", values: [false, false, true, true, true, true] },
                  { feature: "White-label Options", values: [false, false, false, true, true, true] },
                  { feature: "Custom AI Training", values: [false, false, false, true, true, true] },
                  { feature: "Dedicated Success Manager", values: [false, false, false, false, true, true] },
                  { feature: "On-premise Deployment", values: [false, false, false, false, true, true] },
                  { feature: "Custom Feature Development", values: [false, false, false, false, false, true] },
                  { feature: "24/7 Priority Support", values: [false, false, false, false, false, true] },
                  { feature: "Support Level", values: ["Email", "Priority", "Dedicated", "Phone", "Premium", "24/7"] },
                ].map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? "bg-muted/20" : ""}>
                    <td className="p-4 text-sm text-muted-foreground font-medium">{row.feature}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="p-4 text-center">
                        {typeof value === "boolean" ? (
                          value ? (
                            <Check className="w-5 h-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground/50">—</span>
                          )
                        ) : (
                          <span className="text-sm text-foreground">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};