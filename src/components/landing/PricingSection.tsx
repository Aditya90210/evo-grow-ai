import { Check, Zap, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
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
    price: "$149",
    period: "/month",
    description: "For scaling businesses ready to accelerate growth",
    icon: Rocket,
    features: [
      "Business Twin (Advanced)",
      "Unlimited AI Strategy Reports",
      "Full Decision Intelligence",
      "Execution Automation",
      "Priority Support",
      "5 Team Members",
      "Custom Integrations",
    ],
    cta: "Get Started",
    popular: true,
    accent: "purple",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    icon: Building2,
    features: [
      "Everything in Growth",
      "Unlimited Team Members",
      "Dedicated Success Manager",
      "Custom AI Training",
      "White-label Options",
      "SLA Guarantee",
      "On-premise Deployment",
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative group transition-all duration-700 ease-out ${
                  tier.popular ? "md:-mt-4 md:mb-4" : ""
                } ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
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
                  <div className="relative h-full rounded-2xl bg-card/80 backdrop-blur-xl p-8 flex flex-col">
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
                          className={`w-6 h-6 ${
                            tier.accent === "cyan"
                              ? "text-primary"
                              : tier.accent === "purple"
                              ? "text-secondary"
                              : "text-accent"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                    </div>

                    {/* Price */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                        <span className="text-muted-foreground">{tier.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="relative z-10 space-y-3 mb-8 flex-grow">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
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
                      variant={tier.popular ? "hero" : "glass"}
                      className="relative z-10 w-full"
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};
