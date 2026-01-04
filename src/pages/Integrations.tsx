import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Puzzle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Integrations = () => {
  const integrations = [
    { name: "Salesforce", category: "CRM", description: "Sync your customer data seamlessly", path: "/integrations/salesforce" },
    { name: "Slack", category: "Communication", description: "Get real-time notifications and updates", path: "/integrations/slack" },
    { name: "Google Workspace", category: "Productivity", description: "Connect your docs, sheets, and calendar", path: "/integrations/google-workspace" },
    { name: "Microsoft 365", category: "Productivity", description: "Integrate with Office apps", path: "/integrations/microsoft-365" },
    { name: "Stripe", category: "Payments", description: "Manage billing and subscriptions", path: "/integrations/stripe" },
    { name: "HubSpot", category: "Marketing", description: "Automate your marketing workflows", path: "/integrations/hubspot" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Puzzle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Integrations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Connect</span> Your Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate EVO Grow with your favorite tools and platforms to create a unified business ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration) => (
              <div key={integration.name} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all">
                <span className="text-xs text-primary font-medium">{integration.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{integration.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{integration.description}</p>
                <Button variant="ghost" size="sm" className="gap-2" asChild>
                  <Link to={integration.path}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
