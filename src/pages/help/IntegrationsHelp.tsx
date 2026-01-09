import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Plug, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const IntegrationsHelp = () => {
  const articles = [
    { title: "Connecting Salesforce", description: "Step-by-step Salesforce integration setup." },
    { title: "Connecting Slack", description: "Get notifications and updates in your Slack workspace." },
    { title: "Connecting HubSpot", description: "Sync your CRM data with HubSpot." },
    { title: "Connecting Google Workspace", description: "Integrate with Google Drive, Sheets, and more." },
    { title: "Connecting Microsoft 365", description: "Sync with Outlook, Teams, and Office apps." },
    { title: "Connecting Stripe", description: "Track payments and revenue data." },
    { title: "Managing integration permissions", description: "Control what data each integration can access." },
    { title: "Troubleshooting integration errors", description: "Common issues and how to fix them." },
    { title: "Disconnecting integrations", description: "How to safely remove connected services." },
    { title: "Integration data sync frequency", description: "Understanding when data updates." },
    { title: "Custom API integrations", description: "Build your own integrations with our API." },
    { title: "Zapier and automation tools", description: "Connect to thousands of apps via Zapier." },
    { title: "OAuth and security", description: "How we keep your integration data secure." },
    { title: "Integration limits and quotas", description: "Understanding rate limits for integrations." },
    { title: "Migration from other platforms", description: "Moving your data from competitor tools." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <Link to="/help-center">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Plug className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Integrations</h1>
              <p className="text-muted-foreground">{articles.length} articles</p>
            </div>
          </div>

          <div className="grid gap-4 max-w-3xl">
            {articles.map((article, index) => (
              <div key={index} className="p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/50 transition-all cursor-pointer">
                <h3 className="font-semibold mb-1">{article.title}</h3>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntegrationsHelp;
