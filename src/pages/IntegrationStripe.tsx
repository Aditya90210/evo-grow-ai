import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const IntegrationStripe = () => {
  const features = [
    "Automated billing and invoicing",
    "Subscription management",
    "Payment processing",
    "Revenue analytics and reporting",
    "Customer payment portal",
    "Multi-currency support",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/integrations" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Integrations
          </Link>

          <div className="max-w-4xl">
            <span className="text-xs text-primary font-medium">Payments</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              <span className="text-gradient">Stripe</span> Integration
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Manage billing and subscriptions with Stripe integration. Automate your payment workflows and get comprehensive revenue analytics.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">1</span>
                    <span className="text-muted-foreground">Connect your Stripe account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">2</span>
                    <span className="text-muted-foreground">Configure products and pricing plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">3</span>
                    <span className="text-muted-foreground">Set up automated billing workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">4</span>
                    <span className="text-muted-foreground">Monitor payments from your dashboard</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Get Started <Zap className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationStripe;
