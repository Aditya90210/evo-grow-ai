import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const IntegrationGoogleWorkspace = () => {
  const features = [
    "Google Docs integration for documentation",
    "Google Sheets data sync",
    "Calendar event synchronization",
    "Gmail integration for communications",
    "Google Drive file management",
    "Google Meet scheduling",
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
            <span className="text-xs text-primary font-medium">Productivity</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              <span className="text-gradient">Google Workspace</span> Integration
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect your docs, sheets, and calendar with EVO Grow. Streamline your productivity by integrating your entire Google Workspace suite.
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
                    <span className="text-muted-foreground">Sign in with your Google Workspace account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">2</span>
                    <span className="text-muted-foreground">Grant permissions for required Google services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">3</span>
                    <span className="text-muted-foreground">Configure sync preferences and folders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">4</span>
                    <span className="text-muted-foreground">Access Google Workspace from EVO Grow dashboard</span>
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

export default IntegrationGoogleWorkspace;
