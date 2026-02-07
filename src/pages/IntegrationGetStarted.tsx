import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Rocket, Settings, Link2, Zap } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const IntegrationGetStarted = () => {
  const [searchParams] = useSearchParams();
  const integration = searchParams.get("integration") || "your integration";

  const steps = [
    {
      icon: Link2,
      title: "Connect Your Account",
      description: `Sign in to your ${integration} account and authorize EVO Scalvex to access your data securely.`,
    },
    {
      icon: Settings,
      title: "Configure Settings",
      description: "Set up your sync preferences, field mappings, and notification settings according to your needs.",
    },
    {
      icon: Zap,
      title: "Activate Integration",
      description: "Enable the integration and start syncing data between EVO Scalvex and your connected service.",
    },
    {
      icon: Rocket,
      title: "Go Live",
      description: "Monitor your integration from the dashboard and enjoy seamless automation.",
    },
  ];

  const requirements = [
    "Active EVO Scalvex subscription (Starter plan or higher)",
    `Valid ${integration} account with admin permissions`,
    "API access enabled on your account",
    "Stable internet connection",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get Started</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Set Up <span className="text-gradient capitalize">{integration}</span> Integration
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Follow these simple steps to connect {integration} with EVO Scalvex and start automating your workflows.
            </p>

            {/* Setup Steps */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {steps.map((step, index) => (
                <div key={step.title} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl mb-12">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Link to="/auth">
                <Button size="lg" className="gap-2">
                  Sign Up Now <Rocket className="w-4 h-4" />
                </Button>
              </Link>
              <Link to={`/integrations/docs?integration=${encodeURIComponent(integration)}`}>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationGetStarted;