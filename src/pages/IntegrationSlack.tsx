import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const IntegrationSlack = () => {
  const features = [
    "Real-time notifications in Slack channels",
    "Custom alert configurations",
    "Slash commands for quick actions",
    "Interactive message buttons",
    "Channel-based workflow triggers",
    "Direct message notifications",
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
            <span className="text-xs text-primary font-medium">Communication</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              <span className="text-gradient">Slack</span> Integration
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get real-time notifications and updates directly in your Slack workspace. Stay informed about important business events without leaving your communication hub.
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
                    <span className="text-muted-foreground">Install EVO Scalvex app in your Slack workspace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">2</span>
                    <span className="text-muted-foreground">Select channels for different notification types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">3</span>
                    <span className="text-muted-foreground">Configure alert triggers and preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">4</span>
                    <span className="text-muted-foreground">Start receiving real-time updates</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="flex gap-4">
              <Link to="/integrations/get-started?integration=Slack">
                <Button size="lg" className="gap-2">
                  Get Started <Zap className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/integrations/docs?integration=Slack">
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

export default IntegrationSlack;
