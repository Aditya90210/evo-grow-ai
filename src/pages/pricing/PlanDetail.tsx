import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Check, Zap, Rocket, Building2, Crown, Star, Gem, ArrowLeft, CreditCard, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const plansData = {
  starter: {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 499,
    description: "Perfect for small businesses starting their growth journey",
    icon: Zap,
    accent: "primary",
    features: [
      { name: "Business Twin (Basic)", description: "Create a digital representation of your business for AI-powered insights" },
      { name: "5 AI Strategy Reports/month", description: "Get detailed AI-generated reports on business strategy and growth opportunities" },
      { name: "Basic Decision Framework", description: "Access our fundamental decision-making tools and templates" },
      { name: "Email Support", description: "Get help from our support team via email within 24 hours" },
      { name: "1 Team Member", description: "Perfect for solo entrepreneurs and individual business owners" },
    ],
    limitations: [
      "No execution automation",
      "No custom integrations",
      "No API access",
    ],
  },
  growth: {
    name: "Growth",
    monthlyPrice: 149,
    yearlyPrice: 1499,
    description: "For scaling businesses ready to accelerate growth",
    icon: Rocket,
    accent: "secondary",
    features: [
      { name: "Business Twin (Advanced)", description: "Advanced AI modeling with predictive capabilities and scenario planning" },
      { name: "Unlimited AI Strategy Reports", description: "Generate as many strategy reports as you need, whenever you need them" },
      { name: "Full Decision Intelligence", description: "Complete access to our AI-powered decision support system" },
      { name: "Execution Automation", description: "Automate repetitive tasks and streamline your business processes" },
      { name: "Priority Support", description: "Get faster response times and dedicated support channels" },
      { name: "5 Team Members", description: "Collaborate with your core team on business growth initiatives" },
    ],
    limitations: [
      "No custom integrations",
      "No API access",
      "No white-label options",
    ],
  },
  professional: {
    name: "Professional",
    monthlyPrice: 299,
    yearlyPrice: 2999,
    description: "For established businesses seeking advanced features",
    icon: Star,
    accent: "accent",
    features: [
      { name: "Everything in Growth", description: "All features from the Growth plan included" },
      { name: "10 Team Members", description: "Expand your team's access to drive collaborative growth" },
      { name: "Custom Integrations", description: "Connect with your existing tools and workflows seamlessly" },
      { name: "Advanced Analytics", description: "Deep insights with custom dashboards and reporting" },
      { name: "Dedicated Support", description: "A dedicated support representative for your account" },
      { name: "API Access", description: "Full programmatic access to all platform features" },
    ],
    limitations: [
      "No white-label options",
      "No custom AI training",
      "No on-premise deployment",
    ],
  },
  business: {
    name: "Business",
    monthlyPrice: 599,
    yearlyPrice: 5999,
    description: "For growing organizations with demanding needs",
    icon: Building2,
    accent: "primary",
    features: [
      { name: "Everything in Professional", description: "All features from the Professional plan included" },
      { name: "25 Team Members", description: "Scale across departments with comprehensive team access" },
      { name: "White-label Options", description: "Customize the platform with your branding" },
      { name: "Custom AI Training", description: "Train AI models on your specific business data and terminology" },
      { name: "Priority Phone Support", description: "Direct phone access to our support team" },
      { name: "SLA Guarantee", description: "99.5% uptime guarantee with service credits" },
    ],
    limitations: [
      "No dedicated success manager",
      "No on-premise deployment",
      "No custom feature development",
    ],
  },
  enterprise: {
    name: "Enterprise",
    monthlyPrice: 2999,
    yearlyPrice: 29999,
    description: "For large organizations with complex requirements",
    icon: Crown,
    accent: "secondary",
    features: [
      { name: "Everything in Business", description: "All features from the Business plan included" },
      { name: "Unlimited Team Members", description: "No limits on how many people can access the platform" },
      { name: "Dedicated Success Manager", description: "A personal success manager to help you achieve your goals" },
      { name: "On-premise Deployment", description: "Deploy within your own infrastructure for maximum security" },
      { name: "Custom Contracts", description: "Flexible terms tailored to your organization's needs" },
      { name: "99.9% Uptime SLA", description: "Enterprise-grade reliability guarantee" },
    ],
    limitations: [],
  },
  ultimate: {
    name: "Ultimate",
    monthlyPrice: 5999,
    yearlyPrice: 59999,
    description: "The complete solution for industry leaders",
    icon: Gem,
    accent: "accent",
    features: [
      { name: "Everything in Enterprise", description: "All features from the Enterprise plan included" },
      { name: "24/7 Priority Support", description: "Round-the-clock access to our senior support team" },
      { name: "Custom Feature Development", description: "We'll build features specifically for your needs" },
      { name: "Dedicated Infrastructure", description: "Isolated infrastructure for maximum performance" },
      { name: "Executive Business Reviews", description: "Quarterly strategic reviews with our leadership team" },
      { name: "Full Customization", description: "Complete flexibility to tailor every aspect of the platform" },
    ],
    limitations: [],
  },
};

const comparisonFeatures = [
  { feature: "Business Twin", values: { starter: "Basic", growth: "Advanced", professional: "Advanced", business: "Advanced", enterprise: "Custom", ultimate: "Custom" } },
  { feature: "AI Strategy Reports", values: { starter: "5/month", growth: "Unlimited", professional: "Unlimited", business: "Unlimited", enterprise: "Unlimited", ultimate: "Unlimited" } },
  { feature: "Decision Framework", values: { starter: "Basic", growth: "Full", professional: "Full", business: "Full", enterprise: "Full", ultimate: "Full" } },
  { feature: "Execution Automation", values: { starter: false, growth: true, professional: true, business: true, enterprise: true, ultimate: true } },
  { feature: "Team Members", values: { starter: "1", growth: "5", professional: "10", business: "25", enterprise: "Unlimited", ultimate: "Unlimited" } },
  { feature: "Custom Integrations", values: { starter: false, growth: false, professional: true, business: true, enterprise: true, ultimate: true } },
  { feature: "API Access", values: { starter: false, growth: false, professional: true, business: true, enterprise: true, ultimate: true } },
  { feature: "White-label Options", values: { starter: false, growth: false, professional: false, business: true, enterprise: true, ultimate: true } },
  { feature: "Custom AI Training", values: { starter: false, growth: false, professional: false, business: true, enterprise: true, ultimate: true } },
  { feature: "Dedicated Success Manager", values: { starter: false, growth: false, professional: false, business: false, enterprise: true, ultimate: true } },
  { feature: "On-premise Deployment", values: { starter: false, growth: false, professional: false, business: false, enterprise: true, ultimate: true } },
  { feature: "Custom Feature Development", values: { starter: false, growth: false, professional: false, business: false, enterprise: false, ultimate: true } },
  { feature: "24/7 Priority Support", values: { starter: false, growth: false, professional: false, business: false, enterprise: false, ultimate: true } },
  { feature: "Support Level", values: { starter: "Email", growth: "Priority", professional: "Dedicated", business: "Phone", enterprise: "Premium", ultimate: "24/7" } },
];

type PlanKey = keyof typeof plansData;

const PlanDetail = () => {
  const { planSlug } = useParams<{ planSlug: string }>();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth", { state: { from: `/pricing/${planSlug}` } });
    }
  }, [user, loading, navigate, planSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const plan = planSlug ? plansData[planSlug as PlanKey] : null;
  const planKeys = Object.keys(plansData) as PlanKey[];
  const currentPlanIndex = planSlug ? planKeys.indexOf(planSlug as PlanKey) : -1;

  if (!plan) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Plan Not Found</h1>
            <p className="text-muted-foreground mb-8">The pricing plan you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/pricing">View All Plans</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = plan.icon;

  // Get adjacent plans for comparison
  const adjacentPlans = planKeys.filter((key, index) => {
    return Math.abs(index - currentPlanIndex) <= 1;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/pricing" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Pricing
            </Link>
          </Button>

          {/* Plan Header */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-8 border border-border/50 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{plan.name} Plan</h1>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-foreground">
                    ${plan.monthlyPrice.toLocaleString()}
                    <span className="text-lg text-muted-foreground font-normal">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    or ${plan.yearlyPrice.toLocaleString()}/year (save {Math.round((1 - plan.yearlyPrice / (plan.monthlyPrice * 12)) * 100)}%)
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Included Features */}
              <div className="glass-strong rounded-2xl p-6 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex gap-3">
                      <div className="mt-1 p-1 rounded-full bg-primary/20 shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{feature.name}</p>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plan Details */}
              <div className="space-y-6">
                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="glass-strong rounded-2xl p-6 border border-border/50">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Not Included</h2>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-center gap-2 text-muted-foreground">
                          <span className="text-muted-foreground/50">—</span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Card */}
                <div className="glass-strong rounded-2xl p-6 border border-primary/20 bg-primary/5">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Ready to get started?</h2>
                  <p className="text-muted-foreground mb-6">
                    Start your 14-day free trial today. No credit card required.
                  </p>
                  <Button className="w-full" size="lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Start Free Trial
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Cancel anytime. No questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* Plan Comparison Toggle */}
            <Collapsible open={showComparison} onOpenChange={setShowComparison} className="mb-8">
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Compare with Other Plans</span>
                  {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <div className="glass-strong rounded-2xl border border-border/50 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border/50 bg-muted/30">
                          <th className="text-left p-4 text-sm font-semibold text-foreground">Features</th>
                          {adjacentPlans.map((key) => {
                            const p = plansData[key];
                            const isCurrent = key === planSlug;
                            return (
                              <th key={key} className={`p-4 text-center ${isCurrent ? "bg-primary/10" : ""}`}>
                                <Link
                                  to={`/pricing/${key}`}
                                  className={`text-sm font-semibold ${isCurrent ? "text-primary" : "text-foreground hover:text-primary"}`}
                                >
                                  {p.name}
                                  {isCurrent && <span className="block text-xs text-primary/70">(Current)</span>}
                                </Link>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-4 text-sm text-muted-foreground font-medium">Price</td>
                          {adjacentPlans.map((key) => {
                            const p = plansData[key];
                            const isCurrent = key === planSlug;
                            return (
                              <td key={key} className={`p-4 text-center ${isCurrent ? "bg-primary/5" : ""}`}>
                                <span className="text-sm font-semibold text-foreground">${p.monthlyPrice}/mo</span>
                              </td>
                            );
                          })}
                        </tr>
                        {comparisonFeatures.map((row, idx) => (
                          <tr key={row.feature} className={idx % 2 === 0 ? "bg-muted/10" : ""}>
                            <td className="p-4 text-sm text-muted-foreground font-medium">{row.feature}</td>
                            {adjacentPlans.map((key) => {
                              const value = row.values[key];
                              const isCurrent = key === planSlug;
                              return (
                                <td key={key} className={`p-4 text-center ${isCurrent ? "bg-primary/5" : ""}`}>
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
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* FAQ or Additional Info */}
            <div className="glass-strong rounded-2xl p-6 border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Can I upgrade later?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">What happens after the trial?</h3>
                  <p className="text-sm text-muted-foreground">
                    After your 14-day trial, you'll be billed for the plan you selected. You can cancel anytime before the trial ends.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Do you offer refunds?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Need help choosing?</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact our sales team for a personalized recommendation based on your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlanDetail;
